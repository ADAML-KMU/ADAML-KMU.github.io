import { useParams, Link } from 'react-router-dom'
import PageTitle from '../components/common/PageTitle'
import noticesData from '../data/notice.json'

function NoticeDetail() {
  const { id } = useParams()

  // ID를 숫자로 변환하여 해당 공지사항 찾기
  const notice = noticesData.find(notice => notice.id === parseInt(id)) || { 
    title: 'Notice not found', 
    content: 'The requested notice does not exist.',
    category: '',
    date: ''
  }

  return (
    <>
      <div className="container" style={{ marginBottom: '20px' }}>
        <div className="box-row pd0" style={{ alignItems: 'center', gap: '10px' }}>
          <Link to="/board" style={{ display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none', color: 'inherit' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '20px' }}>arrow_back</span>
            <span>Board</span>
          </Link>
          <span style={{ color: '#999' }}>/</span>
          <span style={{ color: '#666' }}>Notice</span>
        </div>
      </div>
      <PageTitle
        title={notice.title}
      />
      <div className="container" style={{ marginBottom: '20px' }}>
        <div className="box-row pd0 gap10">
          <div className="group-align-left">
            <div className="btn-rtg btn-monotone-1">{notice.category}</div>
            <div className="btn-rtg btn-monotone-1">{notice.date}</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card-col" style={{ width: '100%' }}>
          <div className="coupling">
            <div className="box-col gap10">
              {notice.image && (
                <div style={{ width: '100%', marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
                  <img 
                    src={notice.image} 
                    alt="Notice" 
                    style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '400px', borderRadius: '8px', objectFit: 'contain' }} 
                  />
                </div>
              )}
              <div className="text-card-text" style={{ whiteSpace: 'pre-wrap' }}>
                {notice.content}
              </div>
              
              {notice.source_links && notice.source_links.length > 0 && (
                <div className='box-col pd0 gap10'>
                  <hr/>
                  <h6>출처</h6>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {notice.source_links.map((link, index) => (
                      <li key={index} style={{ marginBottom: '5px' }}>
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: '#0066cc', textDecoration: 'none', fontSize: '14px' }}
                        >
                          {link.title} <span className="material-symbols-rounded" style={{ fontSize: '14px', verticalAlign: 'middle' }}>open_in_new</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NoticeDetail

