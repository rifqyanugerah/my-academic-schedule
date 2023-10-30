import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ManageMahasiswaService } from '../manage-mahasiswa/manage-mahasiswa.service';

@Component({
  selector: 'app-manage-mahasiswa-detail',
  templateUrl: './manage-mahasiswa-detail.component.html',
  styleUrls: ['./manage-mahasiswa-detail.component.scss']
})
export class ManageMahasiswaDetailComponent implements OnInit {
  data: any;
  originalData: any;

  constructor(
    public dialogRef: MatDialogRef<ManageMahasiswaDetailComponent>,
    @Inject(MAT_DIALOG_DATA) private dataFromParent: any,
    private mahasiswaService: ManageMahasiswaService
  ) { }

  ngOnInit(): void {
    this.data = { ...this.dataFromParent };
    this.originalData = { ...this.data };
  }

  saveData() {
    if (this.data.id) {
      // Jika data memiliki ID, maka ini adalah pembaruan (PUT request)
      this.mahasiswaService.putMahasiswa(this.data.id, this.data).subscribe((response: any) => {
        console.log('Response from putMahasiswa:', response);
        this.dialogRef.close(this.data);
      });
    } else {
      // Jika data tidak memiliki ID, maka ini adalah penambahan baru (POST request)
      this.mahasiswaService.postMahasiswa(this.data).subscribe((response: any) => {
        console.log('Response from postMahasiswa:', response);
        this.dialogRef.close(this.data);
      });
    }
  }
}
