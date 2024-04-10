import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenu, MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { DateTimePickerComponent } from "../date-time-picker/date-time-picker.component";

@Component({
    selector: 'app-sidenav',
    standalone: true,
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss',
    imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatMenuModule, MatIconModule, DateTimePickerComponent]
})
export class SidenavComponent {


}
