import React from 'react'
import { Home, Users, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Sidebar = () => {
  return (
    <aside className="w-64 bg-card text-card-foreground p-4 hidden md:block">
      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <Home className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Users className="mr-2 h-4 w-4" />
          Users
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </nav>
    </aside>
  )
}

export default Sidebar
