import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;

} 
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public components: Componente[] =
  [
    {
    icon: 'american-football-outline',
    name: 'action-sheet',
    redirectTo: '/action-sheet'
  },
  {
    icon: 'logo-apple-appstore',
    name: 'Alert',
    redirectTo: '/alert'
  },
  {
    icon: 'beaker-outline',
    name: 'avatar',
    redirectTo: '/avatar'
  },
  {
    icon: 'radio-button-off-outline',
    name:'Buttons',
    redirectTo: '/button'
  },
  {
    icon: 'card-outline',
    name: 'Cards',
    redirectTo: '/card'
  },
  {
    icon: 'checkmark-circle-outline',
    name: 'Checks',
    redirectTo: '/check'
  }

];

  constructor() { }

  ngOnInit() {
  }

}
