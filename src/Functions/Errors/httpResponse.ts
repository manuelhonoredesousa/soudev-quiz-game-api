interface IEntries {
  statusCode: number;
  smsContent: string;
  help: any[] | string;
}
export interface IErrorMessageResponse {
  status: number;
  sms: string;
  help: any[] | string
}

export function errorMessage({ statusCode, smsContent, help }: IEntries) {
  return { status: statusCode, sms: smsContent, help };
}
