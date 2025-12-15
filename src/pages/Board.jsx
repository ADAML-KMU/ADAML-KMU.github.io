import { useParams, Link } from 'react-router-dom'
import PageTitle from '../components/common/PageTitle'
import noticesData from '../data/notice.json'
import awardsData from '../data/awards.json'
import galleryData from '../data/gallery.json'

function Board() {
  const { tab } = useParams()
  const currentTab = tab || 'notice'

  const tabs = [
    { id: 'notice', label: 'Notice', path: '/board' },
    { id: 'awards', label: 'Awards', path: '/board/awards' },
    { id: 'gallery', label: 'Gallery', path: '/board/gallery' }
  ]

  const renderContent = () => {
    switch (currentTab) {
      case 'notice':
        return (
          <div className="container">
            {noticesData.map((notice) => (
              <div key={notice.id} className="box-col gap10">
                <div className="box-row pd0">
                  <div className="group-align-left">
                    <img 
                      src={notice.image} 
                      className="img-profile-comment"
                      alt="Notice icon"
                    />
                    <h4>ADAML</h4>
                  </div>
                  <div className="btn-rtg btn-trans">{notice.date}</div>
                </div>
                <h5>{notice.title}</h5>
                <p style={{ lineHeight: "1.4" }}>
                  {notice.info}
                </p>
                <div className="box-row pd0 gap10">
                  <div className="group-align-left">
                    <div className="btn-rtg btn-monotone-1">{notice.category}</div>
                  </div>
                  <Link to={`/notice/${notice.id}`}>
                    <button className="btn-rtg btn-primary">
                      더보기
                    </button>
                  </Link>
                </div>
                <hr />
              </div>
            ))}
          </div>
        )
      case 'awards':
        return (
          <div className="container">
            {awardsData.map((award) => (
              <div key={award.id} className="box-col gap10">
                <div className="box-row pd0">
                  <div className="group-align-left">
                    <img 
                      src={award.image} 
                      className="img-profile-comment"
                      alt="Award icon"
                    />
                    <h4>ADAML</h4>
                  </div>
                  <div className="btn-rtg btn-trans">{award.date}</div>
                </div>
                <h5>{award.title}</h5>
                <p style={{ lineHeight: "1.4" }}>
                  {award.info}
                </p>
                <div className="box-row pd0 gap10">
                  <div className="group-align-left">
                    <div className="btn-rtg btn-monotone-1">{award.category}</div>
                  </div>
                  <Link to={`/award/${award.id}`}>
                    <button className="btn-rtg btn-primary">
                      더보기
                    </button>
                  </Link>
                </div>
                <hr />
              </div>
            ))}
          </div>
        )
      case 'gallery':
        return (
          <div className="container">
            {galleryData.map((gallery) => (
              <div key={gallery.id} className="box-col gap10">
                <div className="box-row pd0">
                  <div className="group-align-left">
                    <img 
                      src={gallery.image} 
                      className="img-profile-comment"
                      alt="Gallery icon"
                    />
                    <h4>ADAML</h4>
                  </div>
                  <div className="btn-rtg btn-trans">{gallery.date}</div>
                </div>
                <h5>{gallery.title}</h5>
                <p style={{ lineHeight: "1.4" }}>
                  {gallery.info}
                </p>
                <div className="box-row pd0 gap10">
                  <div className="group-align-left">
                    <div className="btn-rtg btn-monotone-1">{gallery.category}</div>
                  </div>
                  <Link to={`/gallery/${gallery.id}`}>
                    <button className="btn-rtg btn-primary">
                      더보기
                    </button>
                  </Link>
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

