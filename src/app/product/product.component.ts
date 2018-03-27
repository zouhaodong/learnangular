import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product',
  // templateUrl: './product.component.html',
  template: `
    <div class="product">
      <p>这里是商品详情组件</p>
      <p>商品id是：{{productId}}</p>
      <p>商品id是：{{productName}}</p>
      <a [routerLink]="['./']">商品描述</a>
      <a [routerLink]="['./seller',9527]">销售员信息</a>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private productId: number;
  private productName: string;
  constructor(private routeInfo: ActivatedRoute) { }
  ngOnInit() {
    this.routeInfo.params.subscribe(
      (params: Params) => this.productId = params['id']
    );
    // this.productId = this.routeInfo.snapshot.params['id'];
    this.routeInfo.data.subscribe((data: {product: Product}) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    });
  }
}

export class Product {
  constructor(public id: number, public name: string) {}
}
