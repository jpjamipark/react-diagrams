// custom port widget and model

import createEngine, {
    PortModel,
    PortModelAlignment,
    PortWidget,
    DiagramEngine,
    PortModelOptions,
    PortModelGenerics,
    DefaultLinkModel,
    LinkModel
} from '@projectstorm/react-diagrams';
import { AbstractModelFactory } from '@projectstorm/react-canvas-core';
import * as React from 'react';

// MODEL
export interface NeuralPortModelOptions extends PortModelOptions {
    name: string,
    alignment?: PortModelAlignment,
    in?: boolean
}

export interface NeuralPortModelGenerics extends PortModelGenerics {
	OPTIONS: NeuralPortModelOptions;
}


export class NeuralPortModel extends PortModel<NeuralPortModelGenerics> {
    constructor(options: NeuralPortModelOptions) {
        super({
            type: 'neural',
            ...options
        });
    }

    link<T extends LinkModel>(port: PortModel, factory?: AbstractModelFactory<T>): T {
		let link = this.createLinkModel(factory);
		link.setSourcePort(this);
		link.setTargetPort(port);
		return link as T;
	}

	canLinkToPort(port: PortModel): boolean {
		return true;
	}

	createLinkModel(factory?: AbstractModelFactory<LinkModel>): LinkModel {
		let link = super.createLinkModel();
		if (!link && factory) {
			return factory.generateModel({});
		}
		return link || new DefaultLinkModel();
	}
}


// WIDGET
export interface NeuralPortWidgetProps {
    port: PortModel,
    engine: DiagramEngine,
    in: boolean
}

export interface NeuralPortWidgetState {}

export class NeuralPortWidget extends React.Component<NeuralPortWidgetProps, NeuralPortWidgetState> {
    render() {
        return(
            <PortWidget
                port={this.props.port}
                engine={this.props.engine} >
                <div
                    style={{
                        width: 20,
                        height: 20,
                        background: 'cyan',
                        float: this.props.in ? 'left' : 'right'
                    }}
                />
            </PortWidget>
)}}