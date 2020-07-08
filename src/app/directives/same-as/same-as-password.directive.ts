import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, ValidationErrors, FormGroup } from '@angular/forms';
import { SameAs } from './same-as-password.validate'


@Directive({
  selector: '[sameAsPassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: SameAsPasswordDirective, multi: true}]
})
export class SameAsPasswordDirective {

  @Input('sameAsPassword') passwords : string[] = [];

  constructor() { }

  validate(formGroup: FormGroup): ValidationErrors {
    return SameAs(this.passwords[0], this.passwords[1])(formGroup);
  }

}
