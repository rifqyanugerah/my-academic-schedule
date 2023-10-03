import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMatakuliahDetailComponent } from './manage-matakuliah-detail.component';

describe('ManageMatakuliahDetailComponent', () => {
  let component: ManageMatakuliahDetailComponent;
  let fixture: ComponentFixture<ManageMatakuliahDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageMatakuliahDetailComponent]
    });
    fixture = TestBed.createComponent(ManageMatakuliahDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
