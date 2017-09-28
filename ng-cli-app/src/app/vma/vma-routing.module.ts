import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VmaAllocationComponent} from './vma-allocation/vma-allocation.component';
import {VmaAboutComponent} from './vma-about/vma-about.component';
import {VmaComponent} from './vma.component';
import {VmaLoginComponent} from './vma-login/vma-login.component';

const routes: Routes = [
  {
    path: '', component: VmaComponent, children: [
      {path: 'vmal', component: VmaLoginComponent},
      {path: 'vmaal', component: VmaAllocationComponent},
      {path: 'vmaab', component: VmaAboutComponent}]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VmaRoutingModule {}
