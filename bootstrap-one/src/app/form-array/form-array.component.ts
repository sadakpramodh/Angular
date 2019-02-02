import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  

  ngOnInit() {
  }
  form;
/* approach 1

  form = new FormGroup({
    name : new FormControl('', Validators.required),
    contact : new FormGroup({
      email: new FormControl(),
      phone : new FormControl()
    }),
    topics : new FormArray([])
  });
  */

  /* Form Builder approach */
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name : ['', Validators.required],
      contact : fb.group({
        email : [],
        phone : []
      }),
      topics : fb.array([])
    });
   }


  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  addTopic(topic : HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value='';
  }
  get topics() {
    return this.form.get('topics') as FormArray;
  }

 /* addTopic(topic : HTMLInputElement) {
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
  }
  */

}
