import PageTitle from '../components/common/PageTitle'

function Facility() {
  const facilities = [
    { name: '장비명', intro: '장비 한 줄 소개', description: '장비 설명, 위치 등등', image: '/image/emblem_color.svg' },
    { name: '장비명', intro: '장비 한 줄 소개', description: '장비 설명, 위치 등등', image: '/image/emblem_color.svg' },
    { name: '장비명', intro: '장비 한 줄 소개', description: '장비 설명, 위치 등등', image: '/image/emblem_color.svg' },
    { name: '장비명', intro: '장비 한 줄 소개', description: '장비 설명, 위치 등등', image: '/image/emblem_color.svg' },
    { name: '장비명', intro: '장비 한 줄 소개', description: '장비 설명, 위치 등등', image: '/image/emblem_color.svg' }
  ]

  return (
    <>
      <PageTitle
        title="Facility"
        subtitle="Facility of ADAML"
      />
      <div className="container">
        <div className="card-bundle">
          {facilities.map((facility, index) => (
            <div key={index} className="text-card">
              <div className="coupling">
                <div className="text-card-title"><h4>{facility.name}</h4></div>
                <div className="text-card-exp"><h5>{facility.intro}</h5></div>
                <div className="text-card-body">
                  <div 
                    className="text-card-img" 
                    style={{ 
                      backgroundImage: `url(${facility.image})`, 
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center' 
                    }}
                  />
                  <div className="text-card-text">{facility.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Facility

