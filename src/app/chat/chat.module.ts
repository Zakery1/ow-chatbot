import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialogue/chat-dialogue.component';

import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';


@NgModule({
	declarations: [ChatDialogComponent],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [ ChatDialogComponent ],
	providers: [ChatService]
})
export class ChatModule { }
