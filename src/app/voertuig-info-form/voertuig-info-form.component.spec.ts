import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoertuigInfoFormComponent } from './voertuig-info-form.component';

describe('VoertuigInfoFormComponent', () => {
  let component: VoertuigInfoFormComponent;
  let fixture: ComponentFixture<VoertuigInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoertuigInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoertuigInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
