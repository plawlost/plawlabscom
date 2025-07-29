export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] selection:bg-[#1a1a1a] selection:text-white font-serif">
      
      <div className="min-h-screen flex flex-col max-w-4xl mx-auto">
        
        {/* Minimal Header */}
        <header className="flex justify-between items-baseline px-8 sm:px-12 pt-12 pb-8">
          <div className="text-[28px] sm:text-[32px] font-normal leading-none">Plaw Inc.</div>
          <div className="text-[12px] sm:text-[14px] tracking-[0.15em] uppercase">Build What's Yours</div>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-8 sm:px-12 pb-16">
          
          {/* Introduction */}
          <section className="mb-20">
            <h1 className="text-[36px] sm:text-[48px] lg:text-[52px] font-normal leading-[1.1] mb-12 tracking-[-0.02em]">
              We're now fundraising $3M from early-stage VCs, angels, and most importantly, 
              joining top accelerators this fall.
            </h1>
            
            <div className="text-[16px] sm:text-[18px] leading-[1.6] text-[#444] mb-8">
              The runway is open, the team is ready, and the next era is about to take off.
            </div>
            
            <hr className="border-[#ddd] border-t my-16" />
            
            <div className="text-[18px] sm:text-[20px] font-bold mb-4">July 28, 2025</div>
            <p className="text-[16px] sm:text-[18px] leading-[1.7] mb-16">
              <a href="https://vulnzap.com" className="underline decoration-2 underline-offset-4 hover:bg-[#f0f0f0] px-1 transition-colors">Vulnzap</a>, our first product, is live and already closing its first major enterprise pilots. Our open core code scanner is running inside hundreds of real developer workflows, shipping real protection where it's needed most. We begin with code, but we're building for something far bigger, something no one has dared to make truly possible.
            </p>
          </section>

          {/* Story */}
          <section className="mb-20">
            <blockquote className="text-[15px] sm:text-[16px] leading-[1.8] italic text-[#666] border-l-4 border-[#ddd] pl-6 sm:pl-8 mb-16">
              Before this new chapter, in 2024 we set out to build agentic hardware straight out of high school, with zero capital, zero permission, and nothing but drive. We launched in the Emirates, watched our first team shatter, and gathered every hard lesson at full speed. What we rebuilt out of those ashes is sharper, tighter, and aimed straight at the heart of real problems. Scar tissue became focus.
            </blockquote>

            <div className="space-y-8 text-[16px] sm:text-[17px] leading-[1.75]">
              <p>
                We believe the future won't belong to whoever gets there first with the biggest brain, the most servers, or the loudest headlines. We're not here to chase "superintelligence" for the sake of it. We're here to make intelligence that's unconditionally yours, always.
              </p>

              <p>
                Most AI today is a rented mind. Log in, take what you're given, and leave your ideas behind someone else's glass. Plaw stands for the opposite: <em>we exist to give anyone, from the obsessed indie builder to tomorrow's most ambitious teams, a foundation of sovereign intelligence they can hold, shape, and deploy without compromise, permission, or backdoors.</em>
              </p>

              <p>
                We build Plaw with the certainty that AI is moving at blinding speed, with a clear view of how fragile its foundations are.
              </p>

              <p>
                We've seen friends ship world-changing apps overnight, powered by AI, only to discover code full of invisible holes that nobody could trust. That's why we built <a href="https://vulnzap.com" className="underline decoration-2 underline-offset-4 hover:bg-[#f0f0f0] px-1 transition-colors">Vulnzap</a>, the first true immune system for an AI-native world: real-time, in-editor defense for code written at machine speed. It protects what you build from the inside out, not a security guard after the fact but a partner at every single keystroke.
              </p>

              <p>
                But this is only chapter one. Just like Steve Jobs saw the computer as a bicycle for the mind, we see sovereign intelligence as the most powerful tool anyone can own in this century, if it's truly under their control.
              </p>

              <blockquote className="text-[15px] sm:text-[16px] leading-[1.8] italic text-[#666] border-l-4 border-[#ddd] pl-6 sm:pl-8 my-12">
                We're not a lab. We don't sell research papers, slide decks, or AI vapor. We ship real tools for people whose work doesn't wait.
              </blockquote>

              <p>
                We are two cofounders, <em>Yaz (vision, generalist, CEO) and Anirudh (technical lead, cofounder, CTO)</em>, building alongside <em>Sherif (founding engineer)</em> and <em>Kyrie (head of marketing & sales)</em>. Our team is fully remote, with roots in Turkey, India, Egypt, and Canada. Originally PlawLabs, we're currently in the process of incorporating as Plaw Inc. in Delaware - right where new legends are made.
              </p>

              <p>
                We want engineers and designers who want to work at the metal, where responsibility meets ambition, and who feel both the thrill and the dread of putting new powers in human hands. <em>Bring us your edge and your skepticism - we'll use both.</em>
              </p>

              <p>
                If you believe intelligence should never be rented and that <em>"secure by default"</em> is non-negotiable, this is your invitation. <em>Help us build what everyone will depend on, but no one will control for you.</em>
              </p>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="px-8 sm:px-12 py-8 border-t border-[#eee]">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-4">
            <a 
              href="mailto:contact@plawlabs.com" 
              className="text-[16px] sm:text-[18px] underline decoration-2 underline-offset-4 hover:bg-[#f0f0f0] px-1 transition-colors"
            >
              contact@plawlabs.com
            </a>
            <div className="text-[12px] sm:text-[14px] text-[#666]">
              London, Turkey, India, Egypt, Canada → San Francisco
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
