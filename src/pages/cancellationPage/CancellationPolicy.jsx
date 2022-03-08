import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CancellationForm from "../../components/cancellationForm";

const CancellationPolicy = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!Cookies.get('access-token')) {
        navigate('/');
    }
  }, []);
  
  return (
    <div className="max-w-3xl flex flex-col mx-auto justify-center">
      <div className="my-10">
        <h1 className="text-4xl py-8 font-semibold text-gray-600">Cancellation Policies</h1>
        <p className="text-md font-semibold leading-7 tracking-wide text-gray-800">Farmease allows renters to choose among three standardized cancellation policies (Flexible, Moderate, and Strict) that we will enforce to protect both guest and rent alike. The Super Strict cancellation policies apply to special circumstances and are by invitation only. The Long Term cancellation policy applies to all reservations of 28 nights or more. Each listing and reservation on our site will clearly state the cancellation policy. Guests may cancel and review any penalties by viewing their travel plans and then clicking ‘Cancel’ on the appropriate reservation. A renter will be able to see the number of reservations a guest has canceled over the previous 12 months when the guest submits a request to book.</p>
      </div>

      {/* <div className='max-w-4xl mx-auto'>
                <div className='flex'>
                    <div className='flex-1 border-b-2 py-2 text-gray-500 font-normal text-lg text-center'>Customer</div>
                    <div className='flex-1 text-center border-l-2 border-b-2 py-2 border-[#68AC5D] text-[#68AC5D] font-normal text-lg'>Owner</div>
                    <div className='flex-1 text-center border-l-2 border-b-2 py-2 border-[#68AC5D] text-[#68AC5D] font-normal text-lg'>Owner</div>
                </div>
        </div> */}

        <CancellationForm />
    </div>
  );
};

export default CancellationPolicy;
