import React from 'react'

export default function UserInput() {
  return (
    <section id='user-input'>
      <div className='input-group'>
      <form>
        <p>
        <label htmlFor='initial-investment'>Initial Investment</label>
        <input type='number' id='initial-investment' name='initial-investment' 
        required/>
        </p>
        <p>
        <label htmlFor='annual-investment'>Annual Investment</label>
        <input type='number' id='annual-investment' name='annual-investment' 
        required/>
        </p>
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input type="number" id="expected-return" name="expected-return" 
          required/>
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" name="duration" 
          required/>
        </p>
        <button type='submit'>Calculate</button>
      </form>
      </div>
    </section>
  )
}
