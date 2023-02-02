import React from "react";
//import PropTypes from "prop-types";
import { nanoid } from 'nanoid';


const News = ({ listTitle, listNews }) => {
	return (
		<>
			<div>
				<div className="ui horizontal list">
					{listTitle.map(link => (
						<a href="/" className="item" key={nanoid()}>
							{link}
						</a>
					))}
					{new Date(Date.now()).toLocaleString()}

				</div>

				<div className="ui vertikal list">
					{listNews.map(link => (
						<a href="/" className="item" key={nanoid()}>
							{link.text}
						</a>
					))}

				</div>
			</div>
		</>
	);
};
/*
SearchList.propTypes = {
	links: PropTypes.arrayOf(PropTypes.string.isRequired)
};
*/
export default News;