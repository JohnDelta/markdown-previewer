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
			document.getElementById(this.state.openedTab).style.display = "none";
		}
		this.setState({
			openedTab : e.target.name
		});
	}
	
	render() {
		return (
			<div className="TabLinks">
				<button 
					className="option-tab" 
					title="Open editor"
					onClick={this.openTab}
					name="Editor">
					Editor
				</button>
				<button 
					className="option-tab" 
					title="Open previewer"
					onClick={this.openTab}
					name="Previewer">
					Previewer
				</button>
			</div>
		);
	}
}

export default TabLinks;