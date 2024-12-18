import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ExpertiseComponent } from './expertise/expertise.component';

const routes: Routes = [
  {path:'',component:HomeComponent,
    children:[
      {path:'contact',component:ContactComponent},
      {path:'expertise',component:ExpertiseComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
