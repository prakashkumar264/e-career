import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-skill-suggestion',
  templateUrl: './user-skill-suggestion.component.html',
  styleUrls: ['./user-skill-suggestion.component.css']
})
export class UserSkillSuggestionComponent implements OnInit {

  private uid = 0;
  private user: any;
  private skills = [];
  constructor(private af: AngularFireAuth, private db: AngularFireDatabase, private ar: ActivatedRoute, private router: Router) {
    this.uid = ar.snapshot.params['uid'];


  }

  ngOnInit() {

    this.af.authState.subscribe(user => {
      if (user) {
        this.db.list('User', {
          query: {
            orderByChild: 'uid',
            equalTo: this.uid
          }
        }).subscribe(res => {
          if (res) {
            this.user = res[0];

            this.skills = this.user.skills;
            if (this.skills) {
              this.skills.forEach(x => {
                console.log(x)
                let level = "Beginner";
                if (x.user >= 0 && x.user < 2) level = "Beginner";
                if (x.user >= 2 && x.user < 4) level = "Intermediate";
                if (x.user >= 4 && x.user <= 5) level = "Advance";
                this.db.list('Courses/' + x.name + '/' + level + '/', {
                  query: {
                    limitToFirst: 4
                  }
                }).subscribe(y => {
                  console.log(y);
                  x.courses = y;
                })
              })
            }
          }
        })
      }
    })
  }
}  
