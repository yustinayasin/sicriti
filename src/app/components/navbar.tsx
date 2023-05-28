import Link from 'next/link'

export default function Navbar({ headings, isLogin }: { headings:string, isLogin: Boolean }) {
  return (
    <div className="navbar bg-base-100 py-4 px-8">
      <div className="navbar-start">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{headings}</h1>
      </div>

      <div className="navbar-end">
        <Link href={!isLogin ? '/' : '/login'} className="btn px-6">{!isLogin ? 'Home' : 'Login'}</Link>
      </div>
  </div>
  )
}
