import { DiagramEngine, NodeModel, DefaultPortModel, PortModelAlignment, NodeModelGenerics } from '@projectstorm/react-diagrams';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';
import { NeuralPortModel } from '../common/port';

export interface InputNodeModelOptions extends BaseModelOptions {
    color?: string;
    name?: string;
}

export interface InputNodeModelGenerics extends NodeModelGenerics {
	OPTIONS: InputNodeModelOptions;
}

export class InputNodeModel extends NodeModel<NodeModelGenerics> {
	color: string;

	constructor(options: InputNodeModelOptions = {}) {
		super({
			...options,
			type: 'input-neural-node'
		});
        this.color = options.color || 'no-color';
        this.addPort(
            new NeuralPortModel({
                alignment: PortModelAlignment.RIGHT,
                name: 'out'
            })
        )
    }

	serialize() {
		return {
			...super.serialize(),
			color: this.color
		};
	}
}