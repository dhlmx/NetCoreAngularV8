import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { environment, SERVER } from '../../../../environments/environment';

// Services
import { AppService } from '../../../core/services/app.service';
import { NavigationService } from '../../../core/services/navigation.service';
import { RepositoryService } from '../../../core/services/repository.service';
import { SanititizeService } from '../../../core/services/sanitize.service';

// Interfaces & Models
import { IEmpleado, IEMPLEADO_DEFAULT } from '../../../core/interfaces/iempleado';
import { ISelect } from '../../../core/interfaces/iselect';
import { ISELECT_PUESTOS, ISELECT_YES_NO } from '../../../core/constants/iselects';
import { Process } from '../../../core/models/process';

// Enums & Constants
import { ResponseCodeEnum } from '../../../core/enums/response.enum';
const { resources } = environment;

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class UpdateComponent implements OnInit {

  controls = {
    id: new FormControl(0),
    fotografia: new FormControl(''),
    nombre: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
    puesto: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    fechaNacimiento: new FormControl(new Date(), [Validators.required]),
    fechaContratacion: new FormControl(new Date(), [Validators.required]),
    direccion: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(24)]),
    correoElectronico: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
    estado: new FormControl(false, [Validators.required]),
    jefeDirecto: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(200)])
  };

  form = new FormGroup({
    ...this.controls
  });

  puestos: ISelect[] = ISELECT_PUESTOS;
  estados: ISelect[] = ISELECT_YES_NO;
  empleados: IEmpleado[] = [];
  empleado: IEmpleado = { ...IEMPLEADO_DEFAULT } as IEmpleado;

  constructor(
    private activatedRoute: ActivatedRoute,
    public appService: AppService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private navigationService: NavigationService,
    private repositoryService: RepositoryService,
    private sanitizeService: SanititizeService
  ) {
    this.appService.module = "empleados";
    this.appService.action = "update";
    this.appService.setTitle();

    this.appService.process = new Process();
  }

  ngOnInit(): void {
    this.controls.id.setValue(parseInt(this.activatedRoute.snapshot.paramMap.get('id') ?? '0'));
    this.initialize();
  }

  create = (): void => {
    this.navigationService.navigateByURL('/empleados/create');
  }

  delete = (id: number): void => {
    this.navigationService.navigateByURL(`/empleados/delete/${id}`);
  }

  private getEmpleado = (): void => {
    this.appService.process.start("Searching employee...");

    this.empleado = { ...IEMPLEADO_DEFAULT } as IEmpleado;

    this.repositoryService.getEmpleado(this.controls.id.value ?? 0).subscribe({
      next: (response) => {
        if (response.code === ResponseCodeEnum.OK) {
          this.empleado = response.data as IEmpleado;
          this.resetForm(this.empleado);
        }
      },
      complete: () => {
        this.appService.process.stop();
      }
    });
  } 

  private initialize = (): void => {
    this.getEmpleado();
  }

  list = (): void => {
    this.navigationService.navigateByURL("/empleados");
  }

  onClickSave = (): void => {
    this.confirmationService.confirm({
      message: '¿Estás seguro de proceder?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.appService.process.start('Updating employee...');

        this.repositoryService.putEmpleado(this.prepareDataToUpdate()).subscribe({
          next: (response) => {
            if (response.code === ResponseCodeEnum.OK) {
              this.messageService.add({ severity: 'success', summary: 'Confirmación', detail: 'Employee saved' });
            } else {
              this.messageService.add({ severity: 'warn', summary: 'Confirmación', detail: 'Employee not saved' });
            }
          },
          error: (err: any) => {
            console.log(err);
          },
          complete: () => {
            this.appService.process.stop();
          }
        });
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'warn', summary: 'Información', detail: 'Operación no realizada'})
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelación', detail: 'Operación cancelada'})
            break;
        }
      }
    });
  }

  onSelect = (event: any): void => {
    console.info(event);
  }

  private prepareDataToUpdate = (): IEmpleado => {
    return {
      id: this.form.value.id,
      fotografia: this.form.value.fotografia,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      puesto: this.form.value.puesto,
      fechaNacimiento: this.sanitizeService.prepareDateTimeForMySQL(this.form.value.fechaNacimiento ? this.form.value.fechaNacimiento : new Date()),
      fechaContratacion: this.sanitizeService.prepareDateTimeForMySQL(this.form.value.fechaContratacion ? this.form.value.fechaContratacion : new Date()),
      direccion: this.form.value.direccion,
      telefono: this.form.value.telefono,
      correoElectronico: this.form.value.correoElectronico,
      estado: this.form.value.estado,
      jefeDirecto: this.form.value.jefeDirecto
    } as IEmpleado;
  }

  read = (id: number): void => {
    this.navigationService.navigateByURL(`/empleados/read/${id}`);
  }

  resetForm = (empleado: IEmpleado): void => {
    this.controls.id.setValue(empleado.id);
    this.controls.fotografia.setValue(empleado.fotografia);
    this.controls.nombre.setValue(empleado.nombre);
    this.controls.apellido.setValue(empleado.apellido);
    this.controls.puesto.setValue(empleado.puesto);
    this.controls.fechaNacimiento.setValue(new Date(empleado.fechaNacimiento));
    this.controls.fechaContratacion.setValue(new Date(empleado.fechaContratacion));
    this.controls.direccion.setValue(empleado.direccion);
    this.controls.telefono.setValue(empleado.telefono);
    this.controls.correoElectronico.setValue(empleado.correoElectronico);
    this.controls.estado.setValue(empleado.estado);
    this.controls.jefeDirecto.setValue(empleado.jefeDirecto);
  }
}
