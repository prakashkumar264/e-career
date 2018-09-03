import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoyRegisterComponent } from './coy-register.component';

describe('CoyRegisterComponent', () => {
  let component: CoyRegisterComponent;
  let fixture: ComponentFixture<CoyRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoyRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
