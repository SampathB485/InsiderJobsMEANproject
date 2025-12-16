import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard{
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const expectedRole = route.data['role'];
    const userRole = localStorage.getItem('role');

    if (userRole !== expectedRole) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
  
}
