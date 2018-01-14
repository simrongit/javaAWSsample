import {RouterModule, Routes} from '@angular/router';
import {PasswdComponent} from './passwd/passwd.component';
import {LuhnalgComponent} from './luhnalg/luhnalg.component';
import {NotUsedFeatureComponent} from './not-used-feature/not-used-feature.component';
import {PasswdgenComponent} from './passwd/passwdgen/passwdgen.component';
import {PasswddecryptComponent} from './passwd/passwddecrypt/passwddecrypt.component';
import {PasswdSaveComponent} from './passwd/passwd-save/passwd-save.component';
import {PasswdRetrieveComponent} from './passwd/passwd-retrieve/passwd-retrieve.component';
import {PasswdAboutComponent} from './passwd/passwd-about/passwd-about.component';
import {GgdComponent} from './ggd/ggd.component';
import {GgtComponent} from './ggd/ggt/ggt.component';
import {GgsComponent} from './ggd/ggs/ggs.component';
import {HomeAboutComponent} from './home-about/home-about.component';
import {PostSimComponent} from './post-sim/post-sim.component';
import {OAuthComponent} from './o-auth/o-auth.component';

import { MovieComponent } from './movie/movie.component';
import { MovieInfoComponent } from './movie/movie-info/movie-info.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieParsedComponent } from './movie/movie-parsed/movie-parsed.component';

import { AndroidComponent } from './android/android.component';
import { AmdocsComponent } from './amdocs/amdocs.component';
import { AboutComponent } from './about/about.component';

import { AboutSimronComponent } from './about-simron/about-simron.component';

export const appRoutes: Routes = [
  {path: '', component: HomeAboutComponent},
  {path: 'nufapp', component: NotUsedFeatureComponent},
  {
    path: 'passapp', component: PasswdComponent,
    //    loadChildren: 'app/passwd/passwd.module#PasswdModule',
    children: [
      {path: 'pgen', component: PasswdgenComponent},
      {path: 'pdec', component: PasswddecryptComponent},
      {path: 'pSave', component: PasswdSaveComponent},
      {path: 'pRet', component: PasswdRetrieveComponent},
      {path: 'pAbout', component: PasswdAboutComponent},
      {path: '', redirectTo: 'pAbout', pathMatch: 'full'}
    ]
  },
  {
    path: 'ggd', component: GgdComponent,
    children: [
      {path: 'ggt', component: GgtComponent},
      {path: 'ggs', component: GgsComponent},
      {path: '', redirectTo: 'ggs', pathMatch: 'full'}
    ]
  },
  {path: 'luhnapp', component: LuhnalgComponent},
  {path: 'posttest', component: PostSimComponent},
  {path: 'vma', loadChildren: './vma/vma.module#VmaModule'},
  {path: 'oa', component: OAuthComponent},
  {path: 'oauth/gitcallback', component: OAuthComponent},
  {
    path: 'movie', component: MovieComponent,
    children: [
      {path: 'mi', component: MovieInfoComponent},
      {path: 'ml', component: MovieListComponent},
      {path: 'mp', component: MovieParsedComponent},
      {path: '', redirectTo: 'mi', pathMatch: 'full'}
    ]
  },
  {path: 'and', component: AndroidComponent},
  {path: 'amd', component: AmdocsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'asim', component: AboutSimronComponent}
];

