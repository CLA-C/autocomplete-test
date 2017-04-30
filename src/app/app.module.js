import angular from 'angular';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { AppComponent } from './app.component';

import '../style/app.css';

export const AppModule = angular
  .module('app', [
      AutocompleteModule
  ])
  .component('app', AppComponent)
  .name;