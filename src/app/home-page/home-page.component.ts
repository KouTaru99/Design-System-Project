import { Component } from '@angular/core';
import { SidenavComponent } from "../components/sidenav/sidenav.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [SidenavComponent]
})
export class HomePageComponent {

}
