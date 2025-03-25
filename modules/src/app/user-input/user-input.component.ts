import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
nameInput = ''
favColour = ''

  onSubmit() {
    console.log(`Hi my name is ${this.nameInput}! My favourite colour is ${this.favColour}`)
}
}
