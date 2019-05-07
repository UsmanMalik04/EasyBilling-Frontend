import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
// import 'rxjs/add/operator/map';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { costing } from '../../models/costing';
import { environment } from '../../../environments/environment'
import { RfrReference } from "../../Services/saverfq.service"
import { costingvalue } from '../../models/costingvalue';
import { supplierdata } from '../../models/supplier';


@Component({
  selector: 'app-sourcing',
  templateUrl: './sourcing.component.html',
  styleUrls: ['./sourcing.component.css']
})
export class SourcingComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  public costinglist: costing[];
  public addcost: costingvalue;
  constructor(private addcosting: RfrReference) { }
  public AddCosting = new FormGroup({

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
  public supplierlist: supplierdata[];
  public AddSupplierData = new FormGroup({
    Id: new FormControl(0),
    serial_no: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required),
    supplier: new FormControl(null, Validators.required),
    tel: new FormControl(null, Validators.required),
    fax: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    supplier_name: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
    tel_mobile: new FormControl(null, Validators.required),
    preferred_payment_term: new FormControl(null, Validators.required),

  });

  public addcostingvalue = new FormGroup({
    Id: new FormControl(0),
    supplier: new FormControl(null, Validators.required),
    purchase_cost: new FormControl(null, Validators.required),
    currency: new FormControl(null, Validators.required),
    apply_percentage: new FormControl(null, Validators.required),
    selling_price: new FormControl(null, Validators.required),
    qto_ref: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
    media: new FormControl(null, Validators.required),
  })
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.Load();
    this. Display_supplier();
  }

  Display_supplier()
  {
    this.addcosting.get(environment.addsupplier).subscribe(data => {
      this.supplierlist=data.data;
      this.dtTrigger.next();
      });
  }

  Load() {
    this.addcosting.get(environment.addcosting).subscribe(data => {

      this.costinglist = data.data;
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

  Save(event) {
    this.addcost = this.addcostingvalue.value;
    console.log(this.addcost);;
    this.addcosting.post(environment.postcosting, this.addcost).subscribe(data => {

      if (data.success === true) {
        alert("save Successfully");
        this.addcostingvalue.reset();
      }

    });
  }
}
