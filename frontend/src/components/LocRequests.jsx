import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Server from './Server'; 

const LocRequests = () => {
    const [configData, setConfigData] = useState([]);
    const navigate = useNavigate();

    // Filter requests for the first fire station
    const requests = configData.length > 0 ? configData[0].requests : [];

    // Group requests by type
    const groupedRequests = requests.reduce((acc, request) => {
        if (!acc[request.type]) {
            acc[request.type] = [];
        }
        acc[request.type].push(request);
        return acc;
    }, {});

    return (
        <div className='w-1/2 px-[2vw] py-[50px]'>
            <Server setConfigData={setConfigData} /> {/* Fetches and sets configData */}
            <h1 className='text-[32px] mb-[0.5em]'>Requests</h1>
            {Object.entries(groupedRequests).map(([type, items]) => (
                <div key={type} className='p-[1vw] bg-gray-200 rounded-[30px] mb-[1em]'>
                    <p className='ml-[20px] text-[28px] my-[20px]'>{type}</p>
                    <div className='grid grid-cols-2 gap-[1vw]'>
                        {items.map((request, index) => (
                            <div key={index} className='bg-white rounded-[20px] px-[2em] py-[1em]'>
                                <p className='text-[22px] font-medium'>{request.area}</p>
                                <p className='text-[16px]'>Quantity: {request.quantity}</p>
                                <button 
                                    className='mainBtnRed w-full flex justify-center py-[0.5em] rounded-[100px] mt-[1em]'
                                    onClick={() => navigate('/Locals/Supply', { 
                                        state: { 
                                            area: request.area, 
                                            type: request.type, 
                                            quantity: request.quantity 
                                        } 
                                    })}
                                >
                                    Fulfill
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LocRequests;
