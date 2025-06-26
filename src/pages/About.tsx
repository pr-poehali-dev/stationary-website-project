import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">О нашем стационаре</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              15 лет опыта в оказании качественной медицинской помощи.
              Современное оборудование и высококвалифицированный персонал.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Наша история
              </h2>
              <p className="text-gray-600 mb-4">
                МедЦентр+ был основан в 2009 году с целью предоставления
                высококачественной медицинской помощи жителям Москвы и области.
                За годы работы мы помогли более чем 50 000 пациентам
                восстановить здоровье.
              </p>
              <p className="text-gray-600 mb-6">
                Наш стационар оснащен современным медицинским оборудованием
                экспертного класса и располагает 120 койко-местами в
                комфортабельных палатах.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">15</div>
                  <div className="text-sm text-gray-600">лет опыта</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">50K+</div>
                  <div className="text-sm text-gray-600">пациентов</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop"
                alt="Современное медицинское оборудование"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Icon
                name="Target"
                className="h-12 w-12 text-blue-600 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Наша миссия</h3>
              <p className="text-gray-600">
                Обеспечить каждому пациенту доступную, качественную и безопасную
                медицинскую помощь с использованием современных технологий.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Icon
                name="Award"
                className="h-12 w-12 text-green-600 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Наши ценности</h3>
              <p className="text-gray-600">
                Профессионализм, человечность, индивидуальный подход к каждому
                пациенту и постоянное совершенствование методов лечения.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Icon
                name="Shield"
                className="h-12 w-12 text-purple-600 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Наши принципы</h3>
              <p className="text-gray-600">
                Соблюдение высоких стандартов качества, безопасность пациентов и
                конфиденциальность медицинской информации.
              </p>
            </div>
          </div>

          {/* Certificates */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Лицензии и сертификаты
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Icon
                  name="FileCheck"
                  className="h-8 w-8 text-blue-600 mx-auto mb-2"
                />
                <h4 className="font-semibold text-sm">Лицензия Минздрава</h4>
                <p className="text-xs text-gray-600">№ЛО-77-01-020925</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Icon
                  name="Award"
                  className="h-8 w-8 text-green-600 mx-auto mb-2"
                />
                <h4 className="font-semibold text-sm">ISO 9001:2015</h4>
                <p className="text-xs text-gray-600">
                  Система менеджмента качества
                </p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Icon
                  name="Shield"
                  className="h-8 w-8 text-purple-600 mx-auto mb-2"
                />
                <h4 className="font-semibold text-sm">Аккредитация</h4>
                <p className="text-xs text-gray-600">Росздравнадзор</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Icon
                  name="Star"
                  className="h-8 w-8 text-yellow-600 mx-auto mb-2"
                />
                <h4 className="font-semibold text-sm">Рейтинг качества</h4>
                <p className="text-xs text-gray-600">4.8/5.0 по отзывам</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
