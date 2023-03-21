import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://127.0.0.1:8000/'

  constructor(private http: HttpClient) {

   }

   doc_login(form:any)
   {    
    return this.http.get(this.url+'doctorAuth?username='+form.username+'&password='+form.password)
   }
   doc_reg(form:any)
   {    
    return this.http.post(this.url+'doctorAuth/', form)
   }

   pat_login(form:any)
   {    
    return this.http.get(this.url+'patientAuth?username='+form.username+'&password='+form.password)
   }
   pat_reg(form:any)
   {    
    return this.http.post(this.url+'patientAuth/', form)
   }
   chat()
   {    
    return this.http.get(this.url+'patient?userid='+sessionStorage.getItem('userid')+'&chatid=1')
   }
   newchat()
   {    
    return this.http.get(this.url+'patient?userid='+sessionStorage.getItem('userid')+'&chatid=2')
   }
   chat_store(form:any)
   {    
    return this.http.post(this.url+'patient/', form)
   }
   chatbot(form:any)
   {    
    return this.http.post(this.url+'chat/', form)
   }
   newchatbot(form:any)
   {    
    return this.http.post(this.url+'tchat/', form)
   }
   textfill()
   {    
    return this.http.get(this.url+'action/')
   }
}
