import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUnComponent } from './menu-un.component';

describe('MenuUnComponent', () => {
  let component: MenuUnComponent;
  let fixture: ComponentFixture<MenuUnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuUnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
