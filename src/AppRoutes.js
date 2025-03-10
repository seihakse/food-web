import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import FoodPage from './Pages/Food/FoodPage'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:searchTerm" element={<HomePage />} />
        <Route path="/tag/:tag" element={<HomePage />} />
        <Route path="/food/:id" element={<FoodPage />} />
    </Routes>
  )
}
