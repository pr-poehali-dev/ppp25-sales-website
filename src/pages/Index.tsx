import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const counters = [
    {
      id: 1,
      name: "ППО-25 Базовая",
      model: "ППО-25-01",
      price: "12 500",
      image: "/img/a952ea61-5a6b-4ec0-a780-ca2e68b3f22d.jpg",
      specs: {
        range: "0-999999",
        accuracy: "±0.1%",
        display: "6-разрядный LED",
        power: "220В 50Гц",
        temperature: "-10°C до +50°C",
        housing: "IP54"
      },
      features: ["Высокая точность", "Промышленное исполнение", "LED дисплей"]
    },
    {
      id: 2,
      name: "ППО-25 Про",
      model: "ППО-25-02",
      price: "18 900",
      image: "/img/a952ea61-5a6b-4ec0-a780-ca2e68b3f22d.jpg",
      specs: {
        range: "0-9999999",
        accuracy: "±0.05%",
        display: "7-разрядный LED",
        power: "220В 50Гц",
        temperature: "-20°C до +60°C",
        housing: "IP65"
      },
      features: ["Повышенная точность", "Расширенный диапазон", "Защищенный корпус"]
    },
    {
      id: 3,
      name: "ППО-25 Макс",
      model: "ППО-25-03",
      price: "24 300",
      image: "/img/a952ea61-5a6b-4ec0-a780-ca2e68b3f22d.jpg",
      specs: {
        range: "0-99999999",
        accuracy: "±0.02%",
        display: "8-разрядный LED",
        power: "220В 50Гц",
        temperature: "-30°C до +70°C",
        housing: "IP67"
      },
      features: ["Максимальная точность", "Широкий диапазон", "Герметичный корпус"]
    }
  ];

  return (
    <div className="min-h-screen bg-industrial-white">
      {/* Header */}
      <header className="bg-industrial-dark text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="Factory" size={32} />
              <h1 className="text-2xl font-bold">ПромТех</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#catalog" className="hover:text-industrial-accent transition-colors">Каталог</a>
              <a href="#specs" className="hover:text-industrial-accent transition-colors">Характеристики</a>
              <a href="#contact" className="hover:text-industrial-accent transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-industrial-dark to-industrial-medium text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Счетчики ППО-25</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-industrial-light">
            Профессиональное промышленное оборудование для точного подсчета и контроля производственных процессов
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={20} />
              <span>Высокая точность</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} />
              <span>Промышленное исполнение</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} />
              <span>Сертифицировано</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-industrial-dark mb-4">Каталог оборудования</h2>
            <p className="text-industrial-steel max-w-2xl mx-auto">
              Выберите подходящую модель счетчика ППО-25 для ваших производственных задач
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {counters.map((counter) => (
              <Card key={counter.id} className="hover:shadow-lg transition-shadow border border-industrial-light">
                <CardHeader className="text-center pb-4">
                  <img 
                    src={counter.image} 
                    alt={counter.name}
                    className="w-full h-48 object-cover rounded-md mb-4 bg-industrial-light"
                  />
                  <CardTitle className="text-xl text-industrial-dark">{counter.name}</CardTitle>
                  <CardDescription className="text-industrial-steel">
                    Модель: {counter.model}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {counter.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="bg-industrial-light text-industrial-dark">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Separator />

                  {/* Technical Specifications */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-industrial-dark flex items-center">
                      <Icon name="Settings" size={16} className="mr-2" />
                      Технические характеристики
                    </h4>
                    <div className="text-sm text-industrial-steel space-y-1">
                      <div className="flex justify-between">
                        <span>Диапазон:</span>
                        <span className="font-medium">{counter.specs.range}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Точность:</span>
                        <span className="font-medium">{counter.specs.accuracy}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Дисплей:</span>
                        <span className="font-medium">{counter.specs.display}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Питание:</span>
                        <span className="font-medium">{counter.specs.power}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Температура:</span>
                        <span className="font-medium">{counter.specs.temperature}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Защита:</span>
                        <span className="font-medium">{counter.specs.housing}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between pt-4">
                  <div className="text-2xl font-bold text-industrial-accent">
                    {counter.price} ₽
                  </div>
                  <Button className="bg-industrial-accent hover:bg-industrial-medium text-white">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Заказать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-industrial-light py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-industrial-dark mb-4">Преимущества наших счетчиков</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Gauge",
                title: "Высокая точность",
                description: "Погрешность измерений не превышает ±0.02%"
              },
              {
                icon: "Shield",
                title: "Надежность",
                description: "Промышленное исполнение для работы в тяжелых условиях"
              },
              {
                icon: "Zap",
                title: "Быстрая установка",
                description: "Простой монтаж и подключение к существующим системам"
              },
              {
                icon: "Headphones",
                title: "Техподдержка",
                description: "Полная техническая поддержка и обслуживание"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-industrial-accent rounded-full flex items-center justify-center">
                    <Icon name={feature.icon} size={24} className="text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-industrial-dark mb-2">{feature.title}</h3>
                <p className="text-industrial-steel text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-industrial-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-industrial-light mb-8">
                Получите консультацию по выбору оборудования и оформите заказ
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={20} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={20} />
                  <span>info@promtech.ru</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={20} />
                  <span>Москва, ул. Промышленная, 15</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-industrial-medium p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Быстрый заказ</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя"
                      className="w-full p-3 rounded border bg-white text-industrial-dark"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Телефон"
                      className="w-full p-3 rounded border bg-white text-industrial-dark"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Комментарий к заказу"
                      rows={3}
                      className="w-full p-3 rounded border bg-white text-industrial-dark"
                    />
                  </div>
                  <Button className="w-full bg-industrial-accent hover:bg-industrial-steel">
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-industrial-medium text-industrial-light py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Icon name="Factory" size={24} />
            <span className="text-lg font-semibold">ПромТех</span>
          </div>
          <p className="text-sm">
            © 2024 ПромТех. Профессиональное промышленное оборудование.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;