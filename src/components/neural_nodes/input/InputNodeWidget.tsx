import * as React from 'react';
import { DiagramEngine, PortWidget, PortModel } from '@projectstorm/react-diagrams-core';
import { InputNodeModel } from './InputNodeModel';
import { NeuralPortWidget } from '../common/port';

export interface InputNodeWidgetProps {
	node: InputNodeModel;
    engine: DiagramEngine;
}

export interface InputNodeWidgetState {}

export class InputNodeWidget extends React.Component<InputNodeWidgetProps, InputNodeWidgetState> {
    inPort: PortModel;

	constructor(props: InputNodeWidgetProps) {
		super(props);
		this.state = {};
        this.inPort = this.props.node.getPort('in') as PortModel;
	}

	render() {
		return (
			<div className="input-neural-node">
				<NeuralPortWidget engine={this.props.engine} port={this.inPort}/>
			</div>
		);
	}
}