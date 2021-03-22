import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { CustomerProductComponent } from './customer-product/customer-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductComponent,
    LoginComponent,
    CustomerProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
