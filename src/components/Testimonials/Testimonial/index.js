import React from 'react'

import {DEFAULT_AVATAR} from '../../../common/globals'

export default({data}) => {
    return (
        <blockquote class="testimonial">
            <p>
                <i class="fa fa-quote-left" aria-hidden="true"></i>
                {data.content}
            </p>
            <footer>
                <div>
                    <img
                        alt="avatar"
                        class="avatar"
                        src={data.avatar ? data.avatar.secure_url : DEFAULT_AVATAR}
										/>
                    <cite>{data.name.first} {data.name.last}</cite>
                </div>
                <a target="_blank" href={data.website}>{data.website}</a>
            </footer>
        </blockquote>
    )
}