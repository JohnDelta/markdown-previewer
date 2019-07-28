import React from 'react';

class TabLinks extends React.Component {
	render() {
		return (
			<div className="TabLinks">
				<button className="option-tab" title="something">Markdown</button>
				<button className="option-tab" title="something">Previewer</button>
			</div>
		);
	}
}

export default TabLinks;