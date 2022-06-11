import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSectionOneComponent } from './service-section-one.component';

describe('ServiceSectionOneComponent', () => {
  let component: ServiceSectionOneComponent;
  let fixture: ComponentFixture<ServiceSectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceSectionOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
