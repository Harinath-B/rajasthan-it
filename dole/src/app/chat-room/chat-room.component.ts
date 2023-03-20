import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit{

  @ViewChild('textarea') textarea!: ElementRef;
  @ViewChild('myDiv', { static: false }) myDiv!: ElementRef<HTMLDivElement>;

  loading:any = false
  old_chats:any = ['chat1','chat1','chat1','chat1','chat1','chat1','chat1','chat1','chat1','chat1','chat1','chat1','chat1','chat1' ]
  chat:any = [
  ]

  mymodel:any
  initialHeight: any;
  text:any

  constructor(private service: ApiService, private http:HttpClient)
  {

  }

  ngOnInit(): void {
    this.service.chat()
    .subscribe(
      {
        next: (response)=>{console.log(response);
          this.chat = response
        }
      }
    )
  }

  ngAfterViewInit() {
    this.initialHeight = this.textarea.nativeElement.offsetHeight;
    this.scrollToBottom()
  }

  scrollToBottom() {
    const div = this.myDiv.nativeElement;
    div.scrollTop = div.scrollHeight;
    console.log(div.scrollHeight);
    
  }


  height()
  {
    this.textarea.nativeElement.style.height = this.initialHeight + 'px';
    this.textarea.nativeElement.style.height = (this.textarea.nativeElement.scrollHeight)+'px'
    
  }

  onkeydown(event:KeyboardEvent)
  {
    if(event.key == 'Enter' && !event.shiftKey)
    {
      this.add()
    }
    else if(event.shiftKey && event.key == 'Enter')
    {
      console.log('shift enter');
      // event.preventDefault(); // prevent default behavior of inserting a new line
      // const textarea = event.target as HTMLTextAreaElement;
      // const start = textarea.selectionStart;
      // const end = textarea.selectionEnd;
      // const value = textarea.value;
      // textarea.value = value.substring(0, start) + '\n' + value.substring(end);
      // textarea.selectionStart = textarea.selectionEnd = start + 1; // move cursor to new line
    } 
  }

  add()
  {
    this.loading = true

    if(this.mymodel != '')
      this.chat.push({response:'', request:this.mymodel})

      setTimeout(() => {
        this.chat[this.chat.length-1].response = "Sorry, I can't Understand What You're Trying to Say"
        this.loading = false
        this.chat[this.chat.length-1].patientId = sessionStorage.getItem('userid')
        this.chat[this.chat.length-1].chatId = '1'

        this.service.chat_store(this.chat[this.chat.length-1])
        .subscribe(
          {
            next: (response)=>{console.log(response);},
            error: (err)=>{console.log(err);
            }
          }
        )
    
        console.log(this.chat[this.chat.length-1]);
      }, 200);

    this.mymodel = ''

    setTimeout(() => {
      this.scrollToBottom()      
    }, 100);

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
          next: (response:any)=>
          {
            console.log(response)
            const flaggedTokens = response.flaggedTokens;
            const correctedText = this.text.replace(/(\w+)/g, (match:any) => {
              const flaggedToken = flaggedTokens.find((token: any) => token.token === match);
              if (flaggedToken) {
                return flaggedToken.suggestions[0].suggestion;
              } else {
                return match;
              }
            });
            console.log(correctedText);
          },
          error: (err)=>{console.log(err)}
        }
      )
  }

}
