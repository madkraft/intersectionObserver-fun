import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StickyDirective } from './sticky.directive';
import { BannerComponent } from './banner/banner.component';
import { SectionComponent } from './section/section.component';


@NgModule({
  declarations: [
    AppComponent,
    StickyDirective,
    BannerComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
