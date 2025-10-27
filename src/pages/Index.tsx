import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 16,
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
          backgroundImage: 'url(https://cdn.poehali.dev/projects/dd45b8b8-117d-4936-a307-f8ac4223ff95/files/5902377c-8ebd-4495-a0cf-facd920e975e.jpg)',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-block px-4 py-2 bg-accent/20 border-2 border-accent rounded-lg">
                <span className="text-accent font-bold text-sm tracking-wider">СТАРТ — 17 НОЯБРЯ</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-oswald font-bold leading-none">
                <span className="text-white">REELS</span>
                <br />
                <span className="text-primary">KILLER</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-white font-rubik font-medium leading-relaxed">
                30 дней — и ты больше не прокрастинируешь,<br />
                а убиваешь страх съёмки.
              </p>
              
              <p className="text-xl text-secondary leading-relaxed">
                Хватит смотреть, как другие растут.<br />
                Делай рилсы, которые приносят охваты, подписчиков и кайф от себя.
              </p>
              
              <button className="group relative px-12 py-5 bg-accent text-white font-oswald font-bold text-xl rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105 shadow-lg shadow-accent/50">
                🔪 ВЛЕТЕТЬ В МАРАФОН
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
              💣 Почему ты до сих пор <span className="text-accent">не растёшь</span>
            </h2>
            
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                Большинство блогеров застряли между "идеей" и "действием".
                Они переснимают, сомневаются, сравнивают себя, ждут вдохновения.
              </p>
              
              <p className="text-white font-medium">
                А потом — смотрят, как другие выстреливают.
              </p>
              
              <p>
                Reels Killer создан, чтобы ты перестала быть зрителем.
                И стала тем, кто бьёт точно в цель:
              </p>
              
              <div className="space-y-4 pl-6">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-2xl">💥</span>
                  <span className="text-primary font-bold">Рилс — в топ.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-secondary font-bold text-2xl">💥</span>
                  <span className="text-secondary font-bold">Подписчики — в профиль.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-2xl">💥</span>
                  <span className="text-accent font-bold">Продажи — в Директ.</span>
                </div>
              </div>
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
            🎥 Что тебя <span className="text-secondary">ждёт</span>
          </h2>
          
          <p className="text-2xl text-center text-white font-medium mb-16 max-w-3xl mx-auto">
            30 дней. 30 точных выстрелов.<br />
            Каждый день — новое задание, которое не даст тебе спрятаться за "не знаю, что снимать".
          </p>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-background/50 backdrop-blur border-2 border-primary/30 rounded-xl p-8 hover:border-primary transition-colors">
              <div className="text-4xl mb-4">🔹</div>
              <p className="text-lg text-muted-foreground">
                Простые форматы, без боли и страха камеры.
              </p>
            </div>
            
            <div className="bg-background/50 backdrop-blur border-2 border-secondary/30 rounded-xl p-8 hover:border-secondary transition-colors">
              <div className="text-4xl mb-4">🔹</div>
              <p className="text-lg text-muted-foreground">
                Примеры и разборы, как попасть в алгоритмы.
              </p>
            </div>
            
            <div className="bg-background/50 backdrop-blur border-2 border-accent/30 rounded-xl p-8 hover:border-accent transition-colors">
              <div className="text-4xl mb-4">🔹</div>
              <p className="text-lg text-muted-foreground">
                Вдохновляющие рилсы от тех, кто в игре.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6 text-xl text-center">
            <p className="text-white font-medium text-2xl">
              Через месяц ты не просто перестанешь бояться снимать —<br />
              ты начнёшь расти.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="bg-background/50 border-2 border-primary/30 rounded-xl p-6">
                <div className="text-4xl mb-2">📈</div>
                <div className="text-lg font-medium text-primary">Охваты — вверх</div>
              </div>
              
              <div className="bg-background/50 border-2 border-secondary/30 rounded-xl p-6">
                <div className="text-4xl mb-2">💬</div>
                <div className="text-lg font-medium text-secondary">Комменты — живые</div>
              </div>
              
              <div className="bg-background/50 border-2 border-accent/30 rounded-xl p-6">
                <div className="text-4xl mb-2">💸</div>
                <div className="text-lg font-medium text-accent">Подписчики — настоящие</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-card to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-12">
              🔪 Для <span className="text-primary">кого</span>
            </h2>
            
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <div className="flex items-start gap-4 bg-card/30 p-6 rounded-xl border-2 border-primary/20">
                <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={28} />
                <p>Для тех, кто устал "думать о контенте" и хочет просто делать.</p>
              </div>
              
              <div className="flex items-start gap-4 bg-card/30 p-6 rounded-xl border-2 border-secondary/20">
                <Icon name="Check" className="text-secondary flex-shrink-0 mt-1" size={28} />
                <p>Для блогеров, у которых зарыт потенциал, но мешает страх.</p>
              </div>
              
              <div className="flex items-start gap-4 bg-card/30 p-6 rounded-xl border-2 border-accent/20">
                <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={28} />
                <p>Для тех, кто хочет попасть в ритм, стиль и алгоритмы Reels.</p>
              </div>
              
              <p className="text-white font-medium text-2xl text-center pt-8">
                Если ты чувствуешь, что твои идеи сильнее твоего страха —<br />
                добро пожаловать в Reels Killer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-black to-primary/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-12">
              💀 Это не марафон. <span className="text-accent">Это чистка.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-oswald font-bold text-accent mb-6">Мы убьём:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-card/30 p-4 rounded-lg border-l-4 border-accent">
                    <Icon name="X" className="text-accent flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg">страх быть неидеальной,</p>
                  </div>
                  <div className="flex items-start gap-3 bg-card/30 p-4 rounded-lg border-l-4 border-accent">
                    <Icon name="X" className="text-accent flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg">синдром "я не знаю, как снять",</p>
                  </div>
                  <div className="flex items-start gap-3 bg-card/30 p-4 rounded-lg border-l-4 border-accent">
                    <Icon name="X" className="text-accent flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg">привычку откладывать,</p>
                  </div>
                  <div className="flex items-start gap-3 bg-card/30 p-4 rounded-lg border-l-4 border-accent">
                    <Icon name="X" className="text-accent flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg">и контент "на отъебись".</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-oswald font-bold text-primary mb-6">А вырастим:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-card/30 p-4 rounded-lg border-l-4 border-primary">
                    <Icon name="TrendingUp" className="text-primary flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg">уверенность перед камерой,</p>
                  </div>
                  <div className="flex items-start gap-3 bg-card/30 p-4 rounded-lg border-l-4 border-primary">
                    <Icon name="TrendingUp" className="text-primary flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg">узнаваемость,</p>
                  </div>
                  <div className="flex items-start gap-3 bg-card/30 p-4 rounded-lg border-l-4 border-primary">
                    <Icon name="TrendingUp" className="text-primary flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg">охваты и стиль,</p>
                  </div>
                  <div className="flex items-start gap-3 bg-card/30 p-4 rounded-lg border-l-4 border-primary">
                    <Icon name="TrendingUp" className="text-primary flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg">кайф от съёмки.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-8">
              🎯 Цель <span className="text-secondary">марафона</span>
            </h2>
            
            <div className="bg-card/50 backdrop-blur border-2 border-secondary/30 rounded-2xl p-12">
              <p className="text-2xl text-white leading-relaxed mb-6">
                Через 30 дней ты выйдешь с рилсами,<br />
                которые собирают реакции,<br />
                растят аудиторию<br />
                и приносят первые продажи.
              </p>
              
              <p className="text-xl text-secondary font-medium">
                Потому что Reels Killer —<br />
                это не про идеальный контент,<br />
                это про живой контент, который работает.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="bg-accent/20 border-2 border-accent rounded-2xl p-12">
              <p className="text-5xl md:text-6xl font-oswald font-bold text-accent mb-4">
                3900 ₽
              </p>
              <p className="text-xl text-white font-medium mb-6">
                только до 02.11
              </p>
              <p className="text-lg text-muted-foreground">
                Дальше поднимется и будет расти до самого старта
              </p>
            </div>
            
            <button className="group relative px-16 py-6 bg-secondary text-black font-oswald font-bold text-2xl rounded-xl hover:bg-secondary/90 transition-all transform hover:scale-105 shadow-2xl shadow-secondary/50">
              ПРИНЯТЬ УЧАСТИЕ
              <Icon name="ArrowRight" className="inline-block ml-3 group-hover:translate-x-2 transition-transform" size={28} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-card to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-12">
              🌿 Кто главный <span className="text-primary">килер?</span>
            </h2>
            
            <div className="bg-card/50 backdrop-blur border-2 border-primary/30 rounded-2xl p-12 text-center">
              <p className="text-2xl text-white font-medium mb-6">
                Я — Вероника фон Кекс.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Препод по блогингу, который покажет тебе, как превратить рилсы из "страшного формата" в инструмент роста.
              </p>
              <p className="text-lg text-secondary font-medium mt-6">
                Без заумности. Без "надо". Без сложных схем.<br />
                Только то, что бьёт в цель.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold">
              ⏰ Старт <span className="text-accent">17 ноября</span>
            </h2>
            
            <p className="text-2xl text-white leading-relaxed">
              30 дней, чтобы стать блогером,<br />
              который не ищет вдохновение —<br />
              а создаёт его сам.
            </p>
            
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
            
            <button className="group relative px-16 py-6 bg-accent text-white font-oswald font-bold text-2xl rounded-xl hover:bg-accent/90 transition-all transform hover:scale-105 shadow-2xl shadow-accent/50">
              Я В ИГРЕ
              <Icon name="Zap" className="inline-block ml-3 group-hover:rotate-12 transition-transform" size={28} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-8">
              💬 Финальный <span className="text-primary">удар</span>
            </h2>
            
            <div className="bg-card/50 backdrop-blur border-2 border-primary/30 rounded-2xl p-12">
              <p className="text-2xl text-white font-medium leading-relaxed mb-6">
                Reels Killer — не про идеальность.<br />
                Про движение, проявленность и кайф.
              </p>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Хватит прятать идеи.<br />
                Хватит бояться алгоритмов.
              </p>
              
              <p className="text-xl text-secondary font-bold">
                Просто возьми телефон и сделай так, чтобы охваты выстрелили в космос.<br />
                А я покажу как.
              </p>
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
