import { Link } from 'react-router-dom'

function ArticleCard({ article, type = 'journal' }) {
  const isNotice = type === 'notice'
  
  return (
    <div className="container">
      <div className="box-row mg0">
        {isNotice ? (
          <Link to={article.link} className="box-article-link">
            <div 
              className="box-article-img" 
              style={{ 
                backgroundImage: `url(${article.image})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
            />
            <div className="box-article-text">
              <div className="box-article-title">
                <h5>{article.title}</h5>
              </div>
              <div className="box-article-info">{article.info}</div>
              <div className="box-article-catag">
                <div className="btn-group">
                  <div className="btn-rtg btn-monotone-2">{article.category}</div>
                  <div className="btn-rtg btn-monotone-1">{article.date}</div>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <a href={article.doi} className="box-article-link" target="_blank" rel="noopener noreferrer">
            <div 
              className="box-article-img" 
              style={{ 
                backgroundImage: `url(${article.image})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
            />
            <div className="box-article-text">
              <div className="box-article-title">
                <h5>{article.title}</h5>
              </div>
              <div className="box-article-info">doi: {article.doi}</div>
              <div className="box-article-catag">
                <div className="btn-group">
                  <div className="btn-rtg btn-monotone-2">{article.journal}</div>
                  <div className="btn-rtg btn-monotone-1">{article.date}</div>
                </div>
              </div>
            </div>
          </a>
        )}
      </div>
      <hr />
    </div>
  )
}

export default ArticleCard

