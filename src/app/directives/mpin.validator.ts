import { AbstractControl } from '@angular/forms';

export function ValidatemPIN(control: AbstractControl) {
  if (control.value && control.value.length == 4) {
    var arr = control.value.split('');
    if ((/^([0-9])\1+$/).test(control.value)) {
      return { mpinInvalid: true }
    }
    else if (parseInt(arr[1]) == parseInt(arr[0]) + 1 && parseInt(arr[2]) == parseInt(arr[0]) + 2 && parseInt(arr[3]) == parseInt(arr[0]) + 3) {
      return { mpinInvalid: true }
    }
    return null;
  } else {
    return { mpinInvalid: true };
  }

}