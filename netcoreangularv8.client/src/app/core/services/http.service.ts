import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// Services
import { handleErrorAsIResponse } from './error.service';
import { isIResponse } from './interface.service';

// Interfaces & Models
import { IResponse } from '../interfaces/iresponse';

// Enums & Constants
import { HttpHeaderEnum } from '../enums/global.enum';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly http: HttpClient) { }

  getSomeHeaders = (accept?: string, contentType?: string, authorization?: string): HttpHeaders => {
    const headers = new HttpHeaders();

    headers.append('Accept', accept ?? HttpHeaderEnum.All);
    headers.append('Content-Type', contentType ?? HttpHeaderEnum.Json);

    if (authorization) {
      headers.append('Authorization', `Bearer: ${authorization}`);
    }

    return headers;
  }

  private handleResponse = (response: any): IResponse => {
    console.info('handleResponse', response);

    if (response === undefined || response === null) {
      return { status: 'OK', code: 200, message: 'Original response was null or undefined', data: null };
    }

    if (isIResponse(response)) {
      return response;
    }

    return { status: 'OK', code: 200, message: 'Original response is not a IResponse entity', data: response ?? null };
  }

  httpDelete(url: string, options: any = { headers: this.getSomeHeaders() }): Observable<IResponse> {
    return this.http.delete<IResponse>(url, options).pipe(
      map((response: any) => this.handleResponse(response)),
      catchError((err: any) => of(handleErrorAsIResponse(err)))
    );
  }

  httpGet(url: string, options: any = { headers: this.getSomeHeaders() }): Observable<IResponse> {
    return this.http.get<IResponse>(url, options).pipe(
      map((response: any) => this.handleResponse(response)),
      catchError((err: any) => of(handleErrorAsIResponse(err)))
    );
  }

  httpJsonP = (url: string): Observable<IResponse> => {
    return this.http.jsonp(url, 'callback').pipe(
      map(response => this.handleResponse(response)),
      catchError((err: any) => of(handleErrorAsIResponse(err)))
    );
  }

  httpPost(url: string, body: any = {}, options: any = { headers: this.getSomeHeaders() }): Observable<IResponse> {
    return this.http.post<IResponse>(url, body, options).pipe(
      map((response: any) => this.handleResponse(response)),
      catchError((err: any) => {
        console.info(err)
        return of(handleErrorAsIResponse(err));
      })
    );
  }

  httpPut(url: string, body: any = {}, options: any = { headers: this.getSomeHeaders() }): Observable<IResponse> {
    return this.http.put<IResponse>(url, body, options).pipe(
      map((response: any) => this.handleResponse(response)),
      catchError((err: any) => {
        console.info(err)
        return of(handleErrorAsIResponse(err));
      })
    );
  }
}
