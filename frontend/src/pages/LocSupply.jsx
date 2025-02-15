import React from 'react';
import { useLocation } from 'react-router-dom';

const LocSupply = () => {
    const location = useLocation();
    const { address, item, quantity } = location.state || {}; // Get data from state

    return (
        <div className='px-[20%] bg-white'>
            <h1 className='text-[32px] font-semibold mt-[50px]'>Fulfill Request</h1>
            <form className='itemsForm'>
                <label className='block text-[18px] font-medium'>Address:</label>
                <input className='w-full p-[1em] rounded-[10px] mb-[1em]' type="text" value={address} readOnly />

                <label className='block text-[18px] font-medium'>Item:</label>
                <input className='w-full p-[1em] rounded-[10px] mb-[1em]' type="text" value={item} readOnly />

                <label className='block text-[18px] font-medium'>Quantity:</label>
                <input className='w-full p-[1em] rounded-[10px] mb-[1em]' type="number" value={quantity} readOnly />

                <button className='mainBtnRed w-full flex justify-center py-[0.5em] rounded-[100px] mt-[1em]'>Confirm</button>
            </form>
        </div>
    );
};

export default LocSupply;
