import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Product = () => {
  const [selectedModel, setSelectedModel] = useState('base');
  const [selectedHousing, setSelectedHousing] = useState('ip54');
  const [selectedDisplay, setSelectedDisplay] = useState('led');
  const [selectedConnector, setSelectedConnector] = useState('standard');
  const [quantity, setQuantity] = useState(1);

  const models = {
    base: {
      name: "ППО-25 Базовая",
      code: "ППО-25-01",
      basePrice: 12500,
      range: "0-999999",
      accuracy: "±0.1%",
      displayDigits: "6-разрядный"
    },
    pro: {
      name: "ППО-25 Про",
      code: "ППО-25-02", 
      basePrice: 18900,
      range: "0-9999999",
      accuracy: "±0.05%",
      displayDigits: "7-разрядный"
    },
    max: {
      name: "ППО-25 Макс",
      code: "ППО-25-03",
      basePrice: 24300,
      range: "0-99999999", 
      accuracy: "±0.02%",
      displayDigits: "8-разрядный"
    }
  };

  const housingOptions = {
    ip54: { name: "IP54", price: 0, description: "Стандартная защита" },
    ip65: { name: "IP65", price: 2500, description: "Усиленная защита" },
    ip67: { name: "IP67", price: 4200, description: "Полная герметизация" }
  };

  const displayOptions = {
    led: { name: "LED дисплей", price: 0, description: "Стандартный светодиодный" },
    oled: { name: "OLED дисплей", price: 3500, description: "Высококонтрастный" },
    lcd: { name: "LCD дисплей", price: 1800, description: "Энергоэффективный" }
  };

  const connectorOptions = {
    standard: { name: "Стандартные клеммы", price: 0 },
    industrial: { name: "Промышленные разъемы", price: 1500 },
    wireless: { name: "Беспроводной модуль", price: 5500 }
  };

  const calculateTotalPrice = () => {
    const model = models[selectedModel as keyof typeof models];
    const housing = housingOptions[selectedHousing as keyof typeof housingOptions];
    const display = displayOptions[selectedDisplay as keyof typeof displayOptions];
    const connector = connectorOptions[selectedConnector as keyof typeof connectorOptions];
    
    return (model.basePrice + housing.price + display.price + connector.price) * quantity;
  };

  const currentModel = models[selectedModel as keyof typeof models];

  return (
    <div className="min-h-screen bg-industrial-white">
      {/* Header */}
      <header className="bg-industrial-dark text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-industrial-medium">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад к каталогу
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center space-x-2">
              <Icon name="Factory" size={24} />
              <span className="font-semibold">ПромТех</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-industrial-light rounded-lg flex items-center justify-center">
              <img 
                src="/img/a952ea61-5a6b-4ec0-a780-ca2e68b3f22d.jpg"
                alt="Счетчик ППО-25"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="aspect-square bg-industrial-light rounded border-2 border-transparent hover:border-industrial-accent cursor-pointer">
                  <img 
                    src="/img/a952ea61-5a6b-4ec0-a780-ca2e68b3f22d.jpg"
                    alt={`Вид ${i}`}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Configuration */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-industrial-dark mb-2">
                {currentModel.name}
              </h1>
              <p className="text-industrial-steel">Модель: {currentModel.code}</p>
              <div className="flex items-center space-x-4 mt-4">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  ✓ В наличии
                </Badge>
                <div className="flex items-center text-sm text-industrial-steel">
                  <Icon name="Truck" size={16} className="mr-1" />
                  Доставка 1-3 дня
                </div>
              </div>
            </div>

            {/* Price */}
            <Card className="border-2 border-industrial-accent">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-industrial-dark mb-2">
                    {calculateTotalPrice().toLocaleString()} ₽
                  </div>
                  <p className="text-sm text-industrial-steel">
                    Цена за {quantity} шт. с выбранными опциями
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Configuration Options */}
            <div className="space-y-6">
              {/* Model Selection */}
              <div>
                <Label className="text-base font-semibold text-industrial-dark mb-3 block">
                  Выберите модель
                </Label>
                <RadioGroup value={selectedModel} onValueChange={setSelectedModel}>
                  {Object.entries(models).map(([key, model]) => (
                    <div key={key} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-industrial-light">
                      <RadioGroupItem value={key} id={key} />
                      <Label htmlFor={key} className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">{model.name}</div>
                            <div className="text-sm text-industrial-steel">
                              {model.range} • {model.accuracy} • {model.displayDigits}
                            </div>
                          </div>
                          <div className="font-semibold">
                            {model.basePrice.toLocaleString()} ₽
                          </div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Housing Protection */}
              <div>
                <Label className="text-base font-semibold text-industrial-dark mb-3 block">
                  Степень защиты корпуса
                </Label>
                <Select value={selectedHousing} onValueChange={setSelectedHousing}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(housingOptions).map(([key, option]) => (
                      <SelectItem key={key} value={key}>
                        <div className="flex justify-between items-center w-full">
                          <div>
                            <span className="font-medium">{option.name}</span>
                            <span className="text-sm text-industrial-steel ml-2">
                              {option.description}
                            </span>
                          </div>
                          <span className="ml-4">
                            {option.price > 0 ? `+${option.price.toLocaleString()} ₽` : 'Базовая'}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Display Type */}
              <div>
                <Label className="text-base font-semibold text-industrial-dark mb-3 block">
                  Тип дисплея
                </Label>
                <RadioGroup value={selectedDisplay} onValueChange={setSelectedDisplay}>
                  {Object.entries(displayOptions).map(([key, option]) => (
                    <div key={key} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-industrial-light">
                      <RadioGroupItem value={key} id={`display-${key}`} />
                      <Label htmlFor={`display-${key}`} className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">{option.name}</div>
                            <div className="text-sm text-industrial-steel">{option.description}</div>
                          </div>
                          <div className="font-semibold">
                            {option.price > 0 ? `+${option.price.toLocaleString()} ₽` : 'Базовый'}
                          </div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Connector Type */}
              <div>
                <Label className="text-base font-semibold text-industrial-dark mb-3 block">
                  Тип подключения
                </Label>
                <Select value={selectedConnector} onValueChange={setSelectedConnector}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(connectorOptions).map(([key, option]) => (
                      <SelectItem key={key} value={key}>
                        <div className="flex justify-between items-center w-full">
                          <span className="font-medium">{option.name}</span>
                          <span className="ml-4">
                            {option.price > 0 ? `+${option.price.toLocaleString()} ₽` : 'Базовый'}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Quantity */}
              <div>
                <Label className="text-base font-semibold text-industrial-dark mb-3 block">
                  Количество
                </Label>
                <div className="flex items-center space-x-4">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Icon name="Minus" size={16} />
                  </Button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Icon name="Plus" size={16} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-industrial-accent hover:bg-industrial-medium text-white py-6">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Добавить в корзину • {calculateTotalPrice().toLocaleString()} ₽
              </Button>
              <Button variant="outline" className="w-full py-6">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="specs">Характеристики</TabsTrigger>
              <TabsTrigger value="docs">Документация</TabsTrigger>
              <TabsTrigger value="delivery">Доставка</TabsTrigger>
              <TabsTrigger value="warranty">Гарантия</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specs" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Settings" size={20} className="mr-2" />
                    Технические характеристики
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-industrial-dark">Основные параметры</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-2 border-b">
                          <span>Диапазон измерений:</span>
                          <span className="font-medium">{currentModel.range}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span>Точность измерений:</span>
                          <span className="font-medium">{currentModel.accuracy}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span>Количество разрядов:</span>
                          <span className="font-medium">{currentModel.displayDigits}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span>Частота измерений:</span>
                          <span className="font-medium">10 Гц</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-industrial-dark">Условия эксплуатации</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-2 border-b">
                          <span>Рабочая температура:</span>
                          <span className="font-medium">-10°C до +50°C</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span>Влажность:</span>
                          <span className="font-medium">до 90%</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span>Питание:</span>
                          <span className="font-medium">220В 50Гц</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span>Потребление:</span>
                          <span className="font-medium">15 Вт</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="docs" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="FileText" size={20} className="mr-2" />
                    Документация
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {[
                      { name: "Техническое описание", size: "2.3 МБ", format: "PDF" },
                      { name: "Руководство по эксплуатации", size: "4.1 МБ", format: "PDF" },
                      { name: "Схема подключения", size: "1.2 МБ", format: "PDF" },
                      { name: "Сертификат соответствия", size: "0.8 МБ", format: "PDF" }
                    ].map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-industrial-light">
                        <div className="flex items-center space-x-3">
                          <Icon name="FileText" size={20} className="text-industrial-accent" />
                          <div>
                            <div className="font-medium">{doc.name}</div>
                            <div className="text-sm text-industrial-steel">{doc.format} • {doc.size}</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Icon name="Download" size={16} className="mr-2" />
                          Скачать
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="delivery" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Truck" size={20} className="mr-2" />
                    Доставка и оплата
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Способы доставки</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between p-3 border rounded">
                          <span>Курьерская доставка по Москве</span>
                          <span className="font-medium">500 ₽</span>
                        </div>
                        <div className="flex justify-between p-3 border rounded">
                          <span>Доставка по России</span>
                          <span className="font-medium">от 800 ₽</span>
                        </div>
                        <div className="flex justify-between p-3 border rounded">
                          <span>Самовывоз</span>
                          <span className="font-medium text-green-600">Бесплатно</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Способы оплаты</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Icon name="CreditCard" size={16} />
                          <span>Банковские карты</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Building" size={16} />
                          <span>Безналичный расчет</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Banknote" size={16} />
                          <span>Наличными при получении</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="warranty" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Shield" size={20} className="mr-2" />
                    Гарантия и сервис
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Гарантийные условия</h4>
                      <p className="text-industrial-steel">
                        На все счетчики ППО-25 предоставляется гарантия сроком 24 месяца с даты продажи. 
                        Гарантия распространяется на все заводские дефекты и неисправности.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 border rounded">
                        <Icon name="Clock" size={32} className="mx-auto mb-2 text-industrial-accent" />
                        <div className="font-semibold">24 месяца</div>
                        <div className="text-sm text-industrial-steel">Гарантийный срок</div>
                      </div>
                      <div className="text-center p-4 border rounded">
                        <Icon name="Wrench" size={32} className="mx-auto mb-2 text-industrial-accent" />
                        <div className="font-semibold">Бесплатный ремонт</div>
                        <div className="text-sm text-industrial-steel">В гарантийный период</div>
                      </div>
                      <div className="text-center p-4 border rounded">
                        <Icon name="Headphones" size={32} className="mx-auto mb-2 text-industrial-accent" />
                        <div className="font-semibold">Тех. поддержка</div>
                        <div className="text-sm text-industrial-steel">24/7 консультации</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Product;