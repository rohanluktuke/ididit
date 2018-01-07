import { Component, OnInit, Input } from '@angular/core';
import { Accomplishment } from '../../model/accomplishment';
@Component({
  selector: 'app-view-one-accomplishment',
  templateUrl: './view-one-accomplishment.component.html',
  styleUrls: ['./view-one-accomplishment.component.css']
})
export class ViewOneAccomplishmentComponent implements OnInit {
  @Input() accomplishment: Accomplishment;
  constructor() { }

  ngOnInit() {
  }

}
