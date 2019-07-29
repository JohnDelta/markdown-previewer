import React from 'react';

class Previewer extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="Panel Previewer" id="Previewer">
				<div 
					id="PreviewerArea"
					className="previewer-textarea"
					dangerouslySetInnerHTML={{__html : this.props.markedText}}
				/>
			</div>
		);
	}
}

export default Previewer;