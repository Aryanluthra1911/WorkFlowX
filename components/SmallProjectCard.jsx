import React from 'react'

const SmallProjectCard = () => {
    return (
        <div className='w-full h-20 bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200'>
            <div className='flex items-center justify-between'>
                <div className='flex-1'>
                    <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                        Trackify
                    </h3>
                    <p className='text-sm text-gray-600'>
                        A jewelery sale management app
                    </p>
                </div>
                <div className='ml-4'>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>
                        Active
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SmallProjectCard