import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ChocComponent } from './choc/choc.component';
import { AddnhanvienComponent} from './addnhanvien/addnhanvien.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'choc', component:ChocComponent},
  {path: 'addnhanvien', component: AddnhanvienComponent},
  {path: 'dangnhap', component: DangnhapComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
