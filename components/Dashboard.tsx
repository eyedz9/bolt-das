import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import MainContent from './MainContent'

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <MainContent />
      </div>
    </div>
  )
}

export default Dashboard
