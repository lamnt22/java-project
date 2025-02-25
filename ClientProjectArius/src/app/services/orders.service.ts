import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  insertOrder(username: string, data: any):Observable<any>{
    return this.http.post<any>('http://localhost:8888/api/order/saveOrder/'+username,data);
  }
  getOrder():Observable<any>{
    return this.http.get<any>('http://localhost:8888/api/order');
  }

  getOrderById(id:number):Observable<any>{
    return this.http.get<any>('http://localhost:8888/api/order/getOrderById/'+id);
  }

  getStatusOrder():Observable<any>{
    return this.http.get<any>('http://localhost:8888/api/order/getStatusOrder')
  }

  deleteOrder(id:number):Observable<any>{
    return this.http.delete<any>('http://localhost:8888/api/order/deleteOrder/'+id);
  }

  updateOrder(data:any,id:number):Observable<any>{
    return this.http.put<any>('http://localhost:8888/api/order/editOrder/'+id,data);
  }

  getStatusById(id:number):Observable<any>{
    return this.http.get<any>('http://localhost:8888/api/order/getStatusById/'+id);
  }

  checkoutCart(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:8888/api/order/saveLineItems',data);
  }

  getOrderDetails(id:number):Observable<any>{
    return this.http.get<any>('http://localhost:8888/api/order/getLineItemsByOrder/'+id);
  }

  getOrderIdLastest():Observable<any>{
    return this.http.get<any>('http://localhost:8888/api/order/getLatestId');
  }

}
