import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
// import {PasswdModule} from './passwd/passwd.module';
import {HashLocationStrategy, Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

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
import { HomeAboutComponent } from './home-about/home-about.component';
import { PostSimComponent } from './post-sim/post-sim.component';
import { OAuthComponent } from './o-auth/o-auth.component';
import { MovieComponent } from './movie/movie.component';
import { MovieInfoComponent } from './movie/movie-info/movie-info.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieParsedComponent } from './movie/movie-parsed/movie-parsed.component';
import { AndroidComponent } from './android/android.component';
import { AmdocsComponent } from './amdocs/amdocs.component';
import { AboutComponent } from './about/about.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FalloutTrendAnalyzerComponent } from './amdocs/fallout-trend-analyzer/fallout-trend-analyzer.component';
import { SafeDBUpdateComponent } from './amdocs/safe-dbupdate/safe-dbupdate.component';
import { BpmFlowCreatorComponent } from './amdocs/bpm-flow-creator/bpm-flow-creator.component';
import { EmailServerLogsComponent } from './amdocs/email-server-logs/email-server-logs.component';
import { PerformanceLogAanalyzerComponent } from './amdocs/performance-log-aanalyzer/performance-log-aanalyzer.component';
import { AboutSimronComponent } from './about-simron/about-simron.component';
import { LogToHtmlComponent } from './amdocs/log-to-html/log-to-html.component';
import { StatusReportingComponent } from './amdocs/status-reporting/status-reporting.component';
import { ServerUpStatusComponent } from './amdocs/server-up-status/server-up-status.component';
// import {VmaModule} from './vma/vma.module';

@NgModule({
  declarations: [
    AppComponent,
    LuhnalgComponent,
    PasswdComponent, PasswdgenComponent, PasswddecryptComponent, PasswdSaveComponent, PasswdRetrieveComponent, PasswdAboutComponent,
    NotUsedFeatureComponent,
    GgdComponent, GgtComponent, GgsComponent,
    HomeAboutComponent,
    PostSimComponent,
    OAuthComponent,
    MovieComponent, MovieInfoComponent, MovieListComponent, MovieParsedComponent,
    AndroidComponent,
    AmdocsComponent,
    AboutComponent,
    FalloutTrendAnalyzerComponent, SafeDBUpdateComponent, BpmFlowCreatorComponent, EmailServerLogsComponent, PerformanceLogAanalyzerComponent, AboutSimronComponent,
    LogToHtmlComponent, StatusReportingComponent, ServerUpStatusComponent
  ],
  entryComponents: [ FalloutTrendAnalyzerComponent, SafeDBUpdateComponent, BpmFlowCreatorComponent, EmailServerLogsComponent, PerformanceLogAanalyzerComponent,
    LogToHtmlComponent, StatusReportingComponent, ServerUpStatusComponent ],
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
    ),
    NgbModule.forRoot()
  ],
  providers: [HttpService, // PasswdService,
    ShareDataService,
    Location,
    {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

