import { Injectable } from "@angular/core";
import { vaultsData } from '../data/vaults.data';
import { SharedService } from '../services/shared.service';

@Injectable({
  providedIn: 'root'
})

export class DemoService {

  wallet: any;

  constructor(
    private sharedService: SharedService
  ) { }

  connectWalletDemo() {
    this.wallet = {
      address: '0x005',
      assets: [{
        coin: 'eth',
        balance: 30.0000
      }, {
        coin: 'dai',
        balance: 500000.0000
      }]
    }
    localStorage.setItem('wallet', JSON.stringify(this.wallet));
    console.log('ola')
  }

  refreshWalletDemo() {
    this.wallet = localStorage.getItem('wallet');
    this.wallet = JSON.parse(this.wallet)
    return this.wallet;
  }

  getVault(vaultId: string) {
    let vault;
    vaultsData.filter(item => item.id == vaultId).map(item => vault = item);
    return vault;
  }

  deposit(vaultId: string, value: number) {
    this.wallet = localStorage.getItem('wallet');
    this.wallet = JSON.parse(this.wallet)
    let vaults: any;
    this.sharedService.vaultStatus.subscribe(vaultStatus => vaults = vaultStatus);
    if (vaultId = 'eth') {
      let walletBalance = this.wallet.assets[0].balance;
      if (value <= walletBalance) {
        this.wallet.assets[0].balance = walletBalance - value;
        localStorage.setItem('wallet', JSON.stringify(this.wallet));
        vaults[0].balance = vaults[0].balance + value;
        let holdersArray = new Array(vaults[0].holders);
        console.log(holdersArray.length)
        if (holdersArray.length < 5){
          holdersArray.push({
              name: this.wallet.address,
              value: value
            });
        } else {
          holdersArray[4].value = holdersArray[4].value + value;
        }
        vaults[0].holders = holdersArray;
        vaults[0].txs = vaults[0].txs + 1;
        this.sharedService.updateVault(vaults);
        return true
      } else {
        alert('insuficient funds')
        return false
      }
    } else {
      let walletBalance = this.wallet.assets[1].balance;
      if (value <= walletBalance) {
        this.wallet.assets[1].balance = walletBalance - value;
        localStorage.setItem('wallet', JSON.stringify(this.wallet));
        vaults[1].balance = vaults[1].balance + value;
        if (vaults[1].holders.prototype.lenght < 5){
          vaults[1].holders.push({
              name: this.wallet.address,
              value: value
            });
        } else {
          vaults[1].holders[4].value = vaults[1].holders[4].value + value;
        }
        vaults[1].txs = vaults[1].txs + 1;
        this.sharedService.updateVault(vaults);
        return true
      } else {
        alert('insuficient funds')
        return false
      }
    }
  }

  withdraw(vaultId: string, value: number) {
    this.wallet = localStorage.getItem('wallet');
    this.wallet = JSON.parse(this.wallet);
    let vaults: any;
    this.sharedService.vaultStatus.subscribe(vaultStatus => vaults = vaultStatus)
    if (vaultId = 'eth') {
      let vaultBalance = vaults[0].balance;
      if (value <= vaultBalance) {
        this.wallet.assets[0].balance = this.wallet.assets[0].balance + value;
        localStorage.setItem('wallet', JSON.stringify(this.wallet));
        vaults[0].balance = vaults[0].balance - value;
        vaults[0].holders[4].value = vaults[0].holders[4].value - value;
        vaults[0].txs = vaults[0].txs + 1;
        this.sharedService.updateVault(vaults);
        return true
      } else {
        alert('insuficient funds')
        return false
      }
    } else {
      let vaultBalance = vaults[1].balance;
      if (value <= vaultBalance) {
        this.wallet.assets[1].balance = this.wallet.assets[1].balance + value;
        localStorage.setItem('wallet', JSON.stringify(this.wallet));
        vaults[1].balance = vaults[1].balance - value;
        vaults[1].txs = vaults[1].txs + 1;
        this.sharedService.updateVault(vaults);
        return true
      } else {
        alert('insuficient funds')
        return false
      }
    }
  }

  calculate() {}

}
