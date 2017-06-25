import React from "react";

export default class Preview extends React.Component {
	
	render() {
		return(
		<div id="preview" className="half" dangerouslySetInnerHTML={{__html: this.props.parsedMd}} />
		);
	}
}
