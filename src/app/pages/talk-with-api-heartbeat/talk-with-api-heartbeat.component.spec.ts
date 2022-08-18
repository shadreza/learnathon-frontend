import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkWithApiHeartbeatComponent } from './talk-with-api-heartbeat.component';

describe('TalkWithApiHeartbeatComponent', () => {
  let component: TalkWithApiHeartbeatComponent;
  let fixture: ComponentFixture<TalkWithApiHeartbeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalkWithApiHeartbeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkWithApiHeartbeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
