import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Doctors = () => {
  const doctors = [
    {
      name: "Иванов Алексей Петрович",
      specialty: "Главный врач, кардиохирург",
      experience: "25 лет",
      category: "Высшая категория",
      education: "1-й МГМУ им. И.М. Сеченова",
      achievements: ["Доктор медицинских наук", "Заслуженный врач РФ"],
      photo:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Петрова Елена Михайловна",
      specialty: "Заведующая неврологическим отделением",
      experience: "18 лет",
      category: "Высшая категория",
      education: "РНИМУ им. Н.И. Пирогова",
      achievements: ["Кандидат медицинских наук", "Отличник здравоохранения"],
      photo:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Сидоров Дмитрий Александрович",
      specialty: "Хирург-онколог",
      experience: "15 лет",
      category: "Первая категория",
      education: "МГУ им. М.В. Ломоносова",
      achievements: ["Специалист по лапароскопии", "Европейская стажировка"],
      photo:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Козлова Анна Сергеевна",
      specialty: "Анестезиолог-реаниматолог",
      experience: "12 лет",
      category: "Первая категория",
      education: "РУДН",
      achievements: ["Специалист по интенсивной терапии", "Сертификат ATLS"],
      photo:
        "https://images.unsplash.com/photo-1594824375914-e4b8654c4343?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Морозов Игорь Владимирович",
      specialty: "Травматолог-ортопед",
      experience: "20 лет",
      category: "Высшая категория",
      education: "ЦИТО им. Н.Н. Приорова",
      achievements: ["Артроскопическая хирургия", "Эндопротезирование"],
      photo:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Волкова Мария Игоревна",
      specialty: "Гастроэнтеролог",
      experience: "10 лет",
      category: "Первая категория",
      education: "МГМСУ им. А.И. Евдокимова",
      achievements: ["Эндоскопическая диагностика", "Гепатология"],
      photo:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Наши врачи</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Высококвалифицированные специалисты с многолетним опытом работы.
              Лучшие врачи Москвы к вашим услугам.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={doctor.photo}
                      alt={doctor.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {doctor.name}
                      </h3>
                      <p className="text-blue-600 text-sm font-medium">
                        {doctor.specialty}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Icon name="Clock" className="h-4 w-4 mr-2" />
                      <span>Опыт: {doctor.experience}</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                      <Icon name="Award" className="h-4 w-4 mr-2" />
                      <span>{doctor.category}</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                      <Icon name="GraduationCap" className="h-4 w-4 mr-2" />
                      <span>{doctor.education}</span>
                    </div>

                    <div className="pt-2">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">
                        Достижения:
                      </h4>
                      <ul className="space-y-1">
                        {doctor.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-gray-600 flex items-center"
                          >
                            <Icon
                              name="CheckCircle"
                              className="h-3 w-3 text-green-500 mr-1"
                            />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Записаться на приём
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наша команда в цифрах
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">45+</div>
              <div className="text-gray-600">Врачей</div>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">120+</div>
              <div className="text-gray-600">Медсестер</div>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600">Специальностей</div>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doctors;
