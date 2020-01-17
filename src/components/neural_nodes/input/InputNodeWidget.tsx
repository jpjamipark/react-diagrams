import * as React from 'react';
import { DiagramEngine, PortWidget, PortModel } from '@projectstorm/react-diagrams-core';
import { InputNodeModel } from './InputNodeModel';
import { NeuralPortWidget } from '../common/port';
import * as S from '../common/NodeStyles'


export interface InputNodeWidgetProps {
	node: InputNodeModel;
    engine: DiagramEngine;
}

export interface InputNodeWidgetState {}

export class InputNodeWidget extends React.Component<InputNodeWidgetProps, InputNodeWidgetState> {
    outPort: PortModel;

	constructor(props: InputNodeWidgetProps) {
		super(props);
        this.state = {};
        this.outPort = this.props.node.getPort('out') as PortModel;
        console.log(this.props.node.getOptions());
	}

	render() {
        let options = this.props.node.getOptions() as any;
		return (
            <S.Node
                data-default-node-name={options.name}
				selected={this.props.node.isSelected()}
				background={options.color}>
                <S.Title>
					<S.TitleName>{options.name}</S.TitleName>
				</S.Title>
                <S.Ports>
                    <S.PortsContainer>
                        <NeuralPortWidget engine={this.props.engine} port={this.outPort} in={false}>
                            <div className="circle-port" />
                        </NeuralPortWidget>
                    </S.PortsContainer>
                </S.Ports>
            </S.Node>
		);
	}
}
