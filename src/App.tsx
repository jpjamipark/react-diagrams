import React from 'react';
import logo from './logo.svg';
import './App.css';

import createEngine, { 
    DefaultLinkModel,
    DiagramModel,
    DefaultNodeModel,
} from '@projectstorm/react-diagrams';

import {
    CanvasWidget
} from '@projectstorm/react-canvas-core';

import { DemoCanvasWidget } from './helpers/DemoCanvasWidget';

// custom neural nodes
import { InputNodeModel } from './components/neural_nodes/input/InputNodeModel'

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
    const input_node = new InputNodeModel({
        name: 'Input',
        color: 'rgb(0,192,255)',
    });
    input_node.setPosition(100, 100);
    let port1 = input_node.addOutPort('Out');

    const model = new DiagramModel();
    model.addAll(input_node);
    return model;
}


function App() {  
  let starter_model = get_starter_neural();
  const engine = createEngine();
  engine.setModel(starter_model);
  return (
    <DemoCanvasWidget>
        <CanvasWidget engine={engine}/>
    </DemoCanvasWidget>
  );
}

export default App;
