import React from "react";
import Widget from "./Widget";

const Widgets = ({ items }) => {
	console.log('массивы для виджетов', items[0], items[4]);

	return (
		<div className="horizontal">
			<div className="segment">
				<Widget widget={items[0]} />
				<Widget widget={items[4]} />
			</div>
			<div className="segment">
				<Widget widget={items[1]} />
				<Widget widget={items[3]} />
			</div>
			<div className="segment">
				<Widget widget={items[2]} />
			</div>
		</div>
	);
};

export default Widgets;