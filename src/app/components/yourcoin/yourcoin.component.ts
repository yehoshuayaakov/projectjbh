import { Component, OnInit } from '@angular/core';
import { CoinListService } from 'src/app/services/coin-list.service';

@Component({
  selector: 'app-yourcoin',
  templateUrl: './yourcoin.component.html',
  styleUrls: ['./yourcoin.component.css']
})
export class YourcoinComponent implements OnInit {
coins: any[];

  constructor(private coinListService: CoinListService) { }

  ngOnInit(): void {  
    console.log(this.coins);
     
    this.coinListService.getcoins().subscribe(coins => {
      console.log( coins)
      this.coins = coins.filter(c => c.name === this.coinListService.yourcoin);
    });

  }

}
