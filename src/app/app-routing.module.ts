import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FeedComponent } from 'src/shared/pages/feed/feed.component';
import { LogComponent } from 'src/shared/pages/log/log.component';

const routes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: '', component: LogComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
