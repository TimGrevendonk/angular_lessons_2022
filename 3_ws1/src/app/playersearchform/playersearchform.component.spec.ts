import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersearchformComponent } from './playersearchform.component';

describe('PlayersearchformComponent', () => {
  let component: PlayersearchformComponent;
  let fixture: ComponentFixture<PlayersearchformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersearchformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersearchformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
