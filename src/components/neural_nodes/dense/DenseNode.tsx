import { NeuralNodeFactory } from '../neural_node/NeuralNodeFactory';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';
import { NeuralNodeModel } from '../neural_node/NeuralNodeModel';
import { NeuralNodeWidget } from '../neural_node/NeuralNodeWidget';

export class DenseNodeFactory extends NeuralNodeFactory {
	constructor() {
		super('dense-neural-node');
	}
}

export interface DenseNodeModelOptions extends BaseModelOptions {
    color?: string;
    name?: string;
}

export class DenseNodeModel extends NeuralNodeModel {
	constructor(options: DenseNodeModelOptions = {}) {
        let defaultPorts = [
            {name: 'in',
            in: true},
            {name: 'out',
            in: false},
        ]
		super({
			...options,
			type: 'dense-neural-node'
        }, defaultPorts);
    }
}

export class DenseNodeWidget extends NeuralNodeWidget {}
