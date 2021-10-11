import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService} from "../../services/auth.service"
import { Router } from '@angular/router';


@Component({
  selector: 'app-chat2',
  templateUrl: './chat2.page.html',
  styleUrls: ['./chat2.page.scss'],
})
export class Chat2Page implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  messages2: Observable<any[]>;
  newMsg = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.messages2 = this.authService.getChatMessages2();
  }
  sendMessage() {
    this.authService.addChatMessage2(this.newMsg).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }

}
