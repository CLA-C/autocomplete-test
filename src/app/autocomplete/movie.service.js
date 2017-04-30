export class MovieService {
  constructor($http) {
    'ngInject'
    this.$http = $http
    this.apiEndPoint = 'http://www.omdbapi.com'
  }

  //search a movie database by a title keyword
  getMoviesByTitle(title) {
    let config = {
      params: {        
        's': title,
        'type': 'movie'
      }
    }
    return this.$http.get(this.apiEndPoint, config).then(response => response.data)
  }
}

