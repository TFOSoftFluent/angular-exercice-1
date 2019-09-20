import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs/Subscription';
import * as firebase from 'firebase';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    posts: Post[];
    postSubscription: Subscription;

    constructor(private postService: PostService) { }

    ngOnInit() {
        this.postSubscription = this.postService.postsSubject.subscribe(
            (posts: Post[]) => {
                this.posts = posts;
            }
        );
        this.postService.getPosts();
        this.postService.emitPosts();
    }

    ngOnDestroy(){
        this.postSubscription.unsubscribe();
    }

}
