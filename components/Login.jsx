"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    // Add your login logic here
  };

  return (
    <div className=" bg-gray-50 flex items-center justify-center px-4 py-25">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-white  shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 relative bg-gray-100">
              <div className="aspect-square md:aspect-auto md:h-full relative">
                <Image
                  src="/LoginCard.jpg"
                  alt="Laptop showing SuperShield website"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay to match the blurred background effect */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="lg:w-1/2 p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
              <div className="w-full max-w-md mx-auto">
                <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-8 text-center lg:text-left poppins">
                  Distributor Login
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Username Field */}
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700 mb-2 open-sans"
                    >
                      Username <span className="text-[#c50022]">*</span>
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Enter your username"
                      required
                      className="w-full px-4 py-3 border border-gray-300  outline-none transition-colors duration-200 text-gray-900 placeholder-gray-500"
                    />
                  </div>

                  {/* Password Field */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-2 open-sans"
                    >
                      Password <span className="text-[#c50022]">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      required
                      className="w-full px-4 py-3 border border-gray-300 outline-none transition-colors duration-200 text-gray-900 placeholder-gray-500"
                    />
                  </div>

                  {/* Login Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="open-sans w-full cursor-pointer bg-[#C50022] hover:bg-[#B41424] text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 group"
                    >
                      LOGIN
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </button>
                  </div>
                </form>

                {/* Additional Options */}
                <div className="mt-6 text-center">
                  <a
                    href="/forgot-password"
                    className="text-sm text-gray-600 hover:text-[#C50022] transition-colors duration-200 open-sans"
                  >
                    Forgot your password?
                  </a>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Need an account?{" "}
                    <a
                      href="/register"
                      className="text-[#C50022] hover:text-[#B41424] font-medium transition-colors duration-200 open-sans"
                    >
                      Contact your administrator
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
