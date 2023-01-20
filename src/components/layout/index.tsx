import React from 'react'
import { Header } from './header'

export const Layout = ({children}: any) => {
  return (
    <div>
      <Header></Header>
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
