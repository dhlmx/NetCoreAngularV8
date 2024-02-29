import { Injectable } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

// Interfaces & Models
import { Process } from '../models/process';

// Enums & Constants
const { app } = environment;

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private titleCase = new TitleCasePipe();

  process = new Process();

  processSubscription!: Subscription;

  module = '';
  action = '';

  constructor(
    private title: Title
  ) {}

  setTitle = (): void => {
    this.title.setTitle(`${app.name} | ${this.titleCase.transform(this.module)} - ${this.titleCase.transform(this.action)}`);
  }
}
