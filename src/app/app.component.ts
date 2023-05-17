import { Component } from '@angular/core';
import { LoginService } from './login/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public loginService: LoginService) {}
  title = 'FalaMansa';

  emailUser = localStorage.getItem('emailUser');

  //Essa implementação ta errada, mas é oq tem para hj
  deslogar() {
    this.loginService.deslogar();
    localStorage.removeItem('emailUser');
    window.location.reload();
  }
}
