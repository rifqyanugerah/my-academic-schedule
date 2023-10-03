import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDesign } from '../material-design/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageMahasiswaComponent } from './manage-mahasiswa/manage-mahasiswa.component';
import { ManageDosenComponent } from './manage-dosen/manage-dosen.component';
import { ManageRuanganComponent } from './manage-ruangan/manage-ruangan.component';
import { ManageJadwalKuliahComponent } from './manage-jadwal-kuliah/manage-jadwal-kuliah.component';
import { ManageMataKuliahComponent } from './manage-mata-kuliah/manage-mata-kuliah.component';
import { FormsModule } from '@angular/forms';
import { ManageMatakuliahDetailComponent } from './manage-matakuliah-detail/manage-matakuliah-detail.component';
import { ManageRuanganDetailComponent } from './manage-ruangan-detail/manage-ruangan-detail.component';
import { ManageMahasiswaDetailComponent } from './manage-mahasiswa-detail/manage-mahasiswa-detail.component';
import { ManageDosenDetailComponent } from './manage-dosen-detail/manage-dosen-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'manage-mahasiswa',
        component: ManageMahasiswaComponent
      },
      {
        path: 'manage-dosen',
        component: ManageDosenComponent
      },
      {
        path: 'manage-ruangan',
        component: ManageRuanganComponent
      },
      {
        path: 'manage-jadwal-kuliah',
        component: ManageJadwalKuliahComponent
      },
      {
        path: 'manage-mata-kuliah',
        component: ManageMataKuliahComponent
      },
      {
        path: '',
        redirectTo: '/admin/dashboard',
        pathMatch: 'full'
      }
    ]
  },
];


@NgModule({
  declarations: [AdminComponent, DashboardComponent, ManageMahasiswaComponent, ManageDosenComponent, ManageRuanganComponent, ManageJadwalKuliahComponent, ManageMataKuliahComponent, ManageMatakuliahDetailComponent, ManageRuanganDetailComponent, ManageMahasiswaDetailComponent, ManageDosenDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
})
export class AdminModule { }
