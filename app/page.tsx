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
              We are now raising a $3M pre-seed round from early-stage VCs, angels, and the top accelerators this fall.
            </h1>
            
            <div className="text-[16px] sm:text-[18px] leading-[1.6] text-[#444] mb-8">
              The runway is open, the team is ready, and the next era is about to take off.
            </div>
            
            <hr className="border-[#ddd] border-t my-16" />
            
            <div className="text-[18px] sm:text-[20px] font-bold mb-4">July 28, 2025</div>
            <p className="text-[16px] sm:text-[18px] leading-[1.7] mb-8">
              <a href="https://vulnzap.com" className="underline decoration-2 underline-offset-4 hover:bg-[#f0f0f0] px-1 transition-colors">Vulnzap</a>, our first product, is in private beta with public launch set for 1 August 2025. Early momentum:
            </p>
            
            <div className="ml-6 space-y-3 text-[16px] sm:text-[18px] leading-[1.7] mb-8">
              <p>more than 650 developers have installed the open‑core scanner for private testing</p>
              <p>weekly growth is about twenty‑two percent</p>
              <p>over 2.3 million lines of code have been scanned and seven thousand critical issues auto‑fixed in real time</p>
              <p>five enterprises are running private pilots, two include paid proofs of concept, with signed contracts queued for GA</p>
            </div>
            
            <p className="text-[16px] sm:text-[18px] leading-[1.7] mb-16">
              We begin with code, yet we are building for something far bigger, something no one has dared to make truly possible.
            </p>
          </section>

          {/* Story */}
          <section className="mb-20">
            <blockquote className="text-[15px] sm:text-[16px] leading-[1.8] italic text-[#666] border-l-4 border-[#ddd] pl-6 sm:pl-8 mb-16">
              In 2024 we tried to build agentic hardware straight out of high school with zero capital and zero permission. We launched in the Emirates, watched the first team shatter, and absorbed every hard lesson at top speed. What rose from those ashes is sharper, tighter, and pointed directly at real problems. Scar tissue became focus.
            </blockquote>

            <div className="space-y-8 text-[16px] sm:text-[17px] leading-[1.75]">
              
              <div>
                <h2 className="text-[20px] sm:text-[24px] font-bold mb-4">The Vision</h2>
                <p>
                  The future will not belong to whoever has the biggest cluster or the loudest headline. It will belong to the builders who own their intelligence completely.
                </p>
              </div>

              <p>
                Most AI today is a rented mind. Log in, accept the black box, and leave your ideas behind someone else's glass. Plaw exists for the opposite. We deliver a foundation of sovereign intelligence that any team can hold, shape, and deploy without compromise, permission, or hidden doors.
              </p>

              <p>
                Sovereign intelligence in practice means you can:
              </p>
              
              <div className="ml-6 space-y-2 text-[16px] sm:text-[17px] leading-[1.75] mb-6">
                <p>run the model on your own hardware or cloud</p>
                <p>audit every layer of the stack, from weights to logs</p>
                <p>retrain or replace any component at will</p>
                <p>unplug at a moment's notice and keep full functionality offline</p>
              </div>

              <p>
                Your stack. Your rules. Permanently.
              </p>

              <div>
                <h2 className="text-[20px] sm:text-[24px] font-bold mb-4">Why Now</h2>
                <p>
                  AI velocity is ripping past traditional security and policy cycles. Vibecoding—shipping software by prompting large language models at machine speed—adds millions of new lines overnight and multiplies hidden attack surfaces.
                </p>
              </div>

              <p>
                <a href="https://vulnzap.com" className="underline decoration-2 underline-offset-4 hover:bg-[#f0f0f0] px-1 transition-colors">Vulnzap</a> answers that urgency: a real‑time immune system that lives in the IDE, partnering with every keystroke instead of scanning after the fact.
              </p>

              <p>
                This is Chapter One. Chapter Two is the broader sovereign‑AI stack: self‑hosted models, agent orchestration, and provable safety layers that keep the builder—not a cloud vendor—in the driver's seat.
              </p>

              <blockquote className="text-[15px] sm:text-[16px] leading-[1.8] italic text-[#666] border-l-4 border-[#ddd] pl-6 sm:pl-8 my-12">
                We are not a lab. We do not sell research papers or vapor. We ship tools for people whose work cannot wait.
              </blockquote>

              <div>
                <h2 className="text-[20px] sm:text-[24px] font-bold mb-4">The Raise</h2>
                
                <div className="space-y-4 mb-6">
                  <p>Round: $3M pre‑seed (SAFE, $12M post‑money cap)</p>
                  <p>Runway: 18 months</p>
                </div>

                <p className="mb-4">Use of funds:</p>
                <div className="ml-6 space-y-2 mb-6">
                  <p>55 percent hiring (3 senior engineers, 1 product designer, 1 enterprise AE)</p>
                  <p>20 percent go‑to‑market and community (developer relations, vibecoder advocacy, SF headquarters setup)</p>
                  <p>15 percent compute and security audits</p>
                  <p>10 percent contingency and legal</p>
                </div>

                <p className="mb-4">Milestones on this runway:</p>
                <div className="ml-6 space-y-2 mb-6">
                  <p>GA release of Vulnzap (Q4 2025)</p>
                  <p>$1M ARR run rate (Q2 2026)</p>
                  <p>MVP of self‑hosted sovereign‑model stack (Q2 2026)</p>
                  <p>10 enterprise customers in production (Q3 2026)</p>
                </div>
              </div>

              <p>
                If you back technical founders tackling foundational AI risk, let us show you the plan.
              </p>

              <div>
                <h2 className="text-[20px] sm:text-[24px] font-bold mb-4">Team</h2>
                <p>
                  Yaz Celebi (Co‑Founder & CEO) – product, design, relentless generalism<br/>
                  Anirudh Patel (Co‑Founder & CTO) – systems, LLM infrastructure, security engineering<br/>
                  Sherif Elamir (Founding Engineer) – full‑stack velocity from kernel to UI<br/>
                  Kyrie Kirk (Head of Marketing & Sales) – turning interest into signed contracts
                </p>
              </div>

              <p>
                Fully remote across Turkey, India, Egypt, and Canada; incorporating in Delaware and relocating to San Francisco.
              </p>

              <div>
                <h2 className="text-[20px] sm:text-[24px] font-bold mb-4">Join Us</h2>
                <p>
                  We are hiring senior backend engineers, an ML alignment specialist, and a product designer who want to put new powers safely in human hands. Bring your edge and your skepticism—we will use both.
                </p>
              </div>
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
              London · Istanbul · Surat · Montreal · Cairo → San Francisco
            </div>
          </div>
          <div className="text-center text-[14px] text-[#666] mt-8 italic">
            Build what no one can take from you.
          </div>
        </footer>

      </div>
    </div>
  );
}
