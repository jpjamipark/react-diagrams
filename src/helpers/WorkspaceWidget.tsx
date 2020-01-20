import * as React from 'react';
import styled from '@emotion/styled';

import * as S from './WorkSpaceStyles';

export interface WorkspaceWidgetProps {
	buttons?: any;
}

export const WorkSpaceButton = styled.button`
	background: rgb(60, 60, 60);
	font-size: 14px;
	padding: 5px 10px;
	border: none;
	color: white;
	outline: none;
	cursor: pointer;
	margin: 2px;
	border-radius: 3px;

	&:hover {
		background: rgb(0, 192, 255);
	}
`;

export class WorkspaceWidget extends React.Component<WorkspaceWidgetProps> {
	render() {
		return (
			<S.Container>
				<S.Toolbar>{this.props.buttons}</S.Toolbar>
				<S.Content>{this.props.children}</S.Content>
			</S.Container>
		);
	}
}
