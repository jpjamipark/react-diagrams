import * as React from 'react';
import { DiagramEngine, PortModel, PortModelGenerics } from '@projectstorm/react-diagrams-core';
import { NeuralNodeModel } from './NeuralNodeModel';
import { NeuralPortWidget } from '../common/port';
import * as S from '../common/NodeStyles'

export interface NeuralNodeWidgetProps {
	node: NeuralNodeModel;
    engine: DiagramEngine;
}

export interface NeuralNodeWidgetState {}

export class NeuralNodeWidget extends React.Component<NeuralNodeWidgetProps, NeuralNodeWidgetState> {

	constructor(props: NeuralNodeWidgetProps) {
		super(props);
        this.state = {};
	}

	render() {
        let options = this.props.node.getOptions() as any;
        let input_neural_port_widgets : Array<JSX.Element> = [];
        let output_neural_port_widgets : Array<JSX.Element> = [];
        for (var port_name in this.props.node.getPorts()) {
            let port = this.props.node.getPort(port_name) as PortModel<PortModelGenerics>;
            let port_options = port.getOptions() as any;
            if (port_options.in) {
                input_neural_port_widgets.push(
                <NeuralPortWidget engine={this.props.engine} port={port} in={true}>
                    <div className="circle-port" />
                </NeuralPortWidget>
            )} else {
                output_neural_port_widgets.push(
                <NeuralPortWidget engine={this.props.engine} port={port} in={false}>
                    <div className="circle-port" />
                </NeuralPortWidget>
            )}
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
                        <S.InputPorts>
                            { input_neural_port_widgets }
                        </S.InputPorts>
                        <S.OutputPorts>
                            { output_neural_port_widgets }
                        </S.OutputPorts>
                    </S.PortsContainer>
                </S.Ports>
            </S.Node>
		);
	}
}
