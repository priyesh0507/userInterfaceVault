import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallSectionComponent } from './call-section.component';

describe('CallSectionComponent', () => {
  let component: CallSectionComponent;
  let fixture: ComponentFixture<CallSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
