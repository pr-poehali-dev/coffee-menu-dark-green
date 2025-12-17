import { Coffee, Leaf } from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen bg-forest-dark p-8 print:p-0">
      <div className="max-w-[210mm] mx-auto bg-forest-dark text-cream relative overflow-hidden print:max-w-full" style={{ minHeight: '297mm' }}>
        
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-cream transform rotate-45"></div>
          <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-cream transform -rotate-12"></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-cream transform rotate-45"></div>
          <div className="absolute bottom-20 right-40 w-24 h-24 rounded-full bg-cream transform -rotate-30"></div>
        </div>

        <div className="relative z-10 text-center py-12 border-b-2 border-gold/30">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Leaf className="w-12 h-12 text-gold animate-fade-in" />
            <h1 className="font-display text-7xl text-gold drop-shadow-lg animate-fade-in">Меню</h1>
            <Coffee className="w-12 h-12 text-gold animate-fade-in" />
          </div>
          <p className="font-body text-xl text-cream/80 italic">Наша коллекция напитков</p>
        </div>

        <div className="relative z-10 px-12 py-8 space-y-12">
          
          <section className="animate-fade-in">
            <div className="mb-6 relative">
              <h2 className="font-display text-5xl text-gold mb-2">Авторские напитки</h2>
              <div className="h-1 w-32 bg-gold/50 rounded-full"></div>
            </div>
            <div className="space-y-3 font-body text-lg">
              <MenuItem name="Раф кедровый" volume="300 мл" price="360 ₽" />
              <MenuItem name="Раф / латте дубайский шоколад" volume="300 мл" price="340 ₽" />
              <MenuItem name="Малиновая матча" volume="300 мл" price="290 ₽" />
              <MenuItem name="Кокосовая матча" volume="300 мл" price="270 ₽" />
              <MenuItem name="Бамбл спелая вишня" volume="300 мл" price="110 ₽" />
            </div>
          </section>

          <section className="animate-fade-in">
            <div className="mb-6 relative">
              <h2 className="font-display text-5xl text-gold mb-2">Рафы</h2>
              <div className="h-1 w-32 bg-gold/50 rounded-full"></div>
            </div>
            <div className="space-y-3 font-body text-lg">
              <MenuItem name="Арахисовый" volume="300 мл" price="340 ₽" />
              <MenuItem name="Баунти" volume="300 мл" price="340 ₽" />
              <MenuItem name="Банан - солёная карамель" volume="300 мл" price="320 ₽" />
              <MenuItem name="Попкорн-амаретто" volume="300 мл" price="290 ₽" />
              <MenuItem name="Смородина - мята" volume="300 мл" price="320 ₽" />
            </div>
          </section>

          <section className="animate-fade-in">
            <div className="mb-6 relative">
              <h2 className="font-display text-5xl text-gold mb-2">Чаи</h2>
              <div className="h-1 w-32 bg-gold/50 rounded-full"></div>
            </div>
            <div className="space-y-3 font-body text-lg mb-6">
              <MenuItem name="Глинтвейн" volume="400 мл" price="300 ₽" />
              <MenuItem name="Пунш смородина-мята" volume="400 мл" price="300 ₽" />
              <MenuItem name="Облепиховый" volume="400 мл" price="300 ₽" />
              <MenuItem name="Малина - маракуйя" volume="400 мл" price="300 ₽" />
              <MenuItem name="Имбирь-малина" volume="400 мл" price="300 ₽" />
              <MenuItem name="Лесные ягоды" volume="400 мл" price="300 ₽" />
              <MenuItem name="Грейпфрут-апельсин" volume="400 мл" price="300 ₽" />
              <MenuItem name="Чай пакетированный" volume="400 мл" price="120 ₽" />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://cdn.poehali.dev/projects/2f9ab6bb-0981-4fbf-adee-8f7cd7e4c456/files/38a0902c-813b-43ea-8ff5-dd60fb452f12.jpg" 
                alt="Облепиховый чай"
                className="w-40 h-40 object-cover rounded-full border-4 border-gold/30 shadow-lg"
              />
            </div>
          </section>

          <section className="animate-fade-in">
            <div className="mb-6 relative flex items-center gap-4">
              <div>
                <h2 className="font-display text-5xl text-gold mb-2">Классика</h2>
                <div className="h-1 w-32 bg-gold/50 rounded-full"></div>
              </div>
              <img 
                src="https://cdn.poehali.dev/projects/2f9ab6bb-0981-4fbf-adee-8f7cd7e4c456/files/fa3c1a05-bc6a-4db7-9f7c-3ea5db84009b.jpg" 
                alt="Кофе"
                className="w-16 h-16 object-cover rounded-full border-2 border-gold/30"
              />
            </div>
            <div className="space-y-3 font-body text-lg">
              <MenuItem name="Эспрессо" volume="30 мл" price="120 ₽" />
              <MenuItem name="Доппио" volume="60 мл" price="170 ₽" />
              <MenuItem name="Американо" volume="200 мл / 300 мл" price="170 / 190 ₽" />
              <MenuItem name="Капучино" volume="300 мл / 400 мл" price="240 / 280 ₽" />
              <MenuItem name="Латте" volume="300 мл" price="220 ₽" />
              <MenuItem name="Флет Уайт" volume="200 мл" price="260 ₽" />
              <MenuItem name="Раф классический" volume="300 мл" price="250 ₽" />
            </div>
          </section>

          <section className="animate-fade-in">
            <div className="mb-6 relative">
              <h2 className="font-display text-5xl text-gold mb-2">Другое</h2>
              <div className="h-1 w-32 bg-gold/50 rounded-full"></div>
            </div>
            <div className="space-y-3 font-body text-lg">
              <MenuItem name="Матча (зелёная, голубая, розовая)" volume="300 мл" price="240 ₽" />
              <MenuItem name="Горячий шоколад" volume="300 мл" price="240 ₽" />
              <MenuItem name="Бамбл" volume="300 мл" price="280 ₽" />
              <MenuItem name="Эспрессо тоник" volume="300 мл" price="280 ₽" />
              <MenuItem name="Айс латте" volume="300 мл" price="240 ₽" />
            </div>
          </section>

          <section className="animate-fade-in">
            <div className="mb-6 relative">
              <h2 className="font-display text-5xl text-gold mb-2">Бабл ти</h2>
              <div className="h-1 w-32 bg-gold/50 rounded-full"></div>
            </div>
            <div className="space-y-3 font-body text-lg">
              <MenuItem name="Кола-черника" volume="400 мл" price="300 ₽" />
              <MenuItem name="Клубника банан" volume="400 мл" price="300 ₽" />
              <MenuItem name="Малина-кокос" volume="400 мл" price="300 ₽" />
            </div>
          </section>

          <section className="animate-fade-in">
            <div className="mb-6 relative">
              <h2 className="font-display text-5xl text-gold mb-2">Добавки</h2>
              <div className="h-1 w-32 bg-gold/50 rounded-full"></div>
            </div>
            <div className="space-y-3 font-body text-lg">
              <MenuItem name="Альтернативное молоко (банановое, кокосовое)" price="100 ₽" />
              <MenuItem name="Сироп" price="40 ₽" />
              <MenuItem name="Шот эспрессо" price="80 ₽" />
            </div>
          </section>

        </div>

        <div className="relative z-10 text-center py-8 border-t-2 border-gold/30 mt-12">
          <div className="flex items-center justify-center gap-6">
            <div className="w-16 h-0.5 bg-gold/50"></div>
            <Leaf className="w-6 h-6 text-gold" />
            <div className="w-16 h-0.5 bg-gold/50"></div>
          </div>
        </div>

      </div>
    </div>
  );
}

function MenuItem({ name, volume, price }: { name: string; volume?: string; price: string }) {
  return (
    <div className="flex justify-between items-baseline border-b border-gold/10 pb-2 hover:border-gold/30 transition-colors">
      <div className="flex-1">
        <span className="text-cream">{name}</span>
        {volume && <span className="text-cream/60 ml-3 text-base">{volume}</span>}
      </div>
      <span className="text-gold font-semibold ml-4 whitespace-nowrap">{price}</span>
    </div>
  );
}