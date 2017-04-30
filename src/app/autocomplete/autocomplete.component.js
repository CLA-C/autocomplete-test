import template from './autocomplete.html';

const mockData = ["ciao", 'mamma', 'attenzione', 'stupiscimi', 'attendere', 'stuperrimo', 'albero', 'albino', 'alice']

export const AutocompleteComponent = {
  template,
  controller: class AutocompleteComponent {

    constructor(MovieService) {
      'ngInject';
      this.movieService = MovieService      
    }

    $onInit() {
        this.title = ""      
        this.mockData = mockData
        this.autocompleteList = []
    }
  
    autocomplete() {
        if (!this.title)
            return this.autocompleteList = []
        // this.filteredList = this.mockData.filter((movieTitle) => this.filterTitle(movieTitle, this.title))

        //get movies
        this.movieService.getMoviesByTitle(this.title)
                        .then(response => this.createAutocomList(response))
                        .catch(error => this.handleError(error))
    }

    //populate the autocomplete list given a response object
    createAutocomList(res) {
        if (res.Response === 'False') {
            return this.autocompleteList = []
        }
        
        let titleList = res.Search.map(movieObj => movieObj.Title) //just use the title                                
                              .sort(this.alphabetSort) //sort the array
        this.autocompleteList = this.removeDuplicates(titleList)
        console.log(this.autocompleteList)
    }

    //handle errors in call, for now just reset list and log error
    handleError(err) {
        this.autocompleteList = [] 
        console.error(err)
    }

    //remove duplicates from list of titles
    removeDuplicates(titleList) {
        let newList = []
        titleList.forEach(title => {
            if (newList.indexOf(title) === -1)
                newList.push(title)            
        })
        return newList
    }    

    filterTitle(title, value) {
        return value && title.indexOf(value) === 0
    }

    //simple alphabetical sorting function
    alphabetSort(a, b) {
        if(a < b)
            return -1
        if(a > b)
            return 1
        return 0
    }

    /*
    * KEY HANDLERS
    */

    //focus on autocomplete list when pressing down key in search input
    focusOnList(e) {
        let firstListEl = document.querySelector('.autocom-el')
        if (firstListEl && e.keyCode === 40)
            firstListEl.focus()
    }

    //handle keys usage in autocomplete element
    selectTitle(e) {
        let searchEl = document.getElementById('search-input'),
            targetEl = e.target
        console.log('event target next sibling', e.target.nextElementSibling)
        //if right arrow add title to search box
        if (e.keyCode === 39) {
            this.title = targetEl.textContent
            this.autocomplete() //manually trigger autocomplete because title change won't be detected
            searchEl.focus()
        }  
        //if up arrow select previous title or input
        else if (e.keyCode === 38) {
            targetEl.previousElementSibling ? targetEl.previousElementSibling.focus() : searchEl.focus()
        } 
        // if down arrow select next title or input
        else if (e.keyCode === 40) {
            targetEl.nextElementSibling ? targetEl.nextElementSibling.focus() : searchEl.focus()
        }
    }


  }
};
