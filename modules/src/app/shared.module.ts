import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [HeaderComponent, UserInputComponent],
  exports: [HeaderComponent, UserInputComponent],
  imports: [FormsModule]
})

export class SharedModule {}
