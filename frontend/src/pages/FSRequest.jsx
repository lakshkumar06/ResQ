import React from 'react'
import { Link } from 'react-router-dom'

const addNewRequest = async (type, quantity, area) => {
  const gistUrl = 'https://api.github.com/gists/50bce786e694e5f632bbd0ecd0e90b96';

  const data = await fetch(gistUrl, {
    method: 'GET',
  });

  const jsonData = await data.json();
  const files = jsonData.files;
  const fileContent = files['Firestations.json'].content;
  const fireStations = JSON.parse(fileContent);

  const newRequest = {
    type,
    quantity,
    area,
  };

  fireStations[0].requests.push(newRequest);

  const updatedFileContent = JSON.stringify(fireStations);

  await fetch(gistUrl, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer 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`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      files: {
        'Firestations.json': {
          content: updatedFileContent,
        },
      },
    }),
  });
  alert('Request updated successfully!');

};

const FSRequest = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const type = event.target.item.value;
    const quantity = event.target.quantity.value;
    const area = event.target.area.value;
        // Add the new request to the first member's requests array
        addNewRequest(type, quantity, area);
      };
  return (
    <div className='px-[20%] bg-white '>
      <p className="text-[32px] font-semibold mt-[50px]">Request Supplies</p>
      <form className=' itemsForm' onSubmit={handleSubmit}>
        <label htmlFor="item" className="">Type of assitance: </label> <br/>
        <select id="cars" name="item" className='border-[1px] border-black px-[2em] py-[0.5em] w-full rounded-[15px] my-[15px]'>
            <option value="food">Medical Assistance</option>
            <option value="medical">Food Supplies</option>
        </select>
        <label htmlFor="quantity" className="">Quantity: </label> <br/>
        <input type='text' id='quantity' className=''></input>
        <label htmlFor="quantity" className="">Area: </label> <br/>
        <input type='text' id='area' className=''></input>
        <div className="flex justify-end gap-[2vw]">
          <Link to={'/'} className='mainBtnGray px-[1em] py-[0.5em] rounded-[10px]'>Dashboard</Link>
          <button type='submit' className='mainBtnRed px-[1em] py-[0.5em] rounded-[10px]'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default FSRequest
