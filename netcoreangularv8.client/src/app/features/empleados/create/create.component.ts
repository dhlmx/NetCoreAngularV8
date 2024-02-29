import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
// import { environment } from '../environments/environment';

// Services
import { AppService } from '../../../core/services/app.service';
import { NavigationService } from '../../../core/services/navigation.service';
import { RepositoryService } from '../../../core/services/repository.service';
import { SanititizeService } from '../../../core/services/sanitize.service';

// Interfaces & Models
import { IEmpleado } from '../../../core/interfaces/iempleado';
import { ISelect } from '../../../core/interfaces/iselect';
import { ISELECT_PUESTOS, ISELECT_YES_NO } from '../../../core/constants/iselects';
import { Process } from '../../../core/models/process';

// Enums & Constants
import { ResponseCodeEnum } from '../../../core/enums/response.enum';

// const { api, resources } = environment;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [ConfirmationService, MessageService]

})
export class CreateComponent implements OnInit {

  puestos: ISelect[] = ISELECT_PUESTOS;
  estados: ISelect[] = ISELECT_YES_NO;
  empleados: IEmpleado[] = [];

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

  constructor(
    public appService: AppService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private navigationService: NavigationService,
    private repositoryService: RepositoryService,
    private sanitizeService: SanititizeService
  ) {
    this.appService.module = "empleados";
    this.appService.action = "create";
    this.appService.setTitle();

    this.appService.process = new Process();

    this.form = new FormGroup({ ...this.controls });
  }

  ngOnInit(): void {
    this.initialize();
  }

  private initialize = (): void => {
    this.appService.process.start('Loading employess...');
    this.appService.process.stop();
  }

  list = (): void => {
    this.navigationService.navigateByURL('/empleados');
  }

  onSelect = (event: any): void => {
    console.info(event);
  }

  onClickSave = (): void => {
    this.confirmationService.confirm({
      message: '¿Estás seguro de proceder?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.appService.process.start('Creating employee...');

        this.repositoryService.postEmpleados(this.prepareDataToInsert()).subscribe({
          next: (response) => {
            if (response.code === ResponseCodeEnum.OK) {
              this.resetForm();
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
  
  private prepareDataToInsert = (): IEmpleado => {
    return {
      id: 0,
      fotografia: null,
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

  resetForm = (): void => {
    this.controls.id.setValue(0);
    this.controls.fotografia.setValue('');
    this.controls.nombre.setValue('');
    this.controls.apellido.setValue('');
    this.controls.puesto.setValue('');
    this.controls.fechaNacimiento.setValue(new Date());
    this.controls.fechaContratacion.setValue(new Date());
    this.controls.direccion.setValue('');
    this.controls.telefono.setValue('');
    this.controls.correoElectronico.setValue('');
    this.controls.estado.setValue(false);
    this.controls.jefeDirecto.setValue('');
    this.form.reset();
  }
}
