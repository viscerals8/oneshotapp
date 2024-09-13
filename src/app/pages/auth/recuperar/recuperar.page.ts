import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private router: Router) { }

  ngOnInit() { }

  submit() {
    if (this.form.valid) {
      console.log('Datos enviados:', this.form.value);

      this.router.navigate(['/auth']);
    } else {
      console.log('El formulario no es válido');
    }
  }
}


