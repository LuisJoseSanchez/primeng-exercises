import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AvatarGroupModule} from 'primeng/avatargroup';
import {AvatarModule} from 'primeng/avatar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';
import {DataViewModule} from 'primeng/dataview';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {MenuModule} from 'primeng/menu';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {TabMenuModule} from 'primeng/tabmenu';

import { Exercise01Component } from './exercise01/exercise01.component';
import { Exercise02Component } from './exercise02/exercise02.component';
import { Exercise03Component } from './exercise03/exercise03.component';
import { Exercise01gComponent } from './exercise01g/exercise01g.component';
import { Exercise02gComponent } from './exercise02g/exercise02g.component';
import { Exercise03gComponent } from './exercise03g/exercise03g.component';
import { Exercise04Component } from './exercise04/exercise04.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise01Component,
    Exercise02Component,
    Exercise03Component,
    Exercise01gComponent,
    Exercise02gComponent,
    Exercise03gComponent,
    Exercise04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AvatarGroupModule,
    AvatarModule,
    ButtonModule,
    CardModule,
    ChartModule,
    DataViewModule,
    FileUploadModule,
    HttpClientModule,
    MenuModule,
    PanelModule,
    TableModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
