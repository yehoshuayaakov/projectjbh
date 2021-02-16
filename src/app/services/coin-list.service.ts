import { Injectable } from '@angular/core';
import  { HttpClient }  from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoinListService {
 public yourcoin : any;
 private COINS_CACHE = {};
 baseURL = 'https://api.coingecko.com/api/v3/coins/';
  constructor(private httpClient: HttpClient) {  }
   getcoins():Observable<any>{
     return this.httpClient.get('https://api.coingecko.com/api/v3/coins');
     
   }
   getcoin(id: string):Observable<any>{
     const remove = (c : any) =>{this.COINS_CACHE[id] = c;
      setTimeout(() => {
        delete this.COINS_CACHE[id];
      }, 5*1000);
      
    }
     if  (this.COINS_CACHE[id]){
          return of(this.COINS_CACHE[id]);
     }
     else {
    return this.httpClient.get(`${this.baseURL}${id}`).pipe(tap(remove));
     }
    
  }
}
