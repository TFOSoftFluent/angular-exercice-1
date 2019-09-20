import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor() {
        var firebaseConfig = {
            apiKey: "AIzaSyBzG_almGZglYfDS16xRQ1KCsG9P40vONw",
            authDomain: "http-client-demo-a1306.firebaseapp.com",
            databaseURL: "https://http-client-demo-a1306.firebaseio.com",
            projectId: "http-client-demo-a1306",
            storageBucket: "http-client-demo-a1306.appspot.com",
            messagingSenderId: "603562715695",
            appId: "1:603562715695:web:1f4ef467f5cb8ccadc74da"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }
}
