import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { Router } from "@angular/router";

@Component({
  selector: 'app-coy-register',
  templateUrl: './coy-register.component.html',
  styleUrls: ['./coy-register.component.css']
})
export class CoyRegisterComponent implements OnInit {

  constructor(private af: AngularFireAuth, private db: AngularFireDatabase, private router: Router) { }

  ngOnInit() {
  }

  register(form) {
    this.af.auth.createUserWithEmailAndPassword(form.email, form.pass).then(x => {
      form.pass = null;
      form.uid = x.uid;
      this.db.list('Company').push(form).then(x => {
        this.router.navigate(['../login/company'])
      });
    })
  }

}
