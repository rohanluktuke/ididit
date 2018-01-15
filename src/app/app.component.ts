import { Component, OnInit } from '@angular/core';
import { AccomplishmentService } from './accomplishment.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccomplishmentService]
})
export class AppComponent implements OnInit{
  title = 'app';
  loadedFeature = 'create';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAVL7w3ea0Ajo_vEdXnyGlUhrA0L0yge7g",
    authDomain: "ididit-d37e8.firebaseapp.com"
    });
  }
  onNavigate(selection: string) {
    this.loadedFeature = selection;
  }
}
