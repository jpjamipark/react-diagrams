import { DiagramEngine, NodeModel, DefaultPortModel } from '@projectstorm/react-diagrams';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';

export interface InputNodeModelOptions extends BaseModelOptions {
    color?: string;
    name?: string;
}

export class InputNodeModel extends NodeModel {
	color: string;

	constructor(options: InputNodeModelOptions = {}) {
		super({
			...options,
			type: 'input-neural-node'
		});
		this.color = options.color || 'red';
    }

    addInPort(name: string) {
        this.addPort(
			new DefaultPortModel({
				in: true,
				name: name
			})
		);
    }

    addOutPort(name: string) {
        this.addPort(
			new DefaultPortModel({
				in: false,
				name: name
			})
		);
    }

	serialize() {
		return {
			...super.serialize(),
			color: this.color
		};
	}
}