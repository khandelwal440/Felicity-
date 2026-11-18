/* Felicity — site content, taken from the Felicity company deck.
   Both pages read from here, so a change made once shows everywhere. */
(() => {
  const S = (k, n) => Array.from({ length: n }, (_, i) => `${k}-${i + 1}`);
  const lead = (first, list) => [first, ...list.filter(x => x !== first)];

  window.FELICITY = {
    // only the high-resolution photos are used full-screen
    SLIDES: [['hero-lights', 'Concerts & live shows'], ['dinner', 'Theme gala dinners'], ['au-crowd', 'AU Financiers employee meet'], ['au-league', 'AU Champions League'], ['hero-stage', 'Award nights & conferences']],

    SERVICES: [
      // [photo, service, description shown in the service popup]
      ['dinner', 'Wedding Planning & Execution', 'From the first idea to the last dance, we plan and run every part of the wedding — venue, décor, guest hospitality, entertainment and on-ground coordination — so the family can simply enjoy the celebration.'],
      ['sm-1', 'Live Concerts', 'We produce live concerts and shows end to end: artist coordination, stage, sound and light design, ticketing support and crowd management. Our crew has run shows with leading artists across India.'],
      ['berger-5', 'Exhibitions', 'We design, build and manage exhibition spaces and brand pavilions — from layout and fabrication to visitor flow and on-site staffing — so your brand stands out on the floor.'],
      ['au-th-6', 'MICE & Corporate Offsites', 'Meetings, incentive trips, conferences and offsites in India and overseas. We handle travel, stay, venues, themed evenings and every detail in between, for groups of 20 to 2,000.'],
      ['kabaddi-team', 'Sports Entertainment', 'League launches, match-day experiences, fan zones and team events. We have delivered seasons of professional kabaddi and sporting leagues in multiple cities.'],
      ['stunt-1', 'Rides & Stunt Shows', 'Bike rides, rallies and stunt shows planned for safety and spectacle — routes, permissions, support vehicles and show production — including TVS Apache Owners Group rides across India.'],
      ['au-goa-1', 'Branding & Merchandising', 'Stage and venue branding, signage, printed collateral and branded merchandise, produced in-house by our creative team so every touchpoint carries your brand the right way.'],
      ['kwc-9', 'Retail Fitment', 'In-store branding, displays, kiosks and shop-in-shop fitments, designed, fabricated and installed across retail outlets with consistent quality and on-time rollout.'],
      ['moto-podium', 'Conferences & Award Ceremonies', 'Dealer meets, annual conferences and award nights with strong content, stage design and show flow — built to celebrate your people and keep the audience engaged.'],
      ['hero-screen', 'Seminars & Workshops', 'Seminars, training programmes and workshops of every size, with venue, AV, registrations and speaker management handled smoothly from start to finish.'],
    ],

    // slug, title, short line, filter, label, place, longer description, key facts, photos
    CASES: [
      { slug: 'nokia-mice', title: 'Nokia MICE', line: 'More than 125 conferences with theme gala dinners', f: 'corp', label: 'Corporate', place: 'Pan India',
        desc: 'Conferences and MICE programmes for Nokia across India — more than 125 of them, each closing with a theme gala dinner.',
        facts: ['125+ conferences', 'Theme gala dinners', 'MICE'], photos: ['nokia-2', 'nokia-1', 'nokia-3', 'nokia-4', 'nokia-5', 'nokia-6'] },
      { slug: 'au-financiers', title: 'AU Financiers Employee Meet', line: 'MICE for 450 guests', f: 'corp', label: 'MICE', place: 'Goa',
        desc: 'MICE for AU Financiers: an employee meet in Goa for 450 guests, with stage shows, performances and the AU business fest.',
        facts: ['450 guests', 'Employee meet', 'Goa'], photos: [...S('au-goa', 5), 'au-crowd', 'au-league'] },
      { slug: 'au-superheroes-summit', title: 'AU Superheroes Summit', line: 'AU Bond & 10th Superheroes Summit', f: 'corp', label: 'Incentive', place: 'Thailand · 2018',
        desc: 'AU Bond and the 10th AU Superheroes Summit, held in Thailand in 2018 — an incentive trip with themed nights and cultural performances.',
        facts: ['Thailand 2018', 'Incentive trip', 'Recognition night'], photos: lead('au-th-6', S('au-th', 12)) },
      { slug: 'berger-paints', title: 'Berger Paints', line: 'Product launch', f: 'launch', label: 'Launch', place: 'India',
        desc: 'A product launch for Berger Paints — venue design, staging, product displays and the guest experience.',
        facts: ['Product launch', 'Venue design', 'Staging'], photos: lead('berger-5', S('berger', 10)) },
      { slug: 'shankar-mahadevan-live', title: 'Shankar Mahadevan Live', line: 'Live concert', f: 'launch', label: 'Concert', place: 'Udaipur',
        desc: 'Shankar Mahadevan live in concert at Udaipur — stage, lighting, LED screens and production.',
        facts: ['Live concert', 'Stage & lighting', 'Udaipur'], photos: S('sm', 7) },
      { slug: 'star-pro-kabaddi', title: 'Star Pro Kabaddi', line: 'All seasons in Jaipur, Delhi, Ahmedabad, Sonipat & Greater Noida', f: 'sports', label: 'Sports', place: '5 cities',
        desc: 'Star Pro Kabaddi through all seasons in Jaipur, Delhi, Ahmedabad, Sonipat and Greater Noida — sets, branding and on-ground activity.',
        facts: ['All seasons', '5 cities', 'Sets & branding'], photos: [...S('pk', 5), 'kabaddi-team'] },
      { slug: 'kabaddi-world-cup-2016', title: 'Kabaddi World Cup 2016', line: 'Venue branding, stalls and fan zones', f: 'sports', label: 'Sports', place: 'Ahmedabad',
        desc: 'Kabaddi World Cup 2016 in Ahmedabad — venue branding, stalls, the ticket booth and fan zones.',
        facts: ['KWC 2016', 'Venue branding', 'Fan zones'], photos: lead('kwc-9', S('kwc', 9)) },
      { slug: 'cricket', title: 'Cricket', line: 'IPL, RSWS and the Star Sports Paytm IND v SA series', f: 'sports', label: 'Sports', place: 'India',
        desc: 'Cricket events including the IPL, RSWS and the Star Sports Paytm India v/s South Africa series.',
        facts: ['IPL', 'RSWS', 'IND v/s SA series'], photos: ['cricket-ground'] },
      { slug: 'tvs-aog-rides', title: 'TVS AOG Rides', line: '250+ breakfast rides and the Leh-Ladakh ride, August 2018', f: 'moto', label: 'Community', place: 'Ladakh · Spiti · Bhutan',
        desc: 'Community rides for TVS Apache Owners Group: the Leh-Ladakh ride in August 2018, more than 250 breakfast rides, 25+ overnight rides, 6 marquee rides (Leh-Ladakh, Spiti, Bhutan) and the North Chapter ride to Mandawa.',
        facts: ['250+ breakfast rides', '25+ overnight rides', '6 marquee rides'], photos: [...lead('aog-5', S('aog', 9)), 'offroad'] },
      { slug: 'tvs-apache-stunt-shows', title: 'TVS Apache Stunt Shows', line: '100+ shows and a world record at 15,500 ft', f: 'moto', label: 'Motorsport', place: 'Komic, Spiti',
        desc: 'More than 100 TVS Apache stunt shows across India — including a world-record stunt show at 15,500 ft in Komic village, Spiti.',
        facts: ['100+ stunt shows', 'World record', '15,500 ft'], photos: [...S('stunt', 10), 'moto-podium', 'moto-rally'] },
      { slug: 'scp-ccp', title: 'SCP & CCP', line: 'More than 200 school & college programmes', f: 'act', label: 'Activation', place: 'Pan India',
        desc: 'More than 200 school and college contact programmes — on-campus activations, contests and brand experiences.',
        facts: ['200+ programmes', 'Schools & colleges', 'Pan India'], photos: lead('scp-6', S('scp', 8)), mosaic: true },
      { slug: 'event-highlights', title: 'Event Highlights', line: 'Snapshots from a few of our 600+ events', f: 'act', label: 'Highlights', place: 'Across India',
        desc: 'A few more snapshots from the 600+ events we have organised — stages, performances, launches and celebrations.',
        facts: ['600+ events', 'Across India'], photos: S('ev', 9), mosaic: true },
    ],
    FILTERS: [['all', 'All projects'], ['corp', 'Corporate & MICE'], ['launch', 'Launches & concerts'], ['sports', 'Sports'], ['moto', 'Motorsport & rides'], ['act', 'Activations']],

    NUMS: [['125', '+', 'Conferences delivered for Nokia'], ['450', '', 'Guests at the AU Financiers meet in Goa'], ['250', '+', 'TVS AOG breakfast rides'], ['100', '+', 'TVS Apache stunt shows across India'], ['15500', ' ft', 'World-record stunt show at Komic, Spiti'], ['200', '+', 'School & college contact programmes']],
    STEPS: [['Fresh ideas', 'Every brief starts with a concept built around your audience and goals.'], ['Meticulous planning', 'In-house teams for data management, creative design and logistics.'], ['Flawless execution', 'Our own crew on the ground, across India and overseas.'], ['Lasting impression', 'Events your guests remember long after the lights go down.']],
    WHY: [['250+ brands, 4,000+ projects', 'Our top clients are our longest-standing relationships.'], ['India & overseas', 'Three offices and 11 associate cities.'], ['Design & data in-house', 'Well-equipped offices and ample resources.'], ['A decade of marketing', 'In-depth understanding of Indian consumers.'], ['Top-notch service', 'Half our team has been here almost a decade.']],
    // client logos, one row per sector (images/clients/)
    CLIENT_GROUPS: [
      ['Banking & Finance', [['HDFC Bank', 'hdfc-bank.svg'], ['IDFC First Bank', 'idfc-first-bank.svg'], ['ICICI Bank', 'icici-bank.svg'], ['Axis Bank', 'axis-bank.svg'], ['AU Small Finance Bank', 'au-bank.svg']]],
      ['Automobiles', [['TVS Motor Company', 'tvs.svg'], ['Bajaj', 'bajaj.svg'], ['Maruti Suzuki', 'maruti-suzuki.svg'], ['Mahindra', 'mahindra.svg'], ['Suzuki', 'suzuki.svg'], ['Harley-Davidson', 'harley-davidson.svg'], ['Ultraviolette', 'ultraviolette.svg']]],
      ['Consumer Electronics', [['HP', 'hp.svg'], ['Nokia', 'nokia.svg'], ['Samsung', 'samsung.png'], ['Intel', 'intel.svg'], ['Dish TV', 'dish-tv.svg'], ['Tata Sky', 'tata-sky.png']]],
      ['Retail', [['Big Bazaar', 'big-bazaar.svg'], ['Central', 'central.png']]],
      ['Telecom', [['Tata Indicom', 'tata-indicom.svg'], ['Tata Docomo', 'tata-docomo.png'], ['Vi', 'vi.svg'], ['Idea', 'idea.svg'], ['Airtel', 'airtel.svg'], ['Jio', 'jio.svg'], ['Samsung', 'samsung.png']]],
      ['FMCG', [['Lifebuoy', 'lifebuoy.png'], ['Snickers', 'snickers.svg'], ['7UP', '7up.svg'], ['Dabur', 'dabur.svg'], ['Britannia', 'britannia.svg'], ['Lux', 'lux.png'], ['Pepsi', 'pepsi.svg'], ['Coca-Cola', 'coca-cola.svg'], ["Kwality Wall's", 'kwality-walls.svg'], ['Sunsilk', 'sunsilk.png']]],
      ['Insurance', [['HDFC Ergo', 'hdfc-ergo.svg'], ['Max Bupa', 'max-bupa.svg'], ['Exide Life', 'exide-life.svg'], ['Apollo Munich', 'apollo-munich.png'], ['Bharti AXA', 'bharti-axa.svg'], ['Futures First', 'futures-first.svg']]],
      ['Liquor & Tobacco', [['Godfrey Phillips India', 'godfrey-phillips.svg'], ['ITC', 'itc.svg'], ['Bacardi', 'bacardi.svg'], ['Budweiser', 'budweiser.svg'], ['Pernod Ricard', 'pernod-ricard.svg']]],
      ['Real Estate', [['DLF', 'dlf.svg'], ['UltraTech Cement', 'ultratech.svg'], ['Nuvoco', 'nuvoco.png']]],
      ['Sports', [['Indian Premier League', 'ipl.svg'], ['Pro Kabaddi League', 'pkl.svg']]],
    ],
    // agency & media partner logos (images/partners/)
    PARTNERS: [
      ['Wizcraft', 'wizcraft.png'], ['GroupM', 'groupm.png'], ['Fountainhead', 'fountainhead.png'], ['DNA Networks', 'dna-networks.svg'],
      ['Hansa Vision', 'hansa-vision.svg'], ['Rajasthan Patrika', 'rajasthan-patrika.svg'], ['Encompass', 'encompass.svg'], ['DDB Mudramax', 'ddb-mudramax.png'],
      ['ZeeCo', 'zeeco.png'], ['Candid', 'candid.svg'], ['Beep', 'beep.png'], ['Acme Events India', 'acme.png'],
      ['Impresario', 'impresario.png'], ['Impact Marketing Services', 'impact.png'], ['MOMS Outdoor Media Solutions', 'moms.svg'],
    ],
    SECTORS: ['Banking & Finance', 'Automobiles', 'Consumer Electronics', 'Retail', 'Telecom', 'FMCG', 'Insurance', 'Liquor & Tobacco', 'Real Estate', 'Sports'],
    FILMS: [['#AOGRideToSariska', 'Ride film'], ['AOG Kolhapur', 'Community'], ['#AOGRideToSpitiValley', 'Ride film'], ["AOG North Chapter's ride to Mandawa", 'Ride film'], ['Apache Pro Performance, Nagpur', 'Stunt show'], ['Petronas TVS Racing', 'Motorsport'], ["TVS Apache — celebrating Women's Day", 'Brand story'], ['AOG ride to Leh-Ladakh 2021', 'Ride film'], ['TVS AOG South Chapter 2021, Coorg', 'Ride film']],
    OFFICES: [['Jaipur', 'Head office', 'F-2145 (A), RIICO Industrial Area, Ramchandrapura, Jaipur, Rajasthan 302022'], ['Ahmedabad', '', 'A-23, Ambalal Park, Opp. Someshwar Park–3, Near Gulab Tower, Thaltej, Ahmedabad 380054']],
    TYPES: ['Wedding planning & execution', 'Live concert', 'Exhibition', 'MICE / corporate offsite', 'Sports entertainment', 'Ride / stunt show', 'Branding & merchandising', 'Retail fitment', 'Conference / award ceremony', 'Seminar / workshop', 'Other'],
  };
})();
