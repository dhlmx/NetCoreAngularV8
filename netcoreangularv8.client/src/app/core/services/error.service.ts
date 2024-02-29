import { HttpErrorResponse } from '@angular/common/http';

// Interfaces & Models
import { IPhpError } from '../interfaces/iphp-error';
import { IPhpJsonSintaxError } from '../interfaces/iphp-json-sintax-error';
import { IResponse } from '../interfaces/iresponse';

// Constants & Enums
import { ResponseCodeEnum, ResponseStatusEnum } from '../enums/response.enum';
import { isIPhpError, isIPhpJsonSintaxError } from './interface.service';

// Types
export type ErrorType = Error | ErrorEvent | HttpErrorResponse | IPhpError | IPhpJsonSintaxError;

export const handleErrorAsIResponse = (response: HttpErrorResponse): IResponse => {
  const iResponse = {
    code: ResponseCodeEnum.Error,
    status: ResponseStatusEnum.Error,
    message: '',
    data: response
  } as IResponse;

  if (!response) {
    iResponse.message = 'Original response was null or undefined';
    iResponse.data = null;
    return iResponse;
  }

  if (!response.ok) {
    iResponse.message = translateError(parseError(response.error));
    return iResponse;
  }

  if (response.message) {
    iResponse.message = translateError(response.message, response.statusText);
    return iResponse;
  }

  if (response.error) {
    iResponse.message = translateError(parseError(response.error));
    return iResponse;
  }

  console.warn(iResponse, 'ErrorService', 'handleErrorAsIResponse()', response, iResponse);
  return iResponse;
},

parseError = (entity: ErrorType): string => {

  if (entity instanceof HttpErrorResponse) {
    console.info('HttpErrorResponse');

    if (entity.error) {
      return parseError(entity.error);
    } else if (entity.message) {
      return entity.message;
    }
  }

  if (entity instanceof ErrorEvent) {
    console.info('HttpErrorResponse');
    return entity.message;
  }

  if (isIPhpError(entity)) {
    console.info('IPHPError');
    return entity.text;
  }

  if (isIPhpJsonSintaxError(entity)) {
    console.info('IPhpJsonSintaxError');
    return entity.message;
  }

  return '';
},

translateError = (message: string, status?: string): string => {

  // Errors without message
  if (!message) {
    return 'Error without description';
  }

  if (message.includes('Uncaught PDOException: SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry')) {
    return 'Expression exists already!';
  } else if (message.includes('Uncaught PDOException: SQLSTATE[42000]: Syntax error or access violation: 1064 You have an error in your SQL syntax')) {
    return 'Error in SQL syntax!';
  }

  console.info('translateError->Not translated', message, status);
  return 'Error detected';
};
