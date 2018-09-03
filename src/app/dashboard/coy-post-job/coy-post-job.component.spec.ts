import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoyPostJobComponent } from './coy-post-job.component';

describe('CoyPostJobComponent', () => {
  let component: CoyPostJobComponent;
  let fixture: ComponentFixture<CoyPostJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoyPostJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoyPostJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
