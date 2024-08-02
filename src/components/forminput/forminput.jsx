import React from 'react';

const FormInput = ({ names, emails, submit, onNameChange, onEmailChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor='name'>{names}</label>
                <input 
                    type="text" 
                    className='form-control' 
                    placeholder='enter name' 
                    onChange={e => onNameChange(e.target.value)} 
                />
            </div>
            <div>
                <label htmlFor='email'>{emails}</label>
                <input 
                    type="email" 
                    className='form-control' 
                    placeholder='enter mail-id' 
                    onChange={e => onEmailChange(e.target.value)} 
                />
            </div>
            <br />
            <button type="submit" className='btn btn-info'>{submit}</button>
        </form>
    );
};

export default FormInput;