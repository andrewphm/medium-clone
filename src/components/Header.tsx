import Link from 'next/link'

const Header = () => {
  return (
    <header className="mx-auto flex h-16 w-screen max-w-7xl items-center p-5">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-4">
          <Link href="/">
            <a>
              <img
                className="w-44 object-contain"
                src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
                alt="Medium Logo"
              />
            </a>
          </Link>
          <nav className="hidden items-center gap-x-5 md:flex ">
            <h3>About</h3>
            <h3>Contact</h3>
            <button className="rounded-full bg-green-600 px-4 py-1 text-white hover:scale-105 hover:shadow-md">
              Follow
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-x-3">
          <h3 className="cursor-pointer">Sign In</h3>
          <button className="cursor-pointer rounded-full border border-green-600 py-1 px-4 text-green-600 hover:bg-green-600 hover:text-white">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
