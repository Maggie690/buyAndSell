import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectPageComponent } from './contect-page.component';

describe('ContectPageComponent', () => {
  let component: ContectPageComponent;
  let fixture: ComponentFixture<ContectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContectPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
