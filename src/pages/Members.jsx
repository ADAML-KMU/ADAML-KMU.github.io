import { useParams } from 'react-router-dom'
import PageTitle from '../components/common/PageTitle'
import students from '../data/students.json'
import alumni from '../data/alumni.json'

function Members() {
  const { tab } = useParams()
  const currentTab = tab || 'pi'

  const tabs = [
    { id: 'pi', label: 'Principal Investigator', path: '/members' },
    { id: 'students', label: 'Students', path: '/members/students' },
    { id: 'alumni', label: 'Alumni', path: '/members/alumni' }
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
            <div className="card-bundle">
              {alumni.map((member, index) => (
                <div key={index} className="text-card">
                  <div className="coupling">
                    <div className="group-align-std">
                      <div className="text-card-title"><h4>{member.name}</h4></div>
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="btn-sqr btn-monotone-1">
                          <span className="material-symbols-rounded">mail</span>
                        </a>
                      )}
                    </div>
                    <div className="text-card-exp"><h5>{member.degree} ({member.graduationYear})</h5></div>
                    <div className="text-card-body">
                      <div className="text-card-text">
                        Current Position | {member.employment}<br />
                        Contact | {member.email}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

