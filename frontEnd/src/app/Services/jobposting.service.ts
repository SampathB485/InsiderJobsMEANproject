import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobpostingService {
  private apiUrl = 'http://localhost:3000/postjob';

  constructor(private http: HttpClient) { }

  createJob(data: any): Observable<any> {
    console.log("Have you reached here!!!!!!!!!!!!!!!!!!!!!!!11");
    
    
    const result = this.http.post(this.apiUrl, data);
    // console.log('HTTP Observable:', result);
    return result;
  }

}
