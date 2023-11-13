import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/thinkings/create/create.component';
import { ListNotesComponent } from './components/thinkings/list-notes/list-notes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listNote',
    pathMatch: 'full',
  },
  {
    path: 'createNote',
    component: CreateComponent,
  },
  {
    path: 'listNote',
    component: ListNotesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
