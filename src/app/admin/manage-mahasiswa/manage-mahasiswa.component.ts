import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManageMahasiswaDetailComponent } from '../manage-mahasiswa-detail/manage-mahasiswa-detail.component';

@Component({
  selector: 'app-manage-mahasiswa',
  templateUrl: './manage-mahasiswa.component.html',
  styleUrls: ['./manage-mahasiswa.component.scss']
})
export class ManageMahasiswaComponent implements OnInit {
  title:string;
  mhss: string[] = [];
  nims: string[] = [];
  
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.title='Mahasiswa';
    this.getMhss();
    this.getNims();

  }

  manageMahasiswaDetail(mhs: string, idx: number) {
    const dialogRef = this.dialog.open(ManageMahasiswaDetailComponent, {
      width: '400px',
      data: { title: mhs, author: this.nims[idx] },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (idx === -1) {
          this.mhss.push(result.title);
          this.nims.push(result.author);
        } else {
          this.mhss[idx] = result.title;
          this.nims[idx] = result.author;
        }
      }
    });
  }

  getMhss()
  {
    this.mhss = ['Randal', 'Cantika'];
  }

  getNims()
  {
    this.nims = ['0987654321', '1234567890'];
  }

  deleteMahasiswa(idx: number) {
    const conf = confirm('Hapus mahasiswa?');
    if (conf) {
      this.mhss.splice(idx, 1);
      this.nims.splice(idx, 1);
    }
  }
}
