import { useParams } from 'react-router-dom'
import PageTitle from '../components/common/PageTitle'

function Research() {
  const { tab } = useParams()
  const currentTab = tab || 'research1'

  const tabs = [
    { id: 'research1', label: 'Research 1', path: '/research' },
    { id: 'research2', label: 'Research 2', path: '/research/research2' },
    { id: 'research3', label: 'Research 3', path: '/research/research3' },
    { id: 'research4', label: 'Research 4', path: '/research/research4' },
    { id: 'research5', label: 'Research 5', path: '/research/research5' }
  ]

  const researchContent = {
    research1: {
      title: 'Aerospace',
      subtitle: 'sub title of the research',
      content: 'explain about research Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    research2: {
      title: 'Super Alloy',
      subtitle: 'sub title of the research',
      content: 'explain about research Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    research3: {
      title: 'Research 3',
      subtitle: 'sub title of the research',
      content: 'explain about research Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    research4: {
      title: 'Research 4',
      subtitle: 'sub title of the research',
      content: 'explain about research Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    research5: {
      title: 'Research 5',
      subtitle: 'sub title of the research',
      content: 'explain about research Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
  }

  const content = researchContent[currentTab]

  return (
    <>
      <PageTitle
        title="Research"
        subtitle="ADAML focuses on research in the following areas"
        tabs={tabs}
        currentTab={currentTab}
      />
      <div className="banner-img">
        <img src="" style={{ height: '300px' }} alt="" />
      </div>
      <h1>{content.title}</h1>
      <h3>{content.subtitle}</h3>
      <h6>{content.content}</h6>
    </>
  )
}

export default Research

