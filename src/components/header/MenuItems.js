import React from 'react'
import { Menu} from 'semantic-ui-react'
import Scroll from 'react-scroll'; 
let Link = Scroll.Link;

export default ({items, handleSetActive, handleToggle}) => {
	return  (
	<React.Fragment> {items.map(m => {
		return (
			<Menu.Item className="menu-item" as='a' to={m.tag} onClick={()=>this.handleSetActive(m)}>
				<Link to={m.tag} onClick={handleToggle} smooth={true} duration={500}>{m.label}</Link>
			</Menu.Item>
		)
	})}
	</React.Fragment>)
}