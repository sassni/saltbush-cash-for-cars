// All website copy for Saltbush Cash for Cars (Adelaide).
// Drafted with AI, then edited by hand for accuracy, Australian English and local detail.
// `npm run seed` turns this into seed.ndjson, which is imported into Sanity. After import, the client edits everything in the CMS.

export const settings = {
  businessName: 'Saltbush Cash for Cars',
  phone: '08 5550 2727',
  email: 'hello@saltbushcashforcars.com.au',
  street: 'Unit 4, 18 Grand Junction Road',
  suburb: 'Wingfield',
  postcode: '5013',
  state: 'SA',
  hours: ['Mon–Fri: 7am – 6pm', 'Saturday: 8am – 4pm', 'Sunday: by appointment'],
  abn: '12 345 678 901',
  mapNote: 'We collect from across metropolitan Adelaide, the Adelaide Hills, the Barossa fringe and the Fleurieu. Further out? Call us and ask.',
  formHeading: 'Get your free cash quote',
  formIntro: 'Tell us about the car. We reply with a firm offer, usually within the hour during business hours.',
  formButton: 'Get My Cash Offer',
  formReassurance: 'Free and no obligation. We never share your details.',
  formSuccess: 'Thanks! Your details are with us. We’ll call or text you with an offer shortly.',
  areasHeading: 'Car removal across Adelaide',
  areasIntro: 'Our tow trucks are based in Wingfield, so we reach most Adelaide suburbs the same or next day. Here are some of the areas we visit every week.',
  suburbs: [
    'Adelaide CBD', 'Port Adelaide', 'Salisbury', 'Elizabeth', 'Mawson Lakes', 'Gawler', 'Modbury', 'Tea Tree Gully',
    'Golden Grove', 'Prospect', 'Norwood', 'Burnside', 'Unley', 'Glenelg', 'Henley Beach', 'Marion',
    'Morphett Vale', 'Noarlunga', 'Seaford', 'Aldinga', 'Mount Barker', 'Stirling', 'Hahndorf', 'Munno Para',
  ],
  testimonialsHeading: 'What Adelaide sellers say',
  testimonials: [
    {quote: 'Rang on Tuesday morning about my dead Magna, had a price in ten minutes and the truck was in my driveway by 2pm. The money was in my account before they left.', name: 'Karen', suburb: 'Salisbury', car: '2003 Mitsubishi Magna'},
    {quote: 'The offer was what they quoted, no haggling when the driver turned up. Took the hassle out of getting rid of Dad’s old ute.', name: 'Tom', suburb: 'Morphett Vale', car: '1998 Ford Falcon ute'},
    {quote: 'Rear-ended and written off, and the insurer’s payout was low. Saltbush gave me a fair price for what was left and handled the paperwork.', name: 'Priya', suburb: 'Mawson Lakes', car: '2014 Toyota Corolla'},
  ],
  ctaHeading: 'Ready to turn that car into cash?',
  ctaText: 'Get a firm offer in minutes and free pickup at a time that suits you, anywhere in Adelaide.',
  headerButton: 'Free Quote',
  callLabel: 'Call',
  quoteLabel: 'Get My Free Quote',
  footerBlurb: 'Locally owned Adelaide car buyers. We pay cash for cars, utes, vans and 4WDs in any condition, with free removal and responsible recycling.',
}


