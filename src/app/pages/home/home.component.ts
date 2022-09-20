import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  times = [
    {
      image: '../../../assets/images/icon-01-64x64.webp',
      name: 'SECURE DATA',
      text: 'Transfer all information with the help of SSL - a solution allowing you to save any data from the public eye.',
    },
    {
      image: '../../../assets/images/icon-02-64x64.webp',
      name: 'NETWORK WORKFLOW',
      text: 'Network Workflow feature will let you build, organize, and develop a sustainable network in seconds.',
    },
    {
      image: '../../../assets/images/icon-03-64x64.webp',
      name: 'TOP RATING PRODUCT',
      text: 'Our app has won numerous awards from leading high-tech mass media and received worldwide recognition.',
    },
  ];
}
