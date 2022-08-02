import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CustomerService } from '../customer.services';
import { customerModel } from './customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [CustomerService],
})
export class CustomersComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  customers: customerModel[] = [];
  //@Output('RowDetails') row = new EventEmitter<customerModel>();
  ngOnInit(): void {
    this.customers = this.customerService.CustomersList;
  }

  customer:customerModel = null;
  evtSelectRow(item: customerModel) {
    this.customerService.getCustomersByID(item.CustomerID);
  }
}
