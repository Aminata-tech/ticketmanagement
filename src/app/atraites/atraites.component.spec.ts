import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtraitesComponent } from './atraites.component';

describe('AtraitesComponent', () => {
  let component: AtraitesComponent;
  let fixture: ComponentFixture<AtraitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtraitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtraitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
