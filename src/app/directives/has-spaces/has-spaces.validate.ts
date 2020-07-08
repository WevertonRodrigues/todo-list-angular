import { ValidatorFn, AbstractControl, } from '@angular/forms';

export function HasSpaces(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    let hasSpaces = control.value != null ? control.value.indexOf(' ') >= 0 : true;
    return hasSpaces ? { 'hasSpaces': { value: true } } : null
  };
}
