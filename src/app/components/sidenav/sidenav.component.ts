import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenu, MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  timedOutCloser:any
  @ViewChild(MatMenu) animals!: QueryList<MatMenu>;

  mouseEnter(trigger:any) {
    console.log(this.animals);
    // if (this.timedOutCloser) {
    //   clearTimeout(this.timedOutCloser);
    // }
    // trigger.openMenu();
  }

  mouseLeave(trigger:any) {
  //   this.timedOutCloser = setTimeout(() => {
  //     trigger.closeMenu();
  //   }, 50);
  }

}
