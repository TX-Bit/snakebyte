import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Contact from '../components/Contact'
import FAQList from '../components/FAQList'
import SEO from '../components/SEO'
import { genericFaqs, packages, processSteps } from '../content/siteContent'

const pages = {
  '/nettisivut-yritykselle': {
    title: 'Nettisivut yritykselle helposti ja selkeästi | SnakeByte',
    description: 'Nettisivut yritykselle ilman teknistä säätöä. Selkeä prosessi, moderni toteutus, hinnat 250 € ja 600 € + alv.',
    h1: 'Nettisivut yritykselle helposti ja selkeästi',
    eyebrow: 'Nettisivut yritykselle',
    intro:
      'Yrityksen nettisivujen ei tarvitse olla iso ja raskas projekti. SnakeByte rakentaa selkeän sivuston, joka kertoo mitä teet, näyttää luotettavalta ja ohjaa asiakkaan ottamaan yhteyttä.',
    sections: [
      {
        heading: 'Mitä saat',
        items: [
          'Modernin ja mobiilissa toimivan sivuston',
          'Yrityksen perustiedot, palvelut ja yhteydenoton selkeästi esiin',
          'Kevyen hakukoneoptimoinnin tärkeimmille hakutermeille',
          'Esikatselun ennen rakentamista ja julkaisun omalle domainille',
        ],
      },
      {
        heading: 'Kenelle tämä sopii',
        items: [
          'Yritykselle, joka tarvitsee selkeät kotisivut ilman pitkää projektia',
          'Palveluyritykselle, jonka pitää saada yhteydenottoja',
          'Yrittäjälle, joka haluaa ulkoistaa teknisen toteutuksen',
          'Yritykselle, jonka nykyinen sivusto ei enää tunnu uskottavalta',
        ],
      },
    ],
    priceText:
      'Voit aloittaa kevyellä landing pagella 250 € + alv tai valita perussivuston 600 € + alv, kun tarvitset useamman sivun palveluille ja yritysesittelylle.',
    faqs: [
      ...genericFaqs,
      {
        q: 'Voiko sivustoa laajentaa myöhemmin?',
        a: 'Kyllä. Sivusto voidaan aloittaa pienestä ja laajentaa myöhemmin esimerkiksi uusilla palvelusivuilla.',
      },
    ],
  },
  '/kotisivut-pienyritykselle': {
    title: 'Kotisivut pienyritykselle ilman teknistä säätöä | SnakeByte',
    description: 'Kotisivut pienyritykselle, toiminimelle ja yrittäjälle selkeällä prosessilla. Aloita landing pagella tai perussivustolla.',
    h1: 'Kotisivut pienyritykselle ilman teknistä säätöä',
    eyebrow: 'Pienyritykselle',
    intro:
      'Pienyrityksen kotisivujen tärkein tehtävä on tehdä yrityksestä helposti ymmärrettävä ja yhteydenotosta vaivatonta. Siksi ratkaisu pidetään selkeänä, nopeana ja järkevän kokoisena.',
    sections: [
      {
        heading: 'Pienyrittäjälle sopiva lähestymistapa',
        items: [
          'Ei pitkiä työpajoja tai teknistä sanastoa',
          'Aloitus onnistuu lyhyellä kuvauksella yrityksestäsi',
          'Tekstit ja rakenne voidaan viimeistellä yhdessä',
          'Saat sivun, jota asiakkaan on helppo selata puhelimella',
        ],
      },
      {
        heading: 'Miksi yksinkertainen sivusto riittää usein',
        items: [
          'Asiakas haluaa nopeasti nähdä mitä tarjoat',
          'Yhteystietojen ja tarjouspyynnön pitää löytyä heti',
          'Selkeä yhden sivun rakenne toimii hyvin uudelle yritykselle',
          'Perussivusto sopii, kun palveluita tai sisältöä on enemmän',
        ],
      },
    ],
    priceText:
      'Landing page on hyvä ensimmäinen versio 250 € + alv. Perussivusto 600 € + alv sopii, kun haluat 2-4 sivua ja enemmän tilaa palveluille.',
    faqs: [
      {
        q: 'Tarvitsenko heti monta sivua?',
        a: 'Et välttämättä. Monelle pienyrittäjälle yhden sivun landing page riittää alkuun hyvin.',
      },
      {
        q: 'Autatko tekstien kanssa?',
        a: 'Kyllä. Voit lähettää raakatekstin tai pelkät pääkohdat, ja muotoilen niistä sivulle sopivan kokonaisuuden.',
      },
      ...genericFaqs.slice(0, 2),
    ],
  },
  '/landing-page-yritykselle': {
    title: 'Landing page yritykselle nopeasti ja edullisesti | SnakeByte',
    description: 'Landing page yritykselle 250 € + alv. Yksi selkeä sivu uudelle yritykselle, palvelulle tai kampanjalle.',
    h1: 'Landing page yritykselle nopeasti ja edullisesti',
    eyebrow: 'Landing page',
    intro:
      'Landing page on yhden sivun kokonaisuus, joka kertoo olennaisen ja ohjaa kävijän ottamaan yhteyttä. Se on hyvä tapa päästä nopeasti liikkeelle ilman isoa sivustoprojektia.',
    sections: [
      {
        heading: 'Mitä 250 € + alv sisältää',
        items: [
          'Yhden modernin ja mobiiliystävällisen sivun',
          'Yrityksen tai palvelun perustiedot',
          'Selkeän yhteydenottolomakkeen',
          'Kevyen hakukoneoptimoinnin ja julkaisun',
        ],
      },
      {
        heading: 'Milloin landing page sopii',
        items: [
          'Uudelle pienelle yritykselle',
          'Yksittäiselle palvelulle tai kampanjalle',
          'Kun haluat nopeasti uskottavan verkkoläsnäolon',
          'Kun et vielä tarvitse useita alasivuja',
        ],
      },
    ],
    priceText:
      'Landing page maksaa 250 € + alv. Jos laajennat sen myöhemmin perussivustoksi, hyvitetään laajennuksen hinnasta 50 €.',
    faqs: [
      {
        q: 'Voiko landing pagen päivittää perussivustoksi?',
        a: 'Kyllä. Landing page voidaan myöhemmin laajentaa 2-4 sivun perussivustoksi, ja laajennuksessa hyvitetään 50 €.',
      },
      {
        q: 'Onko yksi sivu liian vähän?',
        a: 'Ei aina. Jos palvelu on selkeä ja tavoitteena on yhteydenotto, yksi hyvin rakennettu sivu voi olla juuri oikea ratkaisu.',
      },
      ...genericFaqs.slice(0, 2),
    ],
  },
  '/nettisivujen-uudistus': {
    title: 'Nettisivujen uudistus selkeästi ja helposti | SnakeByte',
    description: 'Nettisivujen uudistus tekee vanhasta sivustosta modernin, mobiiliystävällisen ja helpommin yhteydenottoja tuovan.',
    h1: 'Nettisivujen uudistus selkeästi ja helposti',
    eyebrow: 'Uudistus',
    intro:
      'Jos vanhat sivut näyttävät aikansa eläneiltä, toimivat huonosti puhelimella tai eivät tuo yhteydenottoja, ne kannattaa uusia selkeämmäksi kokonaisuudeksi.',
    sections: [
      {
        heading: 'Mitä uudistuksessa parannetaan',
        items: [
          'Vanhat sivut moderniksi ja selkeämmäksi',
          'Parempi mobiilikäyttö puhelimella selaaville asiakkaille',
          'Yhteydenoton, puhelinnumeron ja lomakkeen parempi näkyvyys',
          'Nykyisen sisällön hyödyntäminen järkevissä kohdissa',
        ],
      },
      {
        heading: 'Miten projekti etenee',
        items: [
          'Käydään läpi mikä nykyisessä sivussa toimii ja mikä ei',
          'Suunnitellaan uusi rakenne nykyisen sisällön pohjalta',
          'Näet esikatselun ennen toteutusta',
          'Julkaisu tehdään sovitusti, kun kokonaisuus tuntuu oikealta',
        ],
      },
    ],
    priceText:
      'Uudistus voidaan toteuttaa landing pagena 250 € + alv tai perussivustona 600 € + alv riippuen nykyisen sisällön määrästä.',
    faqs: [
      {
        q: 'Voidaanko vanhoja tekstejä käyttää?',
        a: 'Kyllä. Hyvä nykyinen sisältö voidaan hyödyntää, mutta rakennetta ja sanamuotoja kannattaa usein selkeyttää.',
      },
      {
        q: 'Meneekö vanha sivusto pois heti?',
        a: 'Ei. Uusi sivusto voidaan valmistella rauhassa ja julkaista vasta, kun se on hyväksytty.',
      },
      ...genericFaqs.slice(0, 2),
    ],
  },
}

