import Navigation from "@/app/compponents/navigation"
import Hero from "@/app/compponents/Hero"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
      </main>
    </div>
  );
}