import React from "react";
import Icon from "@/components/ui/icon";

const EmergencyBanner = () => {
  return (
    <section className="bg-red-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-full p-3">
              <Icon name="Zap" className="h-8 w-8 text-red-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Экстренная медицинская помощь
          </h2>
          <p className="text-xl text-red-100 mb-6 max-w-2xl mx-auto">
            Наша служба экстренной помощи работает круглосуточно. В критических
            ситуациях каждая минута важна.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center bg-white bg-opacity-20 rounded-lg px-6 py-3">
              <Icon name="Phone" className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-semibold text-lg">103</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-20 rounded-lg px-6 py-3">
              <Icon name="MapPin" className="h-5 w-5 text-white mr-2" />
              <span className="text-white">ул. Медицинская, 15</span>
            </div>
            <button className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center">
              <Icon name="Navigation" className="h-5 w-5 mr-2" />
              Как добраться
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
