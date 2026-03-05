import Icon from "@/components/ui/icon";

const BOOSTY_LINK = "https://boosty.to/katrini/donate";
const TELEGRAM_LINK = "https://t.me/plz4_1992";

const images = [
  "https://cdn.poehali.dev/projects/e8bc4b31-711b-4c5f-a26a-e5c7a6046b95/files/18223524-4a81-4b09-a04a-6c457ebee385.jpg",
  "https://cdn.poehali.dev/projects/e8bc4b31-711b-4c5f-a26a-e5c7a6046b95/files/42b7b1a1-978b-4953-9b07-d78b8bbce657.jpg",
  "https://cdn.poehali.dev/projects/e8bc4b31-711b-4c5f-a26a-e5c7a6046b95/files/0740e7d9-402a-4638-acbb-be06584391b1.jpg",
  "https://cdn.poehali.dev/projects/e8bc4b31-711b-4c5f-a26a-e5c7a6046b95/files/1608e8a8-4e0d-4645-af84-0b7e989907ca.jpg",
  "https://cdn.poehali.dev/projects/e8bc4b31-711b-4c5f-a26a-e5c7a6046b95/files/7e45f579-c0a4-4fa7-a025-78c902d9cbfc.jpg",
];

const plans = [
  {
    price: "$20",
    amount: "20,000",
    label: "VIDEOS",
    color: "#00e5ff",
    glow: "rgba(0,229,255,0.3)",
    border: "rgba(0,229,255,0.4)",
    bg: "rgba(0,229,255,0.06)",
    icon: "Play",
  },
  {
    price: "$30",
    amount: "10,000",
    label: "VIDEOS",
    color: "#ff2d78",
    glow: "rgba(255,45,120,0.4)",
    border: "rgba(255,45,120,0.5)",
    bg: "rgba(255,45,120,0.08)",
    icon: "Zap",
    popular: true,
  },
  {
    price: "$60",
    amount: "50,000",
    label: "VIDEOS",
    color: "#ffd700",
    glow: "rgba(255,215,0,0.3)",
    border: "rgba(255,215,0,0.4)",
    bg: "rgba(255,215,0,0.06)",
    icon: "Star",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ background: "#06060f" }}>

      {/* Telegram — fixed left */}
      <a
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-0 top-1/2 z-50 flex flex-col items-center gap-2 py-4 px-2 rounded-r-2xl transition-all duration-300 hover:px-4"
        style={{
          background: "rgba(0,136,204,0.15)",
          border: "1px solid rgba(0,136,204,0.35)",
          borderLeft: "none",
          backdropFilter: "blur(20px)",
          transform: "translateY(-50%)",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#29b6f6">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
        </svg>
        <span
          className="text-xs font-bold tracking-widest"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            color: "#29b6f6",
            fontSize: "9px",
            letterSpacing: "0.15em",
          }}
        >
          TELEGRAM
        </span>
      </a>

      {/* Ambient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-60 -left-60 w-[600px] h-[600px] rounded-full opacity-15 blur-[120px]"
          style={{ background: "radial-gradient(circle, #ff2d78, transparent)" }} />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px]"
          style={{ background: "radial-gradient(circle, #00e5ff, transparent)" }} />
        <div className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
          style={{ background: "radial-gradient(circle, #bf5fff, transparent)" }} />
      </div>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center pt-24 pb-10 px-4 text-center">
        {/* MEGA2026 */}
        <div className="relative mb-8 animate-fade-in">
          <h1
            className="font-black tracking-tighter leading-none select-none"
            style={{
              fontSize: "clamp(4.5rem, 18vw, 14rem)",
              background: "linear-gradient(135deg, #ff2d78 0%, #bf5fff 40%, #00e5ff 80%, #ffd700 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 60px rgba(255,45,120,0.35))",
              fontFamily: "'Bebas Neue', 'Impact', 'Arial Black', sans-serif",
            }}
          >
            MEGA2026
          </h1>
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "linear-gradient(135deg, #ff2d78, #00e5ff)", zIndex: -1 }}
          />
        </div>

        <p
          className="text-white/40 font-light tracking-[0.4em] uppercase mb-10 animate-fade-in delay-100"
          style={{ fontSize: "0.75rem", letterSpacing: "0.4em" }}
        >
          Premium Video Content
        </p>

        {/* Donate button */}
        <a
          href={BOOSTY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-in delay-200 inline-flex items-center gap-3 font-bold text-white rounded-2xl px-10 py-4 text-base tracking-wider uppercase mb-16 transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #ff2d78, #bf5fff)",
            boxShadow: "0 0 40px rgba(255,45,120,0.5), 0 8px 32px rgba(255,45,120,0.3)",
            letterSpacing: "0.12em",
          }}
        >
          <Icon name="Heart" size={20} />
          DONATE NOW
        </a>

        {/* Gallery */}
        <div className="w-full max-w-6xl mx-auto animate-fade-in delay-300">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {images.map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
                style={{
                  aspectRatio: "1 / 1",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src={src}
                  alt={`media ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.45)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}
                  >
                    <Icon name="Play" size={20} className="text-white ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="relative px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-white/30 tracking-[0.35em] uppercase text-xs mb-3" style={{ letterSpacing: "0.35em" }}>
              Choose Your Plan
            </p>
            <h2
              className="font-black tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontFamily: "'Bebas Neue', 'Impact', 'Arial Black', sans-serif",
                background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.5) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              PRICING
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className="relative rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-400 hover:-translate-y-2"
                style={{
                  background: plan.bg,
                  border: `1px solid ${plan.border}`,
                  boxShadow: plan.popular
                    ? `0 0 60px ${plan.glow}, 0 20px 60px rgba(0,0,0,0.4)`
                    : `0 0 30px ${plan.glow.replace("0.4", "0.15")}, 0 10px 40px rgba(0,0,0,0.3)`,
                  backdropFilter: "blur(20px)",
                }}
              >
                {plan.popular && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
                    style={{
                      background: `linear-gradient(135deg, ${plan.color}, #bf5fff)`,
                      color: "#fff",
                      letterSpacing: "0.15em",
                      boxShadow: `0 4px 20px ${plan.glow}`,
                    }}
                  >
                    POPULAR
                  </div>
                )}

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `${plan.bg}`,
                    border: `1px solid ${plan.border}`,
                    boxShadow: `0 0 24px ${plan.glow}`,
                  }}
                >
                  <Icon name={plan.icon} size={26} style={{ color: plan.color }} />
                </div>

                <div
                  className="font-black mb-1"
                  style={{
                    fontSize: "clamp(3rem, 8vw, 5rem)",
                    fontFamily: "'Bebas Neue', 'Impact', 'Arial Black', sans-serif",
                    color: plan.color,
                    lineHeight: 1,
                    filter: `drop-shadow(0 0 20px ${plan.color}66)`,
                  }}
                >
                  {plan.price}
                </div>

                <div className="text-white/80 text-lg font-semibold mb-1">
                  {plan.amount}
                </div>
                <div
                  className="text-xs tracking-[0.3em] uppercase font-bold mb-8"
                  style={{ color: plan.color, letterSpacing: "0.3em" }}
                >
                  {plan.label}
                </div>

                <a
                  href={BOOSTY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  style={{
                    background: `linear-gradient(135deg, ${plan.color}33, ${plan.color}55)`,
                    border: `1px solid ${plan.border}`,
                    color: plan.color,
                    boxShadow: `0 4px 20px ${plan.glow}`,
                    letterSpacing: "0.12em",
                  }}
                >
                  <Icon name="CreditCard" size={16} />
                  GET ACCESS
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative px-4 py-20 text-center">
        <div className="max-w-xl mx-auto">
          <div
            className="rounded-3xl p-10"
            style={{
              background: "rgba(255,45,120,0.06)",
              border: "1px solid rgba(255,45,120,0.2)",
              boxShadow: "0 0 60px rgba(255,45,120,0.1)",
              backdropFilter: "blur(20px)",
            }}
          >
            <p className="text-white/40 tracking-[0.3em] text-xs uppercase mb-4" style={{ letterSpacing: "0.3em" }}>
              Support the project
            </p>
            <h3
              className="font-black mb-6 text-white"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontFamily: "'Bebas Neue', 'Impact', 'Arial Black', sans-serif",
              }}
            >
              JOIN MEGA2026
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOSTY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-white rounded-2xl px-8 py-4 transition-all duration-300 hover:scale-105 uppercase tracking-wider"
                style={{
                  background: "linear-gradient(135deg, #ff2d78, #bf5fff)",
                  boxShadow: "0 0 30px rgba(255,45,120,0.4)",
                  letterSpacing: "0.1em",
                }}
              >
                <Icon name="Heart" size={18} />
                DONATE
              </a>
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold rounded-2xl px-8 py-4 transition-all duration-300 hover:scale-105 uppercase tracking-wider"
                style={{
                  background: "rgba(41,182,246,0.1)",
                  border: "1px solid rgba(41,182,246,0.35)",
                  color: "#29b6f6",
                  letterSpacing: "0.1em",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#29b6f6">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
                </svg>
                TELEGRAM
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-white/20 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>
        © 2026 MEGA2026. All rights reserved.
      </footer>
    </div>
  );
}
