import { useParams } from 'react-router-dom'
import PageTitle from '../components/common/PageTitle'
import researchData from '../data/research.json'

function Research() {
  const { tab } = useParams()
  const currentTab = tab || 'aerospace'

  const tabs = [
    { id: 'aerospace', label: 'Aerospace', path: '/research' },
    { id: 'defense', label: 'Defense', path: '/research/defense' },
    { id: 'ai-analysis', label: 'AI Analysis', path: '/research/ai-analysis' },
    { id: 'super-alloy', label: 'Super Alloy', path: '/research/super-alloy' }
  ]

  const content = researchData[currentTab]

  return (
    <>
      <PageTitle
        title="Research"
        subtitle="ADAML focuses on research in the following areas"
        tabs={tabs}
        currentTab={currentTab}
      />
      <div className="banner-img">
        <img 
          src={content?.image || ''} 
          style={{ height: '300px', width: '100%', objectFit: 'cover' }} 
          alt={content?.title || 'Research Image'} 
        />
      </div>
      <h1>{content?.title}</h1>
      <h3>{content?.subtitle}</h3>
      <h6 style={{ whiteSpace: 'pre-line' }}>
        {content?.contentEn}
        <br /><br />
        {content?.contentKo}
      </h6>
    </>
  )
}

export default Research
