import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDeuxComponent } from './menu-deux.component';

describe('MenuDeuxComponent', () => {
  let component: MenuDeuxComponent;
  let fixture: ComponentFixture<MenuDeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
