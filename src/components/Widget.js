import React from 'react';
//import { nanoid } from 'nanoid';

function Widget({ widget }) {
	console.log('массивы для виджетов', widget, widget.widgetName, widget.widgetBody);
	console.log('keys array', Object.keys(widget.widgetBody), widget.widgetBody.length);
	/*const item = widget.widgetBody.map(item => {
							console.log('ключи элемента', Object.keys(item));
							const arrayKeys= Object.keys(item);
								const newarr = arrayKeys.slice(1).map(itm => {
										return (
											<span className ='spanWidget' >
												{item[itm]}
											</span>
										);
									});
									*/
	return (
		<div className="widget">
			<ul className="title" >{widget.widgetName}</ul>

			{widget.widgetBody.map(item => {
				console.log('ключи элемента', Object.keys(item), item.id);
				const arrayKeys = Object.keys(item);
				const newarr = arrayKeys.slice(1).map(itm => {
					return (
						<span className='spanWidget' >
							{item[itm]}
						</span>
					);
				});
				return (<li key={item.id}>{newarr}</li>);
			})}

		</div>
	);
}

export default Widget;

