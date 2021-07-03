import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinRoomContainerComponent } from './join-room-container.component';

describe('LoginContainerComponent', () => {
  let component: JoinRoomContainerComponent;
  let fixture: ComponentFixture<JoinRoomContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinRoomContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinRoomContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
