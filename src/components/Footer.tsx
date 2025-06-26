import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 МедЦентр+. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
