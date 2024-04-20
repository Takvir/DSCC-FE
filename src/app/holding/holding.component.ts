import { Component, OnInit,ElementRef, ViewChild  } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-holding',
  templateUrl: './holding.component.html',
  styleUrls: ['./holding.component.css']
})
export class HoldingComponent implements OnInit {

  noData : boolean = true;
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

  part4!: string;
  part5!: string;
  part6!: string;
  part7!: string;

  currentDateTime: string = "";
  timeNow = new Date();
  transactionId!: number;
  getDataButtonDisabled: boolean = false;

  @ViewChild('printSection') printSection!: ElementRef;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.updateCurrentDateTime();

  }



  fetchData() {
    if (!this.mobileNumber) {
      return; // Return if mobile number is not provided
    }
    this.apiService.fetchData(this.eHoldingNumber, this.quarter, this.bankUserId, this.mobileNumber,this.transactionId)
      .subscribe(
        response => {
          if(response.response === '99|Invalid Details / Amount') {
            console.log("No data found");
            this.noData = false;
          } else {
            console.log('API Response:', response);
            this.parseResponse(response.response);
            this.generateTransactionId();
            this.noData = true;

          }
          this.getDataButtonDisabled = true;
        },
        error => {
          console.error('Error occurred:', error);
          // Handle any errors that occur during the API call
        }
      );
  }

  resetPage() {
    this.eHoldingNumber = '';
    this.quarter = 1;
    this.mobileNumber = '';

    // Reset transaction ID
    this.transactionId = 0;

    // Reset data display
    this.part1 = '';
    this.part2 = '';
    this.amount = '';
    this.part4 = '';
    this.part5 = '';
    this.part6 = '';
    this.part7 = '';

    // Enable the "Get Data" button
    this.getDataButtonDisabled = false;

    // Reset the noData flag
    this.noData = true;
  }

  parseResponse(response: string) {
    const parts = response.split('|');
    this.part1 = parts[0];
    this.part2 = parts[1];
    this.amount = parts[2];
    this.part4 = parts[3];
    this.part5 = parts[4];
    this.part6 = parts[5];
    this.part7 = parts.slice(6).join('|').trim() || parts[6];
  }
  printDiv() {
    let printContents = this.printSection.nativeElement.innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;


  }

  generateTransactionId(): void {
    // Generate a random number between 100000000 and 999999999
    this.transactionId = Math.floor(100000000 + Math.random() * 900000000);
  }

  updateCurrentDateTime(): void {
    // Get the current date and time
    const currentDate = new Date();

    // Format the date and time as desired (e.g., "April 19, 2024 5:34")
    const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
    this.currentDateTime = currentDate.toLocaleDateString('en-US');
  }

  makePayment() {
    const data = {
      eHoldingNumber: this.eHoldingNumber,
      quarter: this.quarter,
      bankUserId: this.bankUserId,
      mobileNumber: this.mobileNumber,
      amount: this.amount, // Add this if amount is required for payment
      tstatus: this.status, // Add this if status is required for payment
      ntranno: this.transactionId // Add this if transactionId is required for payment
    };

    this.apiService.makePayment(data)
      .subscribe(
        response => {
          // Handle the response from the server after making payment
        },
        error => {
          console.error('Error occurred while making payment:', error);
          // Handle any errors that occur during the payment process
        }
      );
  }




}
