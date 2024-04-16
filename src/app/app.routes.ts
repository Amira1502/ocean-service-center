import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SignupComponent } from './pages/signup/signup.component';
import { WhoWeAreComponent } from './pages/partials/who-we-are/who-we-are.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'how-it-works', component: WhoWeAreComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'signup', component: SignupComponent },
   
];
