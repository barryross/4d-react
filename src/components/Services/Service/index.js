import React from 'react';
import { Card } from 'semantic-ui-react'

export default({children, icon}) => {
    return (
            <Card centered>
                <Card.Content>
                    <i className={icon} aria-hidden="true"></i>
                    <div class="center aligned header">Technical consulting</div>
                    <div class="center aligned description">
                        <ul>
													{children}
                        </ul>
                    </div>
								</Card.Content>
            </Card>
    )
}