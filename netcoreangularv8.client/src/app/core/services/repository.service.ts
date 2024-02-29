import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// Services
import { HttpService } from './http.service';

// Interfaces & Models
import { IEmpleado } from '../interfaces/iempleado';
import { IResponse } from '../interfaces/iresponse';

// Enums & Constants

const { api } = environment;

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {}

  deleteEmpleado = (id: number): Observable<IResponse> => {
    return this.httpService.httpDelete(`${api.host}/${api.basePath}/empleados/${id}`);
  }

  getEmpleado = (id: number): Observable<IResponse> => {
    return this.httpService.httpGet(`${api.host}/${api.basePath}/empleados/${id}`);
  }

  getEmpleados = (): Observable<IResponse> => {
    return this.httpService.httpGet(`${api.host}/${api.basePath}/empleados`);
  }

  postEmpleados = (empleado: IEmpleado): Observable<IResponse> => {
    return this.httpService.httpPost(`${api.host}/${api.basePath}/empleados`, empleado);
  }

  putEmpleado = (empleado: IEmpleado): Observable<IResponse> => {
    console.info('putEmpleado', `${api.host}/${api.basePath}/empleados/${empleado.id}`, empleado);
    return this.httpService.httpPut(`${api.host}/${api.basePath}/empleados/${empleado.id}`, empleado);
  }
}
