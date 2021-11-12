import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './pages/feed/feed.component';
import { SearchComponent } from './gallery/search/search.component';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    FeedComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FeedComponent,
    SearchComponent
  ]
})
export class SharedModule { }
