import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { MenComponent } from './men/men.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';
import { DetailCardComponent } from './detail-card/detail-card.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: 'men', // news/:id
        component: MenComponent
      },
      {
        path: 'women',
        component: WomenComponent
      },
      {
        path: 'lifecycle-hooks',
        component: LifecycleHooksComponent
      },
      {
        path: 'detail-card/:id',
        component: DetailCardComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
