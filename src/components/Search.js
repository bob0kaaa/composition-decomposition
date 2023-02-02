import React from "react";
//import PropTypes from "prop-types";
// import { nanoid } from 'nanoid'
import SearchList from './SearchList'

const Search = ({ titles }) => {
	return (
		<>
			<SearchList links={titles} />
			<div className="input">
				<input type="text" placeholder="Search..." />
				<div className="ui button"><b>Найдется все. Например</b> {'example text...'}</div>
			</div>

		</>
	);
};

/*Search.propTypes = {
	example: PropTypes.string.isRequired,
};
*/
export default Search;