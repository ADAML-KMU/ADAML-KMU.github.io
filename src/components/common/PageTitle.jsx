import { Link } from 'react-router-dom'

function PageTitle({ title, subtitle, tabs, currentTab, basePath }) {
  return (
    <div className="container" id="area-title">
      <div className="article-title">
        <h1>{title}</h1>
        {subtitle && <h3>{subtitle}</h3>}
      </div>
      {tabs && tabs.length > 0 && (
        <div className="selector">
          <div className="btn-group" id="btn-category">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.path}
                className={`btn-rtg ${currentTab === tab.id ? 'btn-primary' : 'btn-monotone-1'}`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default PageTitle

