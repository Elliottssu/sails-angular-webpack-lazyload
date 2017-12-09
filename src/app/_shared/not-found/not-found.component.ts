import { Component, OnInit } from '@angular/core';

@Component({
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.scss']
})

export class NotFoundComponent implements OnInit {

	public msg: string = '404 not found~~~'

	constructor() {

	}

	ngOnInit() {

	}

}