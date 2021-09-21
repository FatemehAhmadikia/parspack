import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { RestClientService } from './@core/services/rest-client.service';
import { SharedModule } from './@shared/shared.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LeafletModule
  ],
  providers: [RestClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
