import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'chatbot';
	imagePath: string;

	toggleChat = false;

	constructor() {
		this.imagePath = '../assets/images/ow.png';
	}

	toggleChatBox() {
		this.toggleChat = !this.toggleChat;
	}
}
