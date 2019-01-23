import React from 'react';

export default({children, icon}) => {
    return (
            <div class="ui card">
                <div class="content">
                    <i className={icon} aria-hidden="true"></i>
                    <div class="center aligned header">Technical consulting</div>
                    <div class="center aligned description">
                        <ul>
													{children}
                        </ul>
                    </div>
                </div>
            </div>
    )
}