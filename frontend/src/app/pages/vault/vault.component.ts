import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SharedService } from '../../services/shared.service';
//import { Observable } from 'rxjs';
import { Vault } from '../../models/vault.model'
import { vaultsData } from '../../data/vaults.data';
//import { Coin } from '../../models/coin.model';
import { holdersData } from '../../graphs/holders'

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.css']
})

export class VaultComponent implements OnInit {
  @Input('stepChange') step!: string;
  wallet: any;
  vault: any;
  selectedOperation!: string;
  calculateForm: FormGroup;
  holdersGraph = holdersData;
  options: any;
  vaultView = 'info';

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private formBuilder: FormBuilder,
    private sharedData: SharedService,
    //private metamaskService: MetamaskService
  ) {
    const vaultId = this.route.snapshot.paramMap.get('id');
    vaultsData.filter(item => item.id == vaultId).map(item => this.vault = item);
    this.calculateForm = this.formBuilder.group({
      value: ['', Validators.required, Validators.pattern("^[0-9]*$")],
      time: [365, Validators.required],
      estimatedPrice: [3000]
    });
  }

  ngOnInit(): void {
    this.sharedData.currentWallet.subscribe(walletAddress => this.wallet = walletAddress);
    this.selectedOperation = 'menu';
    this.step = 'zero';
    this.initGraph();
    //this.vault = null;
  }

  connectMetamask() {
    //this.smallBox = 'waiting'
    let address = '0x000teste'
    //this.metamaskService.connectWallet();
    this.sharedData.changeWallet(address);
    //this.smallBox = 'connected'
  }

  initGraph(){
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push(i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      legend: {
        data: ['balance', 'apy'],
        align: 'right',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'balance',
          type: 'bar',
          data: data1
        },
        {
          name: 'apy',
          type: 'bar',
          data: data2
        },
      ],
      animationEasing: 'elasticOut'
     
    };
  }

  selectOperation(operation: string) {
    this.selectedOperation = operation;
  }
  
  changeView(view: string) {
    this.vaultView = view;
  }

}
