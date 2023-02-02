import React from "react";
//import PropTypes from "prop-types";
import { nanoid } from 'nanoid'

const SearchList = ({ links }) => {
	return (
		<div className="ui horizontal list">
			{links.map(link => (
				<a href="/" className="item" key={nanoid()}>
					{link.title}
				</a>
			))}
		</div>
	);
};
/*
SearchList.propTypes = {
	links: PropTypes.arrayOf(PropTypes.string.isRequired)
};
*/
export default SearchList;