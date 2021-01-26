import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopOverInfoComponent } from 'src/app/components/pop-over-info/pop-over-info.component';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.page.html',
  styleUrls: ['./pop-over.page.scss'],
})
export class PopOverPage implements OnInit {

  constructor(
    private popOverCtrl: PopoverController
  ) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popOverCtrl.create({
      component: PopOverInfoComponent,
      event: ev,
      translucent: true,
      backdropDismiss:false
    });
    return await popover.present();
  }

}
