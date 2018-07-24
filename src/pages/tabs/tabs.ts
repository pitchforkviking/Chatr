import { Component } from '@angular/core';

import { ChatPage } from '../chat/chat';
import { PeoplePage } from '../people/people';
import { MePage } from '../me/me';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  chat = ChatPage;
  people = PeoplePage;
  me = MePage;

  constructor() {

  }
}
