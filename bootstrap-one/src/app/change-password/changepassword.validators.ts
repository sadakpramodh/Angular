
import { AbstractControl } from '@angular/forms';

export class changePasswordValidators {

    static conformPasswordMatch(control : AbstractControl) {
        let newpassword  = control.get('newpassword');
        let conformpassword  = control.get('conformpassword');
        console.log(newpassword, conformpassword);
        //if(newpassword.value !== conformpassword.value)
          //  return { conformPasswordMatch : true};
        return null;

    }
    static getOldpassword(control : AbstractControl) {
        return new Promise ((resolve,reject)=>{
                if(control.value ==='123456')
                {
                    resolve({ getOldPassword: true});
                    console.log(resolve({ getOldPassword: true}));
                } 
                else
                {
                    resolve ({ getOldPassword: null});
                    console.log({ getOldPassword: null});
                }
                    
        });
    }
}