function HeroBlock({ page }) {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-dark-950 relative overflow-hidden">
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[620px] h-[420px] rounded-full bg-snake-green/[0.05] blur-[120px] pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="section-label mb-6">{page.eyebrow}</div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
          {page.h1}
        </h1>
        <p className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
          {page.intro}
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
  )
}

function ContentSections({ page }) {
  return (
    <section className="py-16 lg:py-20 bg-dark-950">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {page.sections.map((section) => (
          <div key={section.heading} className="glass-card p-7">
            <h2 className="font-display font-bold text-2xl text-white mb-5">{section.heading}</h2>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                  <CheckCircle2 size={16} className="text-snake-green flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function PriceLift({ page }) {
  return (
    <section className="py-16 lg:py-20 bg-dark-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-9">
          <div className="section-label mb-5">Hinnat</div>
          <h2 className="section-title text-3xl lg:text-5xl mb-4">
            Selkeä hinta <span className="gradient-text">ennen aloitusta.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{page.priceText}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {packages.map((pkg) => (
            <Link key={pkg.name} to="/hinnasto" className="glass-card p-6">
              <h3 className="font-display font-bold text-xl text-white mb-2">{pkg.name}</h3>
              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="font-display font-bold text-3xl gradient-text">{pkg.price}</span>
                <span className="text-slate-400 text-sm">{pkg.priceNote}</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{pkg.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessLift() {
  return (
    <section className="py-16 lg:py-20 bg-dark-950">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-9">
          <div className="section-label mb-5">Prosessi</div>
          <h2 className="section-title text-3xl lg:text-5xl mb-4">
            Helppo tapa saada <span className="gradient-text">sivut valmiiksi.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="glass-card p-6">
              <div className="font-display font-bold text-snake-green text-sm mb-3">0{index + 1}</div>
              <h3 className="font-display font-semibold text-white text-lg mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ServicePage({ path, selectedPlan }) {
  const page = pages[path] || pages['/nettisivut-yritykselle']

  return (
    <>
      <SEO title={page.title} description={page.description} path={path} />
      <HeroBlock page={page} />
      <ContentSections page={page} />
      <PriceLift page={page} />
      <ProcessLift />
      <section className="py-16 lg:py-20 bg-dark-950">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-9">
            <div className="section-label mb-5">FAQ</div>
            <h2 className="section-title text-3xl lg:text-5xl">
              Usein kysyttyä
            </h2>
          </div>
          <FAQList items={page.faqs} />
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link to="/hinnasto" className="btn-outline justify-center">
              Vertaa paketteja hinnastossa
            </Link>
            <Link to="/#yhteydenotto" className="btn-primary justify-center">
              Pyydä esikatselu
            </Link>
          </div>
        </div>
      </section>
      <Contact selectedPlan={selectedPlan} />
    </>
  )
}
