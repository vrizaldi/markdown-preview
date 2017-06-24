import React from "react";

export default class Preview extends React.Component {
	
	render() {
		return(
		<div dangerouslySetInnerHTML={{__html: this.props.parsedMd}} />
		);
	}
}
