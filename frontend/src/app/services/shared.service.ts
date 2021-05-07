import { Injectable } from '@angular/core';
import { Wallet } from 'ethers';
import { BehaviorSubject } from 'rxjs';
//import { Wallet } from '../models/wallet.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private walletSource = new BehaviorSubject(Wallet);
  currentWallet = this.walletSource.asObservable();
  
  updateWallet(wallet: any) {
    this.walletSource.next(wallet);
  }

}
