import React, { useState } from 'react'
import Card from './Card'

const Form = () => {
  const [data, setData]= useState()

  const onChangeHandler= (e)=>{
    setData({...data, [e.target.name]: e.target.value})
    
  }
  const onClickHandler= (e)=>{
    console.log(data);
    
  }
  return (
    <div className='container'>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          name='email'
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={onChangeHandler}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          name='body'
          id="exampleFormControlTextarea1"
          rows={3}
          defaultValue={""}
          onChange={onChangeHandler}
        />
      </div>
      <button onClick={onClickHandler}>Submit</button>
      { data &&
      <Card name={data.email} price={data.body}/>
      }
    </div>
  )
}

export default Form
