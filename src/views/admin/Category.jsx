import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
import { FaE } from 'react-icons/fa6';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FaImage } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";



const Category = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [parPage, setParPage] = useState(5);
    const [show, setShow] =  useState(false);

    return (
        <div className='px-2 lg:px-7 pt-5'>
             <h1 className='text-[20px] font-bold mb-3'>Categories </h1>
            <div className='flex lg:hidden justify-between items-center mb-5 p-4 rounded-md'>
                <h1 className='text-[#d0d2d6] font-semibold text-lg'>Category</h1>
                <button onClick={() => setShow(true)} className='bg-red-500 shadow-lg hover:shadow-red-500/40 px-4 py-2 cursor-pointer text-white rounded-sm text-sm'>Add</button>
            </div>
            <div className='flex flex-wrap w-full'>
                <div className='w-full lg:w-7/12'>
                    <div className='w-full p-4 bg-[#fff] rounded-md border'>
                        <div className='flex justify-between items-center p-2 rounded-md'>
                            <select
                                onChange={(e) => setParPage(parseInt(e.target.value))}
                                className='px-4 py-2 focus:border-gray-600 outline-none bg-[#ffff] border border-slate-400 rounded-md text-[#6a6a6b]'>
                                <option value='5'>5</option>
                                <option value='10'>10</option>
                                <option value='20'>20</option>
                            </select>
                            <input
                                className='px-4 py-2 focus:border-gray-600 outline-none bg-[#fff] border border-slate-400 rounded-md text-[#6a6a6b]' type="text" placeholder='search'
                            />
                        </div>

                        <div className='relative overflow-x-auto'>
                            <table className='w-full text-sm text-left text-[#6a6a6b]'>
                                <thead className='text-sm text-[#6a6a6b] uppercase border-b border-slate-700'>
                                    <tr>
                                        <th scope='col' className='py-3 px-4'>
                                            No
                                        </th>
                                        <th scope='col' className='py-3 px-4'>
                                            Image
                                        </th>
                                        <th scope='col' className='py-3 px-4'>
                                            Name
                                        </th>
                                        <th scope='col' className='py-3 px-4'>
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {[1, 2, 3, 4, 5].map((d, i) => (
                                        <tr key={i}>
                                            <td className='py-3 px-4 font-medium whitespace-nowrap border-b border-gray-100'>{d}</td>
                                            <td className='py-3 px-4 font-medium whitespace-nowrap border-b border-gray-100'>
                                            <img className='w-[45px] h-[45px]' src={`http://localhost:3000/images/category/${d}.jpg`} alt="" />
                                            </td>
                                            <td className='py-3 px-4 font-medium whitespace-nowrap border-b border-gray-100'>Pending</td>
                                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap border-b border-gray-100'>
                                                <div className='flex justify-start items-center gap-4'>
                                                <Link className='p-[6px] bg-yellow-400 rounded hover:shadow-md text-white hover:shadow-yellow-500/50'> <FaEdit/> </Link> 
                                                <Link className='p-[6px] bg-red-500 rounded hover:shadow-md text-white hover:shadow-red-400/50'> <FaTrash/> </Link> 
                                                </div>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='w-full flex justify-end mt-4 bottom-4 right-4'>
                            <Pagination 
                                pageNumber = {currentPage}
                                setPageNumber = {setCurrentPage}
                                totalItem = {50}
                                parPage = {parPage}
                                showItem = {3}
                            />
                        </div>
                        
                    </div>
                </div>
                <div className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${show ? 'right-0' : '-right-[340px]'} z-[9999] top-0 transition-all duration-500 `} >
                    <div className='w-full pl-5'>
                        <div className='bg-[#ffff] h-screen lg:h-auto px-3 py-4 lg:rounded-md text-[#6a6a6b] border'>
                            <h1 className='text-[#6a6a6b] font-semibold text-xl mb-4 w-full text-center '>Add Category</h1>
                            <form>
                                <div className='flex flex-col w-full gap-1 mb-3'>
                                    <label htmlFor="name"> Category Name</label>
                                    <input className='px-4 py-2 focus:border-gray-500 outline-none bg-[#ffffff] border border-slate-700 rounded-md text-[#000000]' type="text" id='name' name='category_name' placeholder='Category Name' />
                                </div>
                                <div>
                                    <label className='flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-red-500 w-full border-[#d0d2d6]'  htmlFor="image">
                                        <span><FaImage/> </span>
                                        <span>Select Image</span> 
                                    </label>
                                    <input className='hidden' type="file" name="image" id="image" />
                                    <div>
                                    <button className='bg-red-500 w-full hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 my-2'>Add Category</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Category;
