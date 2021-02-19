import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassComponent } from './class/class.component';
import { ImportLendetComponent } from './import-lendet/import-lendet.component';
import { MenaxhoLendetComponent } from './menaxho-lendet/menaxho-lendet.component';
import { MenuComponent } from './menu/menu.component';
import { OrariProvimeveComponent } from './orari-provimeve/orari-provimeve.component';


const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'class', component: ClassComponent },
  { path: 'provimePedagog', component: MenaxhoLendetComponent},
  { path: 'orariProvimeveStudent', component: OrariProvimeveComponent},
  { path: 'createImportLendet', component: ImportLendetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
