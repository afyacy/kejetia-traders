import React from 'react'

export const Layout = ({children}: any) => {
  return (
    <div>
      <nav>
        nav
      </nav>
      <div>
        <aside>
          sidebar
        </aside>
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}
