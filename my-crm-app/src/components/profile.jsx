import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext'; // Adjust the path if necessary
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Profile() {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
            <div className="bg-gray-800 bg-opacity-80 w-full max-w-3xl p-8 rounded-lg shadow-lg">
                <div className="flex flex-col items-center">
                    <img src="https://placehold.co/150?text=Admin" alt="Admin Profile" className="w-24 h-24 rounded-full border-4 border-primary-500" />
                    <h2 className="text-2xl font-bold mt-4 text-center text-primary-500">{user.name}</h2>
                    <p className="text-sm text-gray-300 mt-2 text-center">Administrator</p>
                </div>
                <div className="mt-6">
                    <label htmlFor="email" className="block text-sm text-gray-300">Email</label>
                    <input
                        id="email"
                        type="email"
                        className="w-full bg-gray-700 text-gray-200 mt-1 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        value={user.email}
                        disabled
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="phone" className="block text-sm text-gray-300">Phone</label>
                    <input
                        id="phone"
                        type="tel"
                        className="w-full bg-gray-700 text-gray-200 mt-1 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        value={"123-456-7890"} // Dummy data
                        disabled
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="address" className="block text-sm text-gray-300">Address</label>
                    <textarea
                        id="address"
                        className="w-full bg-gray-700 text-gray-200 mt-1 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        rows="3"
                        value={"1234 Developer Lane, Code City, CA 90210"} // Dummy data
                        disabled
                    />
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-bold text-center text-primary-500">About Me</h3>
                    <p className="text-center text-gray-300 mt-2">
                        I'm a passionate MERN stack developer with expertise in building dynamic web applications. I love coding and continuously learning new technologies.
                    </p>
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-bold text-center text-primary-500">Skills</h3>
                    <div className="mt-4 space-y-4">
                        <div>
                            <p className="text-gray-300">JavaScript</p>
                            <div className="w-full bg-gray-700 rounded-full h-4">
                                <div className="bg-blue-600 h-4 rounded-full" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-300">React</p>
                            <div className="w-full bg-gray-700 rounded-full h-4">
                                <div className="bg-green-500 h-4 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-300">Node.js</p>
                            <div className="w-full bg-gray-700 rounded-full h-4">
                                <div className="bg-yellow-500 h-4 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-300">MongoDB</p>
                            <div className="w-full bg-gray-700 rounded-full h-4">
                                <div className="bg-red-500 h-4 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-bold text-center text-primary-500">Connect with Me</h3>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                            <FaFacebook size={30} />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500">
                            <FaInstagram size={30} />
                        </a>
                    </div>
                </div>
                <div className="mt-6">
                    <button className="w-full bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition duration-150 ease-in-out">Edit Profile</button>
                </div>
            </div>
        </div>
    );
}
