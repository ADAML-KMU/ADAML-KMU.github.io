import { Link } from 'react-router-dom'
import ArticleCard from '../components/common/ArticleCard'
import noticesData from '../data/notice.json'

function Home() {
  // 최신 3개의 공지사항만 가져오기
  const notices = noticesData.slice(0, 3).map(notice => ({
    ...notice,
    link: `/notice/${notice.id}`
  }))

  const publications = [
    {
      title: 'Multi-scale design of deformation mechanisms at hetero-zone boundaries: Dual HDI strengthening driven by TRIP effect',
      doi: 'https://doi.org/10.1016/j.jmst.2025.01.032',
      image: '/image/journal/journal128.png',
      journal: 'JMST',
      date: '2025.03.08.'
    },
    {
      title: 'Simple and scalable manufacturing of metal/carbon hybrid EMI shielding fabric across a broad frequency range',
      doi: 'https://doi.org/10.1016/j.jmrt.2025.01.094',
      image: '/image/journal/journal127.png',
      journal: 'JMR&T',
      date: '2024.03.01'
    },
    {
      title: 'Complex deformation behavior of a partially recrystallized metastable medium-entropy alloy: In-situ synchrotron X-ray diffraction study',
      doi: 'https://doi.org/10.1016/j.actamat.2025.120757',
      image: '/image/journal/journal126.png',
      journal: 'Acta',
      date: '2025.03.01.'
    }
  ]

  return (
    <>
      <Link to="/request">
        <div className="btn-hover">
          <span className="material-symbols-rounded">contact_support</span>
        </div>
      </Link>
      <div id="main-contents-container">
        <div 
          className="banner-img" 
          style={{ 
            backgroundImage: 'url(/image/main_banner.jpg)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        />
        <h5>Notice</h5>
        {notices.map((notice, index) => (
          <ArticleCard key={index} article={notice} type="notice" />
        ))}
        <br />
        <h5>Publication</h5>
        {publications.map((publication, index) => (
          <ArticleCard key={index} article={publication} type="journal" />
        ))}
      </div>
    </>
  )
}

export default Home

