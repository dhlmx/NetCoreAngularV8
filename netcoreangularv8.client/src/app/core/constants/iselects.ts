import { PuestoEnum } from '../enums/puesto.enum';
import { ISelect } from '../interfaces/iselect';

export const ISELECT_PUESTOS = [
  { label: 'Gerente', value: PuestoEnum.Gerente, inactive: false },
  { label: 'Empleado', value: PuestoEnum.Empleado, inactive: false }
] as ISelect[];

export const ISELECT_YES_NO = [
  { label: 'Sí', value: true, inactive: false },
  { label: 'No', value: false, inactive: false }
] as ISelect[];
