import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild( IonInfiniteScroll ) infintieScroll: IonInfiniteScroll;

  public infiniteScroll1:any= Array(20);
  constructor() { }

  ngOnInit() {
  }

  loadData(eve){
    console.log( eve );

    // cancela la peticion de la información

    setTimeout( ()=> {

      if( this.infiniteScroll1.length  > 30 ){
        this.infintieScroll.complete();
        this.infintieScroll.disabled = true;
      }

      const nuevoArr = new Array(20);
      this.infiniteScroll1.push( ...nuevoArr );

      this.infintieScroll.complete();

    }, 3000 )
  }
  

}
