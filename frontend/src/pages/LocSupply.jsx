import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LocSupply = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { area, type, quantity } = location.state || {}; // Get data from state

    const handleConfirm = async () => {
        try {
            const response = await fetch('https://api.github.com/gists/50bce786e694e5f632bbd0ecd0e90b96', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `token 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` // Add your token here
                },
                body: JSON.stringify({
                    files: {
                        'Firestations.json': {
                            content: await updateGistData()
                        }
                    }
                })
            });

            if (response.ok) {
                alert('Request fulfilled successfully! You have been added as a volunteer.');
                navigate('/Locals/Dashboard'); // Redirect back to requests page
            } else {
                throw new Error('Failed to update the request');
            }
        } catch (error) {
            console.error('Error fulfilling request:', error);
            alert('Error fulfilling request. Please try again.');
        }
    };

    const updateGistData = async () => {
        // Fetch the current Gist data
        const response = await fetch('https://api.github.com/gists/50bce786e694e5f632bbd0ecd0e90b96');
        const data = await response.json();
        const configData = JSON.parse(data.files['Firestations.json'].content);

        // Remove the fulfilled request
        configData[0].requests = configData[0].requests.filter(
            (request) => !(request.type === type && request.area === area && request.quantity === quantity)
        );

        // Add new volunteer to the first fire station
        configData[0].volunteers.push({
            name: "Laksh",
            age: 18,
            assistanceType: type
        });

        return JSON.stringify(configData, null, 4); // Return the updated JSON as a string
    };

    return (
        <div className='px-[20%] bg-white'>
            <h1 className='text-[32px] font-semibold mt-[50px]'>Fulfill Request</h1>
            <form className='itemsForm' onSubmit={(e) => e.preventDefault()}>
                <label className='block text-[18px] font-medium'>Area:</label>
                <input className='w-full p-[1em] rounded-[10px] mb-[1em]' type="text" value={area} readOnly />

                <label className='block text-[18px] font-medium'>Item:</label>
                <input className='w-full p-[1em] rounded-[10px] mb-[1em]' type="text" value={type} readOnly />

                <label className='block text-[18px] font-medium'>Quantity:</label>
                <input className='w-full p-[1em] rounded-[10px] mb-[1em]' type="number" value={quantity} readOnly />

                <button 
                    className='mainBtnRed w-full flex justify-center py-[0.5em] rounded-[100px] mt-[1em]'
                    onClick={handleConfirm} 
                >
                    Confirm
                </button>
            </form>
        </div>
    );
};

export default LocSupply;
