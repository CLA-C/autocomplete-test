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

    //handle errors in call, for now just log them
    handleError(err) {
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
    

    // filterTitle(title, value) {
    //     return value && title.indexOf(value) === 0
    // }

    //simple alphabetical sorting function
    alphabetSort(a, b) {
        if(a < b)
            return -1
        if(a > b)
            return 1
        return 0
    }


  }
};
