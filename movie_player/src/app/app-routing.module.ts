import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayListComponent } from './component/play-list/play-list.component';
import { AddvideoComponent } from './component/addvideo/addvideo.component';
import { SeperatevideoComponent } from './component/seperatevideo/seperatevideo.component';

const routes: Routes = [
  {
    path: '',
    component: PlayListComponent,
  },
  {
    path: 'addvideo',
    component: AddvideoComponent,
  },
  {
    path: 'seperate/:id',
    component: SeperatevideoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
