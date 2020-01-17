import * as React from 'react';
import { DiagramEngine, PortModel, PortModelGenerics } from '@projectstorm/react-diagrams-core';
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
        let neural_port_widgets : Array<JSX.Element> = [];
        for (var port_name in this.props.node.getPorts()) {
            let port = this.props.node.getPort(port_name) as PortModel<PortModelGenerics>;
            let port_options = port.getOptions() as any;
            neural_port_widgets.push(
            <NeuralPortWidget engine={this.props.engine} port={port} in={port_options.in}>
                <div className="circle-port" />
            </NeuralPortWidget>
            )
        }
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
                        { neural_port_widgets }
                    </S.PortsContainer>
                </S.Ports>
            </S.Node>
		);
	}
}
