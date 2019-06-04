import React from 'react';
class Feedback extends React.Component{
	handleClick =(e) =>{
		e.preventDefault();
	}
	render(){
		return(
				<div className="container mx-5 my-2">
					<form onSubmit={this.handleClick}>
						<label>Feedback: </label>
						<textarea className="form-control" rows="5" />
						<button className="btn btn-success mt-2">Submit</button>
					</form>
				</div>
			)
	}
}
export default Feedback;