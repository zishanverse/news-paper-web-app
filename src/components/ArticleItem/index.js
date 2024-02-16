import React from 'react'
import {Link} from 'react-router-dom'
import {ItemCard, Img, ItemCardContent, ItemHead, ItemBtn} from './styledComponent'
import '../../App.css'

const ArticleItem = props => {
    const {item} = props
    const {id, urlToImage, title, description} = item

    return (
        <Link className='link' to={`/articles/${id}`}>
            <li>
        <ItemCard>
            <Img src={urlToImage} alt={title}/>
            <ItemCardContent>
                <div>
                    <ItemHead>{title}</ItemHead>
                    <ItemHead as="p" content>{description.slice(0, 50)}...</ItemHead>
                </div>
                <Link to={`/articles/${id}`} className="link" >
                    <ItemBtn type="button">Read More</ItemBtn>
                </Link>
            </ItemCardContent>
        </ItemCard>
        </li>
        </Link>
    )
}

export default ArticleItem