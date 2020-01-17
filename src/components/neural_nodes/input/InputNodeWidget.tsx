import * as React from 'react';
import { DiagramEngine, PortWidget } from '@projectstorm/react-diagrams-core';
import { InputNodeModel } from './InputNodeModel';
import { NeuralPortWidget } from '../common/port';

export interface InputNodeWidgetProps {
	node: InputNodeModel;
	engine: DiagramEngine;
}

export interface InputNodeWidgetState {}

export class InputNodeWidget extends React.Component<InputNodeWidgetProps, InputNodeWidgetState> {
	constructor(props: InputNodeWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="input-neural-node">
				<NeuralPortWidget engine={this.props.engine} port={this.props.node.getPort('in')}/>
			</div>
		);
	}
}