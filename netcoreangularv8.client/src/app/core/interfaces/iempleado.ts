export interface IEmpleado {
    id: number;
    fotografia: any;
    nombre: string;
    apellido: string;
    puesto: string;
    fechaNacimiento: Date|string;
    fechaContratacion: Date|string;
    direccion: string;
    telefono: string;
    correoElectronico: string;
    estado: boolean;
    jefeDirecto: string;
}

export const IEMPLEADO_DEFAULT = {
  id: 0,
  fotografia: '',
  nombre: '',
  apellido: '',
  puesto: '',
  fechaNacimiento: new Date(),
  fechaContratacion: new Date(),
  direccion: '',
  telefono: '',
  correoElectronico: '',
  estado: false,
  jefeDirecto: ''
} as IEmpleado;
