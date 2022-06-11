import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterToTopComponent } from './footer-to-top.component';

describe('FooterToTopComponent', () => {
  let component: FooterToTopComponent;
  let fixture: ComponentFixture<FooterToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterToTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
