import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';


import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';//khai báo khi yêu cầu phải xác thực VD: trong chức năng update


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ChocComponent } from './choc/choc.component';
import { AddnhanvienComponent } from './addnhanvien/addnhanvien.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DangnhapComponent } from './dangnhap/dangnhap.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavComponent,
    HomeComponent,
    ChocComponent,
    AddnhanvienComponent,
    DangnhapComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features=> dùng cho chức năng update
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
