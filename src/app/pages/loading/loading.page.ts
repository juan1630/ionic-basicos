import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {


  public loading: HTMLIonLoadingElement;

  constructor(
    public loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }
  mostarResultado(){
    this.presentLoading('Tarea ejecutadonse');
    setTimeout(() => {
      // dismiss cierra el loading
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading(  message ) {
    this.loading = await this.loadingCtrl.create({
      message
    });
    await this.loading.present();

    const { role, data } = await this.loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


}
