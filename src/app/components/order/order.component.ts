import { query } from '@angular/animations';
import { Component, OnInit, Query } from '@angular/core';
import GraphQLAPI, { graphqlOperation } from '@aws-amplify/api-graphql';
import { API } from 'aws-amplify';
import { APIService } from 'src/app/API.service';
import { Orders } from 'src/app/common/orders';
/*
import * as queries from '' //'./graphql/queries';
import * as mutations from './graphql/mutations';
import * as subscriptions from './graphql/subscriptions'; */

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  allorders: any = [];
  newOrders: Orders[] = [];

  constructor(private apiService: APIService) { }

  async ngOnInit(): Promise<void> {
    let results = await this.apiService.ListOrders();
    this.allorders = results.items;
  }

  async createOrder() {
    const newOrder = {
      name: 'RECESSED LED DOWNLIGHT WITH 5W OSRAM LED GU10 LAMP',
      Quantity: 10,
      Price: 42001
    }

    let result = await this.apiService.CreateOrder(newOrder);

    this.allorders.push(result);
    alert("order created");
    //debugger;
  }

  async listOrders() {
    let result = await this.apiService.ListOrders();
    this.allorders = result.items;
  }
}
