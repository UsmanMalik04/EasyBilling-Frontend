import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import {manualForm} from '../../models/manual';
import {environment} from '../../../environments/environment';
import {RfrReference} from '../../Services/saverfq.service';
import { mergeAnalyzedFiles } from '@angular/compiler';
import { Subject } from 'rxjs';
import {Router} from '@angular/router';
import {saveRrq} from '../../models/rfq';

// import 'rxjs/add/operator/map';
@Component({
  selector: 'app-upload-parts-request',
  templateUrl: './upload-parts-request.component.html',
  styleUrls: ['./upload-parts-request.component.css']
})
export class UploadPartsRequestComponent implements OnInit, OnDestroy {
  public formData: manualForm;
  public manuallist: manualForm[];
  public rfqlist: saveRrq[];
  public dropdownvalue: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  public loading = false;

  constructor(public addrefq: RfrReference) { }
  public AddmanualForm = new FormGroup({
    Id: new FormControl(0),
    SNo: new FormControl(null, Validators.required),
    RefSNO: new FormControl(null, Validators.required),
    PartNo: new FormControl(null, Validators.required),
    LPartNo: new FormControl(null, Validators.required),
    NSN: new FormControl(null, Validators.required),
    Noumenclature: new FormControl(null, Validators.required),
    UOI: new FormControl(null, Validators.required),
    rfq_reference: new FormControl(null, Validators.required),
    Quantity: new FormControl(null, Validators.required),
  });
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
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.Load();
    this.display();
  }

  display() {
    this.addrefq.get(environment.rfqref).subscribe(data => {
     this.rfqlist = data.data;
     console.log(data);
    });

  }
  selectchange(args) {
    // this.countryValue = args.target.value;
    this.dropdownvalue = args.target.options[args.target.selectedIndex].text;
    // console.log(this.countryValue);
    console.log(this.dropdownvalue);

  }

  Load() {
    this.loading = true;
    this.addrefq.get(environment.addmanual).subscribe(data => {
      this.manuallist = data.data;
      this.dtTrigger.next();
      this.loading = false;
      });
    }
    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }

    private extractData(res: Response) {
      const body = res.json();
      return body || {};
    }


  Save(event) {
    this.formData = this.AddmanualForm.value;
    console.log(this.formData);
    this.formData.rfq_reference = this.dropdownvalue;
    console.log(this.formData.rfq_reference);
    this.addrefq.post(environment.addmanual, this.formData).subscribe(data => {

      if (data.success === true) {
        this.manuallist.push(data.data);
        alert('save successfully');

       this.AddmanualForm.reset();
      }
    });
   }
}
