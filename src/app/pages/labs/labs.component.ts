import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'platzi';

  tasks = signal([
    "Quitar tornillos",
    "Limpiar tornillos",
    "Colocar tornillos",
    "Apretar tornillos",
  ])

  grupoDeEmpleados = [
    {
      nombre: "Sebastian",
      edad: 19,
      ciudad: "Medellin",
      politicas: true
    },
    {
      nombre: "Pablo",
      edad: 40,
      ciudad: "Bogota",
      politicas: false
    },
    {
      nombre: "Andres",
      edad: 25,
      ciudad: "Cartagena",
      politicas: true
    }
  ]

  textForInput = "Este es el input"

  imagenAvatar ="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg"

  onClick(){
    console.log('se ejecuto el boton')
  }

  changeInput(events: Event){
    console.log("🚀 ~ LabsComponent ~ changeInput ~ events:", events)
  }
}
