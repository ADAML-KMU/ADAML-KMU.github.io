import { useParams } from 'react-router-dom'
import PageTitle from '../components/common/PageTitle'

function NoticeDetail() {
  const { id } = useParams()

  const noticeContent = {
    '1': {
      title: '설재복 교수님, 2025 세계 최상위 2% 연구자 선정',
      date: '2025.11.19',
      category: '수상',
      content: `스탠퍼드 대학 발표 세계 최상위 2% 연구자에 선정되었습니다.

자세한 내용은 추후 업데이트 예정입니다.`
    },
    '2': {
      title: '2025 대학원생 모집 안내',
      date: '2024.12.01',
      category: '모집',
      content: `2025학년도 석사 및 박사 과정 신입생을 모집합니다.

자세한 내용은 추후 업데이트 예정입니다.`
    },
    '3': {
      title: '연구실 세미나 개최 안내',
      date: '2024.11.15',
      category: '세미나',
      content: `2024 가을학기 연구실 세미나를 개최합니다.

자세한 내용은 추후 업데이트 예정입니다.`
    }
  }

  const notice = noticeContent[id] || { title: 'Notice not found', content: '' }

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

