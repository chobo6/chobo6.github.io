import { navigationItems } from '../data/portfolio'

function Navigation() {
  return (
    <nav className="top-nav" aria-label="주요 섹션">
      {navigationItems.map((item) => (
        <a href={item.href} key={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  )
}

export default Navigation
