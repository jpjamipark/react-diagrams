import styled from '@emotion/styled';

export const Node = styled.div<{ background: string; selected: boolean }>`
    background-color: ${p => p.background};
    border-radius: 5px;
    font-family: sans-serif;
    color: white;
    border: solid 2px black;
    overflow: visible;
    font-size: 11px;
    border: solid 2px ${p => (p.selected ? 'rgba(255,255,255,0.3)' : 'black')};
`;

export const Title = styled.div`
    background: rgba(0, 0, 0, 0.35);
    display: flex;
    white-space: nowrap;
    justify-items: center;
`;

export const Form = styled.div`
    padding: 0px 5px;
    background: rgba(0, 0, 0, 0.15);
    display: flex;
    white-space: nowrap;
    justify-items: center;
`;

export const TitleName = styled.div`
    padding: 5px;
`;

export const Ports = styled.div`
    display: flex;
    background-image: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.2));
`;

export const PortsContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
`;

export const InputPorts = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;

export const OutputPorts = styled.div`
    display: flex;
    flex-direction: column;
`;