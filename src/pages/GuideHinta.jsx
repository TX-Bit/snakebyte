import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Contact from '../components/Contact'
import FAQList from '../components/FAQList'
import SEO from '../components/SEO'

const guideFaqs = [
  {
    q: 'Sisältyykö hintaan ylläpito?',
    a: 'Projektin hintaan sisältyy sivuston julkaisu, mutta jatkuva ylläpito on erillinen sopimus. Pienet muutokset julkaisun jälkeen voidaan sopia tarpeen mukaan. Domain ja hosting ovat erillisiä kuluja – yleensä noin 10–30 € vuodessa.',
  },
  {
    q: 'Mitä jos en tiedä, tarvitsenko landing pagen vai perussivuston?',
    a: 'Kerro lyhyesti mitä yritys tekee ja millaisia asiakkaita tavoittelet. Sen perusteella suositellaan sopivaa laajuutta ennen päätöstä. Monelle pienyrittäjälle landing page on hyvä aloituspiste, ja sitä voi laajentaa myöhemmin.',
  },
  {
    q: 'Voiko hintaa neuvotella?',
    a: 'Hinnat ovat kiinteät, mutta laajuus sovitaan aina ennen aloitusta. Näin hinta ja sisältö ovat selkeitä ennen kuin mitään maksetaan. Piilokuluja ei tule.',
  },
  {
    q: 'Miksi ammattimaisesti tehdyt nettisivut maksavat enemmän kuin sivustorakentajat?',
    a: 'Sivustorakentajat kuten Wix tai Squarespace ovat edullisia, mutta vaativat omaa aikaa ja teknistä kokeilua. Ammattimaisessa toteutuksessa saat valmiiksi suunnitellun sivuston ilman oman ajan käyttöä. Lopputulos on yleensä siistimpi ja nopeampi kuin itse rakennettu.',
  },
]

const included = [
  'Mobiiliystävällinen ulkoasu',
  'Yhteydenottolomake',
  'Kevyt hakukoneoptimointi',
  'Esikatselu ennen toteutusta',
  'Julkaisu omalle domainille',
]

const raisesPrice = [
  'Verkkokauppa tai varausjärjestelmä',
  'Useampi kieliversio',
  'Valokuvaustarpeet tai logo-suunnittelu',
  'Paljon alasivuja tai sisältöä',
  'Integraatiot ulkoisiin järjestelmiin',
]

const processSteps = [
  {
    num: '01',
    heading: 'Kerrot tarpeen',
    text: 'Lyhyt kuvaus yrityksestä ja tavoitteista riittää. Teknistä osaamista ei tarvita.',
  },
  {
    num: '02',
    heading: 'Saat esikatselun',
    text: 'Näet ulkoasun suunnan ennen rakentamista ja voit kommentoida rauhassa.',
  },
  {
    num: '03',
    heading: 'Sivusto julkaistaan',
    text: 'Kun kokonaisuus tuntuu oikealta, sivusto rakennetaan valmiiksi ja julkaistaan.',
  },
]

