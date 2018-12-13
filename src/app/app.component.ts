import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	imagePath: string;

	constructor() {
		this.imagePath = '../assets/images/ow.png';
	}

	title = 'chatbot';
}
