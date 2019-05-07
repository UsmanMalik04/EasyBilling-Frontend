import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {saveRrq} from '../../models/rfq';
import {environment} from '../../../environments/environment';
import {RfrReference} from '../../Services/saverfq.service';
import { Router } from '@angular/router';
 @Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  public formData: saveRrq;
  constructor( private addrefq: RfrReference, public route: Router) { }
  public AddRfqForm = new FormGroup({
    Id: new FormControl(0),
    rfq_reference: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
    type_of_order: new FormControl(null, Validators.required),
    date_of_submission: new FormControl(null, Validators.required),
    user: new FormControl(null, Validators.required),
    systems: new FormControl(null, Validators.required),

  });
  ngOnInit() {
  }
  Save(event) {
    this.formData = this.AddRfqForm.value;
    console.log(this.formData);
    // this.formData.date.toString("EEEE MMMM d  y h:mm:ss a zzzz");
    this.addrefq.post(environment.rfqref, this.formData).subscribe(data => {
      if (data.status === 1) {
        alert('save successfully');
        this.AddRfqForm.reset();
      }
    });
   }
}
