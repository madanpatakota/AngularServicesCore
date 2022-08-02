import { inject, Injectable } from '@angular/core';
import { CustomerService } from './customer.services';
import { customerModel } from './customers/customer.model';
import { orderCustomer } from './order-customer.model';
import { OrderModel } from './order.model';

Injectable({ providedIn: 'root' });
export class OrderService {
  constructor(private customerService: CustomerService) {}

  OrdersList = [
    {
      CustomerID: 'VINET',
      OrderID: '10248',
      OrderDate: '1996-07-16 00:00:00.000',
      ShipName: 'Vins et alcools Chevalier',
    },

    {
      CustomerID: 'HANAR',
      OrderID: '	10886',
      OrderDate: '	1998-03-02 00:00:00.000',
      ShipName: '	Hanari Carnes',
    },

    {
      CustomerID: 'ANATR',
      OrderID: '	10308',
      OrderDate: '	1996-09-24 00:00:00.000',
      ShipName: '	Ana Trujillo Emparedados y helados',
    },
  ];

  getOrdersWithcustomers() {
    let customersList: customerModel[] = this.customerService.CustomersList;
    let ordersList: OrderModel[] = this.OrdersList;

    let output: any | orderCustomer[] = [];
    customersList.forEach((cm: customerModel) => {
      let or: OrderModel = ordersList.find((o) => o.CustomerID == cm.CustomerID);
      let ordercustomer: orderCustomer = {
        CustomerID: cm.CustomerID,
        ContactName: cm.ContactName,
        City: cm.City,
        Phone: cm.Phone,
        OrderID: or.OrderID,
        OrderDate: or.OrderDate,
        ShipName: or.ShipName,
      };
      return output.push(ordercustomer);
    });
  }
}
