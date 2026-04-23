import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NovaTurma } from './nova-turma';

describe('NovaTurma', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [NovaTurma]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NovaTurma);
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });
});