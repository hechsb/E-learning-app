import React from 'react'

function Users() {
  return (
    <div style={{backgroundColor: '#D3D3D3' ,flex: 1, overflowY: "auto" }}>
    <div className="p-4 flex">
        <h1 className="text-3xl">
            Users manegment
        </h1>
    </div>
    <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
                <tr className="border-b">
                    <th className="text-left p-3 px-5">name</th>
                    <th className="text-left p-3 px-5">email</th>
                    <th></th>
                </tr>
                <tr className="border-b hover:bg-orange-100 bg-gray-100">
                    <td className="p-3 px-5"><input type="text"  className="bg-transparent" /></td>
                    <td className="p-3 px-5"><input type="text" placeholder="class.name" className="bg-transparent" /></td>

                    <td className="p-3 px-5 flex justify-end"><button type="button" className="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">accept</button><button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">refuse</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  )
}

export default Users