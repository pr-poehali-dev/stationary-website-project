import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      category: "Кардиология",
      icon: "Heart",
      services: [
        "ЭКГ и суточное мониторирование",
        "Эхокардиография",
        "Коронарография",
        "Стентирование сосудов",
        "Кардиохирургия",
      ],
    },
    {
      category: "Неврология",
      icon: "Brain",
      services: [
        "МРТ головного мозга",
        "Электроэнцефалография",
        "Лечение инсультов",
        "Нейрохирургия",
        "Реабилитация",
      ],
    },
    {
      category: "Хирургия",
      icon: "Scissors",
      services: [
        "Плановые операции",
        "Экстренная хирургия",
        "Лапароскопия",
        "Эндоскопия",
        "Пластическая хирургия",
      ],
    },
    {
      category: "Терапия",
      icon: "Stethoscope",
      services: [
        "Общая терапия",
        "Пульмонология",
        "Гастроэнтерология",
        "Эндокринология",
        "Ревматология",
      ],
    },
    {
      category: "Диагностика",
      icon: "Search",
      services: [
        "КТ и МРТ",
        "УЗИ всех органов",
        "Рентгенография",
        "Лабораторные анализы",
        "Функциональная диагностика",
      ],
    },
    {
      category: "Реанимация",
      icon: "Zap",
      services: [
        "Интенсивная терапия",
        "Искусственная вентиляция",
        "Гемодиализ",
        "Мониторинг витальных функций",
        "Экстренная помощь",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Медицинские услуги</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Полный спектр медицинских услуг в стационаре. Современное
              оборудование и опытные специалисты.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <Icon
                    name={service.icon as any}
                    className="h-8 w-8 text-blue-600 mr-3"
                  />
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {service.services.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Icon
                        name="Check"
                        className="h-4 w-4 text-green-500 mr-2"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Записаться на консультацию
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="bg-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Экстренные услуги
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Круглосуточная экстренная помощь и реанимационное отделение
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Icon
                name="Phone"
                className="h-12 w-12 text-red-600 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Скорая помощь</h3>
              <p className="text-gray-600 text-sm">Круглосуточно</p>
              <p className="text-red-600 font-bold">103</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Icon
                name="Truck"
                className="h-12 w-12 text-blue-600 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Транспортировка</h3>
              <p className="text-gray-600 text-sm">Между больницами</p>
              <p className="text-blue-600 font-bold">24/7</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Icon
                name="Activity"
                className="h-12 w-12 text-green-600 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Реанимация</h3>
              <p className="text-gray-600 text-sm">Интенсивная терапия</p>
              <p className="text-green-600 font-bold">24/7</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Icon
                name="AlertTriangle"
                className="h-12 w-12 text-orange-600 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Травмпункт</h3>
              <p className="text-gray-600 text-sm">Экстренная хирургия</p>
              <p className="text-orange-600 font-bold">24/7</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
