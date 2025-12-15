import { useParams } from 'react-router-dom'
import { useState, useMemo } from 'react'
import PageTitle from '../components/common/PageTitle'
import ArticleCard from '../components/common/ArticleCard'
import CustomCalendar from '../components/common/CustomCalendar'
import journalData from '../data/journal.json'
import patentData from '../data/patent.json'

function Publication() {
  const { tab } = useParams()
  const currentTab = tab || 'journals'
  
  // 검색 상태
  const [searchQuery, setSearchQuery] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const tabs = [
    { id: 'journals', label: 'Journals', path: '/publication' },
    { id: 'conferences', label: 'Conferences', path: '/publication/conferences' },
    { id: 'patents', label: 'Patents', path: '/publication/patents' }
  ]

  // 날짜 문자열을 비교 가능한 형식으로 변환 (YYYY.MM.DD -> YYYY-MM-DD)
  const parseDate = (dateStr) => {
    if (!dateStr) return null;
    // "2025.03.08." -> "2025-03-08"
    const cleaned = dateStr.replace(/\./g, '-').replace(/-$/, '');
    return cleaned;
  };

  // 검색 및 날짜 필터링된 journal 데이터
  const filteredJournals = useMemo(() => {
    let filtered = journalData;

    // 검색어 필터링
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((article) => 
        article.title.toLowerCase().includes(query) ||
        article.journal.toLowerCase().includes(query) ||
        article.date.toLowerCase().includes(query)
      );
    }

    // 날짜 범위 필터링
    if (startDate || endDate) {
      filtered = filtered.filter((article) => {
        const articleDate = parseDate(article.date);
        if (!articleDate) return false;

        if (startDate && endDate) {
          return articleDate >= startDate && articleDate <= endDate;
        } else if (startDate) {
          return articleDate >= startDate;
        } else if (endDate) {
          return articleDate <= endDate;
        }
        return true;
      });
    }

    return filtered;
  }, [searchQuery, startDate, endDate])

  const renderContent = () => {
    switch (currentTab) {
      case 'journals':
        return (
          <>
            {/* 검색 및 필터 영역 */}
            <div className="container" style={{ marginBottom: '20px' }}>
              <div className="box-row" style={{ alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                {/* 검색 바 (70%) */}
                <div style={{ flex: '7 1 300px', minWidth: '250px', display: 'flex', gap: '5px', alignItems: 'center' }}>
                  <input
                    type="text"
                    placeholder="Search journals by title, journal name, or date..."
                    className="search-bar"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '12px 16px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '14px'
                    }}
                  />
                  {searchQuery && (
                    <div className="btn-sqr btn-primary" onClick={() => setSearchQuery('')}>
                      <span className="material-symbols-rounded">close</span>
                    </div>
                  )}
                </div>

                {/* 달력 (30%) */}
                <div style={{ flex: '3 1 200px', minWidth: '200px' }}>
                  <CustomCalendar
                    placeholder="Filter by date range"
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                  />
                </div>
              </div>

              {/* 검색 결과 수 표시 */}
              {(searchQuery || startDate || endDate) && (
                <div style={{ marginTop: '15px', color: 'var(--color-monotone-4)', fontSize: '14px' }}>
                  Found {filteredJournals.length} result{filteredJournals.length !== 1 ? 's' : ''}
                  {startDate && endDate && ` (${startDate} ~ ${endDate})`}
                </div>
              )}
            </div>

            {/* 검색 결과 */}
            <div id="journal-container">
              {filteredJournals.length > 0 ? (
                filteredJournals.map((article, index) => (
                  <ArticleCard key={index} article={article} type="journal" />
                ))
              ) : (
                <div className="container" style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <span className="material-symbols-rounded" style={{ fontSize: '64px', color: 'var(--color-monotone-3)' }}>
                    search_off
                  </span>
                  <h3 style={{ marginTop: '16px', color: 'var(--color-monotone-4)' }}>
                    No results found
                  </h3>
                  <p style={{ marginTop: '8px', color: 'var(--color-monotone-3)' }}>
                    Try adjusting your search query or filters
                  </p>
                </div>
              )}
            </div>
          </>
        )
      case 'conferences':
        return (
          <div className="container">
            <h3>Conferences content will be added soon.</h3>
          </div>
        )
      case 'patents':
        return (
          <div id="patent-container">
            {patentData.map((patent, index) => (
              <div key={index} className="container">
                <div className="box-row mg0">
                  <div className="box-article-text">
                    <div className="box-article-title">
                      <h5>{patent.title}</h5>
                    </div>
                    <div className="box-article-info">
                      Patent Number: {patent.patentNumber}
                    </div>
                    <div className="box-article-catag">
                      <div className="btn-group">
                        <div className="btn-rtg btn-monotone-2">{patent.country}</div>
                        <div className="btn-rtg btn-monotone-1">{patent.date}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
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
        title="Publication"
        subtitle="Link to ADAML's publications, including journals"
        tabs={tabs}
        currentTab={currentTab}
      />
      {renderContent()}
    </>
  )
}

export default Publication

