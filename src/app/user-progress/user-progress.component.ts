import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-progress',
  templateUrl: './user-progress.component.html',
  styleUrls: ['./user-progress.component.css']
})
export class UserProgressComponent implements OnInit {
  processingStep: ' ';
  constructor() { }
  isActive: Number = 0;
  progressbar: any = {
    text: '50%',
    percent: '90%'
  };
  steps: Array<any> = [
    {
      id: 1,
      logo: '../../assets/images/pgrs-icon1.png',
      name: 'Data Acquistion',
      isCompleted: true
    },
    {
      id: 2,
      logo: '../../assets/images/pgrs-icon2.png',
      name: 'Data Cleaning',
      isCompleted: false
    },
    {
      id: 3,
      logo: '../../assets/images/pgrs-icon4.png',
      name: 'Data Prediction',
      isCompleted: false
    }
  ];
  ngOnInit() {
  }

}
