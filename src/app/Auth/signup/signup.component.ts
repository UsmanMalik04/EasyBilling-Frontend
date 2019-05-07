import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {loginUp} from '../../models/signup'
import {environment} from '../../../environments/environment'
import {RfrReference} from '../../Services/saverfq.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public formData:loginUp;
  constructor( public logup:RfrReference) { }
  public signUp = new FormGroup({
    Id: new FormControl(0),
    userName:new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),


  });
  ngOnInit() {
  }
  save(event)
  {
    this.formData=this.signUp.value;
    console.log(this.formData);
    this.logup.post(environment.signup, this.formData).subscribe(data => {
      if(data.status === 1){
        console.log("save successfully");
    
      }  
    });    
  }
}
