import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModalComponent } from '../components/message-modal/message-modal.component';
import { PrimeNgModule } from './primeng.module';

@NgModule({
  declarations: [
    MessageModalComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    MessageModalComponent
  ]
})
export class CoreModule { }
