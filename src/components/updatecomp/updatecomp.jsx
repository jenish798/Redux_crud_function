import React from 'react';
import ButtonComp from '../../components/button/button';

const UpdateComponent = ({ nameValue, emailValue, onNameChange, onEmailChange, onSubmit, updateText }) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input 
                    type="text" 
                    name='name' 
                    className='form-control' 
                    placeholder='enter name'
                    value={nameValue} 
                    onChange={e => onNameChange(e.target.value)} 
                />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input 
                    type="email" 
                    name='email' 
                    className='form-control' 
                    placeholder='enter mail-id' 
                    value={emailValue} 
                    onChange={e => onEmailChange(e.target.value)} 
                />
            </div>
            <br />
            <ButtonComp className='btn btn-info'>{updateText}</ButtonComp>
        </form>
    );
};

export default UpdateComponent;