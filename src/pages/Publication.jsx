import { useParams } from 'react-router-dom'
import PageTitle from '../components/common/PageTitle'
import ArticleCard from '../components/common/ArticleCard'
import journalData from '../data/journal.json'
import patentData from '../data/patent.json'

function Publication() {
  const { tab } = useParams()
  const currentTab = tab || 'journals'

  const tabs = [
    { id: 'journals', label: 'Journals', path: '/publication' },
    { id: 'conferences', label: 'Conferences', path: '/publication/conferences' },
    { id: 'patents', label: 'Patents', path: '/publication/patents' }
  ]

  const renderContent = () => {
    switch (currentTab) {
      case 'journals':
        return (
          <div id="journal-container">
            {journalData.map((article, index) => (
              <ArticleCard key={index} article={article} type="journal" />
            ))}
          </div>
        )
      case 'conferences':
        return (
          <div className="container">
            <h3>Conferences content will be added soon.</h3>
          </div>
        )
      case 'patents':
        return (
          <div id="patent-container">
            {patentData.map((patent, index) => (
              <div key={index} className="container">
                <div className="box-row mg0">
                  <div className="box-article-text">
                    <div className="box-article-title">
                      <h5>{patent.title}</h5>
                    </div>
                    <div className="box-article-info">
                      Patent Number: {patent.patentNumber}
                    </div>
                    <div className="box-article-catag">
                      <div className="btn-group">
                        <div className="btn-rtg btn-monotone-2">{patent.country}</div>
                        <div className="btn-rtg btn-monotone-1">{patent.date}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <PageTitle
        title="Publication"
        subtitle="Link to ADAML's publications, including journals"
        tabs={tabs}
        currentTab={currentTab}
      />
      {renderContent()}
    </>
  )
}

export default Publication

