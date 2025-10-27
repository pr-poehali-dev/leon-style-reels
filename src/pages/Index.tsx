import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 45
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

  return (
    <div className="min-h-screen bg-background text-foreground font-rubik">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/dd45b8b8-117d-4936-a307-f8ac4223ff95/files/14dba046-dacf-4d5a-97f1-3b9a7216db85.jpg"
            alt="Reels Killer Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>

        <div className="container relative z-10 text-center px-4 py-20 animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/20 border border-primary rounded-full">
            <span className="text-primary font-bold tracking-wider">💥 МАРАФОН</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-oswald font-bold mb-6 leading-tight">
            <span className="text-primary">REELS</span>{" "}
            <span className="text-secondary">KILLER</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-oswald text-muted-foreground mb-8 max-w-3xl mx-auto">
            30 дней рилс: найди свой стиль, кайфуй и снимай легко
          </p>
          
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-black font-bold text-xl px-12 py-7 rounded-full shadow-lg shadow-secondary/50 hover:shadow-secondary/70 transition-all hover:scale-105"
          >
            Принять участие 🎯
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-primary" />
        </div>
      </section>

      <section className="py-20 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto animate-slide-up">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl">😤</div>
            <div>
              <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-6 text-primary">
                Знаешь, что самое обидное?
              </h2>
              <p className="text-xl leading-relaxed text-muted-foreground">
                Большинство блогеров так и не доходят до того самого рилс. Того, который зайдёт. 
                Который просто возьмёт и выстрелит.
              </p>
              <p className="text-xl leading-relaxed mt-4 text-muted-foreground">
                Потому что они до него просто не дойдут. Сольются раньше. Устанут ломать голову, 
                что снимать. Испугаются камеры. Решат, что «это не моё».
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
        <div className="container max-w-4xl mx-auto relative z-10 animate-scale-in">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl">🎯</div>
            <div>
              <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-6 text-secondary">
                В этом марафоне ты перестанешь париться
              </h2>
              <p className="text-xl leading-relaxed text-foreground">
                Каждый день — простое, но точное задание. Без «надо», без «должна». 
                Просто делай и видь результат.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <Card className="p-6 bg-card/50 border-primary/30 hover:border-primary transition-all">
                  <Icon name="Video" size={32} className="text-primary mb-3" />
                  <h3 className="font-oswald font-bold text-lg mb-2">Без теории</h3>
                  <p className="text-sm text-muted-foreground">Только практика и действие</p>
                </Card>
                <Card className="p-6 bg-card/50 border-secondary/30 hover:border-secondary transition-all">
                  <Icon name="Zap" size={32} className="text-secondary mb-3" />
                  <h3 className="font-oswald font-bold text-lg mb-2">Свой стиль</h3>
                  <p className="text-sm text-muted-foreground">Найдёшь то, что работает</p>
                </Card>
                <Card className="p-6 bg-card/50 border-accent/30 hover:border-accent transition-all">
                  <Icon name="TrendingUp" size={32} className="text-accent mb-3" />
                  <h3 className="font-oswald font-bold text-lg mb-2">Охваты</h3>
                  <p className="text-sm text-muted-foreground">Первые настоящие просмотры</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl">🔥</div>
            <div>
              <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-6 text-primary">
                Что будет через 30 дней?
              </h2>
              <p className="text-xl leading-relaxed text-muted-foreground">
                Ты дойдёшь до того самого рилс, который выстрелит. Потому что он — живой, 
                настоящий и твой.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Перестанешь бояться камеры — снимать станет легко",
                  "Найдёшь свой стиль — тот, в котором комфортно и круто",
                  "Получишь первые охваты — не случайные, а настоящие",
                  "Поймёшь, что снимать регулярно — это кайф, а не пытка"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Icon name="CheckCircle2" size={24} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-lg text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-accent/10"></div>
        <div className="container max-w-4xl mx-auto relative z-10 animate-scale-in">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl">📱</div>
            <div className="w-full">
              <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-6 text-secondary">
                Как это работает?
              </h2>
              <Card className="p-8 bg-card border-secondary/30">
                <p className="text-xl leading-relaxed text-foreground mb-6">
                  Каждый день в Telegram — новое задание, примеры и разборы. 
                  Без воды, без «надо». Только действие и кайф.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Icon name="Send" size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Telegram-чат</h4>
                      <p className="text-sm text-muted-foreground">Ежедневные задания и поддержка</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Users" size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Комьюнити</h4>
                      <p className="text-sm text-muted-foreground">Такие же крутые, как ты</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Target" size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Разборы</h4>
                      <p className="text-sm text-muted-foreground">Что работает, а что нет</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Sparkles" size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Примеры</h4>
                      <p className="text-sm text-muted-foreground">Живые кейсы каждый день</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-4 text-primary">
            ⏰ До старта марафона
          </h2>
          <div className="flex justify-center gap-4 md:gap-8 mb-12">
            {[
              { value: timeLeft.days, label: 'дней' },
              { value: timeLeft.hours, label: 'часов' },
              { value: timeLeft.minutes, label: 'минут' },
              { value: timeLeft.seconds, label: 'секунд' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-primary text-black font-oswald font-bold text-4xl md:text-6xl w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-lg mb-2">
                  {String(item.value).padStart(2, '0')}
                </div>
                <span className="text-sm md:text-base text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
          
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white font-bold text-2xl px-16 py-8 rounded-full shadow-lg shadow-accent/50 hover:shadow-accent/70 transition-all hover:scale-105 mb-4"
          >
            Принять участие в Reels Killer
          </Button>
          <p className="text-muted-foreground">
            Контент-допинг для тех, кто хочет снимать по кайфу
          </p>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="container max-w-4xl mx-auto relative z-10 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-12 text-center text-secondary">
            💬 Что говорят участники
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                text: "Впервые за год я снимаю рилс каждый день и мне это нравится. Это какая-то магия!",
                author: "Анна",
                tag: "@anna_blog"
              },
              {
                text: "Перестала париться над идеями. Просто беру телефон и снимаю. И работает!",
                author: "Марина",
                tag: "@marina_expert"
              },
              {
                text: "Охваты выросли в 3 раза за первую неделю. Я в шоке, но в хорошем смысле.",
                author: "Катя",
                tag: "@katya_coach"
              },
              {
                text: "Наконец-то нашла свой стиль. Теперь знаю, ЧТО снимать и КАК это делать.",
                author: "Света",
                tag: "@sveta_creates"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card/50 border-primary/20 hover:border-primary/50 transition-all">
                <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.tag}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-card border-t border-primary/20">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-oswald font-bold mb-2">
                <span className="text-primary">REELS</span>{" "}
                <span className="text-secondary">KILLER</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Контент-допинг для блогеров
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Instagram" size={28} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Icon name="Send" size={28} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Youtube" size={28} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Сделано с 💚 для тех, кто снимает по кайфу</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
