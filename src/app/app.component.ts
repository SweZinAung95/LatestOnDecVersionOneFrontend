import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'realestate';
  constructor(
    private router: Router
  ) {}


  shouldShowHeader(): boolean {
    return this.router.url !== '/login' && this.router.url !== '/email-request' && this.router.url !== '/reset-password';
  }
}
