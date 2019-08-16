import { Component, OnInit } from '@angular/core'
import { AuthenticationService } from 'src/app/_services'
import { NavbarService } from 'src/app/_services'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  providers: [ NavbarService, AuthenticationService ]
})
export class NavbarComponent implements OnInit {
  title: string
  currentUser: JSON

  constructor(
    private _authService: AuthenticationService, 
    private _navbarService: NavbarService
  ) {
    this.title = 'LVL-ART'
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
  }

  ngOnInit() {
    this.initNavbarVisibility()
  }

  initNavbarVisibility() {
    if (this.currentUser) 
      this._navbarService.show()
  }

  logout() {
    this._navbarService.hide()
    this._authService.logout()
  }
}
