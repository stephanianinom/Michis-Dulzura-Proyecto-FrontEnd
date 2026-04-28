import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  contacto = {
    nombre: '',
    email: '',
    mensaje: ''
  };
  
  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
      form.resetForm();
      
      setTimeout(() => {
        this.submitted = false;
      }, 5000);
    }
  }
}
