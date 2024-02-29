import { IResponse } from '../interfaces/iresponse';
import { IPhpError } from '../interfaces/iphp-error';
import { IPhpJsonSintaxError } from '../interfaces/iphp-json-sintax-error';

export const isIPhpError = (entity: any): entity is IPhpError => {
  const test = entity as IPhpError;
  return test.error !== undefined && test.text !== undefined;
},

isIPhpJsonSintaxError = (entity: any): entity is IPhpJsonSintaxError => {
  const test = entity as IPhpJsonSintaxError;

  return test.columnNumber !== undefined
    && test.fileName !== undefined
    && test.lineNumber !== undefined
    && test.message !== undefined
    && test.stack !== undefined;
},

isIResponse = (entity: any): entity is IResponse => {
  const test = entity as IResponse;

  return test.status !== undefined
    && test.code !== undefined
    && test.message !== undefined
    && test.data !== undefined;
};
