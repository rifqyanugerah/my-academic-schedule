import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-matakuliah-detail',
  templateUrl: './manage-matakuliah-detail.component.html',
  styleUrls: ['./manage-matakuliah-detail.component.scss']
})
export class ManageMatakuliahDetailComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ManageMatakuliahDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  saveData() {
    this.dialogRef.close(this.data);
  }
}
