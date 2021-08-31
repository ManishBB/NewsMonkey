import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
 
        return (
            <div>
                <div className="card" style={{width: '18rem'}}>
                <img src={!imageUrl?"https://cdn.wionews.com/sites/default/files/styles/story_page/public/2021/04/08/190606-untitled-design-11.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read more</a>
                </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
