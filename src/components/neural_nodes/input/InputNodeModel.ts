import { NodeModelGenerics } from '@projectstorm/react-diagrams';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';
import { NeuralNodeModel } from '../neural_node/NeuralNodeModel';

export interface InputNodeModelOptions extends BaseModelOptions {
    color?: string;
    name?: string;
}

export interface InputNodeModelGenerics extends NodeModelGenerics {
	OPTIONS: InputNodeModelOptions;
}

export class InputNodeModel extends NeuralNodeModel {
	constructor(options: InputNodeModelOptions = {}) {
        let defaultPorts = [
            {name: 'out',
            in: false},
        ]
		super({
			...options,
			type: 'input-neural-node'
        }, defaultPorts);
    }
}