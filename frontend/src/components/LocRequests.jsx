import React from 'react';
import { useNavigate } from 'react-router-dom';
import requests from '../json/requests.json';

const LocRequests = () => {
    const navigate = useNavigate();

    // Group requests by category
    const groupedRequests = requests.reduce((acc, request) => {
        if (!acc[request.category]) {
            acc[request.category] = [];
        }
        acc[request.category].push(request);
        return acc;
    }, {});

    return (
        <div className='w-1/2 px-[2vw] py-[50px]'>
            <h1 className='text-[32px] mb-[0.5em]'>Requests</h1>
            {Object.entries(groupedRequests).map(([category, items]) => (
                <div key={category} className='p-[1vw] bg-gray-200 rounded-[30px] mb-[1em]'>
                    <p className='ml-[20px] text-[28px] my-[20px]'>{category}</p>
                    <div className='grid grid-cols-2 gap-[1vw]'>
                        {items.map((request, index) => (
                            <div key={index} className='bg-white rounded-[20px] px-[2em] py-[1em]'>
                                <p className='text-[22px] font-medium'>{request.address}</p>
                                <p className='text-[16px]'>{request.item}</p>
                                <p className='text-[16px]'>Quantity: {request.quantity}</p>
                                <button 
                                    className='mainBtnRed w-full flex justify-center py-[0.5em] rounded-[100px] mt-[1em]'
                                    onClick={() => navigate('/Locals/Supply', { 
                                        state: { 
                                            address: request.address, 
                                            item: request.item, 
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
