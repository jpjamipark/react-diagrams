import { NeuralNodeFactory } from '../neural_node/NeuralNodeFactory';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';
import { NeuralNodeModel } from '../neural_node/NeuralNodeModel';
import { NeuralNodeWidget } from '../neural_node/NeuralNodeWidget';

export class InputNodeFactory extends NeuralNodeFactory {
	constructor() {
		super('input-neural-node');
	}
}

export interface InputNodeModelOptions extends BaseModelOptions {
    color?: string;
    name?: string;
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

export class InputNodeWidget extends NeuralNodeWidget {}
