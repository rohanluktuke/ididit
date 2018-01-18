import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AccomplishmentService } from '../accomplishment.service';
import { Accomplishment } from '../model/accomplishment';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-enter-accomplishments',
  templateUrl: './enter-accomplishments.component.html',
  styleUrls: ['./enter-accomplishments.component.css']
})
@Injectable()
export class EnterAccomplishmentsComponent implements OnInit {
  @ViewChild('aTypeInput') aTypeInputRef: ElementRef;
  @ViewChild('aWhatInput') aWhatInputRef: ElementRef;
  @ViewChild('aHowInput') aHowInputRef: ElementRef;
  @ViewChild('aElseInput') aElseInputRef: ElementRef;
  constructor(private accomplishmentService: AccomplishmentService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onAddAccomplishment() {
    console.log('accomplishment added');
    const typeinput = this.aTypeInputRef.nativeElement.value;
    const whatinput = this.aWhatInputRef.nativeElement.value;
    const howinput = this.aHowInputRef.nativeElement.value;
    const elseinput = this.aElseInputRef.nativeElement.value;
    console.log(typeinput);
    const uid = this.authService.getCurrentUserUUID();
    const accomplishment = new Accomplishment(
      typeinput,
      whatinput,
      howinput,
      elseinput,
      uid,
      '123',
      new Date(),
      new Date() );
    this.accomplishmentService.addAccomplishment(accomplishment)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );

  }
}
