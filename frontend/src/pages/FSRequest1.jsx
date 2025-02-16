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

  fireStations[1].requests.push(newRequest);

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
  const handleSubmit = async (event) => {
    event.preventDefault();
    const type = event.target.elements.item.value;
    const quantity = event.target.elements.quantity.value;
    const area = event.target.elements.area.value;

    await addNewRequest(type, quantity, area);
  };
  
  return (
    <div className='px-[20%] bg-white'>
      <p className="text-[32px] font-semibold mt-[50px]">Request Supplies</p>
      <form className='itemsForm' onSubmit={handleSubmit}>
        <label htmlFor="item">Type of assistance: </label> <br/>
        <select id="item" name="item" className='border-[1px] border-black px-[2em] py-[0.5em] w-full rounded-[15px] my-[15px]'>
            <option value="food">Medical Assistance</option>
            <option value="medical">Food Supplies</option>
        </select>
        <label htmlFor="quantity">Quantity: </label> <br/>
        <input type='text' name='quantity' id='quantity' className=''></input>
        <label htmlFor="area">Title: </label> <br/>
        <input type='text' id='area' name='area' className=''></input>
        <div className="flex justify-end gap-[2vw]">
          <Link to={'/'} className='mainBtnGray px-[1em] py-[0.5em] rounded-[10px]'>Dashboard</Link>
          <button type='submit' className='mainBtnRed px-[1em] py-[0.5em] rounded-[10px]'>Submit</button>
        </div>
      </form>
    </div>
  );
};


export default FSRequest
