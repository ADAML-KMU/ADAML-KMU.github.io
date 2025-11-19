import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Research from './pages/Research'
import Publication from './pages/Publication'
import Members from './pages/Members'
import Facility from './pages/Facility'
import Board from './pages/Board'
import Request from './pages/Request'
import NoticeDetail from './pages/NoticeDetail'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="research" element={<Research />} />
          <Route path="research/:tab" element={<Research />} />
          <Route path="publication" element={<Publication />} />
          <Route path="publication/:tab" element={<Publication />} />
          <Route path="members" element={<Members />} />
          <Route path="members/:tab" element={<Members />} />
          <Route path="facility" element={<Facility />} />
          <Route path="board" element={<Board />} />
          <Route path="board/:tab" element={<Board />} />
          <Route path="notice/:id" element={<NoticeDetail />} />
          <Route path="request" element={<Request />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App

