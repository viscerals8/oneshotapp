import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { LogoComponent } from './components/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';// aca se importaron automaticamente



@NgModule({
  declarations: [HeaderComponent, CustomInputComponent, LogoComponent],// implementamos los componentes que creamos
  exports: [HeaderComponent, CustomInputComponent, LogoComponent, ReactiveFormsModule],
  imports: [
    CommonModule, IonicModule, ReactiveFormsModule, FormsModule// aqui importamos  algunos modulos  para que nuestros componentes  se  puedan usar correctamente
  ]
})
export class SharedModule { }
