import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.services';
import { customerModel } from '../customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [],
})
export class CustomerComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  iptcustomer: customerModel;

  ngOnInit(): void {
    this.customerService.emitData.subscribe((x:any) => {
      this.iptcustomer = x;
    });
  }
}
