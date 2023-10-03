import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMataKuliahComponent } from './manage-mata-kuliah.component';

describe('ManageMataKuliahComponent', () => {
  let component: ManageMataKuliahComponent;
  let fixture: ComponentFixture<ManageMataKuliahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageMataKuliahComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMataKuliahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
