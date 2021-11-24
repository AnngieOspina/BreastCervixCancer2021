import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {
  public email:string="";
  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit() {
  }

  sendLinkReset(){

    if(this.email != ""){

      this.authService.resetPassword(this.email).then(() => {
        this.router.navigate(['/login']);
        alert('Se envio el correo de recuperación con éxito')
      }).catch(() => {
        alert('Correo no se encuentra registrado')
        console.log('error');
      })
    } else {
      alert('Error');
    }

    this.authService
  }

}
