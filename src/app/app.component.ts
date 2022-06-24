import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import {Router} from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend_nebular'
  userLoggedIn: boolean = false
  items = [{ title: 'Profile' }, { title: 'Log out' }];

  logOutUser() {
    this.userLoggedIn = false
  alert('logout needs to be implemented')
}

  logInUser() {
    this.userLoggedIn = true
    this.router.navigate(['/login'])
    alert('login needs to be implemented')
  }

  constructor(private nbMenuService: NbMenuService, private router: Router) { }

  ngOnInit() {
    this.nbMenuService.onItemClick()
    .pipe(
      filter(({ tag }) => tag === 'my-context-menu'),
      map(({ item: { title } }) => title),
    )
    .subscribe(title => {
      if (title === 'Profile') {
        this.router.navigate(['/user-info'])
      } else if (title === 'Log out') {
        this.logOutUser()
        this.router.navigate(['/'])
      }
    });
  }
}
