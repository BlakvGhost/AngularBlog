import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ShareComponent } from './share/share.component';
import { AuthGuard } from '../auth.guard';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';
import { SanitizePipe } from './sanitize.pipe';

const blogRoutes: Routes = [
  {path: "blog", component: HomeComponent, canActivate: [AuthGuard]},
  {path: "blog/:id/:title", component: DetailComponent, canActivate: [AuthGuard]},
  {path: "blog/publier", component: ShareComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    ShareComponent,
    SanitizePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthModule,
    RouterModule.forChild(blogRoutes)
  ],
})
export class BlogModule { }
