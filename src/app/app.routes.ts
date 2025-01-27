import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { LoginComponent } from './pages/login/login.component';
import { SupportComponent } from './pages/support/support.component';

export const AppRoutes: Routes = [
    {
        path:'',
        component:LayoutComponent,
        children:[
            {path:'',component:HomeComponent},
            {path:'search',component:SearchComponent},
            {path:'get-started',component:GetStartedComponent},
            {path:'support',component:SupportComponent}
        ]
    },
    {
        path:'login',
        component:LoginComponent
    }
];
