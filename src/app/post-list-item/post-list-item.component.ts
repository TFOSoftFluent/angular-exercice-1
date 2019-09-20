import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: []
})
export class PostListItemComponent implements OnInit {

    @Input() index: number;
    post: Post;

    constructor(private postService: PostService) { }

    ngOnInit() {
        this.post = new Post(0, '', '', 0, new Date());
        this.postService.getPost(this.index).then(
            (post: Post) => {
                this.post = post;
            }
        );
    }

    getColor(){
        if(this.post.loveIts > 0){
            return "green";
        }else if(this.post.loveIts < 0){
            return "red";
        }
    }

    loveIt(){
        this.post.loveIts+= 1;
        this.postService.editPost(this.post);
    }

    dontLoveIt(){
        this.post.loveIts-= 1;
        this.postService.editPost(this.post);
    }

    onDeletePost(){
        this.postService.removePost(this.post);
    }

}

