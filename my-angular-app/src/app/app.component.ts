import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
