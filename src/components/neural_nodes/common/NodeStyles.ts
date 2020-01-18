import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const Node = styled.div<{ background: string; selected: boolean }>`
    background-color: ${p => p.background};
    border-radius: 5px;
    font-family: sans-serif;
    color: white;
    border: solid 2px black;
    overflow: visible;
    font-size: 11px;
    border: solid 2px ${p => (p.selected ? 'rgb(0,192,255)' : 'black')};
`;

export const Title = styled.div`
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    white-space: nowrap;
    justify-items: center;
`;

export const TitleName = styled.div`
    flex-grow: 1;
    padding: 5px 5px;
`;

export const Ports = styled.div`
    display: flex;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
`;

export const PortsContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    &:first-of-type {
        margin-right: 10px;
    }
    &:only-child {
        margin-right: 0px;
    }
`;

export const InputPorts = styled.div`
    display: flex;
    flex-direction: column;
`;

export const OutputPorts = styled.div`
    display: flex;
    flex-direction: column;
`;