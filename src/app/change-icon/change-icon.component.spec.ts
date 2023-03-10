import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeIconComponent } from './change-icon.component';

describe('ChangeIconComponent', () => {
  let component: ChangeIconComponent;
  let fixture: ComponentFixture<ChangeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
