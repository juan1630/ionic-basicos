import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  componentes:Observable<Componente[]>;

  constructor(
    private menuCtrl: MenuController,
    private dataservice: DataService
  ) { }

  ngOnInit() {
      this.componentes = this.dataservice.getMenuOpts();
  }

  mostrarMenu(){
    //mnaodmamos el id del menu que queremos abrir
    this.menuCtrl.open( 'first' );
  }

}
