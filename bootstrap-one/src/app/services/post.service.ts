
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  // private url = "";

  constructor(http : Http) {
    super('http://jsonplaceholder.typicode.com/posts',http);
   }

}
