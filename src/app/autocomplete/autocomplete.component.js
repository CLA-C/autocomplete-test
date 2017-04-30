import template from './autocomplete.html';

const mockData = ["ciao", 'mamma', 'attenzione', 'stupiscimi', 'attendere', 'stuperrimo', 'albero', 'albino', 'alice']

export const AutocompleteComponent = {
  template,
  controller: class AutocompleteComponent {

    constructor() {

    }
    $onInit() {
        this.title = ""      
        this.mockData = mockData
        this.autocompleteList = []
    }
  
    autocomplete() {
        if (!this.title)
            return this.autocompleteList = []
        this.autocompleteList = this.mockData.filter((movieTitle) => this.filterTitle(movieTitle, this.title))
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


  }
};
