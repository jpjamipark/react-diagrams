import * as React from 'react';
import { DiagramEngine, PortModel, PortModelGenerics } from '@projectstorm/react-diagrams-core';
import { NeuralNodeModel } from './NeuralNodeModel';
import { NeuralPortWidget } from '../common/port';
import * as S from '../common/NodeStyles'

export interface NeuralNodeWidgetProps {
	node: NeuralNodeModel;
    engine: DiagramEngine;
    form_component?: any;
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
    form_component?: JSX.Element;

    handleChange = (event: any) => {
        // this.setState({value: event.target.value});
        console.log(event.target.value);
        this.props.node.parameters.shape = event.target.value;
    }

	constructor(props: NeuralNodeWidgetProps) {
		super(props);
        this.state = {};
        if (props.hasOwnProperty('form_component')) {
            this.form_component = <props.form_component onChange={this.handleChange}/>;
        }
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
        if (this.form_component) {
            node_elements.push(
                <S.Form>
                    { this.form_component }
                </S.Form>
            )
        }
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
