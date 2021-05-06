import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Vault } from '../../models/vault.model'

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  @Input('selectedVault') selectedVault!: string;
  @Input() step: string;
  @Output() stepChange = new EventEmitter<string>();
  //vault: Vault;
  approveForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    //private metamaskService: MetamaskService
  ) {
    this.step = 'form';
    this.stepChange.emit('form');
    this.approveForm = this.formBuilder.group({
      valueApprove: ['', Validators.required, Validators.pattern("^[0-9]*$")]
    });
   }

  ngOnInit(): void {

  }

}
