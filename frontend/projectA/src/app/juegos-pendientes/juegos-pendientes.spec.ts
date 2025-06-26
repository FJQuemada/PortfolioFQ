import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosPendientes } from './juegos-pendientes';

describe('JuegosPendientes', () => {
  let component: JuegosPendientes;
  let fixture: ComponentFixture<JuegosPendientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegosPendientes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosPendientes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
