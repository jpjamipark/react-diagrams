import * as React from 'react';
import { NeuralNodeFactory } from '../neural_node/NeuralNodeFactory';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams';
import { NeuralNodeModel } from '../neural_node/NeuralNodeModel';
import { NeuralNodeWidget, NeuralNodeWidgetProps } from '../neural_node/NeuralNodeWidget';

export class InputNodeFactory extends NeuralNodeFactory {
	constructor() {
		super('input-neural-node');
    }

    generateModel(initialConfig: any) {
		return new InputNodeModel(initialConfig);
	}

	generateReactWidget(event: any): JSX.Element {
		return <InputNodeWidget engine={this.engine as DiagramEngine} node={event.model} />;
	}
}

export interface InputNodeModelOptions extends BaseModelOptions {
    color?: string;
    name?: string;
}

export class InputNodeModel extends NeuralNodeModel {
	constructor(options: InputNodeModelOptions = {}) {
        // defaults
        let defaultPorts = [
            {name: 'out',
            in: false},
        ]
        if (!options.hasOwnProperty('color')) {
            options.color = 'rgb(0,192,255)';
        }
        if (!options.hasOwnProperty('name')) {
            options.name = 'Input';
        }
		super({
			...options,
			type: 'input-neural-node'
        }, defaultPorts);
    }
}


export class InputNodeForm extends React.Component {
    render() {
        return(
            <form>
                <label>Shape</label>
                <input type="text" name="shape"/>
            </form>
        )
    }
}
let form_jsx = <InputNodeForm/>


export class InputNodeWidget extends NeuralNodeWidget {
    constructor(props: NeuralNodeWidgetProps) {
        super({
            ...props,
            form_component: form_jsx
        });
    }
}
