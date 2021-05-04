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
  assets: number;
  selectedVault: any;
  approveForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    //private metamaskService: MetamaskService
  ){
    this.page =  'list';
    this.largeBox = 'vaults';
    this.smallBox = 'offline';
    this.assets = 0;
    this.approveForm = this.formBuilder.group({
      valueApprove: ['', Validators.required, Validators.pattern("^[0-9]*$")]
    });
  }

  ngOnInit(){
    //connectWeb3
    //connectMetamask
    //setWallet
  }

  selectVault(vault: string) {
    this.largeBox = 'selected'
    this.selectedVault = vault
  }

  async confirmApprove(){
    this.largeBox = 'step1'
  }

  connectMetamask() {
    this.smallBox = 'waiting'
    //this.metamaskService.connectWallet();
  }

  firstDeposit() {
    this.smallBox = 'task1'
  }

  task1() {
    this.smallBox = 'task2'
  }

  task2() {
    this.smallBox = 'task3'
  }

  task3() {
    this.smallBox = 'success'
  }
}
