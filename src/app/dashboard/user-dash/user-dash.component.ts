import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth'

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {

  private skills;
  private name;
  constructor(private db: AngularFireDatabase, private au: AngularFireAuth) {


  }

  ngOnInit() {


    this.au.authState.subscribe(res => {
      if (res) {
        this.db.list('/User', {
          query: {
            orderByChild: 'uid',
            equalTo: this.au.auth.currentUser.uid
          }
        }).subscribe(res => {
          this.name = res[0].name
          this.skills = res[0].skills
        })
      }
    })
    console.log(this.au.auth.currentUser.uid);
  }

}
