import { NodeModel, PortModelAlignment, NodeModelGenerics } from '@projectstorm/react-diagrams';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';
import { NeuralPortModel } from '../common/port';


export interface PortMetadata {
    name: string,
    in: boolean
}

export interface NeuralNodeModelOptions extends BaseModelOptions {
    color?: string;
    name?: string;
}

export interface NeuralNodeModelGenerics extends NodeModelGenerics {
	OPTIONS: NeuralNodeModelOptions;
}

export class NeuralNodeModel extends NodeModel<NodeModelGenerics> {
    color: string;

	constructor(options: NeuralNodeModelOptions = {}, defaultPorts?: any) {
		super({
            ...options,
            type: 'neural-node'
        });
        if (defaultPorts === undefined) {
            // assign ports to default. 1 input, 1 output
            defaultPorts = [
                {name: 'out',
                in: false},
                {name: 'in',
                in: true},
            ]
        }
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