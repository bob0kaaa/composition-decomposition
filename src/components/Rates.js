import React from "react";
import PropTypes from "prop-types";
import { nanoid } from 'nanoid'

// Список курсов валют

const Rates = ({ rates }) => {
	console.log('rates', rates);
	return (
		<div className='ui horizontal list'>
			{rates.map(item => (
				<p className="item" key={nanoid()}>
					<span>
						{item.currencyOrName} {item.rate}
					</span>{" "}
					{item.growth}
				</p>
			))}
		</div>
	);
};
/*
Rates.propTypes = {
	rates: PropTypes.arrayOf(
		PropTypes.shape({
			currencyOrName: PropTypes.string.isRequired,
			rate: PropTypes.string.isRequired,
			growth: PropTypes.string.isRequired
		})
	)
};
*/
Rates.propTypes = {
	rates: PropTypes.array.isRequired
};

export default Rates;