import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSkillSuggestionComponent } from './user-skill-suggestion.component';

describe('UserSkillSuggestionComponent', () => {
  let component: UserSkillSuggestionComponent;
  let fixture: ComponentFixture<UserSkillSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSkillSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSkillSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
