import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Task } from '../../models/tasks.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {

  filterActuallyTasks = signal("all")

  newTask = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('^\\S.*$'),
    ]
  }
  )

  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: "crear proyecto",
      complete: true
    },
    {
      id: Date.now(),
      title: "crear proyecto",
      complete: false
    }
  ])

  tasksByFilter = computed(()=>{
    const tasks = this.tasks()
    const filterSelected = this.filterActuallyTasks()
    
    if(filterSelected === "pending"){
      return tasks.filter(item => item.complete === false)               
    }

    if(filterSelected === "completed"){
      return tasks.filter(item => item.complete === true)               
    }
    return tasks
  })
  
  handlerOptionsFilter(option:string){
      this.filterActuallyTasks.set(option)
  }

  handlerInput() {
    const dataInput = this.newTask

    if(dataInput.valid){
      this.createTodo(dataInput.value)
    }
    this.newTask.setValue(" ")
  }

  createTodo(title: string) {

    const dataConverted = {
      id: Date.now(),
      title: title,
      complete: false
    }

    this.tasks.update((tasks) => [...tasks, dataConverted])
  }

  handlerCheckbox(id: number) {
    const idTask = id

    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {

        if (idTask === position) {
          return {
            ...task,
            complete: !task.complete
          }
        } else {
          return task
        }
      })
    }
    )
  }

  buttonDelete(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, position) => position != index))
  }

  editTask(id:number){

    const idTask = id

    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {

        if (idTask === position) {
          return {
            ...task,
            editing: true
          }
        } else {
          return {...task,editing:false}
        }
      })
    }
    )
  }

  editNameTask(id:number, event:Event){

    const eventData = event.target as HTMLInputElement

    const idTask = id

    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {

        if (idTask === position) {
          return {
            ...task,
            title: eventData.value,
            editing:false
          }
        } else {
          return {...task}
        }
      })
    }
    )
  }


}
