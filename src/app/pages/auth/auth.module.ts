import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { SharedModule } from 'src/app/shared/shared.module';// y nos aseguramos que se importe correctamente

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    IonicModule,
    AuthPageRoutingModule,
    SharedModule// introducimos el  shared module en este import
  ],
  declarations: [AuthPage]
})
export class AuthPageModule { }
