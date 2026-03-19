const collections = ["Necklaces", "Rings", "Earrings", "Bangles"]

const products = [
  { name: "Zarina Choker", price: "₹18,900" },
  { name: "Mehr Ring", price: "₹6,800" },
  { name: "Noor Jhumkas", price: "₹9,400" },
  { name: "Surya Kada", price: "₹13,750" },
  { name: "Gulnar Pendant", price: "₹8,950" },
  { name: "Riwaayat Studs", price: "₹5,600" },
]

const trustBadges = [
  "92.5 BIS Hallmarked",
  "Handcrafted Designs",
  "Pan India Delivery",
  "AI Custom Orders",
]

const aiFeatures = [
  { title: "Describe your design", description: "Type what you want" },
  { title: "See it come to life", description: "AI generates preview" },
  { title: "Order via WhatsApp", description: "Confirm and pay" },
]

const editorialDetails = [
  "Mughal-inspired silhouettes",
  "Hallmarked 92.5 silver",
  "Surat craftsmanship",
]

const testimonials = [
  {
    name: "Aarushi Shah",
    review:
      "The custom silver set felt like it came from an old royal atelier, but the process was modern and effortless.",
  },
  {
    name: "Meher Contractor",
    review:
      "Omisa’s presentation instantly feels premium. The detailing, finish, and styling direction all feel client-ready.",
  },
  {
    name: "Ridhima Jain",
    review:
      "I loved the AI custom order concept. It makes bespoke jewellery feel accessible without losing the luxury experience.",
  },
]

function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  )
}

function CartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M3.5 5h2.2l1.9 9.1a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L21 7.4H7" />
      <circle cx="10" cy="19" r="1.4" />
      <circle cx="18" cy="19" r="1.4" />
    </svg>
  )
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a9.8 9.8 0 0 0-8.4 15L2.1 22l5.1-1.3a9.9 9.9 0 1 0 4.8-18.7Zm0 18a8 8 0 0 1-4-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Zm4.4-5.8-1.5-.8c-.2-.1-.4-.1-.6.1l-.8.9c-.2.1-.3.2-.6 0a6.8 6.8 0 0 1-1.9-1.2 8 8 0 0 1-1.4-1.7c-.1-.3 0-.4.1-.5l.4-.5.2-.4c.1-.1.1-.3 0-.4l-.7-1.7c-.1-.4-.4-.4-.6-.4h-.5c-.3 0-.5.1-.7.3-.5.5-.8 1.3-.8 2.1 0 1.3.9 2.5 1.1 2.7.1.2 1.9 3 4.7 4.1 2.7 1.1 2.7.7 3.2.7s1.6-.7 1.8-1.4c.2-.6.2-1.2.1-1.3-.1-.2-.2-.2-.5-.4Z" />
    </svg>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M4 12h14" />
      <path d="m12 6 6 6-6 6" />
    </svg>
  )
}

function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2-4.5-4.4 6.2-.9L12 3Z" />
    </svg>
  )
}

function HallmarkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M12 3 4.5 6v5.5c0 4.3 3 7.5 7.5 9.5 4.5-2 7.5-5.2 7.5-9.5V6L12 3Z" />
      <path d="m9.5 12 1.6 1.7 3.4-4" />
    </svg>
  )
}

function HandcraftedIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M5 18c4-1.5 7-4.5 8.8-9.6l1.1 1.1a2.7 2.7 0 0 0 3.8 0L20 8.2" />
      <path d="m4 20 3.2-3.2" />
      <path d="M13 6.8 16.2 10" />
    </svg>
  )
}

function DeliveryIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h3l3 3v3h-6z" />
      <circle cx="7.5" cy="18" r="1.5" />
      <circle cx="17.5" cy="18" r="1.5" />
    </svg>
  )
}

function SparkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />
      <path d="m18.5 3 .7 2.1L21.3 6l-2.1.7-.7 2.1-.7-2.1L15.7 6l2.1-.9.7-2.1Z" />
    </svg>
  )
}

function ArchOutline({ className = "", stroke = "#C9A84C", opacity = 1 }) {
  return (
    <svg
      viewBox="0 0 100 112"
      className={className}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M10 110V36L50 4l40 32v74"
        stroke={stroke}
        strokeOpacity={opacity}
        strokeWidth="1.7"
      />
      <path
        d="M22 110V44.5L50 21l28 23.5V110"
        stroke={stroke}
        strokeOpacity={opacity * 0.55}
        strokeWidth="1"
      />
    </svg>
  )
}

function CornerLattice({ side = "left" }) {
  return (
    <div
      className={`absolute top-0 h-40 w-40 opacity-35 sm:h-52 sm:w-52 ${
        side === "left" ? "left-0" : "right-0 scale-x-[-1]"
      }`}
    >
      <svg viewBox="0 0 200 200" className="h-full w-full text-[#C9A84C]">
        <path
          d="M0 0h200v200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 8"
          opacity="0.5"
        />
        {Array.from({ length: 7 }).map((_, i) => (
          <path
            key={i}
            d={`M${18 + i * 22} 0v${200 - i * 22}M0 ${18 + i * 22}h${200 - i * 22}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6"
          />
        ))}
      </svg>
    </div>
  )
}

function SectionHeading({ title, eyebrow, description, dark = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`text-xs uppercase tracking-[0.38em] ${dark ? "text-[#D9C089]" : "text-[#8C6D1F]"}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-['Playfair_Display'] text-4xl leading-tight sm:text-5xl ${
          dark ? "text-[#FAF7F0]" : "text-[#1B4332]"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-sm leading-7 sm:text-base ${dark ? "text-[#E7DED0]/80" : "text-[#355846]/80"}`}>
        {description}
      </p>
    </div>
  )
}

function ArchPlaceholder({ label, tall = false, lightText = false }) {
  return (
    <div
      className={`relative overflow-hidden border border-[#C9A84C]/45 bg-[#1B4332] ${
        tall ? "h-[19rem] sm:h-[22rem]" : "h-64"
      }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,247,240,0.02),rgba(13,43,30,0.28)),radial-gradient(circle_at_top,rgba(201,168,76,0.14),transparent_44%)]" />
      <ArchOutline className="absolute inset-x-[14%] bottom-0 top-[10%]" opacity={0.8} />
      <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/70 to-transparent" />
      <div className="absolute bottom-5 left-5 text-[0.68rem] uppercase tracking-[0.32em] text-[#C9A84C]">
        {label}
      </div>
      <div
        className={`absolute bottom-5 right-5 text-[0.62rem] uppercase tracking-[0.28em] ${
          lightText ? "text-[#FAF7F0]/65" : "text-[#FAF7F0]/45"
        }`}
      >
        Omisa
      </div>
    </div>
  )
}

function EditorialPanel({ eyebrow, title, description, reverse = false, dark = false, label = "Omisa Feature" }) {
  return (
    <section className={`${dark ? "bg-[#0D2B1E]" : "bg-[#FAF7F0]"} px-5 py-20 sm:px-6 lg:px-8`}>
      <div
        className={`mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center ${
          reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
        }`}
      >
        <div className="relative">
          <div className={`absolute -top-5 ${reverse ? "-left-5" : "-right-5"} h-32 w-28 border border-[#C9A84C]/50`} />
          <ArchPlaceholder label={label} tall lightText={dark} />
        </div>
        <div>
          <p className={`text-xs uppercase tracking-[0.38em] ${dark ? "text-[#D9C089]" : "text-[#8C6D1F]"}`}>{eyebrow}</p>
          <h2
            className={`mt-4 font-['Playfair_Display'] text-4xl leading-tight sm:text-5xl ${
              dark ? "text-[#FAF7F0]" : "text-[#1B4332]"
            }`}
          >
            {title}
          </h2>
          <p className={`mt-5 max-w-xl text-base leading-8 ${dark ? "text-[#FAF7F0]/76" : "text-[#355846]/80"}`}>
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {editorialDetails.map((item) => (
              <span
                key={item}
                className={`border px-3 py-2 text-[0.68rem] uppercase tracking-[0.24em] ${
                  dark
                    ? "border-[#C9A84C]/50 text-[#DCC78D]"
                    : "border-[#C9A84C]/55 text-[#8C6D1F]"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BadgeIcon({ label }) {
  const props = { className: "h-5 w-5 text-[#C9A84C]" }
  if (label.includes("Hallmarked")) return <HallmarkIcon {...props} />
  if (label.includes("Handcrafted")) return <HandcraftedIcon {...props} />
  if (label.includes("Delivery")) return <DeliveryIcon {...props} />
  return <SparkIcon {...props} />
}

export default function OmisaJewelleryMockup() {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#1B4332]">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@500;600;700;800&display=swap');`}</style>

      <div className="bg-[#C9A84C] py-2 text-center text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-[#0D2B1E]">
        Premium Silver Jewellery
      </div>

      <nav className="sticky top-0 z-50 border-b border-[#C9A84C]/80 bg-[#FAF7F0]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="min-w-0">
            <div className="font-['Playfair_Display'] text-3xl tracking-[0.04em] text-[#1B4332]">Omisa</div>
            <div className="mt-1 h-px w-20 bg-[#C9A84C]" />
            <div className="mt-1 text-[0.63rem] uppercase tracking-[0.32em] text-[#7D6430]">
              Elegance Redefined
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm tracking-[0.18em] text-[#1B4332] lg:flex">
            {["Home", "Shop", "Collections", "Custom Orders", "About", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="transition hover:text-[#8C6D1F]">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex h-10 w-10 items-center justify-center border border-[#C9A84C]/80 text-[#1B4332] transition hover:bg-[#1B4332] hover:text-[#FAF7F0]">
              <SearchIcon className="h-4 w-4" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center border border-[#1FAF5B]/45 text-[#1FAF5B] transition hover:bg-[#1FAF5B] hover:text-white">
              <WhatsAppIcon className="h-4 w-4" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center border border-[#C9A84C]/80 text-[#1B4332] transition hover:bg-[#1B4332] hover:text-[#FAF7F0]">
              <CartIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="border-t border-[#C9A84C]/40 px-5 py-3 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-4 gap-y-2 text-[0.68rem] uppercase tracking-[0.24em] text-[#1B4332]/80">
            {["Home", "Shop", "Collections", "Custom Orders", "About", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-[#0D2B1E] px-5 py-20 sm:px-6 lg:px-8"
      >
        <CornerLattice side="left" />
        <CornerLattice side="right" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.1),transparent_34%)]" />
        <div className="absolute left-1/2 top-1/2 h-[70vh] w-[min(78vw,40rem)] -translate-x-1/2 -translate-y-1/2 opacity-70">
          <ArchOutline className="h-full w-full" opacity={0.95} />
        </div>

        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.42em] text-[#DCC78D]">Handcrafted Premium Silver Jewellery</p>
          <h1 className="mt-8 font-['Playfair_Display'] text-5xl leading-none text-[#FAF7F0] sm:text-7xl lg:text-[5.8rem]">
            Elegance <span className="text-[#C9A84C]">Redefined</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#FAF7F0]/78 sm:text-lg">
            Handcrafted Premium Silver Jewellery — Surat
          </p>
          <div className="mt-10 flex w-full max-w-md flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#shop"
              className="border border-[#C9A84C] bg-[#C9A84C] px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-[#0D2B1E] transition hover:bg-[#d6b56a]"
            >
              Explore Collection
            </a>
            <a
              href="#ai-designer"
              className="border border-[#C9A84C] px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-[#C9A84C] transition hover:bg-[#C9A84C]/10"
            >
              Try AI Designer
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-[#C9A84C]/40 bg-[#FAF7F0] px-5 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center justify-center gap-3 border border-[#C9A84C]/45 px-5 py-4">
              <BadgeIcon label={badge} />
              <span className="text-sm font-semibold tracking-[0.08em] text-[#1B4332]">{badge}</span>
            </div>
          ))}
        </div>
      </section>

      <EditorialPanel
        eyebrow="House of Omisa"
        title="A Surat Jewellery House with an Editorial Soul"
        description="Research across luxury jewellery references repeatedly points to the same thing: premium brands feel more desirable when the website sells a world, not only a catalog. This section gives Omisa that heritage-led presence with craft, place, and visual atmosphere at the center."
        label="Campaign Portrait"
      />

      <section id="collections" className="bg-[#FAF7F0] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Signature Edit"
            title="Our Collections"
            description="An architectural product family designed to feel regal, heritage-led, and unmistakably Omisa."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {collections.map((item) => (
              <article key={item} className="group border border-[#C9A84C]/60 bg-[#1B4332] p-5">
                <ArchPlaceholder label={item} tall lightText />
                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-['Playfair_Display'] text-3xl text-[#C9A84C]">{item}</h3>
                    <a
                      href="#shop"
                      className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#FAF7F0]/78 transition group-hover:text-[#C9A84C]"
                    >
                      Explore
                      <ArrowIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="bg-[#F3EEE4] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Featured Products"
            title="Silver Pieces for Everyday Royalty"
            description="Structured catalog cards with arch-framed imagery, clear pricing, and WhatsApp-assisted shopping cues."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Complimentary gift packaging", "Hallmark certificate included", "WhatsApp concierge support"].map((item) => (
              <div
                key={item}
                className="border border-[#C9A84C]/45 bg-white/70 px-4 py-2 text-[0.7rem] uppercase tracking-[0.24em] text-[#355846]"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="border border-[#C9A84C]/40 bg-white p-5 shadow-[0_18px_40px_rgba(27,67,50,0.06)]">
                <ArchPlaceholder label={product.name} />
                <div className="mt-5">
                  <span className="inline-flex border border-[#C9A84C]/70 bg-[#C9A84C]/10 px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.24em] text-[#8C6D1F]">
                    92.5 Silver
                  </span>
                  <h3 className="mt-4 font-['Playfair_Display'] text-2xl text-[#1B4332]">{product.name}</h3>
                  <div className="mt-3 text-2xl font-bold text-[#C9A84C]">{product.price}</div>
                  <div className="mt-6 flex items-center gap-3">
                    <button className="flex-1 border border-[#1B4332] bg-[#1B4332] px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#FAF7F0] transition hover:bg-[#285643]">
                      Add to Cart
                    </button>
                    <button className="flex h-12 w-12 items-center justify-center border border-[#C9A84C]/75 text-[#1FAF5B] transition hover:bg-[#1FAF5B] hover:text-white">
                      <WhatsAppIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <EditorialPanel
        eyebrow="Craftsmanship"
        title="Luxury Feels Strongest When The Product Becomes The Hero"
        description="The recurring critique in ecommerce design discussions is that many jewellery sites look polished but forget to feel memorable. This feature block adds the missing editorial pause: oversized imagery, restrained copy, and a clear sense that Omisa is a premium brand with point of view."
        reverse
        dark
        label="Silver Detail"
      />

      <section
        id="ai-designer"
        className="relative overflow-hidden bg-[#0D2B1E] px-5 py-20 sm:px-6 lg:px-8"
      >
        <div className="absolute left-1/2 top-8 h-[28rem] w-[min(80vw,36rem)] -translate-x-1/2 opacity-45">
          <ArchOutline className="h-full w-full" opacity={1} />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="AI Concierge"
            title="Meet Your AI Jewellery Designer"
            description="A premium digital consultation flow that turns inspiration into a preview-ready Omisa piece."
            dark
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {aiFeatures.map((feature, index) => (
              <article key={feature.title} className="border border-[#C9A84C]/70 bg-[#163927] p-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center border border-[#C9A84C] font-['Playfair_Display'] text-xl text-[#C9A84C]">
                  {index + 1}
                </div>
                <h3 className="mt-6 font-['Playfair_Display'] text-3xl text-[#FAF7F0]">{feature.title}</h3>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#DCC78D]">{feature.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="#custom-orders"
              className="inline-flex border border-[#C9A84C] bg-[#C9A84C] px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-[#0D2B1E] transition hover:bg-[#d6b56a]"
            >
              Try the AI Designer
            </a>
          </div>
        </div>
      </section>

      <section id="custom-orders" className="bg-[#FAF7F0] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-[#8C6D1F]">Custom Orders</p>
            <h2 className="mt-4 font-['Playfair_Display'] text-4xl leading-tight text-[#1B4332] sm:text-5xl">
              Something Unique For You
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#355846]/80">
              Bespoke ordering is designed as a guided royal atelier experience, from inspiration to preview to final confirmation.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex border border-[#1B4332] bg-[#1B4332] px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-[#FAF7F0] transition hover:bg-[#285643]"
            >
              Start Custom Order
            </a>
          </div>

          <div className="grid gap-5">
            {["Upload inspiration photo", "Describe changes", "Receive AI preview"].map((step, index) => (
              <div key={step} className="flex items-start gap-4 border border-[#C9A84C]/45 bg-white p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C9A84C] font-['Playfair_Display'] text-xl text-[#0D2B1E]">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-['Playfair_Display'] text-2xl text-[#1B4332]">{step}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#355846]/80">
                    Structured prompts and visual previews keep the custom process premium, clear, and easy to approve.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3EEE4] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Clients Say"
            description="Proof of trust with restrained luxury styling and editorial spacing."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="border border-[#C9A84C]/35 bg-white p-7">
                <div className="mb-5 h-1 w-full bg-[#1B4332]" />
                <div className="flex gap-1 text-[#C9A84C]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-[#355846]/80">{item.review}</p>
                <div className="mt-6 font-['Playfair_Display'] text-2xl text-[#1B4332]">{item.name}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Instagram"
            title="Follow @omisajewellery"
            description="A regal social strip for campaign imagery, product closeups, and bridal styling stories."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="aspect-square border border-[#C9A84C] bg-[#1B4332] p-3">
                <div className="relative h-full w-full border border-[#C9A84C]/75">
                  <ArchOutline className="absolute inset-x-[18%] bottom-0 top-[14%]" opacity={0.75} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#0D2B1E] px-5 py-16 text-[#FAF7F0] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="font-['Playfair_Display'] text-4xl text-[#FAF7F0]">Omisa</div>
            <div className="mt-2 text-[0.7rem] uppercase tracking-[0.34em] text-[#DCC78D]">Elegance Redefined</div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#FAF7F0]/78">
              Premium silver jewellery from Surat, reimagined with royal Indian heritage and modern ecommerce polish.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.34em] text-[#DCC78D]">Links</div>
            <div className="mt-5 flex flex-col gap-3 text-sm text-[#FAF7F0]/80">
              {["Shop", "About", "Custom Orders", "Contact", "Privacy Policy"].map((item) => (
                <a key={item} href="#">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 text-sm leading-7 text-[#FAF7F0]/80">
            <p>Visit Us: G34/35 Shyam Plaza, VIP Road, Surat</p>
            <p>WhatsApp: +91 98765 43210</p>
            <p>Instagram: @omisajewellery</p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-[#C9A84C]/30 pt-6 text-sm text-[#FAF7F0]/56">
          © 2026 Omisa Jewellery. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
