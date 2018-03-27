import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  // templateUrl: './chat.component.html',
  template: `
    <textarea placeholder="请输入聊天内容" class="chat"></textarea>
  `,
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
