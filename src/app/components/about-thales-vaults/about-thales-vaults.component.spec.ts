import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutThalesVaultsComponent } from './about-thales-vaults.component';

describe('AboutThalesVaultsComponent', () => {
  let component: AboutThalesVaultsComponent;
  let fixture: ComponentFixture<AboutThalesVaultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutThalesVaultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutThalesVaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
