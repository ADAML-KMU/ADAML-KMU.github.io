import { useParams } from 'react-router-dom'
import PageTitle from '../components/common/PageTitle'

function Board() {
  const { tab } = useParams()
  const currentTab = tab || 'notice'

  const tabs = [
    { id: 'notice', label: 'Notice', path: '/board' },
    { id: 'awards', label: 'Awards', path: '/board/awards' },
    { id: 'gallery', label: 'Gallery', path: '/board/gallery' }
  ]

  const notices = [
    {
      title: '공지사항입니당',
      subtitle: '수상 실적에 대한 공지사항입니당',
      content: '얍얍\n얍얍\n얍얍\n?'
    },
    {
      title: '공지사항입니당',
      subtitle: '수상 실적에 대한 공지사항입니당',
      content: '얍얍\n얍얍\n얍얍\n?'
    }
  ]

  const renderContent = () => {
    switch (currentTab) {
      case 'notice':
        return (
          <div className="container">
            <div className="card-bundle">
              {notices.map((notice, index) => (
                <div key={index} className="text-card">
                  <div className="coupling">
                    <div className="group-align-std">
                      <div className="text-card-title"><h4>{notice.title}</h4></div>
                      <button className="btn-sqr btn-monotone-1">
                        <span className="material-symbols-rounded">arrow</span>
                      </button>
                    </div>
                    <div className="text-card-exp"><h5>{notice.subtitle}</h5></div>
                    <div className="text-card-body">
                      <div className="text-card-text">
                        {notice.content.split('\n').map((line, i) => (
                          <span key={i}>{line}<br /></span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'awards':
        return (
          <div className="container">
            <h3>Awards content will be added soon.</h3>
          </div>
        )
      case 'gallery':
        return (
          <div className="container">
            <h3>Gallery content will be added soon.</h3>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <PageTitle
        title="Board"
        subtitle="Activity history of ADAML"
        tabs={tabs}
        currentTab={currentTab}
      />
      {renderContent()}
    </>
  )
}

export default Board

