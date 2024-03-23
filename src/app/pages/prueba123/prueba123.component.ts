import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-prueba123',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './prueba123.component.html',
  styleUrl: './prueba123.component.css'
})
export class Prueba123Component {
  textInput = signal("")
  colorSelected = new FormControl()

  inputHandler(event: KeyboardEvent){
    const dataEvent = event.target as HTMLInputElement

    this.textInput.set(dataEvent.value)

  }
}
