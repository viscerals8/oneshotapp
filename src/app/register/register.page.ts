import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  submitted: boolean = false;

  submit(event: Event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario
    this.submitted = true;

    if (this.isFormValid()) {
      // Aquí podrías enviar los datos al servidor o manejar el registro
      console.log('Formulario enviado:', this.name, this.email, this.password, this.confirmPassword);
    } else {
      console.log('Formulario inválido');
    }
  }

  isFormValid(): boolean {
    return (
      !!this.name &&
      this.name.length >= 2 &&
      this.name.length <= 50 &&
      !!this.email &&
      this.validateEmail(this.email) &&
      !!this.password &&
      this.password.length >= 8 &&
      !!this.confirmPassword &&
      this.confirmPassword === this.password
    );
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}
