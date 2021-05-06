import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import { Wallet } from '../models/wallet.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private walletSource = new BehaviorSubject({address: '0x00'});
  currentWallet = this.walletSource.asObservable();
  
  changeWallet(addressToChange: string) {
    this.walletSource.next({address: addressToChange});
  }

}
