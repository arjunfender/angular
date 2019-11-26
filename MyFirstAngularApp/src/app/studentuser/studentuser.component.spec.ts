import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentuserComponent } from './studentuser.component';

describe('StudentuserComponent', () => {
  let component: StudentuserComponent;
  let fixture: ComponentFixture<StudentuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
