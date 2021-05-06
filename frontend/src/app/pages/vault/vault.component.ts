import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Vault } from '../../models/vault.model'
import { Coin } from '../../models/coin.model'
import { holdersData } from '../../graphs/holders'

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.css']
})

export class VaultComponent implements OnInit {
  @Input('selectedVault') selectedVault!: string;
  @Input('stepChange') step!: string;
  @Input('stepChange') selectedOperation!: string;
  //vault: Vault;
  //coin: Coin;
  calculateForm: FormGroup;
  holdersGraph = holdersData;
  options: any;
  vaultView = 'info';

  constructor(
    private formBuilder: FormBuilder,
    //private metamaskService: MetamaskService
  ) {
    this.calculateForm = this.formBuilder.group({
      value: ['', Validators.required, Validators.pattern("^[0-9]*$")],
      time: [365, Validators.required],
      estimatedPrice: [3000]
    });
  }

  ngOnInit(): void {
    this.selectedOperation = 'menu';
    this.step = 'zero';
    this.initGraph();
    //this.vault = null;
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
