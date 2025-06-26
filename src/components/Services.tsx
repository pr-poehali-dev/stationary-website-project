import React from "react";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Heart",
      title: "Кардиология",
      description:
        "Диагностика и лечение заболеваний сердца и сосудов с использованием современного оборудования",
      color: "text-red-600",
    },
    {
      icon: "Brain",
      title: "Неврология",
      description:
        "Комплексное обследование и лечение заболеваний нервной системы",
      color: "text-purple-600",
    },
    {
      icon: "Eye",
      title: "Офтальмология",
      description: "Полная диагностика зрения и лечение глазных заболеваний",
      color: "text-blue-600",
    },
    {
      icon: "Bone",
      title: "Ортопедия",
      description: "Лечение травм и заболеваний опорно-двигательного аппарата",
      color: "text-orange-600",
    },
    {
      icon: "Baby",
      title: "Педиатрия",
      description: "Медицинская помощь детям от рождения до совершеннолетия",
      color: "text-pink-600",
    },
    {
      icon: "Stethoscope",
      title: "Терапия",
      description: "Общая диагностика и лечение широкого спектра заболеваний",
      color: "text-green-600",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Наши медицинские услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Предоставляем полный спектр медицинских услуг с использованием
            передовых технологий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`inline-flex p-3 rounded-lg bg-white shadow-sm mb-4`}
              >
                <Icon
                  name={service.icon}
                  className={`h-6 w-6 ${service.color}`}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                Подробнее
                <Icon name="ArrowRight" className="h-4 w-4 ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
