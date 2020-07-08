import { FormGroup } from '@angular/forms';

export function SameAs(password: string, sameAs: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[password];
        const sameAsControl = formGroup.controls[sameAs];

        if (!control || !sameAsControl) {
          return null;
        }

        if (sameAsControl.errors && !sameAsControl.errors.sameAs) {
            return null;
        }

        if (control.value !== sameAsControl.value) {
            sameAsControl.setErrors({ sameAs: true });
        } else {
            sameAsControl.setErrors(null);
        }
    }
}
