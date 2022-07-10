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
  isAuthenticated: boolean;
  user:any={}


  constructor(@Inject(DOCUMENT) public document: Document,
  public auth: AuthService,private router:Router) { 
      this.isAuthenticated = false;
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((success: boolean) => {
      this.isAuthenticated = success;
    });
    this.auth.user$.subscribe((success: any) => {
      this.user = success;
      console.log(success)
    });
  }
  signIn(){
    
    this.router.navigate(['/tienda']);}
}
