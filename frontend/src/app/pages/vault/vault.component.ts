import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Vault } from '../../models/vault.model'
import { Coin } from '../../models/coin.model'

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.css']
})

export class VaultComponent implements OnInit {
  @Input('selectedVault') selectedVault!: string;
  @Input('stepChange') stepChange!: string;
  //vault: Vault;
  //coin: Coin;
  selectedOperation: any;
  calculateForm: FormGroup;
  step = 'zero';

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
    //this.vault = null;
  }

  selectOperation(operation: string) {
    this.selectedOperation = operation
  }

  async confirmDeposit(){
    this.step = 'form'
  }

  async confirmWithdraw(){
    this.step = 'form'
  }

}
