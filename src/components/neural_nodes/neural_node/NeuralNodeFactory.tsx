import * as React from 'react';
import { NeuralNodeModel } from './NeuralNodeModel';
import { NeuralNodeWidget } from './NeuralNodeWidget';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';

export class NeuralNodeFactory extends AbstractReactFactory<NeuralNodeModel, DiagramEngine> {
	constructor(type?: string) {
        let type_ = type || 'neural-node';
		super(type_);
	}

	generateModel(initialConfig: any) {
		return new NeuralNodeModel(initialConfig);
	}

	generateReactWidget(event: any): JSX.Element {
		return <NeuralNodeWidget engine={this.engine as DiagramEngine} node={event.model} />;
	}
}
