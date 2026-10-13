import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { id: 'hero', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'project', title: 'Work' },
  { id: 'contact', title: 'Contact' },
]

const Nav = ({ activeSection, onMenuClose }) => {
  const { pathname } = useLocation();

  const handleClick = (e, id) => {
    // 메인: 해당 섹션으로 부드럽게 스크롤
    // 서브: Link 기본 동작으로 메인(/#id) 이동 후 ScrollManager에서 스크롤 처리
    if(pathname === '/'){
      e.preventDefault();

      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    onMenuClose?.();
  }

  return (
    <nav>
      <ul className="depth01">
        {
          navItems.map((item) => (
            <li key={item.id} className={activeSection === item.id ? 'on' : ''}>
              <Link
                to={{ pathname: '/', hash: `#${item.id}` }}
                aria-current={activeSection === item.id ? 'true' : undefined}
                onClick={(e) => handleClick(e, item.id)}
              >
                {item.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav
