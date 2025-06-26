import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Departments = () => {
  const departments = [
    {
      name: "Кардиологическое отделение",
      icon: "Heart",
      beds: 25,
      description: "Лечение заболеваний сердца и сосудов",
      services: ["Коронарография", "Стентирование", "ЭКГ", "ЭхоКГ", "Холтер"],
      head: "Иванов А.П.",
      phone: "+7 (495) 123-45-67",
    },
    {
      name: "Неврологическое отделение",
      icon: "Brain",
      beds: 20,
      description: "Диагностика и лечение заболеваний нервной системы",
      services: ["МРТ мозга", "ЭЭГ", "Реабилитация", "Лечение инсультов"],
      head: "Петрова Е.М.",
      phone: "+7 (495) 123-45-68",
    },
    {
      name: "Хирургическое отделение",
      icon: "Scissors",
      beds: 30,
      description: "Плановая и экстренная хирургия",
      services: [
        "Лапароскопия",
        "Эндоскопия",
        "Общая хирургия",
        "Онкохирургия",
      ],
      head: "Сидоров Д.А.",
      phone: "+7 (495) 123-45-69",
    },
    {
      name: "Отделение реанимации",
      icon: "Activity",
      beds: 12,
      description: "Интенсивная терапия и реанимация",
      services: [
        "ИВЛ",
        "Мониторинг",
        "Гемодиализ",
        "Экстракорпоральные методы",
      ],
      head: "Козлова А.С.",
      phone: "+7 (495) 123-45-70",
    },
    {
      name: "Травматологическое отделение",
      icon: "Bone",
      beds: 18,
      description: "Лечение травм и заболеваний опорно-двигательного аппарата",
      services: [
        "Остеосинтез",
        "Эндопротезирование",
        "Артроскопия",
        "Реабилитация",
      ],
      head: "Морозов И.В.",
      phone: "+7 (495) 123-45-71",
    },
    {
      name: "Гастроэнтерологическое отделение",
      icon: "Stethoscope",
      beds: 15,
      description: "Лечение заболеваний желудочно-кишечного тракта",
      services: [
        "ФГДС",
        "Колоноскопия",
        "УЗИ органов брюшной полости",
        "Гепатология",
      ],
      head: "Волкова М.И.",
      phone: "+7 (495) 123-45-72",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Отделения стационара</h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              6 специализированных отделений с современным оборудованием и
              высококвалифицированным персоналом.
            </p>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Icon
                      name={dept.icon as any}
                      className="h-10 w-10 text-blue-600 mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {dept.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {dept.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {dept.beds} коек
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Основные услуги:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {dept.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <Icon name="User" className="h-4 w-4 mr-1" />
                        <span>Зав. отделением: {dept.head}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Icon name="Phone" className="h-4 w-4 mr-1" />
                        <span>{dept.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Получить консультацию
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Layout */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Схема больницы
            </h2>
            <p className="text-gray-600">
              Современный 5-этажный медицинский комплекс
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                1 этаж
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <div>Приемное отделение</div>
                <div>Регистратура</div>
                <div>Аптека</div>
                <div>Кафе</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">
                2 этаж
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <div>Хирургия</div>
                <div>Операционные</div>
                <div>Реанимация</div>
                <div>Стерилизация</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">
                3 этаж
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <div>Кардиология</div>
                <div>Неврология</div>
                <div>Функциональная диагностика</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">
                4 этаж
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <div>Травматология</div>
                <div>Гастроэнтерология</div>
                <div>Лаборатория</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-2xl font-bold text-red-600 mb-2">5 этаж</div>
              <div className="space-y-1 text-sm text-gray-600">
                <div>Администрация</div>
                <div>Конференц-зал</div>
                <div>Библиотека</div>
                <div>Архив</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Departments;
