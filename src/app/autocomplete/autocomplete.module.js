import angular from 'angular';
import { AutocompleteComponent } from './autocomplete.component';
import { MovieService } from './movie.service';
import './autocomplete.scss';

export const AutocompleteModule = angular
  .module('Autocomplete', [])
  .service('MovieService', MovieService)
  .component('autocomplete', AutocompleteComponent)
  .name;