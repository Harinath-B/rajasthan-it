import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-doc-reg',
  templateUrl: './doc-reg.component.html',
  styleUrls: ['./doc-reg.component.css']
})
export class DocRegComponent {

  form:any

  constructor(private fb: UntypedFormBuilder, private service : ApiService, private router:Router)
  {
    this.form = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
        conpassword: ['',Validators.required]
      }
    )
  }

  submit()
  {
    if(this.form.get('password').value == this.form.get('conpassword').value )
    {
      this.service.doc_reg(this.form.value)
      .subscribe(
        {
          next: (response:any)=>
          {
            console.log(response)
            if(response=='inserted.')
            {
              alert("Registered Successfully")
              this.router.navigate(['/doctor-login'])
            }
            else
            {
              alert("Not registered")
            }
          }
        }
    
      )
    }
    else
    {
      alert('Please Check Your Password')
    }

  }


}
