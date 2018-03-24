import { Injectable } from '@angular/core';

import { Observable, Subscription, Subject, BehaviorSubject } from 'rxjs/Rx';

import { BinaryTreeState, Node } from './models';

/**
 * this function creates a balanced binary tree
 * with the desired number of nodes. the value of
 * each node's `value` property is null
 */
export const createTree = (numNodes: number): Node => {
  if (!numNodes) {
    return null;
  }

  const root = new Node(0);

  let numCreated = 1;
  let currentLevel = [root];
  let nextLevel = [];

  while (true) {
    for (let i = 0; i < currentLevel.length; i++) {
      const node = currentLevel[i];

      if (numCreated < numNodes) {
        node.left = new Node(node.level + 1);
        nextLevel.push(node.left);
        numCreated++;
      }

      if (numCreated < numNodes) {
        node.right = new Node(node.level + 1);
        nextLevel.push(node.right);
        numCreated++;
      }

      if (numCreated === numNodes) {
        return root;
      }
    }

    currentLevel = nextLevel;
    nextLevel = [];
  }
};

export const breadthFirstTraversal = (node: Node, callbackFn: Function) => {
  if (!node) {
    return;
  }

  const queue = [node];

  while (queue.length) {
    const currentNode = queue.shift();

    callbackFn(currentNode);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
};

/**
 * creates a balanced binary tree seeded breadth-first using
 * values from the array
 */
export const treeFromArray = (arr: number[]): Node => {
  const reversedArray = arr.slice().reverse();

  const callbackFn = (node: Node) => {
    node.value = reversedArray.pop();
  };

  const root = createTree(arr.length);

  breadthFirstTraversal(root, callbackFn);

  return root;
};

/**
 * for a given node, this function inverts the left subtree, inverts the right
 * sub tree, then swaps the left and right sub trees. the callback passed to
 * this function is invoked only when a swap occurs. ie: it is not invoked on
 * leaf nodes.
 */
export const invertBinaryTree = (node: Node, callbackFn: Function): Node => {
  if (node) {
    const invertedLeftSubTree = invertBinaryTree(node.left, callbackFn);
    const invertedRightSubTree = invertBinaryTree(node.right, callbackFn);

    node.left = invertedRightSubTree;
    node.right = invertedLeftSubTree;
    node.inverted = true;

    callbackFn();
  }

  return node;
};

export const treeToArray = (root: Node): BinaryTreeState => {
  const arr = [];

  breadthFirstTraversal(root, ({ value, inverted, level }) => {
    arr.push({ value, inverted, level });
  });

  return arr;
};

const createArr = () => {
  return new Array(15).fill(1).map(() => Math.floor(100 * Math.random()));
};

const createTreeStates = (): BinaryTreeState[] => {
  const tree = treeFromArray(createArr());

  /**
   * record the initial state of the tree before it is inverted
   */
  const initialState = [];

  breadthFirstTraversal(tree, ({ value, inverted, level }) => {
    initialState.push({ value, inverted, level });
  });

  const binaryTreeStates = [initialState];

  const callbackFn = () => {
    binaryTreeStates.push(treeToArray(tree));
  };

  invertBinaryTree(tree, callbackFn);

  return binaryTreeStates;
};

@Injectable()
export class BinaryTreeInversionService {
  private state: BinaryTreeState[];

  private stateSource = new BehaviorSubject<BinaryTreeState>([]);
  public state$ = this.stateSource.asObservable();

  private initialStateSource = new BehaviorSubject<BinaryTreeState>([]);
  public initialState$ = this.initialStateSource.asObservable();

  private buttonDisabledSource = new BehaviorSubject<boolean>(true);
  public buttonDisabled$ = this.buttonDisabledSource.asObservable();

  private subscription: Subscription;

  /**
   * calling getTreeStates() results in the following:
   * 1) buttonDisabled$ emits true to disable the button
   * 2) an array of BinaryTreeState's is created if one does not already
   *    exist
   * 3) initialState$ emits the initial state of the binary tree
   * 4) state$ emits a new binary tree state for each step in the
   *    inversion process (with a delay to allow the user to observe
   *    the changes)
   * 5) buttonDisabled$ emits false to enable the button
   */
  public getTreeStates() {
    /**
     * disable the button to prevent the user from clicking
     * multiple times
     */
    this.buttonDisabledSource.next(true);

    if (!this.state) {
      this.state = createTreeStates();
    }

    const [initialState] = this.state;

    /**
     * emit the initial state for the initialState$ observable
     */
    this.initialStateSource.next(initialState);

    const next = value => this.stateSource.next(value);

    const complete = () => {
      this.resetState();
      this.buttonDisabledSource.next(false);
    };

    this.subscription = Observable.merge(
      ...this.state.map((value, index) => {
        return Observable.of(value).delay(1000 * index);
      })
    ).subscribe({ next, complete });
  }

  public resetState() {
    this.subscription.unsubscribe();
    this.state = null;
  }
}
