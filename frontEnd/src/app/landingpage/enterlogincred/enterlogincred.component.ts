import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-enterlogincred',
  templateUrl: './enterlogincred.component.html',
  styleUrls: ['./enterlogincred.component.css'],
})
export class EnterlogincredComponent {
  @Output() closeLogin = new EventEmitter<void>();

  close() {
    this.closeLogin.emit();
  }
}
