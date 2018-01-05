import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import {ListWrapComponent} from './list-wrap/list-wrap.component';
import {EditWrapComponent} from './edit-wrap/edit-wrap.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {CreateWrapComponent} from './create-wrap/create-wrap.component';

const routesForEvent: Routes = [
    {path:'create', component:CreateWrapComponent},
    {path: 'list', component: ListWrapComponent},
    {path: 'edit/:doc_id', component: EditWrapComponent},
    {path: '**', component: NotfoundComponent}
  ];

  @NgModule({
      imports:[
        RouterModule.forRoot(routesForEvent)
      ], 
      exports:[
          RouterModule
      ]
  })
  export class AppRoutingModule{}