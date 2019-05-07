import { Component, OnInit,OnDestroy } from '@angular/core';
import { customerdata } from '../../models/customer'
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import {environment} from '../../../environments/environment';
import {RfrReference} from "../../Services/saverfq.service"
import { load } from '@angular/core/src/render3';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-customerdata',
  templateUrl: './customerdata.component.html',
  styleUrls: ['./customerdata.component.css']
})
export class CustomerdataComponent implements OnInit,OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  public adddata:customerdata;
  public customerlist:customerdata[];
  constructor(public customerservice:RfrReference) { }
  public AddCustomerData = new FormGroup({
    Id: new FormControl(0),
    serial_no:new FormControl(null,Validators.required),
    category: new FormControl(null, Validators.required),
    customer: new FormControl(null, Validators.required),
    tel: new FormControl(null, Validators.required),
    fax: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    preferred_payment_term: new FormControl(null, Validators.required),
    bill_to: new FormControl(null, Validators.required),
    billing_address: new FormControl(null, Validators.required),
    tel_phone: new FormControl(null, Validators.required),
    ship_to: new FormControl(null, Validators.required),
    shipping_address: new FormControl(null, Validators.required),
    tel_mobile: new FormControl(null, Validators.required),

  })

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.Load();
  }
Save(event)
{
    this.adddata=this.AddCustomerData.value;
    console.log(this.adddata);
    this.customerservice.post(environment.addcustomer, this.adddata).subscribe(data=>{
      if(data.success===true)
      {
        alert("Save Successfully");
        this.customerlist.push(data.data);
      }

    });
}

Load()
{
  this.customerservice.get(environment.addcustomer).subscribe(data=>{
    this.customerlist=data.data;
    this.dtTrigger.next();
  })
}
ngOnDestroy(): void {
  // Do not forget to unsubscribe the event
  this.dtTrigger.unsubscribe();
}

private extractData(res: Response) {
  const body = res.json();
  return body.data || {};
}
}
