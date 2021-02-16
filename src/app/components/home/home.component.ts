import { Component, OnInit } from '@angular/core';
import { CoinListService } from 'src/app/services/coin-list.service';
import { Subscriber } from 'rxjs';
import { CoinsModel } from 'src/coins.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
coins: any;
  constructor(private coinListService: CoinListService) { }

  ngOnInit(): void {
   this.coinListService.getcoins().subscribe(coins => {this.coins= coins })
  }
  getcoin(id: string): any {
    return this.coins.find(b => b.id === id);

}
}
