import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Time } from './time';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  time: Time = {} as Time
  
  listaDeTimes: Time[] = []

  saveData(form: NgForm) {
    this.listaDeTimes.push(this.time)
    this.time = {} as Time
    this.ordenarArray()
    form.resetForm()

  }

  ordenarArray() {
    let swap: boolean;
    do {
      swap = false
      for(let i = 0; i < this.listaDeTimes.length - 1; i++){
        
        if(this.listaDeTimes[i + 1] == null){
          console.log("Passei pelo if do ordenaArray")
          break;
        }

        else if(this.listaDeTimes[i].pontuacao < this.listaDeTimes[i + 1].pontuacao){
          let timeAux: Time = {} as Time

          timeAux = this.listaDeTimes[i]
          this.listaDeTimes[i] = this.listaDeTimes[i + 1]
          this.listaDeTimes[i + 1] = timeAux
          
          if(this.listaDeTimes[i].pontuacao < this.listaDeTimes[i + 1].pontuacao){
            console.log('Helloo')
          }

          console.log("Estou no else if do ordena Array")
          swap = true

        }
      }
    } while (swap);
  }

}
