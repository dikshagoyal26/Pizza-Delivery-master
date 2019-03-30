import React from 'react';
class Feedback extends React.Component{
	render(){
		return(
				<div className="container mx-5">
					<form>
						<label>Feedback: </label>
						<textarea className="form-control" rows="5" />
						<button className="btn btn-success">Submit</button>
					</form>
				</div>
			)
	}
}
export default Feedback;