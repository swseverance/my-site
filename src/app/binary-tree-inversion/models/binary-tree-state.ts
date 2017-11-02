/**
 * this interface is an array representation of a binary tree at a
 * given point in time. it holds the values for each node in the binary
 * tree as well as an indicator for whether the node has been inverted
 */
export type BinaryTreeState = Array<{
  value: number;
  inverted: boolean;
  level: number;
}>;
