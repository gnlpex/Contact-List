import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Paste in your credentials that you saved earlier
	var firebaseConfig = {
  apiKey: "AIzaSyBH1btW9yCileE9ui_aMtG2H1MfIXZpTgg",
    authDomain: "firestore-68c97.firebaseapp.com",
    databaseURL: "https://firestore-68c97.firebaseio.com",
    projectId: "firestore-68c97",
    storageBucket: "firestore-68c97.appspot.com",
    messagingSenderId: "353152722778"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule                            // And this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
