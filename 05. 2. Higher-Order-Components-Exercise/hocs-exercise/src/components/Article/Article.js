import React from 'react';
import './Article.css';
import withWarning from './../../hocs/withWarning';


const Article = (props) => {
    return (
        <article>
            {/* {this.undefined()} */}
            <header><span className="title">Article Title</span></header>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magni labore voluptatibus. Vel sunt voluptate fugiat et ducimus voluptates doloremque, eum illo exercitationem dignissimos sequi cum, id molestiae debitis atque.</p>
        </article>
    )
}


const ArticleWithWarning =  withWarning(Article)

export default Article; 

export {
    ArticleWithWarning
} 