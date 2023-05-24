import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar({ headings }: {headings:string}) {
  return (
    <div className="navbar bg-base-100 py-4 px-8">
      <div className="navbar-start">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{headings}</h1>
      </div>

      <div className="navbar-end">
        <a className="btn px-6">Login</a>
      </div>
  </div>
  )
}
