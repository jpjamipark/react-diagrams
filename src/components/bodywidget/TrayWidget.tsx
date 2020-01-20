import * as React from 'react';
import * as S from './BodyWidgetStyles';


export interface TrayItemWidgetProps {
	model: any;
	color: string;
	name: string;
}


export class TrayItemWidget extends React.Component<TrayItemWidgetProps> {
	render() {
		return (
			<S.TrayItemWidget
				color={this.props.color}
				draggable={true}
				onDragStart={event => {
					event.dataTransfer.setData('storm-diagram-node', JSON.stringify(this.props.model));
				}}
				className="tray-item">
				{this.props.name}
			</S.TrayItemWidget>
		);
	}
}


export class TrayWidget extends React.Component {
	render() {
		return <S.TrayWidget>{this.props.children}</S.TrayWidget>;
	}
}