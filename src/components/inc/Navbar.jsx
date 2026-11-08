import React, { useEffect } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import JMMLogo from "/JMM Logo Custom Icon.png";
import UserprofileDP from "../images/Maagad2x2.jpg";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Contacts", href: "/contact", current: false },
  { name: "Projects", href: "/projects", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    AOS
      .init
      //   {
      //   duration: 1200, // Animation duration in milliseconds
      //   // offset: 200, // Offset in pixels from the original trigger point
      //   delay: 100, // Delay in milliseconds before the animation starts
      //   easing: "ease-in-out", // Easing function for the animation
      //   once: false,
      // }
      ({ offset: 50, once: false, mirror: true });
    // AOS.refresh();
  }, []);

  return (
    <main className="navbar-bgc relative z-[5]">
      <Disclosure
        as="nav"
        className="relative bg-transparent pt-3"
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        {({ open }) => (
          <>
            <div
              data-aos="fade-down"
              data-aos-delay="800"
              data-aos-duration="1500"
              className="2xl:mx-auto sm:mx-10 max-w-screen-2xl px-2 sm:px-6 lg:px-8"
            >
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#ca8b04]">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-6 w-6 text-yellow-600"
                        aria-hidden="true"
                      />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 items-center">
                    <Link
                      to="/"
                      className="logo-shimmer flex-shrink-0 flex items-center"
                      style={{ "--logo-url": `url("${JMMLogo}")` }}
                    >
                      <img
                        className="h-8 w-auto"
                        src={JMMLogo}
                        alt="Jude Michael Maagad Company"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            location.pathname === item.href
                              ? "bg-yellow-600 text-white"
                              : "text-yellow-500 hover:bg-yellow-900 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium text-decoration-none"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                  <Menu as="div" className="relative ml-3">
                    {/* <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          src={UserprofileDP}
                          alt=""
                          className="h-8 w-8 rounded-full"
                        />
                      </Menu.Button>
                    </div> */}
                      <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 data-[closed]:scale-95 data-[closed]:opacity-0"
                      >
                        <MenuItem>
                          {({ focus }) => (
                            <a
                              href="#"
                              className={classNames(
                                focus ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ focus }) => (
                            <a
                              href="#"
                              className={classNames(
                                focus ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ focus }) => (
                            <a
                              href="#"
                              className={classNames(
                                focus ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </MenuItem>
                      </MenuItems>
                  </Menu>
                </div>
              </div>
            </div>

            {/* Floating frosted-glass menu (iOS style): 30% tint + blur */}
            <DisclosurePanel className="sm:hidden absolute left-0 right-0 top-full mx-3 mt-2 rounded-2xl bg-zinc-900/30 backdrop-blur-xl backdrop-saturate-150 [border:1px_solid_rgba(255,255,255,0.08)] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  // DisclosureButton as Link so tapping a link also closes the menu
                  <DisclosureButton
                    as={Link}
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      location.pathname === item.href
                        ? "bg-yellow-600 text-white"
                        : "text-yellow-500 hover:bg-yellow-900 hover:text-white",
                      "block rounded-md px-3 py-2 text-base text-center font-medium text-decoration-none"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </main>
  );
}
