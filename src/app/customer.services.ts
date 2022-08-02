
import { EventEmitter } from "@angular/core";
import { customerModel } from "./customers/customer.model";


export class CustomerService {
  CustomersList:customerModel[] = [
    {
      CustomerID: 'ANATR',
      ContactName: 'Ana Trujillo',
      City: 'México D.F.',
      Phone: '(5) 555-4729',
    },
    {
      CustomerID: 'HANAR',
      ContactName: 'Mario Pontes',
      City: 'Rio de Janeiro',
      Phone: '(21) 555-0091',
    },
    {
      CustomerID: 'VINET',
      ContactName: 'Paul Henriot',
      City: 'Reims',
      Phone: '26.47.15.10',
    },
  ];
  constructor() {}

  emitData = new EventEmitter<customerModel>();

  getCustomersByID(customerID:string){
    let customer:customerModel = this.CustomersList.find(x=>x.CustomerID==customerID);
    this.emitData.next(customer)
  }



}
