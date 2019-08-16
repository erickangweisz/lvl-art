import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent, 
         GalleriesComponent, 
         DuelsComponent, 
         RankingsComponent } from './_components'
         
import { AuthGuard } from './_guards'

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
  {
    path: 'rankings',
    component: RankingsComponent
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
