import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { HasSpaces } from './has-spaces.validate'

@Directive({
  selector: '[hasSpaces]',
  providers: [{ provide: NG_VALIDATORS, useExisting: HasSpacesDirective, multi: true }]
})
export class HasSpacesDirective implements Validator {

  @Input('hasSpaces') entry: string = ''

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return HasSpaces()(control)
  }
}
