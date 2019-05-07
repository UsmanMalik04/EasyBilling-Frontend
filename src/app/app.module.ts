import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { ContractComponent } from './Dashboard/contract/contract.component';
import { MenuComponent } from './Dashboard/menu/menu.component';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import {UploadPartsRequestComponent } from './Dashboard/upload-parts-request/upload-parts-request.component';
import { SourcingComponent } from './Dashboard/sourcing/sourcing.component';
import { ItemlistComponent } from './Dashboard/itemlist/itemlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {RfrReference} from './Services/saverfq.service';
import { DataTablesModule } from 'angular-datatables';
import { NgxLoadingModule } from 'ngx-loading';
import { CustomerdataComponent } from './Dashboard/customerdata/customerdata.component';
import { PurchaseorderComponent } from './Dashboard/purchaseorder/purchaseorder.component';
import { HeaderComponent } from './Dashboard/header/header.component';
import { DocumentComponent } from './Dashboard/document/document.component';
import { CKEditorModule } from 'ng2-ckeditor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ContractComponent,
    MenuComponent,
    UploadPartsRequestComponent,
    SourcingComponent,
    ItemlistComponent,
    CustomerdataComponent,
    PurchaseorderComponent,
    HeaderComponent,
    DocumentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DlDateTimePickerDateModule,
    FormsModule, ReactiveFormsModule, HttpClientModule, DataTablesModule,
    NgxLoadingModule.forRoot({}), CKEditorModule

  ],
  providers: [
    RfrReference
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
