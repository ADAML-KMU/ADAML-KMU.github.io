import { useParams, Link } from 'react-router-dom'
import PageTitle from '../components/common/PageTitle'
import awardsData from '../data/awards.json'

function AwardDetail() {
  const { id } = useParams()

  // ID를 숫자로 변환하여 해당 수상 내역 찾기
  const award = awardsData.find(award => award.id === parseInt(id)) || { 
    title: 'Award not found', 
    content: 'The requested award does not exist.',
    category: '',
    date: ''
  }

  return (
    <>
      <div className="container" style={{ marginBottom: '20px' }}>
        <div className="box-row pd0" style={{ alignItems: 'center', gap: '10px' }}>
          <Link to="/board/awards" style={{ display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none', color: 'inherit' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '20px' }}>arrow_back</span>
            <span>Board</span>
          </Link>
          <span style={{ color: '#999' }}>/</span>
          <span style={{ color: '#666' }}>Awards</span>
        </div>
      </div>
      <PageTitle
        title={award.title}
      />
      <div className="container" style={{ marginBottom: '20px' }}>
        <div className="box-row pd0 gap10">
          <div className="group-align-left">
            <div className="btn-rtg btn-monotone-1">{award.category}</div>
            <div className="btn-rtg btn-monotone-1">{award.date}</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card-col" style={{ width: '100%' }}>
          <div className="coupling">
            <div className="box-col gap10">
              {award.image && (
                <div style={{ width: '100%', marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
                  <img 
                    src={award.image} 
                    alt="Award" 
                    style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '400px', borderRadius: '8px', objectFit: 'contain' }} 
                  />
                </div>
              )}
              <div className="text-card-text" style={{ whiteSpace: 'pre-wrap' }}>
                {award.content}
              </div>
              
              {award.source_links && award.source_links.length > 0 && (
                <div className='box-col pd0 gap10'>
                  <hr/>
                  <h6>출처</h6>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {award.source_links.map((link, index) => (
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

export default AwardDetail


