import React from 'react'

const Navbar = () => {
    const navContainer = 'flex flex-row h-[92px] w-full text-[20px] border border-slate-600'
    const navBtn = 'flex justify-center items-center w-[240px] h-[92px] border border-slate-600 font-semibold'
    const navLeft = 'flex flex-row'
    const navMiddle = 'flex flex-grow w-[960px] h-[92px] border border-slate-600'
    const navRight = 'flex flex-row'

  return (
    <nav className={navContainer}>
        <div className={navLeft}>
            <button className={navBtn}>
                Shop
            </button>
            <button className={navBtn}>
                Contact
            </button>
        </div>
        <div className={navMiddle}>
        </div>
        <div className={navRight}>
            <button className={navBtn}>
                Sign in
            </button>
            <button className={navBtn}>
                Cart
            </button>
        </div>
    </nav>
  )
}

export default Navbar