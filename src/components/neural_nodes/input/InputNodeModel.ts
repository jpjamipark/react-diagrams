import { NodeModel, PortModelAlignment, NodeModelGenerics } from '@projectstorm/react-diagrams';
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
        let defaultPorts = [
            {name: 'out',
            in: false},
            {name: 'test1',
            in: false},
            {name: 'test2',
            in: true},
            {name: 'test3',
            in: false}
        ]

        this.color = options.color || 'no-color';
        for (let i = 0; i < defaultPorts.length; i++) {
            let name = defaultPorts[i].name
            let alignment = (defaultPorts[i].in === true) ? PortModelAlignment.LEFT : PortModelAlignment.RIGHT
            this.addPort(
                new NeuralPortModel({
                    alignment: alignment,
                    name: name,
                    in: defaultPorts[i].in
            }))
        }
    }

	serialize() {
		return {
			...super.serialize(),
			color: this.color
		};
	}
}