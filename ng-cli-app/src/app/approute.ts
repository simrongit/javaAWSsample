import {RouterModule, Routes} from '@angular/router';
import {PasswdComponent} from './passwd/passwd.component';
import {LuhnalgComponent} from './luhnalg/luhnalg.component';
import {PasswdgenComponent} from './passwd/passwdgen/passwdgen.component';
import {PasswddecryptComponent} from './passwd/passwddecrypt/passwddecrypt.component';

export const appRoutes: Routes = [
  {
    path: 'passapp', component: PasswdComponent,
    //    loadChildren: 'app/passwd/passwd.module#PasswdModule',
    children: [
      {path: 'pgen', component: PasswdgenComponent},
      {path: 'pdec', component: PasswddecryptComponent}
    ]
  },
  {path: 'luhnapp', component: LuhnalgComponent}
];

