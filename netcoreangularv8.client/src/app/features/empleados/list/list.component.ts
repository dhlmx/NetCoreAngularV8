import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';

// Services
import { AppService } from '../../../core/services/app.service';
import { PrimefacesService } from '../../../core/services/primefaces.service';
import { RepositoryService } from '../../../core/services/repository.service';

// Interfaces & Models
import { IEmpleado } from '../../../core/interfaces/iempleado';
import { IResponse } from '../../../core/interfaces/iresponse';
import { ResponseCodeEnum } from '../../../core/enums/response.enum';
import { NavigationService } from '../../../core/services/navigation.service';

// Enums & Constants
const { resources } = environment;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  controls = {
    categoryId: new FormControl(0, Validators.required),
    title: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]),
  };

  form = new FormGroup({
    ...this.controls
  });

  search = new FormControl('');

  empleados: IEmpleado[] = [];

  constructor(
    public appService: AppService,
    private navigationService: NavigationService,
    private primefacesServices: PrimefacesService,
    private repositoryService: RepositoryService
  ) { }

  ngOnInit() {
    this.initialize();
  }

  private initialize = (): void => {
    this.appService.process.start('Loading employees...');
    this.getEmpleados();
  }

  create = (): void => {
    this.navigationService.navigateByURL("/empleados/create");
  }

  delete = (id: string): void => {
    this.navigationService.navigateByURL(`/empleados/delete/${id}`);
  }

  private getEmpleados = (): void => {
    this.empleados = [];

    this.repositoryService.getEmpleados().subscribe({
      next: (response) => {
        if (response.code === ResponseCodeEnum.OK) {
          this.empleados = response.data as IEmpleado[];
        }
      },
      complete: () => {
        this.appService.process.stop();
      }
    });
  }

  read = (id: string): void => {
    this.navigationService.navigateByURL(`/empleados/read/${id}`);
  }

  update = (id: string): void => {
    this.navigationService.navigateByURL(`/empleados/update/${id}`);
  }
}
