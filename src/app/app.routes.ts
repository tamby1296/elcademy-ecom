import { Routes, mapToCanActivate } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { CartComponent } from './features/cart/cart.component';

export const routes: Routes = [
    {
        path: '', 
        component: HomeComponent,
    },
    {
        path: 'cart', 
        component: CartComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },];
