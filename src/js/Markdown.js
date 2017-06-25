import React from "react";

export default class Markdown extends React.Component {
	
	mdChange(e) {
		const md = e.target.value;
		this.props.updateMd(md);
	}

	render() {
		return(
			<div id="markdown" className="half">
				<textarea id="mdinput" value={this.props.markdown} onChange={this.mdChange.bind(this)}/>
			</div>
		);
	}
}
