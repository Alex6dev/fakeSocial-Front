import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarNexInTwitterComponent } from './side-bar-nex-in-twitter.component';

describe('SideBarNexInTwitterComponent', () => {
  let component: SideBarNexInTwitterComponent;
  let fixture: ComponentFixture<SideBarNexInTwitterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarNexInTwitterComponent]
    });
    fixture = TestBed.createComponent(SideBarNexInTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
