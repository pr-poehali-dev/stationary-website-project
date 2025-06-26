import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Icon name="Heart" className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">МедЦентр+</span>
            </div>
            <p className="text-gray-300 mb-4">
              Современная медицинская клиника с 15-летним опытом работы. Ваше
              здоровье - наш приоритет.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white">
                <Icon name="Facebook" className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-white">
                <Icon name="Instagram" className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-white">
                <Icon name="Twitter" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Icon name="Map" className="h-5 w-5 mr-2 text-blue-400" />
              Карта сайта
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Записаться на приём
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Вызов врача на дом
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Результаты анализов
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Справочник болезней
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Кардиология
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Неврология
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Офтальмология
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ортопедия
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О клинике
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Наши врачи
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Лицензии
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Icon name="MapPin" className="h-4 w-4 mr-2" />
                <span>ул. Медицинская, 15, Москва</span>
              </div>
              <div className="flex items-center">
                <Icon name="Phone" className="h-4 w-4 mr-2" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="h-4 w-4 mr-2" />
                <span>info@medcenter.ru</span>
              </div>
              <div className="flex items-center">
                <Icon name="Clock" className="h-4 w-4 mr-2" />
                <span>Ежедневно: 8:00 - 22:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">
                Пациентам
              </h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Подготовка к анализам
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Памятки пациентам
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Программы диспансеризации
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Медицинские справки
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">
                Специалисты
              </h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Кардиолог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Невролог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Офтальмолог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Ортопед
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">
                Диагностика
              </h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    УЗИ диагностика
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Лабораторные анализы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    ЭКГ и ЭХО-КГ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Рентгенография
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">
                О клинике
              </h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    История клиники
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Новости и статьи
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Вакансии
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2024 МедЦентр+. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
