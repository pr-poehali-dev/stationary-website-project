import React from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Icon name="Heart" className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">МедЦентр+</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Главная
              </Link>
              <Link
                to="/services"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/services")
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Услуги
              </Link>
              <Link
                to="/departments"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/departments")
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Отделения
              </Link>
              <Link
                to="/doctors"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/doctors")
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Врачи
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/about")
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                О нас
              </Link>
              <Link
                to="/contacts"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/contacts")
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Контакты
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center text-sm text-gray-600">
              <Icon name="Phone" className="h-4 w-4 mr-1" />
              <span>+7 (495) 123-45-67</span>
            </div>
            <Link
              to="/emergency"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
            >
              <Icon name="Zap" className="h-4 w-4 mr-1" />
              Экстренно
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
