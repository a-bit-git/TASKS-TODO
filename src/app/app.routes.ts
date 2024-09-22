import { Routes } from '@angular/router';
import { AllTaskComponent } from './components/pages/all-tasks/all-tasks.component';
import { ImportantTaskComponent } from './components/pages/important-tasks/important-tasks.component';
import { CompletedTaskComponent } from './components/pages/completed-tasks/completed-tasks.component';

export const routes: Routes = [
    {
        path : "",
        component : AllTaskComponent
    },
    {
        path : "importants",
        component : ImportantTaskComponent
    },
    {
        path : "completed",
        component : CompletedTaskComponent
    }
];

// App route.ts
