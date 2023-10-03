import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMahasiswaDetailComponent } from './manage-mahasiswa-detail.component';

describe('ManageMahasiswaDetailComponent', () => {
  let component: ManageMahasiswaDetailComponent;
  let fixture: ComponentFixture<ManageMahasiswaDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageMahasiswaDetailComponent]
    });
    fixture = TestBed.createComponent(ManageMahasiswaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
