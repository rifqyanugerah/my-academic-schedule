import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-mahasiswa-detail',
  templateUrl: './manage-mahasiswa-detail.component.html',
  styleUrls: ['./manage-mahasiswa-detail.component.scss']
})
export class ManageMahasiswaDetailComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ManageMahasiswaDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  saveData() {
    this.dialogRef.close(this.data);
  }
}
