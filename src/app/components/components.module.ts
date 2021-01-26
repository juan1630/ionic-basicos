import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent  } from './header/header.component';
import { PopOverInfoComponent } from './pop-over-info/pop-over-info.component';


@NgModule({
  declarations: [
    HeaderComponent,
    PopOverInfoComponent
  ],
  exports:[
    HeaderComponent,
    PopOverInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
