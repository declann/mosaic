import { COLUMN_PARAM } from '../constants.js';
import { ColumnRefNode } from './column-ref.js';

export class ColumnParamNode extends ColumnRefNode {
  /**
   * Instantiate a column param node.
   * @param {import('./param.js').ParamNode} param The column name as a
   *  parameter node.
   * @param {import('./table-ref.js').TableRefNode} [table] The table
   *  reference.
   */
  constructor(param, table) {
    super(COLUMN_PARAM, table);
    /**
     * The column name as a parameter node.
     * @type {import('./param.js').ParamNode}
     * @readonly
     */
    this.param = param;
  }

  /**
   * Returns the column name.
   * @returns {string}
   */
  get column() {
    return `${this.param.value}`;
  }
}
