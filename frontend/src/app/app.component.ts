import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { MetamaskService } from 'src/app/services/metamask.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DTToken'
  page:string;
  largeBox: string;
  smallBox: string;
  stepBox: string;
  assets: number;
  selectedVault: any;
  selectedOperation: any;
  approveForm: FormGroup;
  withdrawForm: FormGroup;
  calculateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    //private metamaskService: MetamaskService
  ){
    this.page =  'list';
    this.largeBox = 'vaults';
    this.smallBox = 'offline';
    this.selectedOperation = 'menu';
    this.stepBox = 'zero';
    this.assets = 0;
    this.approveForm = this.formBuilder.group({
      valueApprove: ['', Validators.required, Validators.pattern("^[0-9]*$")]
    });
    this.withdrawForm = this.formBuilder.group({
      valueApprove: ['', Validators.required, Validators.pattern("^[0-9]*$")]
    });
    this.calculateForm = this.formBuilder.group({
      value: ['', Validators.required, Validators.pattern("^[0-9]*$")],
      time: [365, Validators.required],
    });
  }

  ngOnInit(){
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

  selectOperation(operation: string) {
    this.selectedOperation = operation
  }

  async confirmDeposit(){
    this.largeBox = 'step1'
  }

  async confirmWithdraw(){
    this.largeBox = 'step1'
  }

}
