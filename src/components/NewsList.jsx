import React, { useState, useEffect } from 'react';

const NewsList = () => {

    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        fetchLatestNews();
    }, []);

    const fetchLatestNews = async () => {

        const res = await fetch(
          `https://newsapi.org/v2/everything?q=Technology&apiKey=5ca6bdcc309c426a9bb262ce6f1a6b81`
        ).then((res) => res.json());
        console.log(res.articles);
        setAllNews(res.articles);
      };

      let count = 0;

    return (
        <>  
            <div className="container">
                {allNews.map((news) => (
                    <div className="news-block" key={count++}>
                        <figure className="news-img">
                            <img src={news.urlToImage} alt="News Thumb" />
                        </figure>
                        <div className="news-content">
                            <h3 className="news-title">{news.title}</h3>
                            <p className="post-details"><strong>short</strong> by {news.author} / {news.publishedAt} </p>
                            <div className="news-description">{news.description}</div>
                            <div className="space-2"></div>
                            <div className="news-link">read more at 
                                <a href={news.url} target="_blank" rel="noreferrer"> {news.source.name}</a>
                            </div>
                            <div className="space-1"></div>
                        </div>
                    </div>
                ))}                
            </div>
        </>
    );
};

export default NewsList;