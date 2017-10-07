import {RouterModule, Routes} from '@angular/router';
import {PasswdComponent} from './passwd/passwd.component';
import {LuhnalgComponent} from './luhnalg/luhnalg.component';
import {NotUsedFeatureComponent} from './not-used-feature/not-used-feature.component';
import {PasswdgenComponent} from './passwd/passwdgen/passwdgen.component';
import {PasswddecryptComponent} from './passwd/passwddecrypt/passwddecrypt.component';
import {PasswdSaveComponent} from './passwd/passwd-save/passwd-save.component';
import {PasswdRetrieveComponent} from './passwd/passwd-retrieve/passwd-retrieve.component';
import {PasswdAboutComponent} from './passwd/passwd-about/passwd-about.component';
import { GgdComponent } from './ggd/ggd.component';
import {GgtComponent} from './ggd/ggt/ggt.component';
import {GgsComponent} from './ggd/ggs/ggs.component';
import { HomeAboutComponent } from './home-about/home-about.component';

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
      {path: 'pAbout', component: PasswdAboutComponent}
    ]
  },
  {path: 'ggd', component: GgdComponent,
    children: [
      {path: 'ggt', component: GgtComponent},
      {path: 'ggs', component: GgsComponent},
    ]},
  {path: 'luhnapp', component: LuhnalgComponent},
  {path: 'vma', loadChildren: './vma/vma.module#VmaModule'}
];

