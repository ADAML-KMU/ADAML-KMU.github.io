import { Link } from 'react-router-dom'
import ArticleCard from '../components/common/ArticleCard'

function Home() {
  const notices = [
    {
      title: '설재복 교수님, 2025 세계 최상위 2% 연구자 선정',
      info: '스탠퍼드 대학 발표 세계 최상위 2% 연구자에 선정되었습니다.',
      category: '수상',
      date: '2025.11.19.',
      image: '/image/emblem_color.svg',
      link: '/notice/1'
    },
    {
      title: '2025 대학원생 모집 안내',
      info: '2025학년도 석사 및 박사 과정 신입생을 모집합니다.',
      category: '모집',
      date: '2024.12.01.',
      image: '/image/emblem_color.svg',
      link: '/notice/2'
    },
    {
      title: '연구실 세미나 개최 안내',
      info: '2024 가을학기 연구실 세미나를 개최합니다.',
      category: '세미나',
      date: '2024.11.15.',
      image: '/image/emblem_color.svg',
      link: '/notice/3'
    }
  ]

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

