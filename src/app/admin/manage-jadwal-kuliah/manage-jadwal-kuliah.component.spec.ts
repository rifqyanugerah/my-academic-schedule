import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageJadwalKuliahComponent } from './manage-jadwal-kuliah.component';

describe('ManageJadwalKuliahComponent', () => {
  let component: ManageJadwalKuliahComponent;
  let fixture: ComponentFixture<ManageJadwalKuliahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageJadwalKuliahComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageJadwalKuliahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
