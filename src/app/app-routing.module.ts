import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './_components'
import { AuthGuard } from './_guards'
import { GalleriesComponent } from './_components'
import { DuelsComponent } from './_components'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'galleries',
    component: GalleriesComponent
  },
  {
    path: 'duels',
    component: DuelsComponent
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
