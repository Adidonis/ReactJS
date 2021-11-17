import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { FruitInfoComponent } from './fruit-info/fruit-info.component';
import { LineChartsComponent } from './line-charts/line-charts.component';
import { LoginComponent } from './login/login.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const routes: Routes = [
  {path:'',component :LoginComponent},
  {path:'Table_Entries',component :FruitInfoComponent},
  {path:'ngxCharts',component :ChartsComponent},
  // // {path:'ngxCharts',component :ChartsComponent},
  // {path:'ngxCharts',component :LineChartsComponent},
  {path:'ngxCharts',component :PieChartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [FruitInfoComponent, ChartsComponent, LineChartsComponent, PieChartComponent]
