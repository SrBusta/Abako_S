
import { Menu, Transition } from '@headlessui/react'
import { useTheme } from 'next-themes';
import router from 'next/router';
import { Fragment, useEffect, useState } from 'react'
import removeCookie from '../../lib/removeCookie';

export default function navbar({ colors, name, user }) {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    useEffect(() => setMounted(true), []);
    return (
        <div className="grid md:grid-cols-4 grid-cols-2 my-2 w-full">
            <div className="col-start-1 text-left font-semibold text-lg dark:text-white text-black navbar" data-text={`/${name}`}>/{name}</div>
            <Menu as="div" className="col-start-4 text-right">
                <div>
                    <Menu.Button className={`text-${colors}-500 font-semibold text-lg`}>
                        Bienvenido
                        <div className="inline-block md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="align-bottom translate-y-1.5 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </Menu.Button>

                    {"  "}<div className="hidden md:inline-block"> {user} </div>
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white dark:bg-pruebaA3 ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        aria-label="Toggle Dark Mode"
                                        className={classNames(
                                            active ? '' : '',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                                    >
                                        Dark mode
                                    </button>
                                )}
                            </Menu.Item>

                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active ? ' cursor-pointer' : '',
                                            'block w-full px-4 py-2 text-sm text-right'
                                        )}
                                        onClick={() => { { removeCookie() } router.push("/login") }}
                                    >
                                        Salir
                                    </div>
                                )}
                            </Menu.Item>

                        </div>
                    </Menu.Items>
                </Transition>

            </Menu>

        </div>)
};
