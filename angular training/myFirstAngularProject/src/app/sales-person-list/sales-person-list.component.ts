import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [new SalesPerson("john", "travolta", "aaaa@bbb.com", 20000), new SalesPerson("bob", "sponge", "sssss@bbb.com", 30000), new SalesPerson("puck", "collins ", "ccccc@bbb.com", 65000)];

  constructor() { }

  ngOnInit(): void {
  }

}
