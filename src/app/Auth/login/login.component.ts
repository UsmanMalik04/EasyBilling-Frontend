import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {login} from '../../models/signin'
import {AuthService} from "../../Services/auth.service"
import {environment} from '../../../environments/environment'
import {RfrReference} from '../../Services/saverfq.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formload:login;
  constructor(public auth:AuthService, public login:RfrReference) { }
  public signIn = new FormGroup({
    Id: new FormControl(0),
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),


  });
  ngOnInit() {
  }
  Save(event)
  {
    this.formload=this.signIn.value;
    console.log(this.formload);
    this.login.post(environment.login, this.formload).subscribe(data => {
      if(data.status === 1){
        console.log("save successfully");
    
      }  
    });    
  }

}
