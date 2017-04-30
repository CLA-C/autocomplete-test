import angular from 'angular';
import { AutocompleteComponent } from './autocomplete.component';
// import './todo.scss';

export const AutocompleteModule = angular
  .module('Autocomplete', [])
  .component('autocomplete', AutocompleteComponent)
  .name;