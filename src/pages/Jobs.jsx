import React from 'react'
import Navbar from "../components/Navbar";
function Jobs() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-20">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <h1 className="text-4xl font-bold text-slate-900">
            Jobs Page
          </h1>
        </div>
      </main>
    </>
  )
}

export default Jobs