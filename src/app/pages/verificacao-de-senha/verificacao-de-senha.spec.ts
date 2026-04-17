import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacaoDeSenha } from './verificacao-de-senha';

describe('VerificacaoDeSenha', () => {
  let component: VerificacaoDeSenha;
  let fixture: ComponentFixture<VerificacaoDeSenha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificacaoDeSenha],
    }).compileComponents();

    fixture = TestBed.createComponent(VerificacaoDeSenha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
