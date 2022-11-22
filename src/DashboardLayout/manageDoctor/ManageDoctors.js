import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfrimModal from '../../shared/confrimModal/ConfrimModal';

const ManageDoctors = () => {
    const [doctorsDelete, setDoctorDelete] = useState([]);
    const { data: doctors = [], refetch, isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://doctor-portal-server-side.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = res.json();
                return data;
            }
            catch {

            }
        }
    })
    if (isLoading) {
        return <button className="btn loading">loading</button>
    }
    const cancelModal = () => {
        setDoctorDelete(null)
    }
    const doctorDelete = (id) => {
        fetch(`https://doctor-portal-server-side.vercel.app/doctors/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Delete Successfully')
                    console.log(data)
                    refetch()
                }
            })
    }
    return (
        <div>
            <h1 className='text-3xl font-bold'>Manage Doctors {doctors.length} </h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th> Specialty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctors, i) => <tr key={doctors._id}>
                                <th>{i + 1}</th>
                                <th>  <div className="avatar">
                                    <div className="w-16 rounded-full ">
                                        <img src={doctors.image} alt='' />
                                    </div>
                                </div></th>
                                <td>{doctors.name}</td>
                                <td>{doctors.email}</td>
                                <td>{doctors.specialty}</td>
                                {/* <td><button onClick={() => doctorDelete(doctors._id)} className="btn btn-error btn-sm">Delete</button></td> */}
                                <td>
                                    <label onClick={() => setDoctorDelete(doctors)} htmlFor="DoctorModal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div>
                {
                    doctorsDelete && <ConfrimModal
                        title={`Are you sure you  want to delete it `}
                        message={`if you delete ${doctorsDelete.name}. it can not be undone`}
                        id={doctorsDelete._id}
                        doctorDelete={doctorDelete}
                        cancelModal={cancelModal}
                    />
                }
            </div>
        </div>

    );
};

export default ManageDoctors;