import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from 'src/app/_models/product';
import { throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/OfficeFurniture/rest/products"

  constructor( private http: HttpClient, private authService:AuthenticationService) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getProducts(additionalPath: string): Observable<Product[]>{
    if(additionalPath !== "") {
      const httpOpt = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + this.authService.userValue.authdata!,
        })
      }
      return this.http.get<Product[]>(this.baseUrl.concat(additionalPath), httpOpt).pipe(catchError(this.handleError));
    }
    return this.http.get<Product[]>(this.baseUrl).pipe(catchError(this.handleError));
  }
}
