import React from 'react';
import Error from "../assets/Error.jpg"
import { useNavigate } from 'react-router';

const ErrorPage = () => {

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/")
    }

    return (
        <div className='bg-white mt-50'>
            <div className='container mx-auto'>
                <div>
                    <img className='mx-auto' src={Error} alt="Error404"/>
                </div>
                <div className='text-center mt-8'>
                    <h1 className='text-xl md:text-4xl font-extrabold text-red-600'>Ooops! The page you are looking for doesn't exist</h1>
                    <button onClick={handleGoHome} className='btn text-lg md:text-xl mt-10 py-6 bg-[#0EA106] text-white rounded-lg'>Go Back Home</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;