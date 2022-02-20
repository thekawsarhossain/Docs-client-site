/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 const Example =()=> {
  return (
    <Menu as="div" className=" relative inline-block text-left">
      <div>
        <Menu.Button className="click inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700  focus:outline-none   ">
          All
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" origin-top-right absolute right-0 mt-2 w-56  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                href="/documentation"
              >
              <a  className={classNames(
                  active ? 'bg-slate-200 text-violet-600' : 'text-gray-700',
                  'block px-4 py-2 text-sm font-medium'
                )}> Docs</a>
              </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/Forum"
                >
                <a  className={classNames(
                    active ? 'bg-slate-200 text-violet-600' : 'text-gray-700',
                    'block px-4 py-2 text-sm font-medium'
                  )}> Forum</a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                href="/blogs"
              >
              <a  className={classNames(
                  active ? 'bg-slate-200 text-violet-600' : 'text-gray-700',
                  'block px-4 py-2 text-sm font-medium'
                )}> Blog</a>
              </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                href="/helpdesk"
              >
              <a  className={classNames(
                  active ? 'bg-slate-200 text-violet-600' : 'text-gray-700',
                  'block px-4 py-2 text-sm font-medium'
                )}> HelpDesk</a>
              </Link>
              )}
            </Menu.Item>
           
          </div>
        
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Example;