import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent, 
         GalleriesComponent, 
         DuelsComponent, 
         RankingsComponent,
         ChatsComponent, 
         ProfileComponent } from './_components'
         
import { AuthGuard } from './_guards'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'galleries', component: GalleriesComponent },
  { path: 'duels', component: DuelsComponent },
  { path: 'rankings', component: RankingsComponent },
  { path: 'chats', component: ChatsComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: 'home' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
