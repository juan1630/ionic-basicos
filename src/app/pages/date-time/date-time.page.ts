  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  constructor() { }


  public fechaNaci: Date = new Date();
  public customYearValues: [2025, 2020, 2016, 2008, 2004, 2000, 1996];
  public cutomPickerOptions = {
    buttons: [
      {
      text:'hola',
      handler: (event ) =>  {
        console.log( event );
      }
    },
    {
      text:'mundo',
      handler: ( ) => {
        console.log('log!!!!');
      }
    }
  ]
  }


  ngOnInit() {
  }

  cambioFecha( event ){
    console.log( new Date(event.detail.value))
  }

}
