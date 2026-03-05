import { useState } from "react";
import Icon from "@/components/ui/icon";

const BOOSTY_LINK = "https://boosty.to/katrini/donate";

const donationTiers = [
  {
    id: 1,
    name: "Искра",
    price: "100 ₽",
    emoji: "✨",
    color: "neon-border-cyan",
    glow: "rgba(0,229,255,0.15)",
    desc: "Маленькая поддержка с большим теплом",
    perks: ["Упоминание на стене", "Бесконечная благодарность"],
  },
  {
    id: 2,
    name: "Огонь",
    price: "500 ₽",
    emoji: "🔥",
    color: "neon-border-pink",
    glow: "rgba(255,45,120,0.15)",
    desc: "Ты разжигаешь вдохновение",
    perks: ["Упоминание на стене", "Приоритетный ответ", "Ранний доступ к контенту"],
    popular: true,
  },
  {
    id: 3,
    name: "Звезда",
    price: "1500 ₽",
    emoji: "⭐",
    color: "neon-border-gold",
    glow: "rgba(255,215,0,0.15)",
    desc: "Ты — часть чего-то большого",
    perks: ["Упоминание на стене", "Персональная благодарность", "Эксклюзивный контент", "Совместный проект"],
  },
];

const thankMessages = [
  {
    id: 1,
    name: "Алексей М.",
    amount: "500 ₽",
    message: "Твой контент изменил мой взгляд на мир. Продолжай творить!",
    tier: "Огонь",
    emoji: "🔥",
    date: "2 марта",
    color: "#ff2d78",
  },
  {
    id: 2,
    name: "Марина К.",
    amount: "1500 ₽",
    message: "Каждый раз жду новых работ с замиранием сердца. Ты невероятная!",
    tier: "Звезда",
    emoji: "⭐",
    date: "1 марта",
    color: "#ffd700",
  },
  {
    id: 3,
    name: "Дмитрий Н.",
    amount: "100 ₽",
    message: "Небольшой вклад в большое дело. Удачи тебе!",
    tier: "Искра",
    emoji: "✨",
    date: "28 февраля",
    color: "#00e5ff",
  },
  {
    id: 4,
    name: "Светлана В.",
    amount: "500 ₽",
    message: "Так держать! Вдохновляешь каждый день 💖",
    tier: "Огонь",
    emoji: "🔥",
    date: "27 февраля",
    color: "#ff2d78",
  },
  {
    id: 5,
    name: "Игорь Р.",
    amount: "1500 ₽",
    message: "Твоё творчество — это настоящее искусство. Горжусь быть частью этого пути.",
    tier: "Звезда",
    emoji: "⭐",
    date: "25 февраля",
    color: "#ffd700",
  },
  {
    id: 6,
    name: "Анна Т.",
    amount: "100 ₽",
    message: "Маленький знак большой любви к тому, что ты делаешь!",
    tier: "Искра",
    emoji: "✨",
    date: "24 февраля",
    color: "#00e5ff",
  },
];

const stats = [
  { value: "247", label: "Донаторов", icon: "Heart" },
  { value: "₽84К", label: "Собрано", icon: "TrendingUp" },
  { value: "12", label: "Проектов", icon: "Sparkles" },
];

