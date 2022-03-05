import React from "react";

const CancellationPolicy = () => {
  return (
    <div className="max-w-3xl flex flex-col mx-auto justify-center">
      <div className="my-10">
        <h1 className="text-4xl py-8 font-semibold text-gray-600">Cancellation Policies</h1>
        <p className="text-md font-semibold leading-7 tracking-wide text-gray-800">Farmease allows renters to choose among three standardized cancellation policies (Flexible, Moderate, and Strict) that we will enforce to protect both guest and rent alike. The Super Strict cancellation policies apply to special circumstances and are by invitation only. The Long Term cancellation policy applies to all reservations of 28 nights or more. Each listing and reservation on our site will clearly state the cancellation policy. Guests may cancel and review any penalties by viewing their travel plans and then clicking ‘Cancel’ on the appropriate reservation. A renter will be able to see the number of reservations a guest has canceled over the previous 12 months when the guest submits a request to book.</p>
      </div>
    </div>
  );
};

export default CancellationPolicy;
