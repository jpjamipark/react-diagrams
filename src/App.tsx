import React from 'react';
import './App.css';

import createEngine, { 
    DefaultLinkModel,
    DiagramModel,
    DefaultNodeModel,
} from '@projectstorm/react-diagrams';

import {
    CanvasWidget,
    DeleteItemsAction
} from '@projectstorm/react-canvas-core';

import { CustomCanvasWidget } from './helpers/CustomCanvasWidget';

// custom neural nodes
import { InputNodeModel } from './components/neural_nodes/input/InputNodeModel'
import { InputNodeFactory } from './components/neural_nodes/input/InputNodeFactory'
import { NeuralNodeModel } from './components/neural_nodes/neural_node/NeuralNodeModel';
import { NeuralNodeFactory } from './components/neural_nodes/neural_node/NeuralNodeFactory'

// setup
const engine = createEngine({ registerDefaultDeleteItemsAction: false });
engine.getNodeFactories().registerFactory(new InputNodeFactory());
engine.getNodeFactories().registerFactory(new NeuralNodeFactory());
engine.getActionEventBus().registerAction(new DeleteItemsAction({ keyCodes: [46] }));

function get_default_model() {
    // node 1
    const node1 = new DefaultNodeModel({
        name: 'Node 1',
        color: 'rgb(0,192,255)',
    });
    node1.setPosition(100, 100);
    let port1 = node1.addOutPort('Out');

    // node 2
    const node2 = new DefaultNodeModel({
        name: 'Node 2',
        color: 'rgb(0,192,255)',
    });
    node2.setPosition(500, 100);
    let port2 = node2.addInPort('In');

    // link them and add a label to the link
    const link = port1.link<DefaultLinkModel>(port2);
    link.addLabel('Welcome to the AI Blockchain');

    const model = new DiagramModel();
    model.addAll(node1, node2, link);
    return model;
}

function get_starter_neural() {
    // input
    const input_node1 = new InputNodeModel({
        name: 'Input',
        color: 'rgb(0,192,255)',
    });
    input_node1.setPosition(100, 100);

    const input_node2 = new InputNodeModel({
        name: 'Input',
        color: 'rgb(0,192,255)',
    });
    input_node2.setPosition(500, 100);

    const model = new DiagramModel();
    model.addAll(input_node1, input_node2);
    return model;
}

function get_experimental_neural() {
    // input
    const node1 = new NeuralNodeModel({
        name: 'Input',
        color: 'rgb(0,192,255)',
    });
    node1.setPosition(100, 100);

    const node2 = new NeuralNodeModel({
        name: 'Input',
        color: 'rgb(0,192,255)',
    });
    node2.setPosition(500, 100);

    const model = new DiagramModel();
    model.addAll(node1, node2);
    return model;
}


function App() {  
  let starter_model = get_experimental_neural();
  engine.setModel(starter_model);
  return (
    <CustomCanvasWidget>
        <CanvasWidget engine={engine}/>
    </CustomCanvasWidget>
  );
}

export default App;
