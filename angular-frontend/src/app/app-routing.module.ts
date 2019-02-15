import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {AuthGuard} from '../auth/auth.guard';
import {LoginComponent} from '../auth/login/login.component';

const loginOnlyRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/images'},

    {
        path: 'images',
        pathMatch: 'full',
        loadChildren: 'src/app-images/images.module#ImagesModule'
    }
];

const routes: Routes = [

    {
        path: '',
        children: loginOnlyRoutes,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
    },

    {path: 'login', component: LoginComponent},

    {path: '*', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: false})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
