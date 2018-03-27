import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  // templateUrl: './home.component.html',
  template: `
    <div class="home">
      <p>这里是主页组件</p>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
