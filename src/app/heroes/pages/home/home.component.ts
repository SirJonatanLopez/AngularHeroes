import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  .container{
    margin: 10px;
  }
  `
  ]
})
export class HomeComponent implements OnInit {

  get auth() {
    return this.authService.auth;
  }

  constructor( private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    console.log(this.router.url)
    this.router.navigate(['auth']);
    localStorage.removeItem('token');

  }

}
