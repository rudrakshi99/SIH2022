import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
            setDone(true);
            setName('');setEmail('');setMessage('');setSubject('');setPhone('');
            setTimeout(() => {
                setDone(false);
            }, 3000);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className='h-[460px] py-12 bg-[rgba(255,255,255,0.8)]'>
            <div className='flex justify-center'>
                <div className='flex-1 pl-40'>
                    <h1 className='text-3xl pt-6 text-gray-900 font-bold opacity-[0.9]'>Contact Us</h1>
                    <p className='mt-12 text-gray-800 text-lg font-semibold'>Head Office</p>
                    <p className='mt-3 text-gray-500 text-md font-semibold'>JSSATE, Sector 62, Block C, Noida</p>
                    <p className='mt-3 text-gray-500 text-md font-semibold'><i className="text-green-400 fa-solid fa-envelope"></i> Email : <a href="" className='text-green-700 font-semibold'>krishisadhan7@gmail.com</a></p>
                </div>

                <div className='flex-1'>
                    <h1 className='text-2xl pt-6 text-gray-900 font-bold opacity-[0.9]'>Reach Us Quickly</h1>
                    <form ref={formRef} onSubmit={handleSubmit} className="w-full mt-12 max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-2/5 mr-3 border border-green-400 px-3 mb-6 md:mb-0">
                                <input onChange={(e) => setName(e.target.value)} value={name} className="cInput appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" required type="text" name="user_name" placeholder="Name*" />
                            </div>
                            <div className="w-full md:w-2/5 ml-3 border border-green-400 px-3">
                                <input onChange={(e) => setEmail(e.target.value)} value={email} className="cInput appearance-none block w-full rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" name="user_email" placeholder="Email" />
                            </div>
                            <div className="w-full md:w-2/5 mt-3 mr-3 px-3 mb-6 border border-green-400 md:mb-0">
                                <input onChange={(e) => setPhone(e.target.value)} value={phone} className="cInput appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight border border-green-100 focus:outline-none focus:bg-white" id="grid-first-name" type="text" name="user_phone" placeholder="Mobile No.*" />
                            </div>
                            <div className="w-full md:w-2/5 ml-3 mt-3 px-3 border border-green-400 mb-6 md:mb-0">
                                <input onChange={(e) => setSubject(e.target.value)} value={subject} className="cInput appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight border border-green-100 focus:outline-none focus:bg-white" id="grid-first-name" type="text" name="subject" placeholder="Subject" />
                            </div>
                            <div className="w-full h-20 md:w-[450px] mt-3 mb-6 md:mb-0">
                                {/* <textarea onChange={(e) => setMessage(e.target.value)} value={message} className="form-control block w-full px-0.5 py-0.5 text-base font-normal text-gray-700 bg-white bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlTextarea1" name="message"
                                    rows="3" cols="6"
                                    placeholder="Message*"
                                ></textarea> */}
                                <textarea rows={3} cols={10} type="text" name="phone_number" id="phone_number" autocomplete="given-number" class="mt-1 px-2 py-1 focus:ring-indigo-500 border border-green-400 outline-none block w-full shadow-sm sm:text-sm rounded-md" />
                            </div>
                            {done && (
                                <h1 style={{color: '#59b256', fontSize: '18px', marginTop: '12px'}}>Thank you, Your email has been sent</h1>
                            )}
                            <button className="mt-7 ml-auto bg-darkgreen mr-16 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full">
                                Send Message
                            </button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs