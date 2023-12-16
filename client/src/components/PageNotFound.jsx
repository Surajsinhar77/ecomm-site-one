import React from 'react'

function PageNotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-6xl font-semibold text-red-500">404</h1>
            <p className="text-2xl text-gray-600">Page Not Found</p>
            <p className="mt-4 text-gray-600">The page you are looking for does not exist.</p>
        </div>
    </div>
    )
}
export default PageNotFound