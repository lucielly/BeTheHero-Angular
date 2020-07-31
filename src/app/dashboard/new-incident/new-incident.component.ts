import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.css']
})
export class NewIncidentComponent implements OnInit {
  logo = '../../../assets/img/logo.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
