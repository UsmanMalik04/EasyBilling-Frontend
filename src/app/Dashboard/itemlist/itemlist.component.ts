import { Component, OnInit,OnDestroy } from '@angular/core';
import { supplierdata } from '../../models/supplier';
import { environment } from "../../../environments/environment";
import { RfrReference } from "../../Services/saverfq.service";
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { load } from '@angular/core/src/render3';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit,OnDestroy {

  public supplierform: supplierdata;
  public supplierlist:supplierdata[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> =new Subject();
  constructor(private supplierservice:RfrReference) { }
  public AddSupplierData = new FormGroup({
    Id: new FormControl(0),
    serial_no:new FormControl(null,Validators.required),
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
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
   this.Load();
  }
  Save(event) {
    this.supplierform=this.AddSupplierData.value;
    console.log(this.supplierform);
    this.supplierservice.post(environment.addsupplier, this.supplierform).subscribe(data=>{
      if(data.success==true)
      {
        this.supplierlist.push(data.data);
        alert("save Successfully");
      }
    }
    );
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }
 
  Load(){
    this.supplierservice.get(environment.addsupplier).subscribe(data => {
      this.supplierlist=data.data;
      this.dtTrigger.next();
      });
    }  

}
