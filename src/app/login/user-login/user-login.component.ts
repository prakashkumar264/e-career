import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private af: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  signIn(user, pass) {
    this.af.auth.signInWithEmailAndPassword(user, pass).then(res => {
      this.router.navigate(['/dashboard/user-profile']);
    })
  }

}
