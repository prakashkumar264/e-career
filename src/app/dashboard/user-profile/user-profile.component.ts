import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth'
import { RatingModule, Rating } from 'ngx-rating';
import { MaterialModule, MdProgressBar } from '@angular/material';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';

// import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private titles = ['Beginner', 'Beginner', 'Intermediate', 'Intermediate', 'Advance'];
  private skills = []
  private user;
  private isUser = true;
  private isCompany = false;
  private key;
  private requestAutocompleteItems: any;
  private subject = new Subject<any[]>();
  private nskills = [];
  private uid = 0;

  constructor(private db: AngularFireDatabase, private au: AngularFireAuth, private router: Router, private ar: ActivatedRoute) {
    this.uid = ar.snapshot.params['uid'];
    this.requestAutocompleteItems =
      this.db.list('skills', {
        query: {
          orderByChild: 'name',
          startAt: this.subject,
          limitToFirst: 5
        }
      });
  }

  ngOnInit() {
    if (!this.uid) {
      this.au.authState.subscribe(user => {
        if (user) {
          this.db.list('User', {
            query: {
              orderByChild: 'uid',
              equalTo: this.au.auth.currentUser.uid
            }
          }).subscribe(res => {
            this.key = res[0].$key;
            this.user = res[0];
            if (res) {
              console.log(res[0]);
              this.skills = res[0].skills;
              this.nskills = res[0].skills;
              this.skills.forEach(x => {
                if (!x.user || x.user == undefined) x.user = 0;
                if (!x.coy || x.coy == undefined) x.coy = 0;
                if (!x.average || x.average == undefined) x.average = 0;

                x.user = (x.user / 5) * 100;
                x.coy = (x.coy / 5) * 100;
                x.average = (x.average / 5) * 100;
              })
            }
          })
        }
      })
    }
    else {
      this.db.list('User', {
        query: {
          orderByChild: 'uid',
          equalTo: this.uid
        }
      }).subscribe(res => {
        this.key = res[0].$key;
        this.user = res[0];
        if (res) {
          console.log(res[0]);
          this.skills = res[0].skills;
          this.nskills = res[0].skills;
          this.skills.forEach(x => {
            if (!x.user || x.user == undefined) x.user = 0;
            if (!x.coy || x.coy == undefined) x.coy = 0;
            if (!x.average || x.average == undefined) x.average = 0;

            x.user = (x.user / 5) * 100;
            x.coy = (x.coy / 5) * 100;
            x.average = (x.average / 5) * 100;
          })
        }
      })
    }



  }

  onAdd(event) {
    this.db.object('User/' + this.key + '/skills').set(this.nskills);
  }



  rate(event, user) {
    console.log(event.target.textContent, user, this.skills);
    this.skills.forEach(x => {
      x.average = (x.user + x.coy) / 2;
    })

    let m_skills = this.skills;
    m_skills.forEach(x => {
      x.user = x.user * 5 / 100;
      x.coy = x.coy * 5 / 100;
      x.average = x.average * 5 / 100;
    })

    this.db.object('User/' + this.key + '/skills').update(m_skills);
  }

  call(inp) {
    console.log(inp);

    this.subject.next(inp);
  }

}
