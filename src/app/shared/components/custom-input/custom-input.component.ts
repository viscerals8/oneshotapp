import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {
  //aqui tambien estaremos resiviendo parametros

  @Input() control!: FormControl;
  @Input() type!: string;
  @Input() label!: string; // Especifica el tipo explícitamente
  @Input() autocomplete!: string;
  @Input() icon!: string;

  // crearemos  dos variables nuevas  para mostrar y ocultar la pasword

  ispassword!: boolean;// variable sin inisializar  con esta variable vamos a identificar si la variable es de tipo password y si lo es mostraremos l ojito
  hide: boolean = true;// variable inicializada en true con esto veremos si la contraseña estara o no oculta

  // aca  crearemos una funcion para ocultar o mostrar la contraseña
  // aca si hide  = true  va a cambiar a false
  //y diseversa





  constructor() { }

  ngOnInit() {
    if (this.type == 'password') this.ispassword = true;
  }


  showOrHidePassword() {
    this.hide = !this.hide;
    //condicional donde  donde hide  es == true 
    // type sera == a password y si no sera igual a text
    if (this.hide) this.type = 'password';
    else this.type = 'text';
  }
}
