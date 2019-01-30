import { Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    
    {
        path: 'login', component: SignInComponent,
        
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];