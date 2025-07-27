import React from 'react'
import {assets, footer_data} from "../assets/assets.js"
function Footer() {
  return (
        <div className='px-6 mt-10 md:px-16 lg:px-24 xl:px-32 bg-gray-300'>
            <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-12 border-b border-gray-200 text-gray-600'>

                <div className='md:w-1/3'>
                    <img className='w-32 sm:w-40' src={assets.logo} alt="logo" />
                    <p className='max-w-sm mt-6 text-sm leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 md:w-2/3'>
                    {
                        footer_data.map((section, item) => (
                            <div key={item}>
                                <h3
                                    className='font-medium text-sm text-gray-900 mb-4'>
                                    {section.title}
                                </h3>
                                <ul className='text-sm space-y-3'>
                                    {
                                        section.links
                                            .map((link, i) => (
                                                <li key={i}>
                                                    <a
                                                        className='hover:text-gray-900 transition-colors duration-200 block' href="#">
                                                        {link}
                                                    </a>
                                                </li>
                                            ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>

            </div>
            <p
                className='py-5 text-center text-xs text-gray-500'>
                Copyright 2025 © QuickBlog All Right Reserved.
            </p>
        </div>
  )
}

export default Footer