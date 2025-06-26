import React from "react";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Забота о вашем
              <span className="text-blue-600 block">здоровье</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Современная медицина на службе вашего благополучия. Опытные врачи,
              новейшее оборудование и индивидуальный подход к каждому пациенту.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                <Icon name="Calendar" className="h-5 w-5 mr-2" />
                Записаться на прием
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                <Icon name="Play" className="h-5 w-5 mr-2" />
                Виртуальная экскурсия
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">специалистов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">поддержка</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Современная медицинская клиника"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-full">
                <Icon name="Shield" className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
