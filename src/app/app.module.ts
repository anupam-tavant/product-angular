import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { ProductService } from './product/product.service';
import { ProductDetailComponent } from './product/product-detail.component';

import { MaterializeModule } from 'angular2-materialize';

import { Angular2TokenService } from 'angular2-token';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductComponent,
    ProductDetailComponent,
    ToolbarComponent,
    AuthDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot([
      {path: "products", component: ProductComponent},
      {path: "dashboards", component: DashboardComponent},
      {path: "", redirectTo: "dashboards", pathMatch: "full"},
      {path: 'products/:id', component: ProductDetailComponent}
    ])
  ],
  providers: [ProductService,Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
