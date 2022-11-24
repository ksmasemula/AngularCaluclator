import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveVersionComponent } from './reactive-version.component';

describe('ReactiveVersionComponent', () => {
  let component: ReactiveVersionComponent;
  let fixture: ComponentFixture<ReactiveVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveVersionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
