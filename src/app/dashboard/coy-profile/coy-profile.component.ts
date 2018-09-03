import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'app-coy-profile',
  templateUrl: './coy-profile.component.html',
  styleUrls: ['./coy-profile.component.css']
})
export class CoyProfileComponent implements OnInit {

  private coy = {};
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.list('Company', {
      query: {
        orderByChild: 'uid',
        equalTo: "KT5ZwLyK8YZWwHrYQhvkmZtKSGN2"
      }
    }).subscribe(res => {
      console.log(res);
      this.coy = res[0];
    })
  }

}
