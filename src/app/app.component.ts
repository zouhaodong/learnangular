import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="['/home']">主页面</a>
    <a [routerLink]="['/product',1]">商品详情</a>
    <input type="button" value="商品详情" (click)="toProductDetails()">
    <!--<a [routerLink]="[{outlets:{primary:'home',aux:'chat'}}]">开始聊天</a>-->
    <a [routerLink]="[{outlets:{aux:'chat'}}]">开始聊天</a>
    <a [routerLink]="[{outlets:{aux:null}}]">结束聊天</a>
    <router-outlet></router-outlet>
    <router-outlet name="aux"></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  toProductDetails() { this.router.navigate(['/product', 2]); }
}
