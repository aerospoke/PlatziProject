import { Routes } from '@angular/router';

import { LabsComponent } from './pages/labs/labs.component';
import { HomeComponent } from './pages/home/home.component';
import { Prueba123Component } from './pages/prueba123/prueba123.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'labs',
        component: LabsComponent
    },
    {
        path:'prueba123',
        component: Prueba123Component
    }
];
