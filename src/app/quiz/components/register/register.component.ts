import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public name: string = '';
  public showRegister: boolean = true;
  @Output() onRegister: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  onBegin(): void {
    localStorage.setItem('Id', this.name);
    this.showRegister = false;
    this.onRegister.emit(this.showRegister);
  }
}
