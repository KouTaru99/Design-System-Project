import { Component } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-date-time-picker',
  standalone: true,
  imports: [ MatDatepickerModule, MatFormFieldModule],
  templateUrl: './date-time-picker.component.html',
  styleUrl: './date-time-picker.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class DateTimePickerComponent {

}
