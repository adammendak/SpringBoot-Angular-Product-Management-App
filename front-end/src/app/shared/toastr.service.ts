import { InjectionToken } from '@angular/core';

// export let TOASTR_TOKEN = new InjectionToken('Toastr');

//adding interface for intelliSense to give hints about methods
export interface Toastr {
  success(message: string, title?: string): void;
  info(message: string, title?: string): void;
  warning(message: string, title?: string): void;
  error(message: string, title?: string): void;
}
