import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFormSignInComponent } from './box-form-sign-in.component';

describe('BoxFormSignInComponent', () => {
  let component: BoxFormSignInComponent;
  let fixture: ComponentFixture<BoxFormSignInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxFormSignInComponent]
    });
    fixture = TestBed.createComponent(BoxFormSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
