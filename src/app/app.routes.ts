import { Routes, mapToCanActivate } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { CartComponent } from './features/cart/cart.component';
import { ReviewComponent } from './feature/review/review.component';

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
        path: 'review', 
        component: ReviewComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },];
