import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PashaComponent } from './pasha.component';

describe('PashaComponent', () => {
  let component: PashaComponent;
  let fixture: ComponentFixture<PashaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PashaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PashaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
