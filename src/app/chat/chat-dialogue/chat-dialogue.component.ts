import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';


@Component({
	selector: 'chat-dialogue',
	templateUrl: './chat-dialogue.component.html',
	styleUrls: ['./chat-dialogue.component.css']
})


export class ChatDialogComponent implements OnInit {

@Output() toggleChat: EventEmitter<boolean> = new EventEmitter<boolean>();

	messages: Observable<Message[]>;
	formValue: string;
	messager = '';

	constructor(public chat: ChatService) { }

	ngOnInit() {
		// appends to array after each new message is added to feedSource
		this.messages = this.chat.conversation.asObservable()
			.scan((acc, val) => acc.concat(val));
	}

	sendMessage() {
		this.chat.converse(this.formValue);
		this.formValue = '';
	}

	toggle() {
		this.toggleChat.emit();
	}
}

