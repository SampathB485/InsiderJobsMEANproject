import { Component , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() openLoginEvent = new EventEmitter<void>();

  openLogin() {
    this.openLoginEvent.emit();
    console.log("this is openlogin ")
  }

}
