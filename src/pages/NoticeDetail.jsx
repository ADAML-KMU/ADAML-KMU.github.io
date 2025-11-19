import { useParams } from 'react-router-dom'
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
      <PageTitle
        title={notice.title}
        subtitle={`${notice.category} - ${notice.date}`}
      />
      <div className="container">
        <div className="text-card" style={{ width: '100%' }}>
          <div className="coupling">
            <div className="text-card-body">
              <div className="text-card-text" style={{ whiteSpace: 'pre-wrap' }}>
                {notice.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NoticeDetail