export const home = {
  seo: {
    title: 'Cash for Cars Adelaide | Up to $15,000 + Free Removal',
    description: 'Sell your car for cash in Adelaide. Any make, any condition: running, damaged or scrap. Firm quote in minutes, free same-day pickup and instant payment.',
  },
  heroEyebrow: 'Adelaide’s local car buyers',
  heroHeading: 'Cash for Cars Adelaide: sold today, paid on pickup',
  heroText: 'Running, damaged, unregistered or rusted out, we buy it. Get a firm offer in minutes, then we tow it away for free and pay you by instant bank transfer.',
  heroPoints: ['Firm offers, no haggling at pickup', 'Free removal anywhere in Adelaide', 'Same-day pickup, subject to availability'],
  heroBadge: 'UP TO $15,000',
  heroImage: {file: 'hero-rusty-car-outback.webp', alt: 'Rusty old sedan sitting in dry South Australian scrubland under a blue sky'},
  stats: [
    {value: '15 min', label: 'average quote time'},
    {value: '$0', label: 'towing or hidden fees'},
    {value: 'Same day', label: 'pickup across Adelaide'},
    {value: '4.9★', label: 'from local sellers'},
  ],
  stepsHeading: 'Sell your car in three easy steps',
  stepsIntro: 'No ads, no tyre-kickers, no test drives. Most sales are done the same day you call.',
  steps: [
    {title: 'Tell us about the car', text: 'Fill in the quick form or give us a call with the make, model, year, condition and suburb.'},
    {title: 'Accept your firm offer', text: 'We reply with a fair, fixed price, usually within the hour. No obligation if it’s not right for you.'},
    {title: 'Get paid on pickup', text: 'Our driver checks the car and your ID, takes it away free and pays you by instant transfer before leaving.'},
  ],
  buyHeading: 'We buy every kind of car, in any condition',
  buyIntro: 'If it has four wheels (or used to), we’ll make you an offer. That covers all makes and models, sedans to trucks.',
  buyItems: [
    {title: 'Old & unwanted cars', text: 'Sitting in the driveway costing you rego and space? We’ll take it off your hands.'},
    {title: 'Damaged & accident cars', text: 'Hail, flood, crash or fire damage, including insurance write-offs and repairable write-offs.'},
    {title: 'Non-running & scrap cars', text: 'Blown engines, dead gearboxes, missing parts. We pay for the metal and the parts.'},
    {title: 'Utes, vans, 4WDs & trucks', text: 'Work utes, family vans, 4WDs and light commercials, registered or not.'},
    {title: 'Unregistered cars', text: 'No rego? No problem. We tow it, so it doesn’t need to be road-legal.'},
    {title: 'Used cars that still run', text: 'Want a quick sale without selling privately? Get a fair cash price today.'},
  ],
  buyImage: {file: 'rusty-sedan.webp', alt: 'Weathered old sedan with rust and faded paint parked on gravel'},
  servicesHeading: 'How we can help',
  servicesIntro: 'Whether you want top dollar or just want it gone, there’s a service to suit.',
  whyHeading: 'Why Adelaide sellers choose Saltbush',
  whyIntro: 'We’re a local crew, not a call centre. We keep things simple, honest and quick.',
  whyItems: [
    {title: 'The price we quote is the price we pay', text: 'If the car matches what you told us, the offer stands. No last-minute knock-downs in your driveway.'},
    {title: 'Free removal, no fine print', text: 'Towing is always included, whether you’re in Glenelg or Gawler.'},
    {title: 'Paperwork sorted', text: 'We provide a receipt and walk you through cancelling or transferring the rego with Service SA.'},
    {title: 'Recycled responsibly', text: 'Fluids, batteries and tyres are disposed of properly, and reusable parts get a second life.'},
  ],
  faqHeading: 'Cash for cars: your questions answered',
  faqs: [
    {question: 'How much will I get for my car?', answer: 'It depends on the make, model, age, condition and whether it runs. Late-model cars can fetch up to $15,000, while scrap cars are priced on weight and parts. Fill in the form or call for a firm offer.'},
    {question: 'Do you buy cars that don’t run?', answer: 'Yes. Non-running, crashed, flooded and unregistered cars are a big part of what we buy. We bring a tow truck, so the car doesn’t need to move under its own steam.'},
    {question: 'Is the car removal really free?', answer: 'Yes. Towing is included with every car we buy anywhere in our Adelaide service area. There are no call-out, towing or admin fees taken off your offer.'},
    {question: 'How and when do I get paid?', answer: 'You’re paid on pickup, usually by instant bank transfer, before our driver leaves with the car.'},
    {question: 'What do I need to have ready?', answer: 'Photo ID (such as a driver’s licence), the keys if you have them, and proof of ownership such as the registration papers or a purchase receipt.'},
    {question: 'How quickly can you collect my car?', answer: 'Often the same day if you call before midday, subject to availability. Otherwise we’ll book a time that suits you, including Saturdays.'},
  ],
}

