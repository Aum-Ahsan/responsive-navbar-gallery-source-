import HeroShell from "../shared/HeroShell";

export default function Hero21() {
  return (
    <HeroShell
      theme="midnight"
      layout="fullscreen"
      eyebrow="E-Sports Platform"
      title="Unleash Your Competitive Edge."
      body="Join millions of players in the ultimate gaming arena. Stream live matches, compete in tournaments, and dominate the global leaderboards."
      primary="Play Now Free"
      secondary="Watch Streams"
      bullets={["Low latency servers", "Cross-platform support"]}
      bgImage="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop"
    />
  );
}
