import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {

    posts: Post[] = [];
    postsSubject = new Subject<Post[]>();

    constructor() {
        this.getPosts();
    }

    emitPosts(){
        this.postsSubject.next(this.posts);
    }

    savePosts(){
        firebase.database().ref('/posts').set(this.posts);
    }

    getPosts(){
        firebase.database().ref('/posts').on('value', (data) => {
            this.posts = data.val() ? data.val() : [];
            this.emitPosts();
        });
    }

    createNewPost(newPost: Post){
        newPost.id = this.getNewId();
        this.posts.push(newPost);
        this.savePosts();
        this.emitPosts();
    }

    getNewId(){
        var newId = 0;
        this.posts.forEach(function(item){
            if(item.id > newId) newId = item.id;
        });

        return newId + 1;
    }

    getPost(id: number){
        return new Promise(
            (resolve, reject) => {
                firebase.database().ref('/posts/' + id).once('value').then(
                    (data) => {
                        resolve(data.val());
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    editPost(post: Post){
        const postIndexToEdit = this.posts.findIndex(
            (postEl) => {
                if(postEl.id === post.id){
                    return true;
                }
            }
        );

        console.log(postIndexToEdit);

        this.posts[postIndexToEdit] = post;
        this.savePosts();
        this.emitPosts();
    }

    removePost(post: Post){
        const postIndexToRemove = this.posts.findIndex(
            (postEl) => {
                if(postEl.id === post.id){
                    return true;
                }
            }
        );

        this.posts.splice(postIndexToRemove, 1);
        this.savePosts();
        this.emitPosts();
    }

}
