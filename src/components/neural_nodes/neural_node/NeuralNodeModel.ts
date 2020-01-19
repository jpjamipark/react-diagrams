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
    type?: string;
}

export interface NeuralNodeModelGenerics extends NodeModelGenerics {
	OPTIONS: NeuralNodeModelOptions;
}

export class NeuralNodeModel extends NodeModel<NodeModelGenerics> {
    color: string;

	constructor(options: NeuralNodeModelOptions = {}, defaultPorts?: any) {
        if (!options.hasOwnProperty('color')) {
            options.color = 'rgb(50,50,50)';
        }
        if (!options.hasOwnProperty('name')) {
            options.name = 'Default';
        }
        if (!options.hasOwnProperty('type')) {
            options.type = 'neural-node';
        }
		super({
            ...options,
        });
        if (defaultPorts === undefined) {
            // assign ports to global default. 1 input, 1 output
            defaultPorts = [
                {name: 'out',
                in: false},
                {name: 'in',
                in: true},
            ]
        }
        this.color = options.color as string;
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