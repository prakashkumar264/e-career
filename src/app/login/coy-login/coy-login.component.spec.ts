import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoyLoginComponent } from './coy-login.component';

describe('CoyLoginComponent', () => {
  let component: CoyLoginComponent;
  let fixture: ComponentFixture<CoyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoyLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
