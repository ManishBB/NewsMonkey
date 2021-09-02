import React from 'react'

const NewsItem = (props) => {

    let {title, description, imageUrl, newsUrl, author, date, source} = props;
 
        return (
            <div>
                <div className="card my-2">
                <div style={{
                    display : 'flex',
                    justifyContent : 'flex-end',
                    position : 'absolute',
                    right : 0
                }}>
                <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                
                <img src={!imageUrl?"https://cdn.wionews.com/sites/default/files/styles/story_page/public/2021/04/08/190606-untitled-design-11.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read more</a>
                </div>
                </div>
            </div>
        )
}

export default NewsItem
