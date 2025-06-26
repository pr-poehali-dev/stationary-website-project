import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Контакты</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом. Мы работаем круглосуточно
              для вашего здоровья.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Как с нами связаться
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Icon
                    name="MapPin"
                    className="h-6 w-6 text-blue-600 mr-4 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Адрес</h3>
                    <p className="text-gray-600">
                      ул. Медицинская, 15
                      <br />
                      Москва, 101000
                      <br />
                      Россия
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Icon
                    name="Phone"
                    className="h-6 w-6 text-green-600 mr-4 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Телефоны
                    </h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Справочная: +7 (495) 123-45-67</p>
                      <p>Скорая помощь: 103</p>
                      <p>Регистратура: +7 (495) 123-45-68</p>
                      <p>Платные услуги: +7 (495) 123-45-69</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Icon
                    name="Mail"
                    className="h-6 w-6 text-purple-600 mr-4 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>info@medcenter.ru</p>
                      <p>registratura@medcenter.ru</p>
                      <p>emergency@medcenter.ru</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Icon
                    name="Clock"
                    className="h-6 w-6 text-orange-600 mr-4 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Режим работы
                    </h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Стационар: круглосуточно</p>
                      <p>Регистратура: 8:00 - 20:00</p>
                      <p>Платные услуги: 9:00 - 18:00</p>
                      <p>Выходные: без выходных</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Мы в социальных сетях
                </h3>
                <div className="flex space-x-4">
                  <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <Icon name="Facebook" className="h-5 w-5" />
                  </button>
                  <button className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors">
                    <Icon name="Instagram" className="h-5 w-5" />
                  </button>
                  <button className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
                    <Icon name="Twitter" className="h-5 w-5" />
                  </button>
                  <button className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                    <Icon name="MessageCircle" className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Напишите нам
              </h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Тема обращения
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Записаться на приём</option>
                    <option>Получить справку</option>
                    <option>Узнать результаты анализов</option>
                    <option>Жалоба или предложение</option>
                    <option>Другое</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Опишите ваш вопрос подробнее..."
                  />
                </div>

                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label className="text-sm text-gray-600">
                    Я согласен на обработку персональных данных
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Как нас найти
            </h2>
            <p className="text-gray-600">
              Мы находимся в центре Москвы, рядом с метро
            </p>
          </div>

          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Icon
                name="MapPin"
                className="h-16 w-16 text-gray-600 mx-auto mb-4"
              />
              <p className="text-gray-600">Интерактивная карта</p>
              <p className="text-sm text-gray-500">
                ул. Медицинская, 15, Москва
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Icon name="Car" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">На автомобиле</h3>
              <p className="text-sm text-gray-600">
                Парковка для пациентов бесплатная
              </p>
            </div>

            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Icon
                name="Train"
                className="h-8 w-8 text-green-600 mx-auto mb-2"
              />
              <h3 className="font-semibold mb-1">На метро</h3>
              <p className="text-sm text-gray-600">
                5 минут пешком от ст. м. "Медицинская"
              </p>
            </div>

            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Icon
                name="Bus"
                className="h-8 w-8 text-orange-600 mx-auto mb-2"
              />
              <h3 className="font-semibold mb-1">На автобусе</h3>
              <p className="text-sm text-gray-600">
                Остановка "Больница" - автобусы 15, 28, 47
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
