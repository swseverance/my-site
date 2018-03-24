import {
  BinaryTreeInversionService,
  createTree,
  treeFromArray,
  invertBinaryTree,
  treeToArray
} from './binary-tree-inversion.service';

let service: BinaryTreeInversionService;

describe('BinaryTreeInversionService', () => {
  beforeEach(() => (service = new BinaryTreeInversionService()));

  describe('createTree', () => {
    it('can create a binary tree with three nodes', () => {
      const root = createTree(3);

      expect(root).toBeTruthy('root');
      expect(root.left).toBeTruthy('root.left');
      expect(root.right).toBeTruthy('root.right');
    });

    it('can create a binary tree with 4 nodes', () => {
      const root = createTree(4);

      expect(root).toBeTruthy('root');
      expect(root.left).toBeTruthy('root.left');
      expect(root.right).toBeTruthy('root.right');
      expect(root.left.left).toBeTruthy('root.left.left');
    });

    it('can create a binary tree with seven nodes', () => {
      const root = createTree(7);

      expect(root).toBeTruthy('root');
      expect(root.left).toBeTruthy('root.left');
      expect(root.right).toBeTruthy('root.right');
      expect(root.left.left).toBeTruthy('root.left.left');
      expect(root.left.right).toBeTruthy('root.left.right');
      expect(root.right.left).toBeTruthy('root.right.left');
      expect(root.right.right).toBeTruthy('root.right.right');
    });

    it('marks the level on each node', () => {
      const root = createTree(4);

      expect(root.level).toBe(0, 'root');
      expect(root.left.level).toBe(1, 'root.left');
      expect(root.right.level).toBe(1, 'root.right');
      expect(root.left.left.level).toBe(2, 'root.left.left');
    });
  });

  describe('treeFromArray()', () => {
    it('creates a binary tree using the values from the array', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7];
      const root = treeFromArray(arr);

      expect(root.value).toBe(1, 'root');
      expect(root.left.value).toBe(2, 'root.left');
      expect(root.right.value).toBe(3, 'root.right');
      expect(root.left.left.value).toBe(4, 'root.left.left');
      expect(root.left.right.value).toBe(5, 'root.left.right');
      expect(root.right.left.value).toBe(6, 'root.right.left');
      expect(root.right.right.value).toBe(7, 'root.right.right');
    });
  });

  describe('invertBinaryTree()', () => {
    it('inverts a binary tree, invoking a callback after inverting a node\'s children', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7];
      const root = treeFromArray(arr);
      let callbackFnCallCount = 0;
      const callbackFn = () => {
        callbackFnCallCount++;
      };
      invertBinaryTree(root, callbackFn);

      expect(root.value).toBe(1, 'root');
      expect(root.left.value).toBe(3, 'root.left');
      expect(root.right.value).toBe(2, 'root.right');
      expect(root.left.left.value).toBe(7, 'root.left.left');
      expect(root.left.right.value).toBe(6, 'root.left.right');
      expect(root.right.left.value).toBe(5, 'root.right.left');
      expect(root.right.right.value).toBe(4, 'root.right.right');

      expect(callbackFnCallCount).toBe(7);
    });

    it('marks nodes as inverted', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7];
      const root = treeFromArray(arr);

      expect(root.inverted).toBe(false, 'root');
      expect(root.left.inverted).toBe(false, 'root.left');
      expect(root.right.inverted).toBe(false, 'root.right');
      expect(root.left.left.inverted).toBe(false, 'root.left.left');
      expect(root.left.right.inverted).toBe(false, 'root.left.right');
      expect(root.right.left.inverted).toBe(false, 'root.right.left');
      expect(root.right.right.inverted).toBe(false, 'root.right.right');

      invertBinaryTree(root, () => {});

      expect(root.inverted).toBe(true, 'root');
      expect(root.left.inverted).toBe(true, 'root.left');
      expect(root.right.inverted).toBe(true, 'root.right');
      expect(root.left.left.inverted).toBe(true, 'root.left.left');
      expect(root.left.right.inverted).toBe(true, 'root.left.right');
      expect(root.right.left.inverted).toBe(true, 'root.right.left');
      expect(root.right.right.inverted).toBe(true, 'root.right.right');
    });
  });

  describe('treeToArray()', () => {
    it('converts a binary tree into an array', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7];
      const root = treeFromArray(arr);
      const actual = treeToArray(root);
      const expected = [
        {
          value: 1,
          inverted: false,
          level: 0
        },
        {
          value: 2,
          inverted: false,
          level: 1
        },
        {
          value: 3,
          inverted: false,
          level: 1
        },
        {
          value: 4,
          inverted: false,
          level: 2
        },
        {
          value: 5,
          inverted: false,
          level: 2
        },
        {
          value: 6,
          inverted: false,
          level: 2
        },
        {
          value: 7,
          inverted: false,
          level: 2
        }
      ];

      expect(actual).toEqual(expected);
    });
  });
});
