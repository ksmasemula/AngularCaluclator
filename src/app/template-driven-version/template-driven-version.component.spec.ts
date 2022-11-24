import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenVersionComponent } from './template-driven-version.component';

describe('TemplateDrivenVersionComponent', () => {
  let component: TemplateDrivenVersionComponent;
  let fixture: ComponentFixture<TemplateDrivenVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenVersionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