export default function GuideHinta({ selectedPlan }) {
  return (
    <>
      <SEO
        title="Nettisivut yritykselle hinta – mitä kotisivut maksavat?"
        description="Selkeä opas yrityksen nettisivujen hintaan. Katso mitä landing page ja perussivusto yleensä sisältävät ja miten pienyritys voi aloittaa helposti."
        path="/opas/nettisivut-yritykselle-hinta"
        faqItems={guideFaqs}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-dark-950 relative overflow-hidden">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[620px] h-[420px] rounded-full bg-snake-green/[0.05] blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="section-label mb-6">Opas</div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Nettisivut yritykselle hinta – mitä kotisivut maksavat?
          </h1>
          <p className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            Nettisivujen hinta vaihtelee paljon sen mukaan, mitä sivuston halutaan tekevän.
            Pienelle yritykselle sopiva ratkaisu on usein selvästi kevyempi – ja edullisempi – kuin
            mitä verkon yleisarviot antavat ymmärtää.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/#yhteydenotto" className="btn-primary justify-center">
              Pyydä esikatselu <ArrowRight size={16} />
            </Link>
            <Link to="/hinnasto" className="btn-outline justify-center">
              Katso hinnasto
            </Link>
          </div>
        </div>
      </section>

      {/* Hintaesimerkit */}
      <section className="py-16 lg:py-20 bg-dark-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="section-label mb-5 text-center">Hintaesimerkit</div>
          <h2 className="section-title text-3xl lg:text-4xl text-center mb-4">
            Nettisivujen hinta <span className="gradient-text">pienyritykselle</span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-10">
            Pienyrityksille nettisivut tehdään yleensä kiinteähintaisena projektina.
            Alla tyypilliset hinnat ja mitä niihin kuuluu.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="glass-card p-7 flex flex-col">
              <h3 className="font-display font-bold text-2xl text-white mb-2">Landing page</h3>
              <div className="flex items-baseline gap-1.5 mb-4">
                <span className="font-display font-bold text-5xl gradient-text">250 €</span>
                <span className="text-slate-400 text-sm">+ alv</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Yhden sivun kokonaisuus uudelle yritykselle tai yksittäiselle palvelulle.
                Nopea tapa saada uskottava verkkoläsnäolo ilman isoa projektia.
              </p>
              <ul className="space-y-2.5 mt-auto">
                {['1 sivu', 'Yhteydenottolomake', 'Kevyt hakukoneoptimointi', 'Julkaisu omalle domainille'].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 size={15} className="text-snake-green flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-7 flex flex-col">
              <h3 className="font-display font-bold text-2xl text-white mb-2">Perussivusto</h3>
              <div className="flex items-baseline gap-1.5 mb-4">
                <span className="font-display font-bold text-5xl gradient-text">600 €</span>
                <span className="text-slate-400 text-sm">+ alv</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                2–4 sivun kokonaisuus yritykselle, joka haluaa esitellä palvelut ja yrityksen
                selkeästi useammalla sivulla.
              </p>
              <ul className="space-y-2.5 mt-auto">
                {['2–4 sivua', 'Palvelut ja yritysesittely', 'Yhteydenottolomake', 'Perus hakukoneoptimointi', 'Julkaisu omalle domainille'].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 size={15} className="text-snake-green flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center mt-6 text-sm text-slate-400">
            Tarkempi erittely hinnoista:{' '}
            <Link to="/hinnasto" className="text-snake-green hover:underline">
              katso hinnasto →
            </Link>
          </p>
        </div>
      </section>

      {/* Mitä hintaan kuuluu + mikä nostaa */}
      <section className="py-16 lg:py-20 bg-dark-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="glass-card p-7">
            <h2 className="font-display font-bold text-2xl text-white mb-5">
              Mitä nettisivujen hintaan yleensä kuuluu
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Hyvään nettisivuprojektiin kuuluu mobiiliystävällinen ulkoasu, yhteydenottolomake
              ja kevyt hakukoneoptimointi. SnakeBytellä hintaan sisältyy lisäksi esikatselu
              ennen toteutusta, jotta näet suunnan ennen kuin varsinainen rakentaminen alkaa.
            </p>
            <ul className="space-y-2.5">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 size={15} className="text-snake-green flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-slate-500 text-xs mt-5 leading-relaxed">
              Domain ja hosting ovat erillisiä kuluja – yleensä 10–30 € vuodessa.
              Nämä käydään läpi selkeästi ennen aloitusta.
            </p>
          </div>
          <div className="glass-card p-7">
            <h2 className="font-display font-bold text-2xl text-white mb-5">
              Mikä nostaa nettisivujen hintaa
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Perus nettisivuprojekti pysyy edullisena, kun sivuston laajuus on selkeä.
              Hintaa nostavat erikoistoiminnot ja laajemmat kokonaisuudet, joita pienyrittäjä
              ei useimmiten tarvitse.
            </p>
            <ul className="space-y-2.5">
              {raisesPrice.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <span className="text-slate-500 flex-shrink-0 mt-0.5 text-base leading-none">–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Landing page vs perussivusto */}
      <section className="py-16 lg:py-20 bg-dark-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="section-label mb-5 text-center">Vertailu</div>
          <h2 className="section-title text-3xl lg:text-4xl text-center mb-10">
            Landing page vai <span className="gradient-text">perussivusto?</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="glass-card p-7">
              <h3 className="font-display font-bold text-xl text-white mb-4">
                Landing page sopii, kun…
              </h3>
              <ul className="space-y-3">
                {[
                  'Olet aloittamassa uutta yritystä tai palvelua',
                  'Haluat nopean ja edullisen aloituksen',
                  'Sinulla on yksi selkeä palvelu tai tuote',
                  'Tavoitteesi on saada yhteydenottoja',
                  'Et vielä tarvitse useita alasivuja',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                    <CheckCircle2 size={15} className="text-snake-green flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-7">
              <h3 className="font-display font-bold text-xl text-white mb-4">
                Perussivusto sopii, kun…
              </h3>
              <ul className="space-y-3">
                {[
                  'Yrityksellä on useita palveluita esiteltävänä',
                  'Tarvitset erillisen yritysesittelysivun',
                  'Haluat esitellä referenssejä tai projekteja',
                  'Sisältöä on enemmän kuin yhteen sivuun mahtuu',
                  'Sivustolla pitää olla selkeä navigaatio',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                    <CheckCircle2 size={15} className="text-snake-green flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center mt-8 text-slate-400 text-sm">
            Landing pagen voi myöhemmin laajentaa perussivustoksi. Laajennuksessa hyvitetään 50 €.
          </p>
        </div>
      </section>

      {/* Miten projekti etenee */}
      <section className="py-16 lg:py-20 bg-dark-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="section-label mb-5 text-center">Prosessi</div>
          <h2 className="section-title text-3xl lg:text-4xl text-center mb-4">
            Miten nettisivuprojekti etenee
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-10">
            Selkeä prosessi pitää projektin aikataulussa. Landing page valmistuu yleensä 1–2
            viikossa, perussivusto 2–4 viikossa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {processSteps.map((step) => (
              <div key={step.num} className="glass-card p-6">
                <div className="font-display font-bold text-snake-green text-sm mb-3">{step.num}</div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{step.heading}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-dark-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-9">
            <div className="section-label mb-5">FAQ</div>
            <h2 className="section-title text-3xl lg:text-4xl">
              Usein kysyttyä nettisivujen hinnasta
            </h2>
          </div>
          <FAQList items={guideFaqs} />
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link to="/hinnasto" className="btn-outline justify-center">
              Katso hinnasto
            </Link>
            <Link to="/#yhteydenotto" className="btn-primary justify-center">
              Pyydä esikatselu <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Contact selectedPlan={selectedPlan} />
    </>
  )
}
