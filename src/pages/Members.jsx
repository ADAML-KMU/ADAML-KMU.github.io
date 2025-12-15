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
          <>
            <div className="container">
              <div className="member-card">
                <div className="member-img-container">
                  <div 
                    className="member-img"
                    style={{ 
                      backgroundImage: `url(${encodeURI('/image/member/설재복 교수님 프로필.jpg')})`
                    }}
                  />
                </div>
                <div className="member-info">
                  <h2 className="member-name">JaeBok Seol</h2>
                  <div className="member-position">Ph.D</div>
                  <div className="member-contact-group">
                    <div className="member-contact-label">Tel:</div>
                    <div className="member-contact-value">+82-2-910-4669</div>
                  </div>
                  <div className="member-contact-group">
                    <div className="member-contact-label">E-mail:</div>
                    <div className="member-contact-value">jb.seol@kookmin.ac.kr</div>
                  </div>
                  <div className="member-address">
                    School of Materials Science and Engineering, Kookmin University,<br />
                    77, Jeongneung-ro, Seongbuk-gu, Seoul, 02707, Korea
                  </div>
                </div>
              </div>
            </div>

            <div className="education-career-container">
              <div className="education-section">
                <div className="section-header">Education</div>
                <div className="section-content">
                  <div className="education-item">
                    <div className="degree-line">PhD, Mar. 2004 - Feb. 2011</div>
                    <div className="degree-line">Department of Materials Science and Engineering, POSTECH</div>
                  </div>
                  <div className="education-item">
                    <div className="degree-line">BSc, Mar. 1997 - Feb. 2004</div>
                    <div className="degree-line">Department of Materials Science and Engineering, KOREA University</div>
                  </div>
                </div>
              </div>

              <div className="career-section">
                <div className="section-header">Career</div>
                <div className="section-content">
                  <div className="career-timeline">
                    <div className="career-item">
                      <div className="career-period">March 2022 - Present</div>
                      <div className="career-details">
                        <div className="career-title">Associate Professor</div>
                        <div className="career-location">Department of Materials Science and Engineering, Kookmin Univ</div>
                      </div>
                    </div>
                    <div className="career-item">
                      <div className="career-period">March 2015 - February 2022</div>
                      <div className="career-details">
                        <div className="career-title">Assistant Professor</div>
                        <div className="career-location">Department of Materials Science and Engineering, Kookmin Univ</div>
                      </div>
                    </div>
                    <div className="career-item">
                      <div className="career-period">May 2012 - February 2015</div>
                      <div className="career-details">
                        <div className="career-title">Senior Researcher</div>
                        <div className="career-location">Korea Institute of Materials Science (KIMS)</div>
                      </div>
                    </div>
                    <div className="career-item">
                      <div className="career-period">March 2011 - April 2012</div>
                      <div className="career-details">
                        <div className="career-title">Research Professor</div>
                        <div className="career-location">Department of Green Energy Engineering, Sangmyung Univ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      case 'students':
        return (
          <div className="container members-grid">
            {students.map((student, index) => (
              <div key={index} className="member-card">
                {student.image && (
                  <div className="member-img-container">
                    <div
                      className="member-img"
                      style={{
                        backgroundImage: `url(${encodeURI(student.image)})`
                      }}
                    />
                  </div>
                )}
                <div className="member-info">
                  <h2 className="member-name">{student.name}</h2>
                  <div className="member-position">{student.position}</div>
                  <div className="member-contact-group">
                    <div className="member-contact-label">Tel:</div>
                    <div className="member-contact-value">+82-2-910-5014</div>
                  </div>
                  <div className="member-contact-group">
                    <div className="member-contact-label">E-mail:</div>
                    <div className="member-contact-value">{student.email}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      case 'alumni':
        return (
          <div className="container members-grid">
            {alumni.map((member, index) => (
              <div key={index} className="member-card">
                <div className="member-info" style={{ width: '100%' }}>
                  <h2 className="member-name">{member.name}</h2>
                  <div className="member-position">{member.degree} ({member.graduationYear})</div>
                  <div className="member-contact-group">
                    <div className="member-contact-label">Current Position:</div>
                    <div className="member-contact-value">{member.employment}</div>
                  </div>
                  {member.email && (
                    <div className="member-contact-group">
                      <div className="member-contact-label">Contact:</div>
                      <div className="member-contact-value">{member.email}</div>
                    </div>
                  )}
                </div>
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

