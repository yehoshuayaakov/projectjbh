import { Component, OnInit, Input } from '@angular/core';
import { CoinList2Service } from 'src/app/services/coin-list2.service';
import { CoinsModel } from 'src/coins.model';
import { CoinListService } from 'src/app/services/coin-list.service';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
showinfo: boolean = false;
coins: any;
coin: any;
click = 1;
clicks = [];
abovelimit: boolean = false;
show: boolean = true;
@Input() card: any;
  constructor(private coinListService: CoinListService) { }
  

  ngOnInit(): void {
     
     this.coins = this.coinListService.getcoins().subscribe(coins => 
      this.coins = coins);
      
     }
  
  showmore(id: string): void {
  
        this.coin = this.coinListService.getcoin(id).subscribe(coin => 
          this.coin = coin);
          this.showinfo = !this.showinfo;
        
          setTimeout(() => {
          this.show = !this.show;
        }, 500);
       
     }
  addToList(symbol: string): void {
this.clicks.push(symbol);
  }
  }
 
 



    
    /*this.coins =[
      { currency: 'dollar',
        exchangerate: 3.3
    },
    { currency: 'euro',
        exchangerate: 5.3
    },
    {  currency: 'pound',
    exchangerate: 4.5
  }];*/
  

