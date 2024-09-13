import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private router: Router) { }

  ngOnInit() { }

  submit() {
    if (this.form.invalid) {
      return;
    }


    const email = this.form.get('email')?.value;

    if (email === 'estigmademuerte@gmail.com') {

      this.router.navigate(['/admin']);
    } else if (email === 'javier@gmail.com') {

      this.router.navigate(['/home']);
    } else {

      console.log('Correo no reconocido');
    }
  }
}

