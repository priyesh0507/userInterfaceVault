import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForTokenComponent } from './request-for-token.component';

describe('RequestForTokenComponent', () => {
  let component: RequestForTokenComponent;
  let fixture: ComponentFixture<RequestForTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestForTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
