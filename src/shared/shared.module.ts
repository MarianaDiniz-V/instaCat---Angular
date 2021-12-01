import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './pages/feed/feed.component';
import { SearchComponent } from './gallery/search/search.component';
import { LogComponent } from './pages/log/log.component';
import { LoginComponent } from './login/login/login.component';
import { CardComponent } from './card/card/card.component';
import { FeaturesModule } from 'src/features/features.module';
import { HeaderModule } from 'src/features/header/header.module';
import { BlackDirective } from './directives/dark/black.directive';
import { WhiteDirective } from './directives/light/white.directive';


@NgModule({
  declarations: [
    FeedComponent,
    SearchComponent,
    LoginComponent,
    LogComponent,
    CardComponent,
    BlackDirective,
    WhiteDirective
  ],
  imports: [
    CommonModule,
    FeaturesModule,
    HeaderModule
  ],
  exports: [
    FeedComponent,
    SearchComponent,
    LoginComponent,
    LogComponent,
    CardComponent
  ]
})
export class SharedModule { }
