import { Component, OnInit } from '@angular/core';
import {NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  date: any;


  defaultTime = {hour: 13, minute: 30};
  meridianTime = {hour: 13, minute: 30};
  meridian = true;

  SecondsTime: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;

  customTime: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;

  toggleSeconds() {
    this.seconds = !this.seconds;
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  constructor() { }

  ngOnInit() {
  }

}
