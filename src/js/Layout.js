import React from "react";
import marked from "marked";

import Preview from "./Preview";
import Markdown from "./Markdown";


export default class Layout extends React.Component {
	constructor() {
		super();

		var md = "Heading\n"
				+ "=======\n\n"

				+ "Sub-heading\n"
				+ "-----------\n\n"
				 
				+ "### Another deeper heading\n\n"
				 
				+ "Paragraphs are separated\n"
				+ "by a blank line.\n\n"

				+ "Leave 2 spaces at the end of a line to do a\n" 
				+ "line break\n\n"

				+ "Text attributes *italic*, **bold**,\n" 
				+ "`monospace`, ~~strikethrough~~ .\n\n"

				+ "Shopping list:\n"
				+	"* apples\n"
				+	"* oranges\n"
				+	"* pears\n\n"

				+ "Numbered list:\n"
				+ "1. apples\n"
				+	"2. oranges\n"
				+	"3. pears\n";

		this.state = {
			md,
			parsedMd: this.parseMd(md)
		};
	}

	updateMd(md) {
		this.setState({md});
		this.setState({parsedMd : this.parseMd(md)});
	}

	parseMd(md) {
		return marked(md, {sanitize: true});
	}

	render() {
		return(
		<div>
			<h1 id="title">Markdown Previewer</h1>
			<Preview parsedMd={this.state.parsedMd}/>
			<Markdown updateMd={this.updateMd.bind(this)} markdown={this.state.md}/>
		</div>
		);
	}
}
