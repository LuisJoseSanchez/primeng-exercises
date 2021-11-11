import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercise01Component } from './exercise01/exercise01.component';
import { Exercise01gComponent } from './exercise01g/exercise01g.component';
import { Exercise02Component } from './exercise02/exercise02.component';
import { Exercise02gComponent } from './exercise02g/exercise02g.component';
import { Exercise03Component } from './exercise03/exercise03.component';
import { Exercise03gComponent } from './exercise03g/exercise03g.component';
import { Exercise04Component } from './exercise04/exercise04.component';

const routes: Routes = [
  { path: 'ejercicio01', component: Exercise01Component },
  { path: 'ejercicio02', component: Exercise02Component },
  { path: 'ejercicio03', component: Exercise03Component },
  { path: 'ejercicio01g', component: Exercise01gComponent },
  { path: 'ejercicio02g', component: Exercise02gComponent },
  { path: 'ejercicio03g', component: Exercise03gComponent },
  { path: 'ejercicio04', component: Exercise04Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
