import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Emergency = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Icon name="AlertTriangle" className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Экстренная помощь</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Круглосуточная экстренная медицинская помощь. Современное
              реанимационное отделение и операционные.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Экстренные номера
            </h2>
            <p className="text-gray-600">
              В случае угрозы жизни немедленно звоните
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Icon
                name="Phone"
                className="h-12 w-12 text-red-600 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Скорая помощь
              </h3>
              <div className="text-3xl font-bold text-red-600 mb-2">103</div>
              <p className="text-sm text-gray-600">Экстренный вызов</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Icon
                name="Building"
                className="h-12 w-12 text-blue-600 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Приемное отделение
              </h3>
              <div className="text-xl font-bold text-blue-600 mb-2">
                +7 (495) 123-45-67
              </div>
              <p className="text-sm text-gray-600">Круглосуточно</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Icon
                name="Activity"
                className="h-12 w-12 text-green-600 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Реанимация
              </h3>
              <div className="text-xl font-bold text-green-600 mb-2">
                +7 (495) 123-45-70
              </div>
              <p className="text-sm text-gray-600">Интенсивная терапия</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Icon
                name="Zap"
                className="h-12 w-12 text-purple-600 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Дежурный врач
              </h3>
              <div className="text-xl font-bold text-purple-600 mb-2">
                +7 (495) 123-45-99
              </div>
              <p className="text-sm text-gray-600">Консультации 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Экстренные услуги
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Icon name="Heart" className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Кардиологические неотложные состояния
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Инфаркт миокарда</li>
                <li>• Острая сердечная недостаточность</li>
                <li>• Нарушения ритма сердца</li>
                <li>• Гипертонический криз</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Icon name="Brain" className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Неврологические неотложные состояния
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Инсульт</li>
                <li>• Эпилептический статус</li>
                <li>• Менингит</li>
                <li>• Черепно-мозговые травмы</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Icon name="Scissors" className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Хирургические неотложные состояния
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Острый аппендицит</li>
                <li>• Кишечная непроходимость</li>
                <li>• Перитонит</li>
                <li>• Внутренние кровотечения</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Icon name="Bone" className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Травматологические неотложные состояния
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Переломы костей</li>
                <li>• Вывихи суставов</li>
                <li>• Повреждения связок</li>
                <li>• Политравма</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Icon
                name="Thermometer"
                className="h-12 w-12 text-purple-600 mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Интоксикации и отравления
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Пищевые отравления</li>
                <li>• Алкогольные интоксикации</li>
                <li>• Химические отравления</li>
                <li>• Лекарственные отравления</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Icon name="Wind" className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Дыхательная недостаточность
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Астматический статус</li>
                <li>• Отек легких</li>
                <li>• Пневмоторакс</li>
                <li>• Тромбоэмболия</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to Do */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Что делать в экстренной ситуации
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Оцените состояние
              </h3>
              <p className="text-sm text-gray-600">
                Определите степень тяжести состояния пострадавшего
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Вызовите скорую</h3>
              <p className="text-sm text-gray-600">
                Немедленно наберите 103 или +7 (495) 123-45-67
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Окажите первую помощь
              </h3>
              <p className="text-sm text-gray-600">
                При необходимости проведите реанимационные мероприятия
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Дождитесь помощи</h3>
              <p className="text-sm text-gray-600">
                Сохраняйте спокойствие и следуйте указаниям диспетчера
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Emergency;
