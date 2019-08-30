import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    posts = [
        {
            title: "Mon premier post",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate enim facilisis sollicitudin egestas. Morbi vehicula rutrum elit nec luctus. Nam luctus sit amet nibh sed sollicitudin. Nullam nec enim volutpat, dapibus sapien at, scelerisque risus. Ut finibus egestas est, in hendrerit enim aliquam ac. Integer placerat, orci sed convallis egestas, tortor sem congue nibh, at venenatis mi eros eget diam. Donec tincidunt euismod cursus.",
            loveIts: 0,
            created_at: new Date()
        },{
            title: "Mon deuxième post",
            content: "Proin vulputate enim facilisis sollicitudin egestas. Morbi vehicula rutrum elit nec luctus. Nam luctus sit amet nibh sed sollicitudin. Nullam nec enim volutpat, dapibus sapien at, scelerisque risus. Ut finibus egestas est, in hendrerit enim aliquam ac. Integer placerat, orci sed convallis egestas, tortor sem congue nibh, at venenatis mi eros eget diam. Donec tincidunt euismod cursus.",
            loveIts: 0,
            created_at: new Date()
        },{
            title: "Encore un post",
            content: "Morbi vehicula rutrum elit nec luctus. Nam luctus sit amet nibh sed sollicitudin. Nullam nec enim volutpat, dapibus sapien at, scelerisque risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate enim facilisis sollicitudin egestas. Ut finibus egestas est, in hendrerit enim aliquam ac. Integer placerat, orci sed convallis egestas, tortor sem congue nibh, at venenatis mi eros eget diam. Donec tincidunt euismod cursus.",
            loveIts: 0,
            created_at: new Date()
        }
    ];
}
