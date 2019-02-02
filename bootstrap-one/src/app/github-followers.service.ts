import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService{
// In DtaServices class we have methods for get, delete and updatr methods using httpResponse methods
  constructor(http: Http) { 
    // In constructor we are initializing http service
    super('https://api.github.com/users/mosh-hamedani/followers',http);
    // super is method allows to inherit base class property 
  }
}
