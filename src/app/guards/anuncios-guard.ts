import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/services/login.service';

@Injectable()
export class AnunciosGuard implements CanActivateChild {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    console.log("teste");

    if (this.loginService.estaAutenticado()) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
