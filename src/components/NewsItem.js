import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
 
        return (
            <div>
                <div className="card my-2">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : '90%', zIndex : '1'}}>{source}
                </span>
                <img src={!imageUrl?"https://cdn.wionews.com/sites/default/files/styles/story_page/public/2021/04/08/190606-untitled-design-11.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p class="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read more</a>
                </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
