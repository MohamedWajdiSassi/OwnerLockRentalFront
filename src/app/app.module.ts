import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AngularFireStorageModule} from '@angular/fire/storage'
import {AngularFireModule} from '@angular/fire'
import { ChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    SharedModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey : "AIzaSyAcqHSc_eaGWPKbKYaOAWwDijbZ3oE-EXc" , 
    authDomain : "ownerlocksimags.firebaseapp.com" , 
    projectId : "ownerlocksimags" , 
    storageBucket : "ownerlocksimags.appspot.com" , 
    messagingSenderId : "989620048770" , 
    appId : "1: 989620048770: web: e32f63811e0650b1c5b59b" , 
    measurementId : "G-MECCSN7PKK" 
    })
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
