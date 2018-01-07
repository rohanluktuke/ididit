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
  constructor(private accomplishmentService: AccomplishmentService) { }

  ngOnInit() {
    // getting the data from service
    // this.accomplishments = this.accomplishmentService.accomplishments;
    this.accomplishmentService.getAccomplishments()
    .subscribe(
      (response: any) => {
        // this.accomplishments = response.json();
        const entries = Object.entries(response);
        // keys.forEach(a => console.log(a))
        // console.log(entries);
        entries.forEach(e => {
          console.log(e[1]);
          this.accomplishments.push(e[1]);
        });
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

}
