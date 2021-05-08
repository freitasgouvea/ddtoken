import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from 'src/app/services/demo.service';
import { Vault } from '../../models/vault.model';
import { SharedService } from '../../services/shared.service';
//import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
  smallBox: string;
  vaults: any;
  wallet: any;
  assets: number;

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private demoService: DemoService
    //private blockchainService: BlockchainService 
  ) {
    this.sharedService.vaultStatus.subscribe(status => this.vaults = status);
    this.wallet = this.demoService.refreshWalletDemo();
    console.log(this.wallet)
    if (this.wallet) {
      this.smallBox = 'connected';
    } else {
      this.smallBox = 'offline';
    }
    this.assets = 0;
  }

  ngOnInit() {

  }

  reloadCurrentRoute() {

}

  connectDemo(){
    this.demoService.connectWalletDemo();
    this.wallet = this.demoService.refreshWalletDemo();
    this.smallBox = 'connected';
  }

  /*

  connectMetamask() {
    this.smallBox = 'waiting'
    this.blockchainService.connectWallet();
    this.sharedData.currentWallet.subscribe(wallet => this.wallet = wallet);
    console.log(this.wallet);
    this.smallBox = 'connected'
  }

  */

  selectVault(vault: Vault) {
    if(vault.active == true){
      this.router.navigate(['/vault', vault.id ]);
    } else {
      return
    }
  }

  tryBox(id:string){
    this.router.navigate(['/vault', id ]);
  }

}
