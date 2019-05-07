import { Component, OnInit, ViewChild } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: any = '';
  @ViewChild('myckeditor') ckeditor: any;

  constructor() {
    this.mycontent = `<table cellpadding="1" cellspacing="1" border="0" align="center" width="95%"
		style="font-family:Helvetica;color:#000000" xmlns:fo="http://www.w3.org/1999/XSL/Format">
		<td align="left" width="150"><img src="../../../assets/img/220kb.jpg" width="150"></td>
		<td align="left">
			<table cellpadding="0" cellspacing="0" border="0" align="left" width="100%" style=";white-space: pre-line">
				<tr>
					<td>
						<font style="font-size:16pt;;font-weight:bold">Company Name:</font>
					</td>
				</tr>
				<tr>
					<td>
						<font style="font-size:16pt;;font-weight:bold"></font>
					</td>
				</tr>
				<tr>
					<td>
						<font style="font-size:10pt;">Address:</font>
					</td>
				</tr>
				<tr>
					<td>
						<font style="font-size:10pt;"></font>
					</td>
				</tr>
				<tr>
					<td>
						<font style="font-size:10pt;"></font>
					</td>
				</tr>
				<tr>
					<td>
						<font style="font-size:10pt;">Tel : 12312&nbsp;&nbsp;&nbsp;&nbsp;Fax : 12312</font>
					</td>
				</tr>
				<tr>
					<td>
						<font style="font-size:10pt;">Email : 12312</font>
					</td>
				</tr>
				<tr>
					<td>
						<font style="font-size:10pt;">Website : 12312</font>
					</td>
				</tr>
				<tr>
					<td>
						<font style="font-size:10pt;">VAT No. : 12312&nbsp;&nbsp;&nbsp;&nbsp;Company Reg. No. : 12312
						</font>
					</td>
				</tr>
			</table>
		</td>
	</table>
	<table cellpadding="1" cellspacing="1" border="0" align="center" width="95%"
		style="font-family:Helvetica;color:#000000">
		<tr>
			<td align="right">Quote No. <b>10001</b></td>
		</tr>
	</table>
	<table cellpadding="0" cellspacing="0" border="0" align="center" width="95%"
		style="font-family:Helvetica;color:#000000">
		<tr>
			<td colspan="3">&nbsp;</td>
		</tr>
		<tr>
			<td width="65%">
				<hr
					// tslint:disable-next-line:max-line-length
					// tslint:disable-next-line:max-line-length
					style="border-top: 1px solid #000000;border-left: #FFFFFF;border-right: #FFFFFF;border-bottom: 1px solid #000000;color: #FFFFFF;background-color: #FFFFFF;height: 4px;">
			</td>
			<td align="center">
				<font style="font-size:20pt;font-weight:bold">Quotation</font>
			</td>
			<td width="15%">
				<hr
					// tslint:disable-next-line:max-line-length
					// tslint:disable-next-line:max-line-length
					style="border-top: 1px solid #000000;border-left: #FFFFFF;border-right: #FFFFFF;border-bottom: 1px solid #000000;color: #FFFFFF;background-color: #FFFFFF;height: 4px;">
			</td>
		</tr>
	</table>
	<table cellpadding="0" cellspacing="0" align="center" width="95%" style="font-family:Helvetica">
		<tr>
			<td width="35%">&nbsp;</td>
			<td width="10%">&nbsp;</td>
			<td width="10%">&nbsp;</td>
			<td width="10%">&nbsp;</td>
			<td width="10%">&nbsp;</td>
			<td width="10%">&nbsp;</td>
			<td width="15%">&nbsp;</td>
		</tr>
		<tr>
			<td colspan="7">&nbsp;</td>
		</tr>
		<tr>
			<td align="left" colspan="2">
				<font style="font-size:12pt;color:#000000">Quote To&nbsp;</font>
			</td>
			<td>&nbsp;</td>
			<td align="left" colspan="4">
				<font style="font-size:12pt;color:#000000">Ship To&nbsp;</font>
			</td>
		</tr>
		<tr>
			<td colspan="2" align="left" style="border-style:solid;border-width:1px;border-color:#000000">
				<font style="font-size:12pt;color:#000000">
					<br>
				</font>
			</td>
			<td>&nbsp;</td>
			<td colspan="4" align="left" style="border-style:solid;border-width:1px;border-color:#000000">
				<font style="font-size:12pt;color:#000000">
					<br>
				</font>
			</td>
		</tr>
	</table>
	<table cellpadding="0" cellspacing="0" border="0" align="center" width="95%" style="font-family:Helvetica;">
		<tr>
			<td width="15%">&nbsp;</td>
			<td width="19%">&nbsp;</td>
			<td width="15%">&nbsp;</td>
			<td width="18%">&nbsp;</td>
			<td width="15%">&nbsp;</td>
			<td width="18%">&nbsp;</td>
		</tr>
		<tr>
			<td align="left"
				style="background-color:#E9E9E9;color:#000000;border-style:solid;border-width:1px;border-color:#000000">
				<font style="font-size:12pt">Date&nbsp;</font>
			</td>
			<td align="left"
				style="color:#000000;border-style:solid;border-width:1px;border-color:#000000;border-left-style:none">
				<font style="font-size:12pt">2019-03-10&nbsp;</font>
			</td>
			<td align="left"
				style="background-color:#E9E9E9;color:#000000;border-style:solid;border-width:1px;border-color:#000000">
				<font style="font-size:12pt">Sales Rep.&nbsp;</font>
			</td>
			<td align="left"
				style="color:#000000;border-style:solid;border-width:1px;border-color:#000000;border-left-style:none">
				<font style="font-size:12pt">&nbsp;</font>
			</td>
			<td align="left"
				style="background-color:#E9E9E9;color:#000000;border-style:solid;border-width:1px;border-color:#000000">
				<font style="font-size:12pt">Customer Ref. No.&nbsp;</font>
			</td>
			<td align="left"
				style="color:#000000;border-style:solid;border-width:1px;border-color:#000000;border-left-style:none">
				<font style="font-size:12pt">&nbsp;</font>
			</td>
		</tr>
		<tr>
			<td align="left"
				style="background-color:#E9E9E9;color:#000000;border-style:solid;border-width:1px;border-color:#000000">
				<font style="font-size:12pt">Shipping Date&nbsp;</font>
			</td>
			<td align="left"
				style="color:#000000;border-style:solid;border-width:1px;border-color:#000000;border-left-style:none">
				<font style="font-size:12pt">
					&nbsp;</font>
			</td>
			<td align="left"
				style="background-color:#E9E9E9;color:#000000;border-style:solid;border-width:1px;border-color:#000000">
				<font style="font-size:12pt">Shipping Term&nbsp;</font>
			</td>
			<td align="left"
				style="color:#000000;border-style:solid;border-width:1px;border-color:#000000;border-left-style:none">
				<font style="font-size:12pt">&nbsp;</font>
			</td>
			<td align="left"
				style="background-color:#E9E9E9;color:#000000;border-style:solid;border-width:1px;border-color:#000000">
				<font style="font-size:12pt" nowrap="nowrap">Payment Term&nbsp;</font>
			</td>
			<td align="left"
				style="color:#000000;border-style:solid;border-width:1px;border-color:#000000;border-left-style:none">
				<font style="font-size:12pt">&nbsp;</font>
			</td>
		</tr>
	</table>
	<table cellpadding="0" cellspacing="0" border="0" align="center" width="95%" style="font-family:Helvetica;">
		<tr>
			<td width="6%">&nbsp;</td>
			<td width="64%">&nbsp;</td>
			<td width="6%">&nbsp;</td>
			<td width="7%">&nbsp;</td>
			<td width="6%">&nbsp;</td>
			<td width="9%">&nbsp;</td>
		</tr>
		<tr>
			<td align="center"
				style="background-color:#E9E9E9;color:#000000;border-style:solid;border-width:1px;border-color:#000000;border-right-style:none">
				<font style="font-size:12pt">ID&nbsp;</font>
			</td>
			<td align="center"
				style="background-color:#E9E9E9;color:#000000;border-style:solid;border-width:1px;border-color:#000000;border-right-style:none">
				<font style="font-size:12pt">Description&nbsp;</font>
			</td>
			<td align="center"
				style="background-color:#E9E9E9;color:#000000;border-style:solid;border-width:1px;border-color:#000000;border-right-style:none">
				<font style="font-size:12pt">Unit&nbsp;</font>
			</td>
			<td align="center"
				style="background-color:#E9E9E9;color:#000000;border-style:solid;border-width:1px;border-color:#000000;border-right-style:none">
				<font style="font-size:12pt">Unit Price ($)&nbsp;</font>
			</td>
			<td align="center"
				style="background-color:#E9E9E9;color:#000000;border-style:solid;border-width:1px;border-color:#000000;border-right-style:none">
				<font style="font-size:12pt">Qty&nbsp;</font>
			</td>
			<td align="center"
				style="background-color:#E9E9E9;color:#000000;border-style:solid;border-width:1px;border-color:#000000;border-right-style:solid">
				<font style="font-size:12pt">Total ($)&nbsp;</font>
			</td>
		</tr>
		<tr>
			<td align="left"
				style="color:#000000;border-style:solid;border-width:1px;border-color:#000000;border-top-style:none;border-right-style:none">
				<font style="font-size:12pt">&nbsp;</font>
			</td>
			<td align="left"
				style="color:#000000;border-style:solid;border-width:1px;border-color:#000000;border-top-style:none;border-right-style:none">
				<font style="font-size:12pt">&nbsp;</font>
			</td>
			<td align="center"
				style="color:#000000;border-style:solid;border-width:1px;border-color:#000000;border-top-style:none;border-right-style:none">
				<font style="font-size:12pt">&nbsp;</font>
			</td>
			<td align="right"
				style="color:#000000;border-style:solid;border-width:1px;border-color:#000000;border-top-style:none;border-right-style:none">
				<font style="font-size:12pt">&nbsp;</font>
			</td>
			<td align="center"
				style="color:#000000;border-style:solid;border-width:1px;border-color:#000000;border-top-style:none;border-right-style:none">
				<font style="font-size:12pt">&nbsp;</font>
			</td>
			<td align="right"
				style="color:#000000;border-style:solid;border-width:1px;border-color:#000000;border-top-style:none;border-right-style:solid">
				<font style="font-size:12pt">&nbsp;&nbsp;
				</font>
			</td>
		</tr>
		<tr>
			<td align="left" colspan="4" style="color:#000000">
				<font style="font-size:12pt"></font>
			</td>
			<td align="right" colspan="2" style="color:#000000">
				<font style="font-size:12pt;white-space:normal">
					<table cellpadding="0" cellspacing="0" width="100%">
						<tr>
							<td width="50%"></td>
							<td width="50%"></td>
						</tr>
					</table>
				</font>
			</td>
		</tr>
	</table>
	<table cellpadding="0" cellspacing="0" border="0" align="center" width="95%" style="font-family:Helvetica;">
		<tr>
			<td height="20">&nbsp;</td>
		</tr>
		<tr>
			<td align="left" style="color:#000000">
				<font style="font-size:12pt">Notes&nbsp;</font>
			</td>
		</tr>
		<tr height="100">
			<td valign="top" align="left"
				style="color:#000000;border-style:solid;border-width:1px;border-color:#000000">
				<font style="font-size:8pt;white-space: pre; ">
					&nbsp;</font>
			</td>
		</tr>
	</table>
	<table cellpadding="1" cellspacing="1" border="0" align="center" width="95%"
		style="font-family:Helvetica;color:#000000">
		<tr height="50">
			<td></td>
		</tr>
		<tr>
			<td style="font-size:11pt;text-align:left" width="30%">gdfg</td>
			<td style="font-size:11pt;text-align:center" width="40%"></td>
			<td style="font-size:11pt;text-align:right" width="30%"></td>
		</tr>
	</table>`;
  }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
};
  }

  onChange($event: any): void {
    console.log('onChange');
    // this.log += new Date() + "<br />";
  }

}
