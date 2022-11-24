import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveVersionComponent } from './reactive-version/reactive-version.component';
import { TemplateDrivenVersionComponent } from './template-driven-version/template-driven-version.component';

const routes: Routes = [
  { path: 'reactive', component: ReactiveVersionComponent },
  { path: 'template-driven', component: TemplateDrivenVersionComponent },
  { path: '**', redirectTo: 'reactive' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
