import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

const basePath = environment.host;

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) {}

  navigateByCRUD = (table: string, crud: string, id?: string): void => {
    if (id) {
      this.router.navigateByUrl(`${basePath}${table}/${crud}/${id}`);
    } else {
      console.info(`${basePath}${table}/${crud}`);
      this.router.navigateByUrl(`${basePath}/${table}/${crud}`);
    }
  }

  navigateByURL = (url: string): void => {
    this.router.navigateByUrl(url);
  }

  navigateToLogin = (): void => {
    this.navigateByURL('auth/login');
  }
}
