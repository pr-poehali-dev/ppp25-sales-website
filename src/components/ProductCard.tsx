import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

interface ProductSpec {
  range: string;
  accuracy: string;
  display: string;
  power: string;
  temperature: string;
  housing: string;
}

interface ProductCardProps {
  id: number;
  name: string;
  model: string;
  price: string;
  image: string;
  specs: ProductSpec;
  features: string[];
  onOrder?: () => void;
  onViewDetails?: () => void;
  className?: string;
}

const ProductCard = ({ 
  name, 
  model, 
  price, 
  image, 
  specs, 
  features, 
  onOrder,
  onViewDetails,
  className = "" 
}: ProductCardProps) => {
  return (
    <Card className={`hover:shadow-lg transition-all duration-300 border border-industrial-light hover:border-industrial-accent ${className}`}>
      <CardHeader className="text-center pb-4">
        <div className="relative group">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover rounded-md mb-4 bg-industrial-light transition-transform group-hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              ✓ В наличии
            </Badge>
          </div>
        </div>
        <CardTitle className="text-xl text-industrial-dark">{name}</CardTitle>
        <p className="text-industrial-steel text-sm">
          Модель: {model}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {features.slice(0, 2).map((feature, index) => (
            <Badge key={index} variant="secondary" className="bg-industrial-light text-industrial-dark text-xs">
              {feature}
            </Badge>
          ))}
          {features.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{features.length - 2}
            </Badge>
          )}
        </div>

        <Separator />

        {/* Key Specifications */}
        <div className="space-y-2">
          <h4 className="font-semibold text-industrial-dark flex items-center text-sm">
            <Icon name="Settings" size={14} className="mr-1" />
            Характеристики
          </h4>
          <div className="text-xs text-industrial-steel space-y-1">
            <div className="flex justify-between">
              <span>Диапазон:</span>
              <span className="font-medium">{specs.range}</span>
            </div>
            <div className="flex justify-between">
              <span>Точность:</span>
              <span className="font-medium">{specs.accuracy}</span>
            </div>
            <div className="flex justify-between">
              <span>Защита:</span>
              <span className="font-medium">{specs.housing}</span>
            </div>
          </div>
        </div>

        {/* Quick Info */}
        <div className="flex items-center justify-between text-xs text-industrial-steel">
          <div className="flex items-center">
            <Icon name="Truck" size={12} className="mr-1" />
            <span>Доставка 1-3 дня</span>
          </div>
          <div className="flex items-center">
            <Icon name="Shield" size={12} className="mr-1" />
            <span>Гарантия 24 мес</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col space-y-3 pt-4">
        <div className="flex items-center justify-between w-full">
          <div className="text-2xl font-bold text-industrial-accent">
            {price} ₽
          </div>
          <Button 
            variant="outline"
            size="sm"
            onClick={onViewDetails}
            className="text-industrial-steel hover:text-industrial-dark"
          >
            Подробнее
          </Button>
        </div>
        
        <Button 
          className="w-full bg-industrial-accent hover:bg-industrial-medium text-white"
          onClick={onOrder}
        >
          <Icon name="ShoppingCart" size={16} className="mr-2" />
          Заказать
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;