import React from 'react';

class TabLinks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openedTab : ""
		};
		this.openTab = this.openTab.bind(this);
	}
	
	componentWillMount() {
		this.setState({
			openedTab : "Editor"
		});
	}

	openTab = (e) => {
		if(e.target.id === "EditorBtn" && this.state.openedTab !== "Editor") {
			document.getElementById("Editor").style.display = "flex";
			document.getElementById("EditorBtn").style.opacity = "1";
			document.getElementById("Previewer").style.display = "none";
			document.getElementById("PreviewerBtn").style.opacity = "0.5";
			this.setState({
				openedTab : "Editor"
			});
		} else if (e.target.id === "PreviewerBtn" && this.state.openedTab !== "Previewer") {
			document.getElementById("Previewer").style.display = "flex";
			document.getElementById("PreviewerBtn").style.opacity = "1";
			document.getElementById("Editor").style.display = "none";
			document.getElementById("EditorBtn").style.opacity = "0.5";
			this.setState({
				openedTab : "Previewer"
			});
		}
	}
	
	render() {
		return (
			<div className="TabLinks">
				<button 
					className="option-tab option-tab-editor" 
					title="Open editor"
					onClick={this.openTab}
					id="EditorBtn">
					<i className="fa fa-edit"></i> Editor
				</button>
				<button 
					className="option-tab option-tab-previewer" 
					title="Open previewer"
					onClick={this.openTab}
					id="PreviewerBtn">
					<i className="fa fa-eye"></i> Previewer
				</button>
				<button
					className="info-option option-tab"
					title="How to write">
					<i className="fa fa-info-circle"></i>
				</button>
			</div>
		);
	}
}

export default TabLinks;