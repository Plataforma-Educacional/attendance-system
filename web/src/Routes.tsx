// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
import { Router, Route, Set } from '@redwoodjs/router'

import AttendanceLayout from 'src/layouts/AttendanceLayout'

import ChatIntro from './components/ChatIntro/ChatIntro'

const Routes = () => {
  return (
    <Router>
      <Set wrap={AttendanceLayout}>
        <Route path="/chatslist" page={ChatslistPage} name="chatslist" />
        <Set wrap={ChatslistPage}>
          <Route path="/chat" page={ChatIntro} name="chat" />
          <Route path="/chat/{id}" page={ChatPage} name="chat" />
        </Set>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
