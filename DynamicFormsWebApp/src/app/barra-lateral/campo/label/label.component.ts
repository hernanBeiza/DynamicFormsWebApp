import { Component, Input, OnInit, Output } from '@angular/core';

import { Campo } from './../../models';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

	@Input() label:Campo;

  constructor() { }

  ngOnInit() { }

}
