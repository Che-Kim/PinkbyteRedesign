import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
            {/* Hero Section */}
      <section className="bg-white text-gray-900">
        <div className="container-custom section-padding">
          <div className="flex items-center justify-between">
            <div className="text-left max-w-4xl">
              <h1 className="text-6xl md:text-7xl font-normal mb-6 tracking-wide">
                <span className="text-pinkbyte-600">Imagine, produce</span><br />
                <span className="text-gray-900">and</span>
                <span className="text-pinkbyte-600"> deliver.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                Deploy without hardware constraints.<br />
                PinkByte delivers a modular stack of enterprise-grade technologies<br />
                engineered for performance, scalability, and future extensibility.
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src="/Tech.png" 
                alt="Technology Solutions" 
                className="w-96 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Description Section */}
      <section className="py-8 bg-gray-100 mt-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-sans tracking-wide">
              Stream Anywhere, Deploy Everywhere
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-sans tracking-wide">
              Leverage Intel x86/x64 architecture to stream your Windows-based application<br />
              to any connected device—efficiently and affordably.
            </p>
          </div>
        </div>
      </section>

      {/* Product Cards Section */}
      <section className="py-20 mt-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-4 tracking-wide">
              Our Core Technologies
            </h2>
            <div className="w-24 h-1 bg-pinkbyte-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* PinkByte Focus Card */}
            <div className="group relative">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="p-8">
                  <div className="mb-8 flex justify-center">
                    <img 
                      src="/Focus.png" 
                      alt="PinkByte Focus" 
                      className="w-76 h-76 object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <div>
                    <div className="text-center mb-6">
                      <h3 className="text-3xl font-light text-gray-900 mb-4 tracking-wide">
                        PinkByte Focus
                      </h3>
                      <p className="text-lg font-medium text-pinkbyte-600 leading-relaxed">
                        The ATM of online secured transactions.
                      </p>
                    </div>
                    <div className="text-left">
                      <p className="text-gray-700 leading-relaxed text-base">
                        FOCUS creates an impenetrable digital fortress, shielding critical business operations and transactional webpages from public exposure and third-party interference.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Porto Firmware Card */}
            <div className="group relative">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="p-8">
                  <div className="mb-8 flex justify-center">
                    <img 
                      src="/Porto.png" 
                      alt="Porto Firmware" 
                      className="w-78 h-72 object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <div>
                    <div className="text-center mb-6">
                      <h3 className="text-3xl font-light text-gray-900 mb-4 tracking-wide">
                        Porto Firmware
                      </h3>
                      <p className="text-lg font-medium text-pinkbyte-600 leading-relaxed">
                        For On-The-Go Privacy and Security.
                      </p>
                    </div>
                    <div className="text-left">
                      <p className="text-gray-700 leading-relaxed text-base">
                        Porto - reducing the footprint of all end-point devices. Discover how the Porto concept and design will enhance the next evolution of mobility, productivity, and removing the boundaries of hardware limitations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Partners Image */}
          <div className="text-center mt-16">
            <img 
              src="/partners.png" 
              alt="Partners" 
              className="h-22 w-auto object-contain mx-auto"
            />
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
