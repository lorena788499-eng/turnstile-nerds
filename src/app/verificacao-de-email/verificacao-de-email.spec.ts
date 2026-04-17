import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacaoDeEmail } from './verificacao-de-email';

describe('VerificacaoDeEmail', () => {
  let component: VerificacaoDeEmail;
  let fixture: ComponentFixture<VerificacaoDeEmail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificacaoDeEmail],
    }).compileComponents();

    fixture = TestBed.createComponent(VerificacaoDeEmail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