const cashForCars = {
  order: 1,
  slug: 'cash-for-cars',
  title: 'Cash for Cars',
  summary: 'Top cash for any car, ute, van or 4WD, running or not. Firm quote in minutes and payment on pickup.',
  seo: {
    title: 'Sell My Car for Cash Adelaide | Saltbush Cash for Cars',
    description: 'Sell your car for cash in Adelaide, fast. Firm offers up to $15,000 for any make or condition, with free pickup and instant bank transfer on the day.',
  },
  heroEyebrow: 'Cash for cars Adelaide',
  heroHeading: 'Sell your car for cash in Adelaide, today',
  heroText: 'Skip the classifieds and the haggling. Tell us about your car and get a firm cash offer, then we collect it for free and pay you on the spot.',
  heroPoints: ['Offers up to $15,000', 'Any make, model or condition', 'Paid before we leave'],
  heroImage: {file: 'keys-handover.webp', alt: 'Car keys being handed from one person to another after a sale'},
  sections: [
    {
      heading: 'A faster, fairer way to sell your car',
      body: `Selling privately in Adelaide can drag on for weeks: photos, listings, no-shows, lowball offers and strangers wanting test drives. With Saltbush you get one firm offer, usually within the hour, and the car is gone the same day.

We buy **all makes and models**, from Holdens and Fords to Toyotas, Mazdas, Hyundais, Kias and European cars. That includes sedans, hatches, SUVs, utes, vans, 4WDs and light trucks.

Car doesn’t run? See our [scrap car removal](/services/scrap-car-removal) service. Just want it gone? We offer [free car removal](/services/car-removal) too.`,
      image: {file: 'car-on-truck.webp', alt: 'Older sedan loaded on the back of a tow truck ready for removal'},
    },
    {
      heading: 'What decides your cash offer?',
      body: `We price every car on its own merits, never with a one-size-fits-all number. The main things we look at are:

- Make, model, year and kilometres
- Mechanical condition: does it start, drive and stop?
- Body damage, rust, hail or flood damage
- Whether it is registered and has a service history
- Current demand for parts and scrap metal prices

The more detail (and photos) you give us, the more accurate your offer will be. If the car matches your description on the day, **the price we quote is the price we pay**.`,
    },
  ],
  benefitsHeading: 'Why sell your car to us?',
  benefits: [
    {title: 'Firm, honest offers', text: 'No bait-and-switch. We quote a real number based on what you tell us.'},
    {title: 'Instant payment', text: 'Paid by instant bank transfer on pickup, before the car leaves your place.'},
    {title: 'Free pickup', text: 'Towing is included across Adelaide, the Hills and the southern suburbs.'},
    {title: 'Finance owing? Ask us', text: 'In many cases we can settle the loan with your lender and pay you the difference.'},
  ],
  stepsHeading: 'How selling your car works',
  steps: [
    {title: 'Request a quote', text: 'Use the form or call. It takes about two minutes.'},
    {title: 'Book a pickup time', text: 'Same day or a time that suits you, at home, work or the roadside.'},
    {title: 'Hand over the keys, get paid', text: 'Show your ID, sign the receipt and the money is transferred on the spot.'},
  ],
  faqHeading: 'Selling your car for cash: FAQs',
  faqs: [
    {question: 'Do I need to clean or fix the car first?', answer: 'No. Sell it as it is. We factor repairs into the offer so you don’t have to spend a cent.'},
    {question: 'Can I sell a car with money owing on it?', answer: 'Often, yes. We run a PPSR check, settle the outstanding amount with your lender and pay you any difference. Let us know about the finance when you ask for a quote.'},
    {question: 'Can I sell a car that isn’t in my name?', answer: 'We need to deal with the registered owner or someone with written authority from them, plus ID. This protects you and us.'},
    {question: 'What happens to my registration?', answer: 'Depending on the car, the registration is either transferred or cancelled. We’ll explain the right steps with Service SA, and you may be entitled to a refund of any unused rego.'},
  ],
}

