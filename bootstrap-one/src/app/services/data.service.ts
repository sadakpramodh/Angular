import { NotFoundError } from './not-found-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { AppError } from './app.error';
import { BadInput } from './bad-input';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private url: string, private http : Http) {
    
   }
   getAll() {
     return this.http.get(this.url)
     .map(response => response.json())
     .catch(this.handleError);
   }
   create(resource) {
     //creates a fake observable that shows creating a post is failed.
    // return Observable.throw(new AppError());
     return this.http.post(this.url, JSON.stringify(resource))
    .map(response => response.json())
    .catch(this.handleError);
   }

   update(resource) {
     
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead : true }))
    .map(response => response.json())
    .catch(this.handleError)
   }
   delete(id) {
      // To fake server that failed to delete post
      // return Observable.throw(new AppError());

        return this.http.delete(this.url + '/' +id)
        .map(response => response.json())
        .catch(this.handleError);
   }

  private handleError(error: Response) {
    if(error.status === 400)
      return Observable.throw(new BadInput(error.json()));

    if(error.status === 404)
        return Observable.throw(new NotFoundError());
        
    return Observable.throw(new AppError(error));

  }
}
