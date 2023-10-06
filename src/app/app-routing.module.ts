import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabirintoComponent } from 'src/labirinto/labirinto.component';

const routes: Routes = [
  {path:"labirinto",component:LabirintoComponent},
  {path:'',redirectTo:'labirinto',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
