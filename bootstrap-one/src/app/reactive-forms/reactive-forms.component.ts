import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  form = new FormGroup({
    'account' : new FormGroup({
      'usernamex' : new FormControl(''),
      'passwordx' : new FormControl('')
    }),
    'username' : new FormControl('', [
       Validators.required,
       UsernameValidators.cannotContainSpace],
       UsernameValidators.shouldBeUnique),
    'firstname' : new FormControl('', [Validators.required, Validators.minLength(3)]),
    'password' : new FormControl('', Validators.required)
  });
  get password() {
    return this.form.get('password');
  }
  get firstname() {
    return this.form.get('firstname');
  }
  get username() {
    return this.form.get('username');
  }
  get usernamex() {
    return this.form.get('account.usernamex');
  }
  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }
}
