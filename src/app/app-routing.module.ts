import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercise01Component } from './exercise01/exercise01.component';
import { Exercise02Component } from './exercise02/exercise02.component';
import { Exercise03Component } from './exercise03/exercise03.component';

const routes: Routes = [
  { path: 'ejercicio01', component: Exercise01Component },
  { path: 'ejercicio02', component: Exercise02Component },
  { path: 'ejercicio03', component: Exercise03Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
