import DefaultNode from './DefaultNode';
import TerminalNode from './TerminalNode';
import DecisionNode from './DecisionNode';

export const nodeTypes = {
    default: DefaultNode,
    terminal: TerminalNode,
    decision: DecisionNode
};