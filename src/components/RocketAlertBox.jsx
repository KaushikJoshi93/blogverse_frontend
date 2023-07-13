import React from 'react'

const RocketAlertBox = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="relative w-64 bg-yellow-300 rounded-lg shadow-lg p-6">
      <div className="absolute -top-3 left-3 w-0 h-0 border-t-3 border-r-3 border-transparent transform -rotate-45"></div>
      <div className="absolute bg-red-500 w-4 rounded-xl h-96 left-0 top-[70%] transform -translate-y-1/2"></div>
      <div className="flex items-center justify-center mb-4">
        <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C6.486 2 2 6.486 2 12c0 2.563.784 5.009 2.25 7a.727.727 0 0 0 1.068.026c.314-.305.585-.642.807-1.005a10.896 10.896 0 0 0 1.876-.66A8.018 8.018 0 0 1 12 20v-2c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8a8.012 8.012 0 0 1-4.22 7.074c-.496.246-.99.453-1.452.613a2.729 2.729 0 0 0-.614.244c-.281.143-.521.282-.724.412A2.988 2.988 0 0 0 12 18v2a3.026 3.026 0 0 0 2.61-1.476c.288-.471.527-.983.713-1.524.184-.536.31-1.08.366-1.627A.729.729 0 0 0 15.75 14H14.5a1.5 1.5 0 0 1 0-3h3.5V9h-3.5a1.5 1.5 0 0 1 0-3h3.727c.033-.336.05-.675.05-1 0-5.514-4.486-10-10-10zm0 0v2m0 16V4m4 16H8" />
        </svg>
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Rocket Alert!</h2>
        <p className="text-gray-700">This is a rocket-themed alert message.</p>
      </div>
      <div className="flex justify-end mt-6">
        <button className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded">Close</button>
      </div>
    </div>
  </div>
  )
}

export default RocketAlertBox