import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTurma } from './nova-turma';

describe('NovaTurma', () => {
  let component: NovaTurma;
  let fixture: ComponentFixture<NovaTurma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaTurma],
    }).compileComponents();

    fixture = TestBed.createComponent(NovaTurma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