const carRemoval = {
  order: 2,
  slug: 'car-removal',
  title: 'Car Removal',
  summary: 'Free car removal across Adelaide. We tow away unwanted cars from homes, businesses and roadsides.',
  seo: {
    title: 'Free Car Removal Adelaide | Same-Day Pickup | Saltbush',
    description: 'Free car removal across Adelaide. We tow away unwanted, damaged and unregistered cars from home or work, and pay you cash for them. Book same-day pickup.',
  },
  heroEyebrow: 'Car removal Adelaide',
  heroHeading: 'Free car removal anywhere in Adelaide',
  heroText: 'Need an unwanted car gone? We tow it away at no cost, often the same day, and in most cases pay you for it too.',
  heroPoints: ['Towing always free', 'Homes, businesses & strata', 'Weekend pickups available'],
  heroImage: {file: 'tow-truck-removal.webp', alt: 'Flatbed tow truck carrying a car along a suburban road'},
  sections: [
    {
      heading: 'Unwanted car taking up space?',
      body: `A car that hasn’t moved in months is more than an eyesore. It takes up the driveway or carport, can attract council notices on the street, and may leak oil or coolant.

Our Wingfield-based tow trucks collect cars from **homes, rentals, strata car parks, workshops and businesses** across Adelaide. You don’t have to be there if we’ve arranged things beforehand.

Most cars we remove still have value, so we [pay cash for cars](/services/cash-for-cars) of almost any age. Cars at the end of the road go through our [scrap car removal](/services/scrap-car-removal) service.`,
      image: {file: 'old-car-coast.webp', alt: 'Old rusted car abandoned in long grass near the coast'},
    },
    {
      heading: 'Removal for any situation',
      body: `We regularly help with:

- Deceased estates and downsizing
- Landlords and property managers clearing tenancies
- Mechanics and smash repairers with cars that aren’t worth fixing
- Cars left over after an insurance claim
- Moving interstate or overseas at short notice

Tell us about any access issues when you book, such as tight driveways, flat tyres or no keys, and we’ll bring the right equipment.`,
    },
  ],
  benefitsHeading: 'What’s included with every removal',
  benefits: [
    {title: '$0 towing', text: 'No call-out or towing fees, whatever the car’s condition.'},
    {title: 'Flexible timing', text: 'Same-day, after-hours by arrangement, and Saturday pickups.'},
    {title: 'Right equipment', text: 'Flatbeds, winches and dollies for cars with no wheels or no keys.'},
    {title: 'Receipt for your records', text: 'A written receipt so you can show the car has been sold or disposed of.'},
  ],
  stepsHeading: 'How car removal works',
  steps: [
    {title: 'Tell us where the car is', text: 'Suburb, access details and the car’s condition.'},
    {title: 'Choose a pickup time', text: 'We confirm a time window by text.'},
    {title: 'We tow it away', text: 'Usually under 30 minutes on site, and you’re paid if the car has value.'},
  ],
  faqHeading: 'Car removal: FAQs',
  faqs: [
    {question: 'Do I have to be home for the pickup?', answer: 'Not always. If ownership and payment details are sorted beforehand, we can collect while you’re at work. Just let us know where the keys are.'},
    {question: 'Can you remove a car with no keys or flat tyres?', answer: 'Yes. Our trucks carry winches and dollies for cars that won’t roll or steer. Mention it when booking.'},
    {question: 'Do you remove cars outside Adelaide?', answer: 'We regularly cover the Adelaide Hills, Gawler, the Barossa fringe and the Fleurieu. For other regional areas, call and we’ll let you know.'},
    {question: 'Will you pay me for the car?', answer: 'Most cars have some value in parts or metal, so in most cases yes. Your quote shows exactly what we’ll pay.'},
  ],
}

