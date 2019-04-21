import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cube',
  template: `
    <div class="Cube_container">
      <div class="Cube_value">
        <ng-container [ngSwitch]="value">
          <div class="Cube_value Cube_value_black" *ngSwitchCase="1">9</div>
          <div class="Cube_value Cube_value_red"   *ngSwitchCase="2">10</div>
          <div class="Cube_value Cube_value_blue"  *ngSwitchCase="3">J</div>
          <div class="Cube_value Cube_value_blue"  *ngSwitchCase="4">Q</div>
          <div class="Cube_value Cube_value_red"   *ngSwitchCase="5">K</div>
          <div class="Cube_value Cube_value_black" *ngSwitchCase="6">A</div>
        </ng-container>
      </div>
    </div>
  `,
  styleUrls: ['cube.component.scss']
})
export class CubeComponent {

  @Input() value: number;

}
