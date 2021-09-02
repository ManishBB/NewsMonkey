import React, { useEffect , useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
     

    const updateNews = async()=> {
      props.setProgress(10)
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        console.log(props.apiKey)
        props.setProgress(45)
        let parsedData = await data.json();
        props.setProgress(75)
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100)
    }

    useEffect(() => {
      document.title = `${capitalizeFirstLetter(props.category)} | NewsMonkey`
      updateNews();
      // eslint-disable-next-line
    }, [])

    const handlePrevClick = async ()=>{

      // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}`;
      // this.setState({loading : true})
      // let data = await fetch(url);
      // let parsedData = await data.json();

      // this.setState({
      //   page : page - 1,
      //   articles : parsedData.articles,
      //   loading : false
      // })

      setPage(page-1)
      updateNews();
    }

    const handleNextClick = async ()=>{
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        // this.setState({loading : true})
        // let data = await fetch(url);
        // let parsedData = await data.json();

        // this.setState({
        //   page : page + 1,
        //   articles : parsedData.articles,
        //   loading : false
        // })
        setPage(page+1)
        updateNews();
    }

    const fetchMoreData = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1)
      setLoading(true)
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData)
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
      setLoading(false)
    }

        return (
            <>
                <h2 className="text-center" style={{margin : '30px 0px', marginTop : '90px'}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
                {loading && <Spinner />}

                <InfiniteScroll
                  dataLength={articles.length}
                  next={fetchMoreData}
                  hasMore={articles.length !== totalResults}
                  loader={<Spinner />}
                >
                
                <div className="container">
                  <div className="row">
                      {articles.map((element)=>{
                          return <div className="col-md-4" key={element.url}>
                          <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                      </div>
                      })}
                  </div>
                </div>
                </InfiniteScroll>
                <div className="container d-flex justify-content-between">
                <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr;Previous</button>
                <button disabled={page+1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next&rarr;</button>
                </div>
            </>
        )
}

News.defaultProps = {
  country : "in",
  pageSize : 6,
  category : "general"
}

News.propTypes = {
  name : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string
}


export default News
