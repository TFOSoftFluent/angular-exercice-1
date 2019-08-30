import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input() postTitle: string;
    @Input() postContent: string;
    @Input() postLoveIts: number;
    @Input() postCreatedAt: Date;

  constructor() { }

  ngOnInit() {
  }

    getColor(){
        if(this.postLoveIts > 0){
            return "green";
        }else if(this.postLoveIts < 0){
            return "red";
        }
    }

    loveIt(){
        this.postLoveIts+= 1;
    }

    dontLoveIt(){
        this.postLoveIts-= 1;
    }

}