const scrapCarRemoval = {
  order: 3,
  slug: 'scrap-car-removal',
  title: 'Scrap Car Removal',
  summary: 'Cash for scrap, wrecked and end-of-life cars, recycled responsibly at licensed facilities.',
  seo: {
    title: 'Scrap Car Removal Adelaide | Cash for Scrap Cars | Saltbush',
    description: 'Get cash for scrap and wrecked cars in Adelaide. Free pickup of non-running, crashed or rusted-out vehicles, recycled responsibly. Quote in minutes.',
  },
  heroEyebrow: 'Scrap car removal Adelaide',
  heroHeading: 'Cash for scrap cars in Adelaide',
  heroText: 'Crashed, rusted, burnt out or stripped, your scrap car is still worth money. We collect it for free and recycle it the right way.',
  heroPoints: ['Paid on weight & parts', 'Non-running cars welcome', 'Responsible recycling'],
  heroImage: {file: 'scrap-yard.webp', alt: 'Rows of scrap cars waiting to be recycled at a wrecking yard'},
  sections: [
    {
      heading: 'What counts as a scrap car?',
      body: `If repairing a car would cost more than it’s worth, it’s usually a scrap car. Common examples:

- Cars with blown engines or seized gearboxes
- Statutory or repairable write-offs after a crash
- Hail, flood or fire-damaged vehicles
- Heavily rusted or partly stripped cars
- Project cars that never got finished

Not sure if yours is scrap? Send us the details and we’ll tell you. It might be worth more as a [used car sale](/services/cash-for-cars).`,
      image: {file: 'wrecked-ute-desert.webp', alt: 'Burnt-out wrecked ute body sitting in a dry, sandy paddock'},
    },
    {
      heading: 'Recycled responsibly, not dumped',
      body: `Every scrap car we collect is processed properly. Fuel, oil, coolant and batteries are drained and disposed of safely. Tyres go to approved recyclers, and good-quality parts are reused to keep older cars on the road.

The remaining steel and aluminium goes to licensed metal recyclers, so most of your old car gets a second life rather than ending up in landfill.`,
    },
  ],
  benefitsHeading: 'Why scrap your car with Saltbush',
  benefits: [
    {title: 'Paid for your scrap', text: 'We pay on weight plus any saleable parts, so you get more than the metal price alone.'},
    {title: 'Free collection', text: 'No towing fees, even for cars with no wheels.'},
    {title: 'Paperwork guidance', text: 'We explain how to cancel the rego with Service SA.'},
    {title: 'Eco-friendly', text: 'Fluids and batteries handled safely, and parts reused.'},
  ],
  stepsHeading: 'How scrapping your car works',
  steps: [
    {title: 'Describe the car', text: 'Tell us what’s wrong with it and what’s missing.'},
    {title: 'Get a scrap price', text: 'Fixed offer based on weight and parts.'},
    {title: 'Free pickup and payment', text: 'We tow it away and pay you on the spot.'},
  ],
  faqHeading: 'Scrap car removal: FAQs',
  faqs: [
    {question: 'How much is my scrap car worth?', answer: 'Scrap prices depend on the car’s weight, current metal prices and whether useful parts like the engine, gearbox or catalytic converter are still fitted. Get a quote for a firm figure.'},
    {question: 'Do you take cars with missing parts?', answer: 'Yes, including shells with no engine or wheels. The offer reflects what’s left, and we still collect for free.'},
    {question: 'Should I cancel the registration first?', answer: 'You can cancel it yourself or after the sale. Either way, we’ll explain the process with Service SA. You may be able to claim a refund of any unused registration.'},
    {question: 'Can I keep the number plates?', answer: 'Personalised plates are yours to keep. For standard plates we’ll explain whether they need to be returned to Service SA when the rego is cancelled.'},
  ],
}

export const services = [cashForCars, carRemoval, scrapCarRemoval]

export const servicesPage = {
  seo: {
    title: 'Car Buying & Removal Services Adelaide | Saltbush',
    description: 'Cash for cars, free car removal and scrap car removal across Adelaide. One local team for selling, towing and recycling any vehicle. Get a free quote.',
  },
  heroEyebrow: 'Our services',
  heroHeading: 'Car buying and removal services in Adelaide',
  heroText: 'Whatever shape your car is in, we’ll make you a fair offer and take it away for free. Choose the service that suits you, or just ask and we’ll point you the right way.',
  heroImage: {file: 'car-on-truck.webp', alt: 'Old car loaded onto a small tow truck tray for free removal'},
  listHeading: 'Choose your service',
  listIntro: 'All three include a free quote, free towing and payment on pickup.',
  buyHeading: 'Vehicles we buy and remove',
  buyItems: home.buyItems.slice(0, 6),
  faqHeading: 'Questions about our services',
  faqs: [
    {question: 'What’s the difference between cash for cars and scrap car removal?', answer: 'Cash for cars is for vehicles that still have resale or parts value, like running or lightly damaged cars. Scrap car removal is for cars at the end of their life, priced mainly on weight and recyclable parts. Not sure which fits? Just ask for a quote and we’ll work it out.'},
    {question: 'Do all services include free towing?', answer: 'Yes. Every car we buy is collected free of charge within our Adelaide service area.'},
    {question: 'Do you buy trucks and commercial vehicles?', answer: 'We buy utes, vans, 4WDs and light trucks. For heavy vehicles, call us to discuss.'},
  ],
}

