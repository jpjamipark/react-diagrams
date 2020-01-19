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

class DefaultNeuralForm extends React.Component {
    render() {
        return(
            <div>Test</div>
        )
    }
}

export class NeuralNodeWidget extends React.Component<NeuralNodeWidgetProps, NeuralNodeWidgetState> {
    widgetJSX: JSX.Element;

	constructor(props: NeuralNodeWidgetProps, widgetJSX?: JSX.Element) {
		super(props);
        this.state = {};
        this.widgetJSX = widgetJSX as JSX.Element;
	}

	render() {
        let options = this.props.node.getOptions() as any;
        let input_neural_port_widgets : Array<JSX.Element> = [];
        let output_neural_port_widgets : Array<JSX.Element> = [];
        let i = 0;
        for (var port_name in this.props.node.getPorts()) {
            let port = this.props.node.getPort(port_name) as PortModel<PortModelGenerics>;
            let port_options = port.getOptions() as any;
            if (port_options.in) {
                input_neural_port_widgets.push(
                <NeuralPortWidget engine={this.props.engine} port={port} in={true} key={i}>
                    <div className="circle-port" />
                </NeuralPortWidget>
            )} else {
                output_neural_port_widgets.push(
                <NeuralPortWidget engine={this.props.engine} port={port} in={false} key={i}>
                    <div className="circle-port" />
                </NeuralPortWidget>
            )}
            i += 1;
        }

        // array of elements of node
        let node_elements = [];
        node_elements.push(
            <S.Title>
                <S.TitleName>{options.name}</S.TitleName>
            </S.Title>
        );
        node_elements.push(
            <S.Form>
                { this.widgetJSX }
            </S.Form>
        )
        node_elements.push(
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
        )
		return (
            <S.Node
            data-default-node-name={options.name}
            selected={this.props.node.isSelected()}
            background={options.color}>
                { node_elements }
            </S.Node>
		);
	}
}
