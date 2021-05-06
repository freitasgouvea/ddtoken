import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Vault } from '../../models/vault.model';
import { vaultsData } from '../../data/vaults.data';
import { SharedService } from '../../services/shared.service';
import { Wallet } from 'src/app/models/wallet.model';
//import { MetamaskService } from 'src/app/services/metamask.service';
//import { Observable } from 'rxjs';
//import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
  smallBox: string;
  vaults: Vault[];
  wallet: any;
  //wallet?: Wallet;
  assets: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sharedData: SharedService 
  ) {
    this.smallBox = 'offline';
    this.vaults = vaultsData;
    this.assets = 0;
  }

  ngOnInit() {
    this.sharedData.currentWallet.subscribe(walletAddress => this.wallet = walletAddress);
    //connectWeb3
    //connectMetamask
    //setWallet
  }

  connectMetamask() {
    this.smallBox = 'waiting'
    let address = '0x000teste'
    //this.metamaskService.connectWallet();
    this.sharedData.changeWallet(address);
    this.smallBox = 'connected'
  }

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
