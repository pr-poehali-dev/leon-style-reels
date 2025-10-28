import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 8,
    minutes: 45,
    seconds: 30
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/614cb441-c477-4f76-b97f-8c2842d5d15f.jpeg)',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
            <div className="inline-block px-4 py-2 bg-accent/20 border-2 border-accent rounded-lg mb-4">
              <span className="text-accent font-bold text-sm tracking-wider">МАРАФОН</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-oswald font-bold leading-none mb-8">
              <span className="text-primary">REELS</span>
              <br />
              <span className="text-white">KILLER</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-white font-rubik leading-relaxed max-w-3xl mx-auto">
              30 дней — и твои Reels начнут стрелять,<br />
              попадая в рекомендации и сердца людей
            </p>
            
            <div className="pt-8">
              <button className="group relative px-12 py-5 bg-accent text-white font-oswald font-bold text-xl rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105 shadow-lg shadow-accent/50">
                🔪 СТАТЬ КИЛЛЕРОМ РИЛС
                <Icon name="ArrowDown" className="inline-block ml-2 group-hover:translate-y-1 transition-transform" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-b from-black to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-12">
              💣 Почему все вокруг растут на рилс — <span className="text-accent">а ты нет?</span>
            </h2>
            
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p className="text-white font-medium">
                Спорим, ты уже пробовал?
              </p>
              
              <p>
                Снимал, монтировал, переснимал.<br />
                Пару недель — норм, а потом тишина.
              </p>
              
              <p>
                Устал начинать и бросать.<br />
                Устал стараться — и не видеть результата.
              </p>
              
              <p className="text-white">
                Каждый раз одно и то же:<br />
                думаешь, «в этот раз выстрелит» —<br />
                а в итоге 3,5 лайка и ощущение, что всё зря.
              </p>
              
              <p>
                Монтаж затягивается на полдня,<br />
                а идеи заканчиваются быстрее, чем заряд телефона.<br />
                И в голове только одно: «к чёрту эти рилсы».
              </p>
              
              <div className="bg-card/50 border-2 border-primary/30 rounded-xl p-8 mt-8">
                <p className="text-primary font-bold text-2xl mb-4">
                  Но дело не в тебе.
                </p>
                <p className="text-white text-xl">
                  Просто тебе ещё не показали,<br />
                  как можно снимать легко, быстро и в кайф.
                </p>
              </div>
              
              <p className="text-white font-medium text-xl pt-6">
                Reels Killer создан, чтобы подарить азарт.<br />
                Чтобы ты не выжимал из себя контент —<br />
                а снимал его просто, уверенно и с удовольствием.
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
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-8">
            🎯 Что тебя <span className="text-secondary">ждёт</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-background/50 backdrop-blur border-2 border-secondary/30 rounded-xl p-8">
              <p className="text-2xl text-white font-medium mb-6">
                Задания — через день.
              </p>
              <p className="text-lg text-muted-foreground">
                Не каждый день по 3 часа на съёмку — снимать реально легко и без стресса.
              </p>
            </div>
            
            <div className="bg-background/50 backdrop-blur border-2 border-primary/30 rounded-xl p-8">
              <h3 className="text-2xl font-oswald font-bold mb-6">За 30 дней ты:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎬</span>
                  <p className="text-lg">сделаешь минимум 15 рилс</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <p className="text-lg">соберёшь около 100 идей, которые реально заходят</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <p className="text-lg">найдёшь свой стиль и формат</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡️</span>
                  <p className="text-lg">научишься снимать быстро и кайфово, без часовых монтажей</p>
                </div>
              </div>
            </div>
            
            <div className="bg-background/50 backdrop-blur border-2 border-accent/30 rounded-xl p-8">
              <h3 className="text-2xl font-oswald font-bold mb-6">Я буду рядом:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-accent">🔹</span>
                  <p className="text-lg">давать задания и фишки, чтобы не тратить время на пустое</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent">🔹</span>
                  <p className="text-lg">разбирать рилсы раз в неделю, чтобы твои видео реально залетали</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent">🔹</span>
                  <p className="text-lg">показывать, как снимать под свои цели, а не просто "чтобы было"</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary rounded-xl p-10 text-center">
              <h3 className="text-3xl font-oswald font-bold text-primary mb-6">Результат через месяц:</h3>
              <div className="space-y-3 text-lg">
                <p>• блог оживёт и начнёт реально жить</p>
                <p>• просмотры и комментарии пойдут вверх</p>
                <p>• охваты растут, алгоритмы работают на тебя</p>
                <p>• ощущение, что всё, что ты делал до этого — не зря</p>
              </div>
              
              <div className="mt-8 pt-8 border-t-2 border-primary/30">
                <p className="text-2xl text-white font-bold leading-relaxed">
                  Ты перестанешь быть невидимкой.
                </p>
                <p className="text-lg text-muted-foreground mt-4">
                  Люди начнут видеть, реагировать, писать, делиться.
                </p>
                <p className="text-xl text-secondary font-medium mt-6">
                  И ты впервые за долгое время скажешь себе:<br />
                  «Я реально могу. И это кайф»
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-card to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-12">
              А что <span className="text-primary">если…</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card/50 backdrop-blur border-l-4 border-accent rounded-xl p-8">
                <p className="text-xl text-muted-foreground mb-3">
                  😔 Я пробовал снимать, но не вижу результатов
                </p>
                <p className="text-lg text-white">
                  На разборах ты поймёшь, в чём проблема — и твои рилсы начнут выходить в рекомендации.
                </p>
              </div>
              
              <div className="bg-card/50 backdrop-blur border-l-4 border-primary rounded-xl p-8">
                <p className="text-xl text-muted-foreground mb-3">
                  😔 Снимаю долго, монтирую по 15 часов — а просмотров ноль
                </p>
                <p className="text-lg text-white">
                  На марафоне научишься снимать за 5–10 минут, монтировать минимально и получать охваты быстро и легко.
                </p>
              </div>
              
              <div className="bg-card/50 backdrop-blur border-l-4 border-secondary rounded-xl p-8">
                <p className="text-xl text-muted-foreground mb-3">
                  😔 Это сложно, долго, у меня нет времени
                </p>
                <p className="text-lg text-white">
                  Задания марафона сделают рилсы лёгкой привычкой, которую реально вписать в жизнь, работу и семью.
                </p>
              </div>
              
              <div className="bg-card/50 backdrop-blur border-l-4 border-accent rounded-xl p-8">
                <p className="text-xl text-muted-foreground mb-3">
                  😔 Мне страшно быть неинтересным, что меня не будут смотреть
                </p>
                <p className="text-lg text-white">
                  Ты разгонишь алгоритмы, найдёшь свой уникальный стиль и формат, который будет интересен и тебе, и подписчикам.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="bg-accent/20 border-2 border-accent rounded-2xl p-12">
              <div className="mb-6">
                <p className="text-5xl md:text-6xl font-oswald font-bold text-accent mb-2">
                  3900 ₽
                </p>
                <p className="text-2xl text-muted-foreground line-through">
                  вместо 5900 ₽
                </p>
              </div>
              <p className="text-xl text-white font-medium mb-6">
                только до 2 ноября
              </p>
              <p className="text-lg text-muted-foreground">
                Потом дороже.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-oswald font-bold">
                ⏰ Старт <span className="text-secondary">17 ноября</span>
              </h3>
              
              <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="bg-card border-2 border-secondary rounded-xl p-6">
                  <div className="text-5xl font-oswald font-bold text-secondary mb-2">
                    {timeLeft.days}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">дней</div>
                </div>
                
                <div className="bg-card border-2 border-primary rounded-xl p-6">
                  <div className="text-5xl font-oswald font-bold text-primary mb-2">
                    {timeLeft.hours}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">часов</div>
                </div>
                
                <div className="bg-card border-2 border-accent rounded-xl p-6">
                  <div className="text-5xl font-oswald font-bold text-accent mb-2">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">минут</div>
                </div>
                
                <div className="bg-card border-2 border-secondary rounded-xl p-6">
                  <div className="text-5xl font-oswald font-bold text-secondary mb-2">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">секунд</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur border-2 border-primary/30 rounded-2xl p-10">
              <p className="text-2xl text-white font-bold mb-4">
                Хватит сливаться.
              </p>
              <p className="text-xl text-secondary mb-8">
                Пора стать киллером рилс и попадать точно в цель!
              </p>
              
              <button className="group relative px-16 py-6 bg-accent text-white font-oswald font-bold text-2xl rounded-xl hover:bg-accent/90 transition-all transform hover:scale-105 shadow-2xl shadow-accent/50">
                🔪 СТАТЬ КИЛЛЕРОМ РИЛС
                <Icon name="ArrowRight" className="inline-block ml-3 group-hover:translate-x-2 transition-transform" size={28} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black border-t border-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
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
