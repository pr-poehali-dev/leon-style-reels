import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 14,
    minutes: 32,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "Алина",
      text: "Раньше я неделями собиралась с духом, чтобы снять один рилс. Сейчас снимаю каждый день и кайфую.",
      result: "первый вирусный рилс на 3 день"
    },
    {
      name: "Катя",
      text: "Я думала, что рилс — это не моё. Оказалось, что просто никто не объяснял нормально.",
      result: "охваты выросли в 5 раз"
    },
    {
      name: "Света",
      text: "Марафон прошёл на одном дыхании. Впервые я поняла, что снимать может быть легко и весело.",
      result: "+200 подписчиков за месяц"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/dd45b8b8-117d-4936-a307-f8ac4223ff95/files/5902377c-8ebd-4495-a0cf-facd920e975e.jpg)',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-block px-4 py-2 bg-accent/20 border-2 border-accent rounded-lg">
                <span className="text-accent font-bold text-sm tracking-wider">МАРАФОН ДЛЯ БЛОГЕРОВ</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-oswald font-bold leading-none">
                <span className="text-white">REELS</span>
                <br />
                <span className="text-primary">KILLER</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-secondary font-rubik font-medium">
                30 дней рилс: найди свой стиль,<br />
                кайфуй и снимай легко
              </p>
              
              <div className="flex flex-wrap gap-4 text-lg">
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={24} />
                  <span>Без страха камеры</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={24} />
                  <span>Свой стиль за 30 дней</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={24} />
                  <span>Реальные охваты</span>
                </div>
              </div>
              
              <button className="group relative px-12 py-5 bg-secondary text-black font-oswald font-bold text-xl rounded-lg hover:bg-secondary/90 transition-all transform hover:scale-105 shadow-lg shadow-secondary/50">
                ПРИНЯТЬ УЧАСТИЕ
                <Icon name="ArrowRight" className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={24} />
              </button>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/dd45b8b8-117d-4936-a307-f8ac4223ff95/files/41014dac-79e6-4068-bcb5-66c9c6d29f2b.jpg"
                alt="Reels Killer"
                className="relative rounded-2xl shadow-2xl border-4 border-primary/50"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-b from-black to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-12">
              Ты знаешь, что самое <span className="text-accent">обидное</span>?
            </h2>
            
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                Большинство блогеров так и не доходят до того самого рилс. Того, который зайдёт.
              </p>
              
              <p>
                Они месяцами откладывают, переснимают по 20 раз, удаляют и боятся.
                Боятся камеры. Боятся, что будет не идеально. Боятся осуждения.
              </p>
              
              <p className="text-white font-medium">
                А потом смотрят на чужие вирусные рилс и думают: «Ну конечно, у неё получается, а у меня нет».
              </p>
              
              <p>
                Но правда в том, что <span className="text-primary font-bold">те, кто снимает — побеждают</span>.
                Не идеально. Не с первого раза. Но они побеждают.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-16">
            Что будет на <span className="text-secondary">марафоне</span>
          </h2>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-background/50 backdrop-blur border-2 border-primary/30 rounded-xl p-8 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <Icon name="Target" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-oswald font-bold mb-4">Каждый день — задание</h3>
              <p className="text-muted-foreground text-lg">
                Без воды и теории. Простое, конкретное действие, которое можно сделать за 15-30 минут. 
                Снял — отправил — получил фидбэк.
              </p>
            </div>
            
            <div className="bg-background/50 backdrop-blur border-2 border-secondary/30 rounded-xl p-8 hover:border-secondary transition-colors">
              <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                <Icon name="Users" className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-oswald font-bold mb-4">Поддержка и разборы</h3>
              <p className="text-muted-foreground text-lg">
                Ты не одна. В чате — такие же блогеры, которые идут к своему первому вирусному рилс.
                Я разбираю работы, подсказываю и поддерживаю.
              </p>
            </div>
            
            <div className="bg-background/50 backdrop-blur border-2 border-accent/30 rounded-xl p-8 hover:border-accent transition-colors">
              <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                <Icon name="Lightbulb" className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-oswald font-bold mb-4">Найди свой стиль</h3>
              <p className="text-muted-foreground text-lg">
                Перестань копировать других. За 30 дней ты поймёшь, какой контент тебе заходит, 
                и начнёшь снимать в своём уникальном стиле.
              </p>
            </div>
            
            <div className="bg-background/50 backdrop-blur border-2 border-primary/30 rounded-xl p-8 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <Icon name="TrendingUp" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-oswald font-bold mb-4">Первые охваты</h3>
              <p className="text-muted-foreground text-lg">
                Через 30 дней ты выйдешь с пачкой готовых рилс, пониманием алгоритмов 
                и первыми настоящими охватами.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-card to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold">
              Через 30 дней ты дойдёшь до<br />
              <span className="text-primary">того самого рилс</span>
            </h2>
            
            <p className="text-2xl text-muted-foreground leading-relaxed">
              Который выстрелит. Потому что он — живой, настоящий и твой.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="bg-card border-2 border-primary/30 rounded-xl p-6">
                <div className="text-5xl font-oswald font-bold text-primary mb-2">30</div>
                <div className="text-lg text-muted-foreground">дней практики</div>
              </div>
              
              <div className="bg-card border-2 border-secondary/30 rounded-xl p-6">
                <div className="text-5xl font-oswald font-bold text-secondary mb-2">0</div>
                <div className="text-lg text-muted-foreground">страха камеры</div>
              </div>
              
              <div className="bg-card border-2 border-accent/30 rounded-xl p-6">
                <div className="text-5xl font-oswald font-bold text-accent mb-2">∞</div>
                <div className="text-lg text-muted-foreground">идей для контента</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-16">
            Что говорят <span className="text-secondary">участницы</span>
          </h2>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border-2 border-muted rounded-xl p-8 hover:border-primary transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center font-oswald font-bold text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div className="font-rubik font-bold text-xl">{testimonial.name}</div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="pt-4 border-t border-primary/20">
                  <div className="text-sm text-primary font-medium">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold">
              Старт через
            </h2>
            
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-black border-2 border-secondary rounded-xl p-6">
                <div className="text-5xl font-oswald font-bold text-secondary mb-2">
                  {timeLeft.days}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">дней</div>
              </div>
              
              <div className="bg-black border-2 border-primary rounded-xl p-6">
                <div className="text-5xl font-oswald font-bold text-primary mb-2">
                  {timeLeft.hours}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">часов</div>
              </div>
              
              <div className="bg-black border-2 border-accent rounded-xl p-6">
                <div className="text-5xl font-oswald font-bold text-accent mb-2">
                  {timeLeft.minutes}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">минут</div>
              </div>
              
              <div className="bg-black border-2 border-secondary rounded-xl p-6">
                <div className="text-5xl font-oswald font-bold text-secondary mb-2">
                  {timeLeft.seconds}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">секунд</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <button className="group relative px-16 py-6 bg-accent text-white font-oswald font-bold text-2xl rounded-xl hover:bg-accent/90 transition-all transform hover:scale-105 shadow-2xl shadow-accent/50">
                ПРИНЯТЬ УЧАСТИЕ В МАРАФОНЕ
                <Icon name="Zap" className="inline-block ml-3 group-hover:rotate-12 transition-transform" size={28} />
              </button>
              
              <p className="text-muted-foreground">
                Количество мест ограничено
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black border-t border-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-oswald font-bold">Остались вопросы?</h3>
            
            <div className="flex justify-center gap-6">
              <a href="#" className="w-12 h-12 bg-card hover:bg-primary/20 border-2 border-muted hover:border-primary rounded-lg flex items-center justify-center transition-colors group">
                <Icon name="Instagram" className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-card hover:bg-secondary/20 border-2 border-muted hover:border-secondary rounded-lg flex items-center justify-center transition-colors group">
                <Icon name="Send" className="text-muted-foreground group-hover:text-secondary transition-colors" size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-card hover:bg-accent/20 border-2 border-muted hover:border-accent rounded-lg flex items-center justify-center transition-colors group">
                <Icon name="Mail" className="text-muted-foreground group-hover:text-accent transition-colors" size={24} />
              </a>
            </div>
            
            <p className="text-muted-foreground text-sm">
              © 2024 Reels Killer. Снимай по кайфу, а не по обязанности.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
