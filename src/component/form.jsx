import { memo } from 'react';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

export default function Form() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const getdata = async (e) => {
    e.preventDefault();
    console.log(form);
    const res = await fetch('http://localhost:9380/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)

    }

    )
    const response = await res.json();
  }

  return (
    <>

      <div className='relative Formcontainer'>
        <div className='text-2xl  border-4 pointer w-70 h-20 p-12 ml-40  mt-4 mb-13 text-shadow-indigo-500 hfont'>
          <h2 className='text-black contactfont'>Contact form</h2>
        </div>
        <form className='form'>
          <label>
            <p>First name:</p>
            <input
             className='input1 mb-5'
              placeholder='Enter Firstname'
              value={form.firstName}
              onChange={e => {
                setForm({
                  ...form,
                  firstName: e.target.value
                });
              }} 
            />
          </label>
          <label>
            <p>Last name: </p>
            <input
             className='input1 mb-5'
              placeholder='Enter Lastname'
              value={form.lastName}
              onChange={e => {
                setForm({
                  ...form,
                  lastName: e.target.value
                });
              }}
            />
          </label>
          <label>
            <p>Email:</p>
            <input
            className='input1 mb-5'
              placeholder='Enter Email'
              value={form.email}
              onChange={e => {
                setForm({
                  ...form,
                  email: e.target.value
                });
              }}
            />
          </label>

             <div className='mt-7'>
          <label className='messageSect'>
            <textarea name="Message" id="" className=' input2'   value={form.message}
              onChange={e => {
                setForm({
                  ...form,
                  message: e.target.value
                });
              }}>
              Message :
            </textarea>
          </label>
        </div>

        <div className='pointer FORMbutton'>
          <button type='button' className='Button' onClick={getdata}>Submit</button>
        </div>
        </form>
     
      </div>


    </>
  );
}