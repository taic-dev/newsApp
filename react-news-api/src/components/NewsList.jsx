import React from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const NewsList = ({ newsData,category,hamburgerMenuOpen }) => {

  return (
    <main className='newslist-wrapper'>
      <div className="newslist-title">
        <h2>{category}</h2>
        <div className='hamburger-button'>
          <DensityMediumIcon onClick={hamburgerMenuOpen} />
        </div>
      </div>
      <ul className="newslist">
        { newsData.articles !== undefined && 
          newsData.articles.map((data,key) => {
          return(
          <a key={key} href={data.url} className="newslist-item">
            <li>
              <div className="newslist-img">
                <img src={data.urlToImage} alt="ニュース画像" />
              </div>
              <div className="newslist-desc">
                <div className="newslist-author">
                  <p>{data.author}</p>
                </div>
                <h3>{data.title}</h3>
              </div>
            </li>
          </a>
          )
        })}
      </ul>
      <p className='newsapi'><a href="https://newsapi.org/">Powered by News API</a></p>
    </main>
  )
}

export default NewsList
