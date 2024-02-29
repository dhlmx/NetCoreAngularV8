export interface IResponse {
  status: string;
  code: number;
  message: string;
  data: any;
}

export const IRESPONSE_DEFAULT = {
  status: '',
  code: 0,
  message: '',
  data: {}
} as IResponse;
