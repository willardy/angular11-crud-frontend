import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Router } from "@angular/router";
import { Product } from "../product.model";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0.0
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

    createProduct(): void {
        if(this.product.name !== '' && this.product.price !== 0.0){
            this.productService.create(this.product).subscribe(
                () => {
                    this.productService.showMessage("Produto cadastrado com sucesso.")
                    this.router.navigate(['/products'])
                },
                () => {
                    this.productService.showMessage("Ocorreu algum problema, tente novamente mais tarde.", true)
                })
        }else{
            this.productService.showMessage("Preencha todos os campos", true)
        }
    }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
