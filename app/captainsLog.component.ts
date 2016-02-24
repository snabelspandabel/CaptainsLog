import {Component} from 'angular2/core';
import {LogEntryComponent} from './logEntry.component'

@Component({
    selector: 'captains-log',
    template: 		
		`
		<div class="captns-log-container">
			<h1>Captains Log</h1>
			<p>{{greeting}}</p>
			
			This is the captains-log component. 
			<log-entry></log-entry>
		</div>		
		`
        , 
        directives: [LogEntryComponent]		
})
export class CaptainsLog { 	
		
	public greeting = 'Welcome to the captains log.'; 	
		
	ngOnInit() {
		console.log('init for captnslog'); 		
	}
	

}
