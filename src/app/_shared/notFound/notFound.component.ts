import { Component, OnInit } from '@angular/core';

@Component({
	templateUrl: './notFound.component.html',
	styleUrls: ['./notFound.component.scss']
})

export class NotFoundComponent implements OnInit {

	public msg: string = '404 not found~~~'

	constructor() {

	}

	ngOnInit() {

	}

}