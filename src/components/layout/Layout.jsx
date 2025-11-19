import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <figure>
        <article>
          <Outlet />
        </article>
        <div style={{ width: '100%' }}>
          <Footer />
        </div>
      </figure>
      <Header />
    </>
  )
}

export default Layout

