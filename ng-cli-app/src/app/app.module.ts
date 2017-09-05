import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
// import {PasswdModule} from './passwd/passwd.module';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';

import {AppComponent} from './app.component';
import {HttpService} from './services/http.comp';
import {PasswdComponent} from './passwd/passwd.component';
import {LuhnalgComponent} from './luhnalg/luhnalg.component';
import {PasswdgenComponent} from './passwd/passwdgen/passwdgen.component';
import {PasswddecryptComponent} from './passwd/passwddecrypt/passwddecrypt.component';
import {ClipboardModule} from 'ngx-clipboard';

// import {AppRoutingModule} from './app-routing.module';
import {Router} from '@angular/router';
import {appRoutes} from './approute';

@NgModule({
  declarations: [
    AppComponent,
    PasswdComponent,
    LuhnalgComponent,
    PasswdgenComponent,
    PasswddecryptComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ClipboardModule,
    //    PasswdModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [HttpService,
    Location,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

