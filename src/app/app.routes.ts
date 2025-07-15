import { Routes } from '@angular/router';
import { FruitListComponent } from './components/fruit-list/fruit-list';
import { FruitDetailComponent } from './components/fruit-detail/fruit-detail';
import { CharacterListComponent } from './components/character-list/character-list';
import { CharacterDetailComponent } from './components/character-detail/character-detail';
import { HomeComponent } from './components/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fruits', component: FruitListComponent },
  { path: 'fruits/:id', component: FruitDetailComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/:id', component: CharacterDetailComponent },
];


