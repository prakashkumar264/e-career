import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoyProfileComponent } from './coy-profile.component';

describe('CoyProfileComponent', () => {
  let component: CoyProfileComponent;
  let fixture: ComponentFixture<CoyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
