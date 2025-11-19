import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/" className="logo-group">
            <img src="/image/emblem_color.svg" className="btn-sqr mgl0 mgr10" alt="ADAML Logo" />
            <div className="logo-int">
              <h4>ADAML</h4>
            </div>
          </Link>
          <ul id="gnb">
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/publication">Publication</Link></li>
            <li><Link to="/members">Members</Link></li>
            <li><Link to="/facility">Facility</Link></li>
            <li><Link to="/board">Board</Link></li>
          </ul>
        </nav>
      </header>
      <aside>
        <ul id="gnb-mobile">
          <li>
            <Link to="/research" className="btn-rtg btn-trans pd0">
              <span className="material-symbols-rounded">experiment</span>
              <h6>Research</h6>
            </Link>
          </li>
          <li>
            <Link to="/publication" className="btn-rtg btn-trans pd0">
              <span className="material-symbols-rounded">library_books</span>
              <h6>Publication</h6>
            </Link>
          </li>
          <li>
            <Link to="/members" className="btn-rtg btn-trans pd0">
              <span className="material-symbols-rounded">group</span>
              <h6>Members</h6>
            </Link>
          </li>
          <li>
            <Link to="/facility" className="btn-rtg btn-trans pd0">
              <span className="material-symbols-rounded">construction</span>
              <h6>Facility</h6>
            </Link>
          </li>
          <li>
            <Link to="/board" className="btn-rtg btn-trans pd0">
              <span className="material-symbols-rounded">forum</span>
              <h6>Board</h6>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default Header

