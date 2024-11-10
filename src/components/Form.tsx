import React, { useState } from 'react'

export interface Iform {
    firstName: string,
    lastName: string,
    password: string,
    confirmPassword: string,
    isActive: boolean
}s
export const Form = () => {

    const [formInput, setFormInput] = useState<Iform>({
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        isActive: false
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(formInput.password === formInput.confirmPassword){
            setFormInput({...formInput, isActive: true})
            console.log(formInput);
            
        }
        
        
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormInput({ ...formInput, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label text-light">First Name</label>
                    <input type="text" className="form-control" name='firstName' id="firstName" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label text-light">Last Name</label>
                    <input type="text" className="form-control" name='lastName' id="lastName" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label text-light">Password</label>
                    <input type="password" className="form-control" name='password' id="password" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label text-light">Confirm Password</label>
                    <input type="password" className="form-control" name='confirmPassword' id="confirmPassword" onChange={handleChange}/>
                </div>
                <input type="submit" value="submit" className='form-control text-capitalize btn btn-success' />
            </form>
        </div>
    )
}
