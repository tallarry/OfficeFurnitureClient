import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ProductComponent } from '../product/product.component';
import { Product } from '../_models/product';
import { AuthenticationService } from '../_services/authentication.service';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-customer-product',
  templateUrl: './customer-product.component.html',
  styleUrls: ['./customer-product.component.css']
})
export class CustomerProductComponent extends ProductComponent implements OnInit {

  constructor(_productService: ProductService, private authService:AuthenticationService) {
    super(_productService);
  }

  ngOnInit(): void {
    this.productService.getProducts("/customers/" + this.authService.userValue.id).pipe(takeUntil(this.destroy$)).subscribe({next: (data: Product[]) =>{
      console.log(data);
      this.products = data;
    }
    })
  }

}
