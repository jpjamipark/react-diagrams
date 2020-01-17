// custom port widget and model

import createEngine, {
	DiagramModel,
	DefaultNodeModel,
	DefaultPortModel,
	DefaultLinkFactory,
    DefaultLinkModel,
    PortModel,
    PortModelAlignment,
    PortWidget,
    DiagramEngine
} from '@projectstorm/react-diagrams';
import * as React from 'react';

// MODEL
export class NeuralPortModel extends PortModel {
    constructor(alignment: PortModelAlignment) {
        super({
            type: 'neural',
            name: alignment,
            alignment: alignment // <-- here
        });
    }
}


// WIDGET
export interface NeuralPortWidgetProps {
    port: PortModel | null,
    engine: DiagramEngine,
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
                        width: 40,
                        height: 40,
                        background: 'orange'
                    }}
                />
            </PortWidget>
)}}