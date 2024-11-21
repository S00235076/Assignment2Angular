import { Routes } from '@angular/router';
import { GradeHistoryComponent } from './grade-history/grade-history.component';
import { HomeComponent } from './home/home.component';
import { TestFormComponent } from './test-form/test-form.component';
import { GradeHistoryDetailsComponent } from './grade-history-details/grade-history-details.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', redirectTo: '/form'},
    {path: 'grade-history', component: GradeHistoryComponent},
    {path: 'form', component: TestFormComponent},
    {path: 'grade-history/:id', component: GradeHistoryDetailsComponent}
    ];

