import React from 'react';
import Input from '../Input/Input';
import Select from '../Input/Select';
class Address extends React.Component{
	render(){
		return(
				<div className="editform p-3 rounded-lg bg-light">
					<form>	
						<h6 className="text-uppercase text-center">Your delivery address</h6>
						<p className="text-center">(Please complete your delivery address to place the order)</p>
						
						<Select name="type"
							    placeholder="Type of Address*"  
							    options={['Home','Office/Commercial']}
							    		/>

						<Input name="flat" 
							   type="text" 
							   placeholder="Flat/House No.*"
									     
						/>
						<Input name="street" 
							   type="text" 
							   placeholder="Street/Societ Name*"     
						/>
						<Input name="locality" 
							   type="text" 
							   placeholder="Locality / Town*"     
						/>
						<Input name="city" 
							   type="text" 
							   placeholder="City / District*"     
						/>
						<Input name="State" 
							   type="text" 
							   placeholder="State*"     
						/>
					</form>
				</div>
			)
	}
}

export default Address;