import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const { data: userData = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doctor-portal-server-side.vercel.app/users')
            const data = await res.json();
            return data;
        }
    })
    const handleMakeAmin = (id) => {
        fetch(`https://doctor-portal-server-side.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                refetch()
                console.log(data)

            })
    }

    const handleDelete = (id) => {

        fetch(`https://doctor-portal-server-side.vercel.app/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data)
                    refetch();
                    toast.success('deleted successfully')
                }
            })
    }
    return (
        <div>
            <h1 className='text-3xl  font-bold my-10'>All User</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((data, i) => <tr key={data._id}>
                                <th>{i + 1}</th>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td> {data?.role !== 'admin' && <button onClick={() => handleMakeAmin(data._id)} className='btn btn-xs btn-primary'>make Admin </button>}</td>
                                <td><button onClick={() => handleDelete(data._id)} className='btn btn-xs btn-danger'>delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;