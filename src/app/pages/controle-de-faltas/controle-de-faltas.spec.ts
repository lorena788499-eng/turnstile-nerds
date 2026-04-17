import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleDeFaltas } from './controle-de-faltas';

describe('ControleDeFaltas', () => {
  let component: ControleDeFaltas;
  let fixture: ComponentFixture<ControleDeFaltas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleDeFaltas],
    }).compileComponents();

    fixture = TestBed.createComponent(ControleDeFaltas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
