import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document,
  private auth: AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  signIn(){
    
    this.router.navigate(['/tienda']);}
}
