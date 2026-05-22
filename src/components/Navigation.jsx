import { navigationItems } from '../data/portfolio'

function Navigation({ activePage, onNavigate }) {
  const homeItem = navigationItems.find((item) => item.page === 'home')
  const sectionItems = navigationItems.filter((item) => item.page !== 'home')

  return (
    <nav className="top-nav" aria-label="Main navigation">
      <button
        aria-label="Home"
        className={`home-button ${activePage === homeItem.page ? 'active' : ''}`}
        onClick={() => onNavigate(homeItem.page)}
        type="button"
      >
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V21h5v-6h4v6h5V9.5" />
        </svg>
      </button>
      <div className="nav-links">
        {sectionItems.map((item) => (
          <button
            className={activePage === item.page ? 'active' : ''}
            key={item.page}
            onClick={() => onNavigate(item.page)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
