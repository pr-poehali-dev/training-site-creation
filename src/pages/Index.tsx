import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const workshops = [
    {
      id: 1,
      title: "Акварельная живопись",
      description: "Изучите основы работы с акварелью и создайте свой первый пейзаж",
      duration: "2 часа",
      price: "3500 ₽",
      level: "Начинающий",
      image: "/img/593e465d-de4f-4b3f-b694-b387b341dd63.jpg"
    },
    {
      id: 2,
      title: "Керамика и лепка",
      description: "Создайте уникальные керамические изделия своими руками",
      duration: "3 часа",
      price: "4200 ₽",
      level: "Средний",
      image: "/img/e391db72-2917-4c45-ba36-38dbe00c4250.jpg"
    },
    {
      id: 3,
      title: "Каллиграфия",
      description: "Освойте искусство красивого письма и создайте авторские открытки",
      duration: "1.5 часа",
      price: "2800 ₽",
      level: "Начинающий",
      image: "/img/f817f67f-1567-4031-ba44-980b94b90375.jpg"
    }
  ];

  const schedule = [
    { day: "Понедельник", time: "18:00", workshop: "Акварельная живопись" },
    { day: "Среда", time: "19:00", workshop: "Керамика и лепка" },
    { day: "Пятница", time: "17:30", workshop: "Каллиграфия" },
    { day: "Суббота", time: "14:00", workshop: "Акварельная живопись" },
    { day: "Воскресенье", time: "16:00", workshop: "Керамика и лепка" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Icon name="Palette" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CreativeStudio
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#programs" className="text-gray-600 hover:text-blue-600 transition-colors">Программы</a>
              <a href="#schedule" className="text-gray-600 hover:text-blue-600 transition-colors">Расписание</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">О нас</a>
              <a href="#contacts" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                Записаться
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
            Творческие мастер-классы
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Откройте в себе художника! Присоединяйтесь к нашим вдохновляющим мастер-классам 
            и создавайте удивительные произведения своими руками
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-3 hover-scale">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Выбрать мастер-класс
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-blue-300 hover:bg-blue-50">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Наши программы
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop) => (
              <Card key={workshop.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover-scale border-0 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                  <img 
                    src={workshop.image} 
                    alt={workshop.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-800 hover:bg-white">
                      {workshop.level}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{workshop.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{workshop.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {workshop.duration}
                    </div>
                    <div className="text-lg font-bold text-blue-600">
                      {workshop.price}
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                    Записаться на мастер-класс
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Расписание занятий
          </h3>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-800">
                  Ближайшие мастер-классы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Icon name="Calendar" size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">{item.day}</div>
                          <div className="text-sm text-gray-600">{item.time}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-800">{item.workshop}</div>
                        <Button size="sm" className="mt-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                          Записаться
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Записаться на мастер-класс
          </h3>
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-800">
                  Быстрая регистрация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Имя
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Выберите мастер-класс
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Акварельная живопись</option>
                      <option>Керамика и лепка</option>
                      <option>Каллиграфия</option>
                    </select>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg py-3">
                    <Icon name="Send" size={20} className="mr-2" />
                    Записаться на мастер-класс
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
            О нас
          </h3>
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Опытные мастера</h4>
                <p className="text-gray-600">Профессиональные художники с многолетним опытом</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Творческая атмосфера</h4>
                <p className="text-gray-600">Уютная студия, где каждый может раскрыть свой талант</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Гарантия результата</h4>
                <p className="text-gray-600">Каждый участник создаст готовое произведение</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              CreativeStudio — это место, где искусство встречается с вдохновением. 
              Мы создали пространство для творчества, где каждый может открыть в себе художника. 
              Наши мастер-классы подходят как для начинающих, так и для тех, кто хочет развить свои навыки.
            </p>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Контакты
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">Наша студия</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-blue-500" />
                    <span className="text-gray-600">г. Москва, ул. Тверская, 15</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-blue-500" />
                    <span className="text-gray-600">+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-blue-500" />
                    <span className="text-gray-600">hello@creativestudio.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-blue-500" />
                    <span className="text-gray-600">Пн-Вс: 10:00 - 22:00</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">Социальные сети</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Instagram" size={20} className="text-pink-500" />
                    <span className="text-gray-600">@creativestudio_moscow</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Facebook" size={20} className="text-blue-600" />
                    <span className="text-gray-600">CreativeStudio Moscow</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Youtube" size={20} className="text-red-500" />
                    <span className="text-gray-600">CreativeStudio Channel</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MessageCircle" size={20} className="text-green-500" />
                    <span className="text-gray-600">@creativestudio_bot</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Icon name="Palette" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">CreativeStudio</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 CreativeStudio. Все права защищены.</p>
              <p className="text-gray-400">Творчество без границ</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;