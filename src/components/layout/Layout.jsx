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
      </figure>
      <div style={{ width: '100%' }}>
        <Footer />
      </div>
      <Header />
    </>
  )
}

export default Layout

