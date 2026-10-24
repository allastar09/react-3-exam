import React, { useState } from 'react'

const Home = () => {
    const [data, setData] = useState([
        { id: 1, name: 'Fasehuddin', status: true },
        { id: 2, name: 'Qurbon', status: false },
        { id: 3, name: 'Andaleb', status: true },
        { id: 4, name: 'ALijon', status: true },
        { id: 5, name: 'Ahmad', status: false }
    ])

    return (
        <div className="p-[30px]">
            <table className="w-[90%] border-separate border-spacing-0 border-2 border-[#ddd] rounded-xl overflow-hidden text-lg text-center m-auto">
                <thead>
                    <tr className="bg-[#f2f2f2]">
                        <th className="px-5 py-[15px] border-b border-r border-[#ddd]">
                            ID
                        </th>
                        <th className="px-5 py-[15px] border-b border-r border-[#ddd]">
                            NAME
                        </th>
                        <th className="px-5 py-[15px] border-b border-r border-[#ddd]">
                            STATUS
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {data.map(el => (
                        <tr key={el.id}>
                            <td className="px-5 py-[15px] border-b border-r border-[#ddd]">
                                {el.id}
                            </td>

                            <td className="px-5 py-[15px] border-b border-r border-[#ddd]">
                                {el.name}
                            </td>

                            <td className="px-5 py-[15px] border-b border-r border-[#ddd]">
                                <span
                                    className={`font-bold text-base ${
                                        el.status
                                            ? 'text-green-600'
                                            : 'text-red-600'
                                    }`}
                                >
                                    {el.status ? 'ACTIVE' : 'INACTIVE'}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home