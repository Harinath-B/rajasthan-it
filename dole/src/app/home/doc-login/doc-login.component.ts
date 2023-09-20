import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-doc-login',
  templateUrl: './doc-login.component.html',
  styleUrls: ['./doc-login.component.css']
})
export class DocLoginComponent {

  form:any

  constructor(private fb: UntypedFormBuilder, private service : ApiService, private router : Router)
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
    this.service.doc_login(this.form.value)
    .subscribe(
      {
        next: (response:any)=>
        {
          console.log(response)
          if(response.message == 'success')
          {
            sessionStorage.setItem('doctorid', response.id)
            this.router.navigate(['/mental-health-doc'])
          }
          else
            alert(response.message)
        }
      }
    )
  }

}
