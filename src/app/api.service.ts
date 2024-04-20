import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Assuming your Node.js server is running on port 3000 locally
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  fetchData(eHoldingNumber: string, quarter: number, bankUserId: string, mobileNumber: string,transactionId:number): Observable<any> {
    const data = { eHoldingNumber, quarter, bankUserId, mobileNumber ,transactionId };
    return this.http.post(`${this.baseUrl}/api/data`, data);
  }

  makePayment(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/make-payment`, data);
  }
}
