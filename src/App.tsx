import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

// Layout
import AppLayout from './components/app-layout/AppLayout'
import Content from './components/app-layout/Content'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'

// Routes
import Home from './pages/home/Home'
import About from './pages/about/About'
import NotFound from './pages/not-found/NotFound'

import Work from './pages/work/Work'
import Hire from './pages/hire/Hire'

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Header>
          <Navigation>
            <NavLink to="/">Home</NavLink>
            <NavLink to="work">Work</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="hire">Hire me</NavLink>
          </Navigation>
        </Header>
        <Content>
          <Routes>
            <Route index element={<Home />} />
            <Route path="work" element={<Work />} />
            <Route path="about" element={<About />} />
            <Route path="hire" element={<Hire />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
