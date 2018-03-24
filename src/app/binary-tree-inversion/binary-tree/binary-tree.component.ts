import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { BinaryTreeState } from '../models';

@Component({
  selector: 'ss-binary-tree',
  templateUrl: './binary-tree.component.html',
  styleUrls: ['./binary-tree.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BinaryTreeComponent {
  @Input() binaryTreeState: BinaryTreeState = [];

  get Math() {
    return Math;
  }
}
