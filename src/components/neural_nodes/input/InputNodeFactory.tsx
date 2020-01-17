import * as React from 'react';
import { InputNodeModel } from './InputNodeModel';
import { InputNodeWidget } from './InputNodeWidget';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';

export class InputNodeFactory extends AbstractReactFactory<InputNodeModel, DiagramEngine> {
	constructor() {
		super('input-neural-node');
	}

	generateModel(initialConfig: any) {
		return new InputNodeModel();
	}

	generateReactWidget(event: any): JSX.Element {
		return <InputNodeWidget engine={this.engine as DiagramEngine} node={event.model} />;
	}
}
