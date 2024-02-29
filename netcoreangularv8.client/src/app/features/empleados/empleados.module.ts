import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgOptimizedImage } from '@angular/common';

// Modules
import { PrimeNgModule } from '../../core/modules/primeng.module';
import { CoreModule } from '../../core/modules/core.module';
import { EmpleadosRoutingModule } from './empleados-routing.module';

// Components
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    PrimeNgModule,
    CoreModule,
    EmpleadosRoutingModule,
  ]
})
export class EmpleadosModule { }
