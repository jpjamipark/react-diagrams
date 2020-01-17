import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const PortLabel = styled.div`
    display: flex;
    margin-top: 1px;
    align-items: center;
`;

export const Label = styled.div`
    padding: 0 5px;
    flex-grow: 1;
`;

export const Port = styled.div`
    width: 15px;
    height: 15px;
    background: rgba(white, 0.1);
    &:hover {
        background: rgb(192, 255, 0);
    }
`;