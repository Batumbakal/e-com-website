import React from 'react';
import MenuItem from '../menu-item/menu-item.comp';

class Directory extends React.Component{
	constructor(){
		super();
		this.state = {
			sections: [{
				title: 'hats',
				surl: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&auto=format&fit=crop&w=648&q=80',
				id:1
			},{
				title: 'jackets',
				surl: 'https://images.unsplash.com/photo-1545594861-3bef43ff2fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
				id:2
			},{
				title: 'sneakers',
				surl: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
				id:3
			},{
				title: 'womens',
				surl: 'https://images.unsplash.com/photo-1526246363973-dc1d8eecf33c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
				id:4
			},{
				title: 'mens',
				surl: 'https://images.unsplash.com/photo-1505908378719-e47cd73d34f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
				id:5
			}]
		}
	}
	render(){
		return (this.state.sections.map(({title, surl, id}) => (
				<MenuItem key={id} title={title} surl={surl}/>
			)));
	}
}

export default Directory;