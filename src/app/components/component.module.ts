import {NgModule} from '@angular/core';
import {CubeComponent} from './cube/cube.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CubeComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    CubeComponent
  ]
})
export class ComponentModule {}
