import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eHoldingNumber!: string;
  quarter!: number;
  bankUserId: string = '1234';
  mobileNumber!: string;
  responseData: any;
  invoiceData: any;
  status!: string;
  name!: string;
  amount!: string;
  address!: string;

  street!: string;
  area!: string;
  city!: string;

  part1!: string;
  part2!: string;
  part3!: string;
  part4!: string;
  part5!: string;
  part6!: string;
  part7!: string;

  @ViewChild('printSection', { static: false })
  printSection!: ElementRef;

  constructor(private apiService: ApiService) { }

  // fetchData() {
  //   this.apiService.fetchData(this.eHoldingNumber, this.quarter, this.bankUserId, this.mobileNumber)
  //     .subscribe(
  //       response => {
  //         console.log('API Response:', response);
  //         this.parseResponse(response.response);
  //       },
  //       error => {
  //         console.error('API Error:', error);
  //       }
  //     );
  // }

  // parseResponse(response: string) {
  //   const parts = response.split('|');
  //   this.part1 = parts[0];
  //   this.part2 = parts[1];
  //   this.part3 = parts[2];
  //   this.part4 = parts[3];
  //   this.part5 = parts[4];
  //   this.part6 = parts[5];
  //   this.part7 = parts.slice(6).join('|').trim() || parts[6];
  // }
  // printDiv() {
  //   let printContents = this.printSection.nativeElement.innerHTML;
  //   let originalContents = document.body.innerHTML;
  //   document.body.innerHTML = printContents;
  //   window.print();
  //   document.body.innerHTML = originalContents;
  // }
}
