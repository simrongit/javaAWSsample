import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { VmaRoutingModule } from './vma-routing.module';
import { VmaComponent } from './vma.component';
import { VmaAllocationComponent } from './vma-allocation/vma-allocation.component';
import { VmaAboutComponent } from './vma-about/vma-about.component';
import { VmaLoginComponent } from './vma-login/vma-login.component';
import { VmaAlocLockedbyouComponent } from './vma-allocation/vma-aloc-lockedbyou/vma-aloc-lockedbyou.component';
import { VmaAlocLockedComponent } from './vma-allocation/vma-aloc-locked/vma-aloc-locked.component';
import { VmaAlocAvailableComponent } from './vma-allocation/vma-aloc-available/vma-aloc-available.component';
import { VmaAlocAdminComponent } from './vma-allocation/vma-aloc-admin/vma-aloc-admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VmaRoutingModule
  ],
  declarations: [VmaComponent, VmaAllocationComponent, VmaAboutComponent, VmaLoginComponent, VmaAlocLockedbyouComponent, VmaAlocLockedComponent, VmaAlocAvailableComponent, VmaAlocAdminComponent]
})
export class VmaModule { }
