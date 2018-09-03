import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";

@Component({
  selector: 'app-coy-login',
  templateUrl: './coy-login.component.html',
  styleUrls: ['./coy-login.component.css']
})
export class CoyLoginComponent implements OnInit {

  constructor(private af: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  signIn(user, pass) {
    this.af.auth.signInWithEmailAndPassword(user, pass).then(res => {
      this.router.navigate(['/dashboard/coy-profile']);
    })
  }


}
