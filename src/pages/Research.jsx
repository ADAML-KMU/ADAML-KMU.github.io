import { useParams } from 'react-router-dom'
import PageTitle from '../components/common/PageTitle'
import researchData from '../data/research.json'

function Research() {
  const { tab } = useParams()
  const currentTab = tab || 'microstructure-analysis'

  const tabs = [
    { id: 'microstructure-analysis', label: 'Microstructure Analysis', path: '/research' },
    { id: 'aerospace-defense', label: 'Aerospace and Defense Materials', path: '/research/aerospace-defense' },
    { id: 'high-entropy-alloy', label: 'High Entropy Alloys', path: '/research/high-entropy-alloy' },
    { id: 'additive-manufacturing', label: 'Additive Manufacturing', path: '/research/additive-manufacturing' },
    { id: 'ai-material-analysis', label: 'AI Material Analysis', path: '/research/ai-material-analysis' }
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
