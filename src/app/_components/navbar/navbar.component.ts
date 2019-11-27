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
    private authService: AuthenticationService,
    private navbarService: NavbarService
  ) {
    this.title = 'LVL-ART'
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
  }

  ngOnInit() {
    this.initNavbarVisibility()
  }

  initNavbarVisibility() {
    if (this.currentUser) {
      this.navbarService.show()
    }
  }

  logout() {
    this.navbarService.hide()
    this.authService.logout()
  }

}
