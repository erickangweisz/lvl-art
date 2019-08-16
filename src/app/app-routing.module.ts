import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './_components'
import { AuthGuard } from './_guards'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