type Section = "home" | "donate" | "thanks";

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");

  const scrollTo = (section: Section) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen mesh-bg text-white font-sans overflow-x-hidden">
      {/* Фоновые декоративные элементы */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #ff2d78, transparent)" }}
        />
        <div
          className="absolute top-1/3 -right-32 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #00e5ff, transparent)" }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #bf5fff, transparent)" }}
        />
      </div>

      {/* Навигация */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="glass-strong mx-4 mt-4 rounded-2xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-lg font-bold text-white"
              style={{ background: "linear-gradient(135deg, #ff2d78, #bf5fff)" }}
            >
              K
            </div>
            <span className="font-display font-semibold text-xl tracking-wide">Katrini</span>
          </div>

          <div className="hidden sm:flex items-center gap-1">
            {[
              { id: "home", label: "Главная" },
              { id: "donate", label: "Донаты" },
              { id: "thanks", label: "Благодарности" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id as Section)}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 text-white/60 hover:text-white/90"
                style={
                  activeSection === item.id
                    ? {
                        color: "white",
                        background: "linear-gradient(135deg, rgba(255,45,120,0.3), rgba(191,95,255,0.3))",
                        border: "1px solid rgba(255,45,120,0.3)",
                      }
                    : {}
                }
              >
                {item.label}
              </button>
            ))}
          </div>

          <a
            href={BOOSTY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-pink text-white text-sm font-semibold px-5 py-2.5 rounded-xl"
          >
            Поддержать
          </a>
        </div>
      </nav>

      {/* ГЛАВНАЯ */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-8 animate-fade-in">
            <span className="text-base">✨</span>
            <span className="text-sm text-white/70 font-medium">Творческий проект · Поддержка напрямую</span>
          </div>

          <h1
            className="font-display font-bold leading-tight mb-6 animate-fade-in delay-100"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", animationFillMode: "forwards" }}
          >
            Твоя поддержка —<br />
            <span className="gradient-text italic">моё вдохновение</span>
          </h1>

          <p
            className="text-lg text-white/60 max-w-xl mx-auto mb-12 leading-relaxed animate-fade-in delay-200"
            style={{ animationFillMode: "forwards" }}
          >
            Каждый донат помогает создавать уникальный контент, воплощать смелые идеи
            и двигаться вперёд. Спасибо, что ты здесь.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300"
            style={{ animationFillMode: "forwards" }}
          >
            <a
              href={BOOSTY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-pink text-white font-semibold px-8 py-4 rounded-2xl text-base inline-flex items-center justify-center gap-2"
            >
              <Icon name="Heart" size={20} />
              Поддержать проект
            </a>
            <button
              onClick={() => scrollTo("thanks")}
              className="glass text-white/80 font-semibold px-8 py-4 rounded-2xl text-base hover:text-white hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Icon name="MessageCircle" size={20} />
              Стена благодарностей
            </button>
          </div>

          <div
            className="grid grid-cols-3 gap-6 max-w-xl mx-auto mt-20 animate-fade-in delay-400"
            style={{ animationFillMode: "forwards" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-5 card-hover text-center">
                <Icon name={stat.icon} size={22} className="mx-auto mb-2 text-white/40" />
                <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ДОНАТЫ */}
      <section id="donate" className="min-h-screen px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-6">
              <span>💖</span>
              <span className="text-sm text-white/70">Выбери свой уровень поддержки</span>
            </div>
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-4">
              Варианты <span className="gradient-text italic">доната</span>
            </h2>
            <p className="text-white/50 text-lg max-w-lg mx-auto">
              Каждый взнос важен и идёт напрямую на создание нового контента
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {donationTiers.map((tier, i) => (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-8 card-hover border animate-fade-in ${tier.color}`}
                style={{
                  animationDelay: `${i * 0.15}s`,
                  animationFillMode: "forwards",
                  background: `radial-gradient(ellipse at top, ${tier.glow} 0%, transparent 70%), rgba(255,255,255,0.04)`,
                  backdropFilter: "blur(20px)",
                }}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="btn-neon-pink text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                      ★ Популярный
                    </div>
                  </div>
                )}

                <div className="text-5xl mb-5">{tier.emoji}</div>
                <div className="text-2xl font-bold mb-1">{tier.name}</div>
                <div className="text-3xl font-black gradient-text-gold mb-3">{tier.price}</div>
                <p className="text-white/50 text-sm mb-6 leading-relaxed">{tier.desc}</p>

                <ul className="space-y-2 mb-8">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-sm text-white/70">
                      <Icon name="Check" size={16} className="text-green-400 flex-shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>

                <a
                  href={BOOSTY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center font-semibold py-3.5 rounded-2xl transition-all duration-300 ${
                    tier.popular
                      ? "btn-neon-pink text-white"
                      : "text-white/80 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                  style={!tier.popular ? { background: "rgba(255,255,255,0.04)" } : {}}
                >
                  Задонатить {tier.price}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl p-8 text-center border border-white/10" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)" }}>
            <div className="text-3xl mb-3">🎁</div>
            <h3 className="text-xl font-bold mb-2">Своя сумма</h3>
            <p className="text-white/50 mb-6 text-sm">Хочешь поддержать на другую сумму? На Boosty можно указать любую!</p>
            <a
              href={BOOSTY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-cyan font-bold px-8 py-3.5 rounded-2xl inline-flex items-center gap-2"
              style={{ color: "#080810" }}
            >
              <Icon name="ExternalLink" size={18} />
              Открыть Boosty
            </a>
          </div>
        </div>
      </section>

      {/* СТЕНА БЛАГОДАРНОСТЕЙ */}
      <section id="thanks" className="min-h-screen px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-6">
              <span>🌟</span>
              <span className="text-sm text-white/70">Они уже помогают создавать магию</span>
            </div>
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-4">
              Стена <span className="gradient-text italic">благодарностей</span>
            </h2>
            <p className="text-white/50 text-lg max-w-lg mx-auto">
              Каждый донатор оставляет след в истории этого проекта
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {thankMessages.map((msg, i) => (
              <div
                key={msg.id}
                className="break-inside-avoid rounded-2xl p-6 card-hover animate-fade-in"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationFillMode: "forwards",
                  background: `radial-gradient(ellipse at top left, ${msg.color}10 0%, transparent 60%), rgba(255,255,255,0.04)`,
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${msg.color}22`,
                  boxShadow: `0 0 20px ${msg.color}10`,
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold text-white"
                      style={{
                        background: `linear-gradient(135deg, ${msg.color}44, ${msg.color}22)`,
                        border: `1px solid ${msg.color}44`,
                      }}
                    >
                      {msg.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{msg.name}</div>
                      <div className="text-xs text-white/40">{msg.date}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-lg">{msg.emoji}</span>
                    <span className="text-xs font-bold" style={{ color: msg.color }}>{msg.amount}</span>
                  </div>
                </div>

                <p className="text-white/70 text-sm leading-relaxed italic">"{msg.message}"</p>

                <div className="mt-4">
                  <div
                    className="text-xs px-3 py-1 rounded-full font-medium inline-block"
                    style={{
                      background: `${msg.color}18`,
                      color: msg.color,
                      border: `1px solid ${msg.color}30`,
                    }}
                  >
                    {msg.tier}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-16 rounded-3xl p-12 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(255,45,120,0.12), rgba(191,95,255,0.12), rgba(0,229,255,0.08))",
              border: "1px solid rgba(255,45,120,0.2)",
            }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 left-8 text-4xl opacity-20 animate-float">✨</div>
              <div className="absolute bottom-4 right-8 text-4xl opacity-20 animate-float delay-300">🌟</div>
              <div className="absolute top-1/2 right-16 text-3xl opacity-15 animate-float delay-200">💖</div>
            </div>

            <h3 className="font-display font-bold text-4xl mb-4">
              Оставь <span className="gradient-text italic">свой след</span>
            </h3>
            <p className="text-white/60 mb-8 text-lg max-w-md mx-auto">
              Задонать и твоё сообщение появится на этой стене навсегда
            </p>
            <a
              href={BOOSTY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-pink text-white font-bold px-10 py-4 rounded-2xl text-lg inline-flex items-center gap-3"
            >
              <Icon name="Heart" size={22} />
              Поддержать на Boosty
            </a>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="glass border-t border-white/8 py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg, #ff2d78, #bf5fff)" }}
            >
              K
            </div>
            <span className="font-display font-semibold text-lg">Katrini</span>
          </div>

          <p className="text-white/30 text-sm">© 2026 Katrini. Создано с любовью ❤️</p>

          <a
            href={BOOSTY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors"
          >
            <Icon name="ExternalLink" size={14} />
            boosty.to/katrini
          </a>
        </div>
      </footer>
    </div>
  );
}