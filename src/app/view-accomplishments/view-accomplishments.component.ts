import { Component, OnInit, Input } from '@angular/core';
import { Accomplishment } from '../model/accomplishment';
import { AccomplishmentService } from '../accomplishment.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-view-accomplishments',
  templateUrl: './view-accomplishments.component.html',
  styleUrls: ['./view-accomplishments.component.css']
})
export class ViewAccomplishmentsComponent implements OnInit {
  accomplishments: Accomplishment[] = [];
  toPush: Accomplishment;
  constructor(private accomplishmentService: AccomplishmentService) { }

  ngOnInit() {
    // getting the data from service
    // this.accomplishments = this.accomplishmentService.accomplishments;
    let counter = 1;
    this.accomplishmentService.getAccomplishments()
    .subscribe(
      (response: any) => {
        // this.accomplishments = response.json();
        const entries = Object.entries(response);
        // keys.forEach(a => console.log(a))
        // console.log(entries);
        //const Accomplishment toPush;
        entries.forEach(e => {
          console.log(e[1]);
          this.toPush = e[1];
          this.toPush.id = counter++;
          console.log(this.toPush);
          this.accomplishments.push(this.toPush);
        });
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

}
