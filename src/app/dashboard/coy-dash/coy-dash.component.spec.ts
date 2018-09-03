import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoyDashComponent } from './coy-dash.component';

describe('CoyDashComponent', () => {
  let component: CoyDashComponent;
  let fixture: ComponentFixture<CoyDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoyDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoyDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
