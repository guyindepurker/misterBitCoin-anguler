import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { StaticPageComponent } from './pages/static-page/static-page.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { ContactResolver } from './services/contact.resolver';

const routes: Routes = [
  { path: '', component: HomePageComponent ,canActivate:[AuthGuard]}, 
  { path: 'signup', component: SignupComponent }, 
  { path: 'contact', component: ContactPageComponent,canActivate:[AuthGuard] }, 
  { path: 'contact/:id', component: ContactDetailsComponent,canActivate:[AuthGuard],resolve:{contact:ContactResolver},runGuardsAndResolvers: "paramsChange" }, 
  { path: 'static', component: StaticPageComponent,canActivate:[AuthGuard] }, 
  { path: 'edit/:id', component: ContactEditComponent,canActivate:[AuthGuard],resolve:{contact:ContactResolver},runGuardsAndResolvers: "paramsChange" }, 
  { path: 'edit', component: ContactEditComponent ,canActivate:[AuthGuard]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
