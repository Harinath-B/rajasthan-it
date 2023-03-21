import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-pat-login',
  templateUrl: './pat-login.component.html',
  styleUrls: ['./pat-login.component.css']
})
export class PatLoginComponent {

  form:any

  constructor(private fb: UntypedFormBuilder, private service : ApiService, private router: Router)
  {
    this.form = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    )
  }

  submit()
  {
    this.service.pat_login(this.form.value)
    .subscribe(
      {
        next: (response:any)=>
        {
          console.log(response)
          if(response.message == 'success')
          {
            sessionStorage.setItem('userid',response.id)
            this.router.navigate(['/patient-room'])
          }
          else
            alert(response.message)
        }
      }
    )
  }

}
