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
		if(this.state.openedTab !== e.target.name) {
			document.getElementById(e.target.name).style.display = "block";
			document.getElementById(e.target.name+"Btn").style.opacity = "1";
			document.getElementById(this.state.openedTab).style.display = "none";
			document.getElementById(this.state.openedTab+"Btn").style.opacity = "0.5";
		}
		console.log("data : "+e.target.tab);
		this.setState({
			openedTab : e.target.name
		});
	}
	
	render() {
		return (
			<div className="TabLinks">
				<button 
					className="option-tab option-tab-editor" 
					title="Open editor"
					onClick={this.openTab}
					name="Editor"
					id="EditorBtn">
					<i class="fa fa-edit"></i> Editor
				</button>
				<button 
					className="option-tab option-tab-previewer" 
					title="Open previewer"
					onClick={this.openTab}
					name="Previewer"
					id="PreviewerBtn">
					<i class="fa fa-eye"></i> Previewer
				</button>
				<button
					className="info-option option-tab"
					title="How to write">
					<i class="fa fa-info-circle"></i>
				</button>
			</div>
		);
	}
}

export default TabLinks;