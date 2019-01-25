import React from 'react';
import {icons} from '../../common/icons'
import {find} from 'lodash'

export default({tags}) => {
    return (
        <ul>
            {tags
                .map(tag => {
                    let obj = find(icons, {tag: tag});
                    return <li>
                        <i class={obj.icon}></i>
                    </li>
                })}
        </ul>
    )
}