export const about = {
  seo: {
    title: 'About Saltbush Cash for Cars | Local Adelaide Car Buyers',
    description: 'Meet Saltbush Cash for Cars, a locally owned Adelaide crew buying and removing unwanted cars. Honest offers, free towing and responsible recycling.',
  },
  heroEyebrow: 'About us',
  heroHeading: 'Local Adelaide car buyers who do what we say',
  heroText: 'Saltbush is a small, locally owned team based in Wingfield. We started with one truck and a simple idea: make selling an unwanted car quick, fair and stress-free.',
  heroImage: {file: 'tow-truck-removal.webp', alt: 'Saltbush tow truck carrying a car on its tray through Adelaide'},
  sections: [
    {
      heading: 'Why we started Saltbush',
      body: `Too many people we knew had been burnt selling an old car: a good price on the phone, then a much lower one when the truck turned up. We thought Adelaide deserved better.

So we built Saltbush around **firm offers and plain talk**. We tell you what we’ll pay and why, we turn up when we say we will, and the price doesn’t change unless the car is different from what you described.`,
      image: {file: 'keys-handover.webp', alt: 'Customer handing over car keys after accepting a cash offer'},
    },
    {
      heading: 'Named after something tough and local',
      body: `Saltbush grows right across South Australia. It’s hardy, it doesn’t waste a drop, and it makes the most of what it’s got. That’s how we treat old cars: nothing useful goes to waste.

Reusable parts are recovered, fluids and batteries are handled safely, and the metal is recycled. See how it works on our [scrap car removal](/services/scrap-car-removal) page, or [get in touch](/contact) with any questions.`,
    },
  ],
  stats: [
    {value: '100%', label: 'locally owned & run'},
    {value: '7 days', label: 'quotes by phone or online'},
    {value: '$0', label: 'removal fees, ever'},
  ],
  valuesHeading: 'What you can expect from us',
  values: [
    {title: 'Straight answers', text: 'A real price up front, explained in plain English.'},
    {title: 'On time', text: 'We give a pickup window and stick to it, or call if anything changes.'},
    {title: 'Respect for your place', text: 'Careful towing, no mess left behind, and we close the gate.'},
    {title: 'Done properly', text: 'ID checks, receipts and the right steps with Service SA, every time.'},
  ],
}

export const contact = {
  seo: {
    title: 'Contact Saltbush Cash for Cars | Get a Quote in Adelaide',
    description: 'Call, email or send your car details for a free cash quote. Saltbush Cash for Cars buys and removes cars across Adelaide, 7 days a week by arrangement.',
  },
  heroEyebrow: 'Contact us',
  heroHeading: 'Get a quote or talk to a local',
  heroText: 'The fastest way to a price is the form below or a quick call. We answer our own phones. No call centres, no bots.',
  detailsHeading: 'Contact details',
  hoursHeading: 'Opening hours',
  faqHeading: 'Before you get in touch',
  faqs: [
    {question: 'What details do you need for a quote?', answer: 'Make, model, year, approximate kilometres, condition (does it run?), and your suburb. Photos help us give the sharpest price.'},
    {question: 'Can I get a quote outside business hours?', answer: 'Yes. Send the form any time and we’ll reply first thing. If it’s urgent, leave a message and we’ll call back.'},
    {question: 'Do you have a yard I can drop the car at?', answer: 'Most customers prefer free pickup, but you can drop off at our Wingfield yard by appointment.'},
  ],
}

export const thankYou = {
  seo: {title: 'Thanks, We’ve Got Your Details | Saltbush Cash for Cars', description: 'Thanks for your quote request. A member of the Saltbush team will contact you shortly with a firm cash offer for your car.'},
  heroHeading: 'Thanks, your quote request is in',
  heroText: 'We’ll call or text you with a firm offer shortly, usually within the hour during business hours. In a hurry? Give us a call.',
  buttonLabel: 'Back to the home page',
}

export const notFound = {
  seo: {title: 'Page Not Found | Saltbush Cash for Cars', description: 'Sorry, this page has been towed away. Head back to the Saltbush Cash for Cars home page or call us for a free quote.'},
  heroHeading: 'This page has been towed away',
  heroText: 'We couldn’t find the page you were after. It may have moved or the link might be wrong. Try one of the pages below, or call us for a quick quote.',
  buttonLabel: 'Take me home',
  heroImage: {file: 'wrecked-ute-desert.webp', alt: 'Abandoned wrecked ute in an empty paddock'},
}
