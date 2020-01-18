// custom port widget and model

import {
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
import * as S from './PortStyles';

// ==================================================
// MODEL
// ==================================================
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
        let link = this.createLinkModel(factory) as LinkModel;
        link.setSourcePort(this);
        link.setTargetPort(port);
        return link as T;
	}

	canLinkToPort(port: NeuralPortModel): boolean {
        if (port.options.in && this.options.in) {
            alert('Can not connect input to input');
            return false;
        }
        if (!port.options.in && !this.options.in) {
            alert('Can not connect output to output');
            return false;
        }
		return true;
	}

	createLinkModel(factory?: AbstractModelFactory<LinkModel>): LinkModel | null {
        // can return null from this function to prevent a link from being created
        if (this.options.in) {
            return null;
        }
		let link = super.createLinkModel();
		if (!link && factory) {
			return factory.generateModel({});
		}
		return link || new DefaultLinkModel();
	}
}

// ==================================================
// WIDGET
// ==================================================
export interface NeuralPortWidgetProps {
    port: PortModel,
    engine: DiagramEngine,
    in: boolean
}

export interface NeuralPortWidgetState {}

export class NeuralPortWidget extends React.Component<NeuralPortWidgetProps, NeuralPortWidgetState> {
    render() {
        let port_options = this.props.port.getOptions() as any;
        const port = (
            <PortWidget engine={this.props.engine} port={this.props.port}>
                <S.Port />
            </PortWidget>
        );
        const label = <S.Label>{port_options.name}</S.Label>;
    
        return (
            <S.PortLabel>
                {port_options.in ? port : label}
                {port_options.in ? label : port}
            </S.PortLabel>
        );
    }}
