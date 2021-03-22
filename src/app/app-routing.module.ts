import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerProductComponent } from './customer-product/customer-product.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'customer', component: CustomerProductComponent},
  { path: 'products', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
