import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key
    const { data: specialty = [], isLoading } = useQuery({
        queryKey: ['appointmentSpecialty'],
        queryFn: async () => {
            const res = await fetch('https://doctor-portal-server-side.vercel.app/appointmentSpecialty')
            const data = await res.json()
            return data
        }
    })

    const AddDoctorHandle = (data) => {
        console.log(data);
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(formData => {
                if (formData.success) {
                    console.log(formData.data.url);

                    const doctors = {
                        name: data.name,
                        email: data.email,
                        image: formData.data.url,
                        specialty: data.specialty
                    }

                    fetch('https://doctor-portal-server-side.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            authorization: `bearer ${localStorage.getItem('accessToken')}`,
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(doctors)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                console.log(result)
                                toast.success(`${data.name} added successfully`);
                                navigate('/dashboard/mangedoctors')
                            }
                        })
                }
            })
    }
    if (isLoading) {
        return <button className="btn loading">loading</button>
    }

    return (
        <div className='w-96 p-7'>
            <h1 className='text-3xl my-10'>Add Doctor</h1>

            <form onSubmit={handleSubmit(AddDoctorHandle)}>
                <div className="form-control w-full   max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name",
                        { required: true }
                    )} type="text" placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full   max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email",
                        { required: "Email Address is required" }
                    )} type="text" placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p role='alert' className='text-red-500'>{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full   max-w-xs">
                    <label className="label">
                        <span className="label-text">specialty</span>
                    </label>
                    <select {...register('specialty')} className="select select-bordered w-full max-w-xs">
                        {
                            specialty.map(specialty => <option key={specialty._id}
                                value={specialty.name}>{specialty.name}</option>)
                        }
                    </select>

                </div>
                <div className="form-control w-full  max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input {...register("img",
                        { required: "image is required" }
                    )} type="file" placeholder="Your email" className="input input-bordered w-full max-w-xs py-16" />
                    {errors.img && <p role='alert' className='text-red-500'>{errors.img?.message}</p>}
                </div>
                <div>
                </div>
                <input className='w-full bg-slate-700 hover:bg-slate-900 cursor-pointer mt-6 text-white text-center p-3 rounded-lg' value='Add Doctor' type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;