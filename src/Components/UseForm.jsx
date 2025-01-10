import React from 'react'
import { useForm } from "react-hook-form";

function UseForm() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = ((data) => {
        console.log(data);
    })

    return (
        <>
            <h1 className='font-bold'>UseForm in React</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="text-sm font-medium text-gray-900 dark:text-white "
                        htmlFor='firstName'>First Name : </label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type='text' name='firstName' placeholder='Enter your First Name' {...register("firstName", { required: true })} />
                    {errors.firstName && <p className='text-red-500'>This filed is required</p>}
                </div><br />
                <div>
                    <label className="text-sm font-medium text-gray-900 dark:text-white "
                        htmlFor='lastName'>Last Name : </label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type='text' name='lastName' placeholder='Enter your Last Name' {...register("lastName", { required: true })} />
                    {errors.lastName && <p className='text-red-500'>This filed is required</p>}
                </div><br />
                <div>
                    <label className="text-sm font-medium text-gray-900 dark:text-white "
                        htmlFor='email'>Email id : </label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type='email' name='email' placeholder='mdh20@gmail.com'
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format"
                            }

                        })} />
                    {errors.email && (
                        <p className='text-red-500'>This field is required and needs to be a valid email</p>
                    )}
                </div><br/>
                <input  className="rounded-md bg-slate-800 py-2 px-4 text-center text-sm text-white" 
                type="submit" />
            </form>
        </>
    )
}

export default UseForm
