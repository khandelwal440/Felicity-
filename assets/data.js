/* Felicity — site content, taken from the Felicity company deck.
   Both pages read from here, so a change made once shows everywhere. */
(() => {
  const S = (k, n) => Array.from({ length: n }, (_, i) => `${k}-${i + 1}`);
  const lead = (first, list) => [first, ...list.filter(x => x !== first)];

  window.FELICITY = {
    // only the high-resolution photos are used full-screen
    SLIDES: [['hero-lights', 'Concerts & live shows'], ['dinner', 'Theme gala dinners'], ['au-crowd', 'AU Financiers employee meet'], ['au-league', 'AU Champions League'], ['hero-stage', 'Award nights & conferences']],

    SERVICES: [
      ['events', 'Events', ['Events & Concerts', 'Award Ceremonies', 'Conferences & Seminars', 'Corporate Offsites', 'Sports Events', 'Motorsport']],
      ['marketing', 'Marketing', ['Audit', 'Rural Marketing', 'Experiential Marketing', 'Consumer Promotions']],
      ['promotion', 'Promotion', ['Road Shows', 'SCP & CCP', 'Mall Activation', 'Retail Activations']],
      ['activation', 'Activation', ['BTL Activation', 'Institutional / Campus Activation', 'Corporate Activations']],
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
    WHY: [['200+ brands, 2,500+ events', 'Our top clients are our longest-standing relationships.'], ['India & overseas', 'Three offices and 11 associate cities.'], ['Design & data in-house', 'Well-equipped offices and ample resources.'], ['A decade of marketing', 'In-depth understanding of Indian consumers.'], ['Top-notch service', 'Half our team has been here almost a decade.']],
    SECTORS: ['Banking & Finance', 'Automobiles', 'Telecom', 'IT', 'FMCG', 'Pharma', 'Real Estate', 'Consumer Electronics', 'Sports', 'Liquor & Tobacco'],
    FILMS: [['#AOGRideToSariska', 'Ride film'], ['AOG Kolhapur', 'Community'], ['#AOGRideToSpitiValley', 'Ride film'], ["AOG North Chapter's ride to Mandawa", 'Ride film'], ['Apache Pro Performance, Nagpur', 'Stunt show'], ['Petronas TVS Racing', 'Motorsport'], ["TVS Apache — celebrating Women's Day", 'Brand story'], ['AOG ride to Leh-Ladakh 2021', 'Ride film'], ['TVS AOG South Chapter 2021, Coorg', 'Ride film']],
    OFFICES: [['Jaipur', 'Head office', 'B-207 A, Rajender Marg, Bapu Nagar, Jaipur, Rajasthan 302015 · 0141-4086410'], ['New Delhi', '', 'B-363, C.R. Park, New Delhi 110019'], ['Ahmedabad', '', 'A-23, Ambalal Park, Opp. Someshwar Park–3, Near Gulab Tower, Thaltej, Ahmedabad 380054']],
    TYPES: ['Conference / seminar', 'MICE / employee meet', 'Award ceremony / R&R', 'Product launch', 'Corporate offsite', 'Concert / live show', 'Sports event', 'Motorsport / ride', 'BTL / mall / retail activation', 'Road show', 'Rural marketing', 'Content creation', 'Other'],
  };
})();
