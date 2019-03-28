import React from 'react';
import { Card } from 'semantic-ui-react'
import './style.css'
export default({children, icon, label}) => {
    return (
            <Card className="service-card" centered>
                <Card.Content>
									<Card.Header>
									<i className={icon} aria-hidden="true"></i>
									</Card.Header>
                    
                    <div class="center aligned header">{label}</div>
                    <div class="center aligned description">
                        <ul>
													{children}
                        </ul>
                    </div>
								</Card.Content>
            </Card>
    )
}