import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { changePasswordValidators } from './changepassword.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  form = new FormGroup ({
    'oldpassword' : new FormControl('',[Validators.required,changePasswordValidators.getOldpassword]),
    'newpassword' : new FormControl('',[Validators.required]),
    'conformpassword' : new FormControl('',[Validators.required,changePasswordValidators.conformPasswordMatch])
  });

  get oldpassword() {
    return this.form.get('oldpassword');
  }
  get newpassword() {
    return this.form.get('newpassword');
  }
  get conformpassword() {
    return this.form.get('conformpassword');
  }
  onSubmit() {
    console.log("Submit is working");
  }

}
