import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManageMatakuliahDetailComponent } from '../manage-matakuliah-detail/manage-matakuliah-detail.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-manage-mata-kuliah',
  templateUrl: './manage-mata-kuliah.component.html',
  styleUrls: ['./manage-mata-kuliah.component.scss'],
})
export class ManageMataKuliahComponent implements OnInit {
  title!: string;
  matkuls: string[] = [];
  codematkuls: string[] = [];

  constructor(private dialog: MatDialog, public api:ApiService) {}

  ngOnInit(): void {
    this.title = 'Mata Kuliah';
    this.getMatkuls();
    this.getCodematkuls();
  }

  manageMatakuliahDetail(matkul: string, idx: number) {
    const dialogRef = this.dialog.open(ManageMatakuliahDetailComponent, {
      width: '400px',
      data: { title: matkul, author: this.codematkuls[idx] },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (idx === -1) {
          this.matkuls.push(result.title);
          this.codematkuls.push(result.author);
        } else {
          this.matkuls[idx] = result.title;
          this.codematkuls[idx] = result.author;
        }
      }
    });
  }

  getMatkuls() {
    this.matkuls = ['IMPLEMENTASI ALGORITMA', 'DASAR SISTEM KOMPUTER'];
  }

  getCodematkuls() {
    this.codematkuls = ['VII1A4', 'VII1B3'];
  }

  deleteMatakuliah(idx: number) {
    const conf = confirm('Hapus mata kuliah?');
    if (conf) {
      this.matkuls.splice(idx, 1);
      this.codematkuls.splice(idx, 1);
    }
  }
}
