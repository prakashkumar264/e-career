import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs'
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth'
import { Router } from '@angular/router'
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-coy-post-job',
  templateUrl: './coy-post-job.component.html',
  styleUrls: ['./coy-post-job.component.css']
})
export class CoyPostJobComponent implements OnInit {

  private requestAutocompleteItems;
  private subject = new Subject();
  constructor(private db: AngularFireDatabase, private au: AngularFireAuth, private router: Router) {

    this.au.authState.subscribe(res => {
      if (res) {
        this.requestAutocompleteItems = db.list('/skills',
          {
            query: {
              orderByChild: 'name',
              startAt: this.subject,
              limitToFirst: 5
            }
          }
        )
      }
    })

  }

  addpost(value) {
    value.status = "false"
    value.cid = this.au.auth.currentUser.uid
    this.db.list('/jobpostings').push(value).then(res => {
      this.router.navigate(['/dashboard/coy-profile'])
    })
  }

  ngOnInit() {
  }

  call(value) {
    this.subject.next(value);
  }
}
