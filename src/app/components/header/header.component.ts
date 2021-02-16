import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoinListService } from 'src/app/services/coin-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
coins: any;
name: string;
public yourcoin: any[];
  constructor(private coinListService: CoinListService) { 

  }

  ngOnInit(): void {
    this.coins = this.coinListService.getcoins().subscribe(coins => 
      this.coins = coins);
  }
findYourCoin() :void {
  
  this.coinListService.yourcoin = this.name;
}


}
