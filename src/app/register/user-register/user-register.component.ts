import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
// import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  private edu;
  private isNE: boolean = false;
  private isSSC: boolean = false;
  private isHSC: boolean = false;
  private isG: boolean = false;
  private isPG: boolean = false;
  private skills: any[];
  private subject = new Subject<any>();
  private requestAutocompleteItems: any;
  constructor(private db: AngularFireDatabase, private af: AngularFireAuth, private router: Router) {
    this.requestAutocompleteItems =
      this.db.list('skills', {
        query: {
          orderByChild: 'name',
          startAt: this.subject,
          limitToFirst: 2
        }
      });

    this.requestAutocompleteItems.subscribe(res => {
      console.log(res);
    })
  }


  ngOnInit() {

  }

  public register(form) {
    this.af.auth.createUserWithEmailAndPassword(form.email, form.pass).then(res => {
      form.pass = null;
      form.uid = res.uid;
      this.db.list('User').push(form).then(x => {
        this.router.navigate(['/login/user']);
      })
    })
  }

  public onAdd(val) {
    //this.skills.push(val);
  }

  public onRemove(val) {

  }

  public edu_filter(val) {
    console.log(val);
    switch (val) {
      case 'ne':
        this.isNE = true;
        this.isSSC = false;
        this.isHSC = false;
        this.isG = false;
        this.isPG = false;
        break;
      case 'ssc':
        this.isNE = false;
        this.isSSC = true;
        this.isHSC = false;
        this.isG = false;
        this.isPG = false;
        break;
      case 'hsc':
        this.isNE = false;
        this.isSSC = true;
        this.isHSC = true;
        this.isG = false;
        this.isPG = false;
        break;
      case 'g':
        this.isNE = false;
        this.isSSC = true;
        this.isHSC = true;
        this.isG = true;
        this.isPG = false;
        break;
      case 'pg':
        this.isNE = false;
        this.isSSC = true;
        this.isHSC = true;
        this.isG = true;
        this.isPG = true;
        break;
    }
  }

  call(inp) {
    console.log(inp);
    this.subject.next(inp);
  }

}

