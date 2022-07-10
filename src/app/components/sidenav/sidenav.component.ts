import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
 
  mobileQuery: MediaQueryList;
  user:any={}
  isAuthenticated: boolean;
  myCart$ = this.store.myCart$;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,@Inject(DOCUMENT) private document: Document, 
    media: MediaMatcher,public store:StoreService,private authService: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.isAuthenticated = false;
  }
  public ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((success: boolean) => {
      this.isAuthenticated = success;
    });
    this.authService.user$.subscribe((success: any) => {
      this.user = success;
      console.log(success)
    });
  }

  public signOut(): void {
    this.authService.logout({
      returnTo: this.document.location.origin,
    });
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
   
  }
  login(): void {
    // Call this to redirect the user to the login page
    console.log('me cagizo')
    this.authService.loginWithRedirect({
      returnTo: this.document.location.href='tiendafree'
    });
  }
}
