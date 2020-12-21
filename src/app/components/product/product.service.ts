import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Product } from "./product.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseApiUrl:string = 'http://localhost:3000/products'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false) {
    this.snackBar.open(msg,'Fechar',{
      duration: 3000,
      verticalPosition: "top",
      horizontalPosition: "center",
      panelClass: isError ? ['msg-error'] : ['msg-sucess'],

    })
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseApiUrl, product)
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApiUrl)
  }

}
