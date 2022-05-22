import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeedComponent } from './feed/feed.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { HeaderLeftComponent } from './nav/header-left/header-left.component';
import { HeaderRightComponent } from './nav/header-right/header-right.component';
import { MaterialModule } from '@linkdin-clone/material';
import { CoreDataModule } from '@linkdin-clone/core-data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderOptionComponent } from './nav/header-right/header-option/header-option.component';
import { AvatarComponent } from './nav/header-right/avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    FeedComponent,
    WidgetsComponent,
    HeaderLeftComponent,
    HeaderRightComponent,
    HeaderOptionComponent,
    AvatarComponent,
  ],
  imports: [
    BrowserModule,
    CoreDataModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
