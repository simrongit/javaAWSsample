import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
// import {PasswdModule} from './passwd/passwd.module';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';

import {AppComponent} from './app.component';
import {HttpService} from './services/http.comp';
import {PasswdComponent} from './passwd/passwd.component';
import {LuhnalgComponent} from './luhnalg/luhnalg.component';
import {NotUsedFeatureComponent} from './not-used-feature/not-used-feature.component';
import {PasswdgenComponent} from './passwd/passwdgen/passwdgen.component';
import {PasswddecryptComponent} from './passwd/passwddecrypt/passwddecrypt.component';
import {PasswdSaveComponent} from './passwd/passwd-save/passwd-save.component';
import {PasswdRetrieveComponent} from './passwd/passwd-retrieve/passwd-retrieve.component';
import {PasswdAboutComponent} from './passwd/passwd-about/passwd-about.component';
import {ClipboardModule} from 'ngx-clipboard';
// import {PasswdService} from './passwd/passwd.service';
import {ShareDataService} from './services/share-data-service';

// import {AppRoutingModule} from './app-routing.module';
import {Router} from '@angular/router';
import {appRoutes} from './approute';
import { GgdComponent } from './ggd/ggd.component';
import { GgtComponent } from './ggd/ggt/ggt.component';
import { GgsComponent } from './ggd/ggs/ggs.component';

// import {VmaModule} from './vma/vma.module';

@NgModule({
  declarations: [
    AppComponent,
    PasswdComponent,
    LuhnalgComponent,
    PasswdgenComponent,
    PasswddecryptComponent,
    PasswdSaveComponent,
    PasswdRetrieveComponent,
    PasswdAboutComponent,
    NotUsedFeatureComponent,
    GgdComponent,
    GgtComponent,
    GgsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
//    ReactiveFormsModule,
    ClipboardModule,
//    VmaModule,
    //    PasswdModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [HttpService, // PasswdService,
    ShareDataService,
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

