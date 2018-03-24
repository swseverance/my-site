import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { BinaryTreeInversionService } from '../binary-tree-inversion.service';
import { BinaryTreeState } from '../models';

@Component({
  selector: 'ss-binary-tree-inversion',
  templateUrl: './binary-tree-inversion.component.html',
  styleUrls: ['./binary-tree-inversion.component.styl']
})
export class BinaryTreeInversionComponent implements OnInit, OnDestroy {
  public initialState$: Observable<BinaryTreeState>;
  public state$: Observable<BinaryTreeState>;
  public buttonDisabled$: Observable<boolean>;

  constructor(public service: BinaryTreeInversionService) {}

  get Math() {
    return Math;
  }

  onClick() {
    this.service.getTreeStates();
  }

  ngOnInit() {
    this.initialState$ = this.service.initialState$;
    this.state$ = this.service.state$;
    this.buttonDisabled$ = this.service.buttonDisabled$;

    this.service.getTreeStates();
  }

  ngOnDestroy() {
    this.service.resetState();
  }
}
