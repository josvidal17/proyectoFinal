import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCiclosComponent } from './detalle-ciclos.component';

describe('DetalleCiclosComponent', () => {
  let component: DetalleCiclosComponent;
  let fixture: ComponentFixture<DetalleCiclosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCiclosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCiclosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
