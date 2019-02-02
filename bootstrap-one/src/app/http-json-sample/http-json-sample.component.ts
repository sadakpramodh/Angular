import { BadInput } from './../services/bad-input';
import { AppError } from './../services/app.error';

import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../services/not-found-error';

@Component({
  selector: 'app-http-json-sample',
  templateUrl: './http-json-sample.component.html',
  styleUrls: ['./http-json-sample.component.css']
})
export class HttpJsonSampleComponent implements OnInit {

  posts : any[];
  
  //private http : Http;
  constructor(private service : PostService) { 
    
  }
  createPost(input : HTMLInputElement) {
    
    let post : any = {title : input.value};
    this.posts.splice(0, 0, post);

    input.value= '';
    this.service.create(post)
    .subscribe(
      newPost => {
        post.id=newPost;
        //console.log(response.json());  
      }, 
      (error : AppError) => {
        this.posts.splice(0, 1);


        if(error instanceof BadInput) {
          alert("post is creation failed.");
          // this.form.setErrors(error.originalError);
        }
        else throw error;
    });
  }
  updatePost(post) {
    this.service.update(post)
    .subscribe(
      updatedPost=>{
        console.log(updatedPost);
      });
    }
  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    // console.log(this.posts.splice(index,1));

    this.service.delete(post.id)
    .subscribe(
      null, 
      (error : AppError) =>{
        this.posts.splice(index, 0, post);

        if(error instanceof NotFoundError)
          alert("post was already deleted.");
        else throw error;
      });
  }

  ngOnInit() {
    this.service.getAll()
    .subscribe( posts => this.posts = posts);
    }
}
