import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

logo = '../../../assets/img/logo.svg';
heroes = '../../../assets/img/heroes.png';
id ;

  constructor() { }

  ngOnInit(): void {
  }

}
