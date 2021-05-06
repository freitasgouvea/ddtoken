import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Vault } from '../../models/vault.model'

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  @Input('selectedVault') selectedVault!: string;
  @Input() step: string;
  @Output() stepChange = new EventEmitter<string>();
  //vault: Vault;
  withdrawForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    //private metamaskService: MetamaskService
  ) {
    this.step = 'form';
    this.stepChange.emit('form');
    this.withdrawForm = this.formBuilder.group({
      valueApprove: ['', Validators.required, Validators.pattern("^[0-9]*$")]
    });
   } 

  ngOnInit(): void {}

  sendTransaction(){
    this.stepChange.emit('waiting');
  }

}
