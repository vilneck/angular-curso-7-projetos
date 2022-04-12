import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoDaVelhaScoreComponent } from './jogo-da-velha-score.component';

describe('JogoDaVelhaScoreComponent', () => {
  let component: JogoDaVelhaScoreComponent;
  let fixture: ComponentFixture<JogoDaVelhaScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoDaVelhaScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoDaVelhaScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
