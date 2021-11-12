import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './pages/feed/feed.component';
import { SearchComponent } from './gallery/search/search.component';
import { LogComponent } from './pages/log/log.component';
import { LoginComponent } from './login/login/login.component';


@NgModule({
  declarations: [
    FeedComponent,
    SearchComponent,
    LoginComponent,
    LogComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FeedComponent,
    SearchComponent,
    LoginComponent,
    LogComponent
  ]
})
export class SharedModule { }
