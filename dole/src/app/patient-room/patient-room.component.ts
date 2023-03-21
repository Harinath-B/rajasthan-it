import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-room',
  templateUrl: './patient-room.component.html',
  styleUrls: ['./patient-room.component.css']
})
export class PatientRoomComponent {


  text: any

  constructor(private http: HttpClient)
  {

  }

  func()
  {
    const options = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '6af605c29bmsha5c840f70daf800p16fd70jsn9bd9d87cf5f3',
        'X-RapidAPI-Host': 'bing-spell-check2.p.rapidapi.com'
      })
    };
    
    this.http.get('https://bing-spell-check2.p.rapidapi.com/spellcheck?mode=proof&text='+this.text, options)
      .subscribe(
        {
          next: (response:any)=>{console.log(response)},
          error: (err)=>{console.log(err)}
        }
      )
  }

  


}
