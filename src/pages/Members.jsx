import { useParams } from 'react-router-dom'
import PageTitle from '../components/common/PageTitle'

function Members() {
  const { tab } = useParams()
  const currentTab = tab || 'pi'

  const tabs = [
    { id: 'pi', label: 'Principal Investigator', path: '/members' },
    { id: 'students', label: 'Students', path: '/members/students' },
    { id: 'alumni', label: 'Alumni', path: '/members/alumni' }
  ]

  const students = [
    { name: 'ChoHyeon Lee', email: 'cho0410@kookmin.ac.kr', position: 'Master Course', research: '연구 분야\n연구 분야\n연구 분야' },
    { name: 'WonHee Jo', email: 'jwonh0104@kookmin.ac.kr', position: 'Master Course', research: '연구 분야\n연구 분야\n연구 분야' },
    { name: 'JeongWoong Park', email: 'wjddnd636@kookmin.ac.kr', position: 'Master Course', research: '연구 분야\n연구 분야\n연구 분야' },
    { name: 'MinYeong Lee', email: '5368min@kookmin.ac.kr', position: 'Master Course', research: '연구 분야\n연구 분야\n연구 분야' },
    { name: 'MinYu Kang', email: 'kminyu@kookmin.ac.kr', position: 'Master Course', research: '연구 분야\n연구 분야\n연구 분야' },
    { name: 'SeongHyeon Yang', email: 'sorntmf@kookmin.ac.kr', position: 'Master Course', research: '연구 분야\n연구 분야\n연구 분야' },
    { name: 'SeungGyu Hong', email: 'hongsg4665@kookmin.ac.kr', position: 'Undergraduate student', research: '연구 분야\n연구 분야\n연구 분야' },
    { name: 'HyeonYeong Park', email: 'jury1390@kookmin.ac.kr', position: 'Undergraduate student', research: '연구 분야\n연구 분야\n연구 분야' },
    { name: 'DaWon Kang', email: 'dawon1242@kookmin.ac.kr', position: 'Undergraduate student', research: '연구 분야\n연구 분야\n연구 분야' },
    { name: 'HyeongJin Park', email: 'chemilk02@kookmin.ac.kr', position: 'Undergraduate student', research: '연구 분야\n연구 분야\n연구 분야' }
  ]

  const renderContent = () => {
    switch (currentTab) {
      case 'pi':
        return (
          <div className="container">
            <div className="card-bundle">
              <div className="text-card" style={{ width: '100%' }}>
                <div className="coupling">
                  <div className="group-align-std">
                    <div className="text-card-title"><h4>JaeBok Seol</h4></div>
                    <a href="mailto:jb.seol@kookmin.ac.kr" className="btn-sqr btn-monotone-1">
                      <span className="material-symbols-rounded">mail</span>
                    </a>
                  </div>
                  <div className="text-card-exp"><h5>Ph.D</h5></div>
                  <div className="text-card-body">
                    <div 
                      className="text-card-img" 
                      style={{ 
                        backgroundImage: 'url(/image/seol.png)', 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center' 
                      }}
                    />
                    <div className="text-card-text">
                      School of Materials Science and Engineering, Kookmin University,<br />
                      77, Jeongneung-ro, Seongbuk-gu, Seoul, 02707, Korea<br />
                      Tel | +82-2-910-4669<br />
                      E-mail | jb.seol@kookmin.ac.kr
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 'students':
        return (
          <div className="container">
            <div className="card-bundle">
              {students.map((student, index) => (
                <div key={index} className="text-card">
                  <div className="coupling">
                    <div className="group-align-std">
                      <div className="text-card-title"><h4>{student.name}</h4></div>
                      <a href={`mailto:${student.email}`} className="btn-sqr btn-monotone-1">
                        <span className="material-symbols-rounded">mail</span>
                      </a>
                    </div>
                    <div className="text-card-exp"><h5>{student.position}</h5></div>
                    <div className="text-card-body">
                      <div className="text-card-text">
                        {student.research.split('\n').map((line, i) => (
                          <span key={i}>{line}<br /></span>
                        ))}
                        Tel | +82-2-910-5014<br />
                        E-mail | {student.email}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'alumni':
        return (
          <div className="container">
            <h3>Alumni information will be updated soon.</h3>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <PageTitle
        title="Members"
        subtitle="Members of ADAML"
        tabs={tabs}
        currentTab={currentTab}
      />
      {renderContent()}
    </>
  )
}

export default Members

