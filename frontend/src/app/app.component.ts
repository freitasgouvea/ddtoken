import { Component, OnInit } from '@angular/core';
import { Vault } from './models/vault.model'
//import { MetamaskService } from 'src/app/services/metamask.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DTToken'
  largeBox: string;
  smallBox: string;
  vaults: Vault[];
  assets: number;
  selectedVault: any;

  constructor(
    //private metamaskService: MetamaskService
  ) {
    this.largeBox = 'vaults';
    this.smallBox = 'offline';
    this.assets = 0;
    this.vaults = [];
   }

  ngOnInit() {
    //connectWeb3
    //connectMetamask
    //setWallet
  }

  connectMetamask() {
    this.smallBox = 'waiting'
    //this.metamaskService.connectWallet();
    this.smallBox = 'connected'
  }

  selectVault(vault: string) {
    this.largeBox = 'selected'
    this.selectedVault = vault
  }

}
