import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  nombre: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage {
  user: User = { nombre: '', email: '', password: '', confirmPassword: '' };
  submitted: boolean = false;

  constructor(private router: Router) { }

  save() {
    this.submitted = true;

    if (this.isFormValid()) {
      // Implementa la lógica para guardar los cambios
      console.log('Usuario actualizado:', this.user);
      alert('Datos del usuario actualizados');
      this.router.navigate(['/users']); // Redirige a la lista de usuarios después de guardar
    } else {
      console.log('Formulario inválido');
    }
  }

  cancel() {
    this.router.navigate(['/users']); // Redirige a la lista de usuarios si cancela
  }

  isFormValid(): boolean {
    const nombreValid = this.user.nombre.length >= 2 && this.user.nombre.length <= 50;
    const emailValid = this.validateEmail(this.user.email);
    const passwordValid = this.user.password.length >= 8;
    const confirmPasswordValid = this.user.confirmPassword === this.user.password;

    return (
      !!this.user.nombre &&
      nombreValid &&
      !!this.user.email &&
      emailValid &&
      !!this.user.password &&
      passwordValid &&
      !!this.user.confirmPassword &&
      confirmPasswordValid
    );
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}
