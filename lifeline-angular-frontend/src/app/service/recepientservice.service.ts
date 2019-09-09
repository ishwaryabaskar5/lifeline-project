import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecepientserviceService {

  public id;
  private RecepientUrl = 'http://localhost:8083/api/v1/recepient';
  constructor(private httpClient: HttpClient) { }


  saveRecepient(recepient: Recepient): Observable<Recepient> {
    return this.httpClient.post<Recepient>(this.RecepientUrl, recepient).pipe(catchError(this.errorHandler));
  }
  
  getRecepientDetails(id): Observable<Recepient>{
    return this.httpClient.get<Recepient>(this.RecepientUrl+"/" + id);
  }

  public updateRecepient(recepient:Recepient , id) {
    let updateUrl = 'http://localhost:8083/api/v1/recepient';
    updateUrl = updateUrl+ '/'+id;
    return this.httpClient.put<Donor>(updateUrl, recepient);
  }
   public getRecepientById(id: number):Observable<Recepient>{
     return this.httpClient.get<Recepient>(this.RecepientUrl + "/" + id);
   }

   public getRecepientPastHistoryById(id: number):Observable<Recepient>{
    console.log()
    return this.httpClient.get<Recepient>(this.RecepientUrl+ "/" + id);
  }


  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server error');
  }
}