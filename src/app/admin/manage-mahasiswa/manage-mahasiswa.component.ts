import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManageMahasiswaDetailComponent } from '../manage-mahasiswa-detail/manage-mahasiswa-detail.component';
import { ManageMahasiswaService } from './manage-mahasiswa.service';

@Component({
  selector: 'app-manage-mahasiswa',
  templateUrl: './manage-mahasiswa.component.html',
  styleUrls: ['./manage-mahasiswa.component.scss']
})
export class ManageMahasiswaComponent implements OnInit {
  dataMahasiswa: any;
  title = 'Data Mahasiswa';

  constructor(private dialog: MatDialog, private managemahasiswaService: ManageMahasiswaService) {}

  manageMahasiswaDetail(data: any, idx: number) {
    const dialogRef = this.dialog.open(ManageMahasiswaDetailComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        if (idx === -1) {
          this.dataMahasiswa.push(res);
        } else {
          this.dataMahasiswa[idx] = res;
        }
      }
    });
  }

  ngOnInit(): void {
    this.getMahasiswa();
  }

  getMahasiswa() {
    this.managemahasiswaService.getMahasiswa().subscribe((res: any) => {
      this.dataMahasiswa = res;
    });
  }

  deleteMahasiswa(idx: number) {
    const conf = confirm('Hapus data mahasiswa?');
    if (conf) {
      this.managemahasiswaService.deleteMahasiswa(this.dataMahasiswa[idx].id).subscribe((response: any) => {
        console.log('Response from deleteMahasiswa:', response);
        this.dataMahasiswa.splice(idx, 1);
      });
    }
  }
}
