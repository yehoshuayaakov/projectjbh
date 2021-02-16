import { Injectable } from '@angular/core';
import { CoinsModel } from 'src/coins.model';
import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';
@Injectable({
  providedIn: 'root'
})
export class CoinList2Service {
private coins: CoinsModel[];
  constructor() { 
    this.coins = [{
      name: "abc",
      id: 'acs',
      symbol: 'def' 
    },
    {
      name: "abc",
      id: 'acs',
      symbol: 'def' 
    },
    {
      name: "abc",
      id: 'acs',
      symbol: 'def' 
    },
  ];
  }
  get(): CoinsModel[] {
    return this.coins;
  }
}
