/* Felicity — site content, taken from the Felicity company deck.
   Both pages read from here, so a change made once shows everywhere. */
(() => {
  const S = (k, n) => Array.from({ length: n }, (_, i) => `${k}-${i + 1}`);
  const lead = (first, list) => [first, ...list.filter(x => x !== first)];

  window.FELICITY = {
    // only the high-resolution photos are used full-screen
    // slides follow the order of the services in "What We Do": sports, live concerts, rides, weddings, theme events
    SLIDES: [['hero-lsg', 'Sports events: Lucknow Super Giants stadium entrance'], ['hero-lights', 'Live concerts'], ['hero-aog', 'Rides: TVS Apache Owners Group ride, live band'], ['hero-haldi', 'Weddings: haldi ceremony stage'], ['hero-expo', 'Exhibitions: Tata Electronics stall'], ['hero-masquerade', 'Theme events: masquerade night']],

    SERVICES: [
      // [photo, service, description shown in the service popup]
      ['au-goa-1', 'Conferences & Award Ceremony', 'Dealer meets, annual conferences and award nights with strong content, stage design and show flow — built to celebrate your people and keep the audience engaged.'],
      ['kabaddi-team', 'Sports Events', 'League launches, match-day experiences, fan zones and team events. We have delivered seasons of professional kabaddi and sporting leagues in multiple cities.'],
      ['sm-1', 'Live Concerts', 'We produce live concerts and shows end to end: artist coordination, stage, sound and light design, ticketing support and crowd management. Our crew has run shows with leading artists across India.'],
      ['au-th-6', 'MICE & Corporate Offsites', 'Meetings, incentive trips, conferences and offsites in India and overseas. We handle travel, stay, venues, themed evenings and every detail in between, for groups of 20 to 2,000.'],
      ['stunt-1', 'Rides & Stunt Shows', 'Bike rides, rallies and stunt shows planned for safety and spectacle — routes, permissions, support vehicles and show production — including TVS Apache Owners Group rides across India.'],
      ['wedding-stage', 'Wedding Planning & Execution', 'From the first idea to the last dance, we plan and run every part of the wedding — venue, décor, guest hospitality, entertainment and on-ground coordination — so the family can simply enjoy the celebration.'],
      ['kwc-9', 'Retail Fit-Out, Branding & Merchandising', 'In-store fit-outs, displays and kiosks, plus stage and venue branding, signage, printed collateral and branded merchandise — designed, produced and installed in-house with consistent quality and on-time rollout.'],
      ['berger-5', 'Exhibition & Stall Fabrication', 'We design, build and manage exhibition spaces and brand pavilions — from layout and fabrication to visitor flow and on-site staffing — so your brand stands out on the floor.'],
      ['hero-crowd', 'Experiential Marketing (Road Show, SCP & CCP)', 'On-ground brand experiences that put your product in people’s hands — multi-city road shows, SCP and CCP programmes and activations, planned, staffed and tracked end to end.'],
      ['hero-screen', 'Theme & Social Events', 'Theme parties, gala nights, family days and social celebrations, with concept, décor, entertainment and hospitality designed and delivered end to end.'],
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

    // videos in the "From Vision to Reality" row: .mp4 files are our own videos (an Instagram reel id would also work here)
    REELS: ['videos/felicity-1.mp4', 'videos/felicity-2.mp4', 'videos/felicity-3.mp4', 'videos/felicity-4.mp4', 'videos/felicity-5.mp4', 'videos/felicity-6.mp4', 'videos/felicity-7.mp4', 'videos/felicity-8.mp4'],
    NUMS: [['125', '+', 'Conferences delivered for Nokia'], ['450', '', 'Guests at the AU Financiers meet in Goa'], ['250', '+', 'TVS AOG breakfast rides'], ['100', '+', 'TVS Apache stunt shows across India'], ['15500', ' ft', 'World-record stunt show at Komic, Spiti'], ['200', '+', 'School & college contact programmes']],
    STEPS: [['Fresh ideas', 'We start by understanding your vision, audience, and objectives before developing a creative concept tailored to your needs.'], ['Meticulous planning', 'From organizing information and developing creative concepts to managing complex logistics, we bring every element together under one roof.'], ['Flawless execution', 'It means turning an idea into reality while ensuring that everything happens exactly as planned — from the smallest detail to the biggest production element.'], ['Lasting impression', 'It\'s not just about hosting a beautiful event; it\'s about creating emotions, experiences, and moments that stay with people.']],
    WHY: [['250+ brands, 4,000+ projects', 'Our top clients are our longest-standing relationships.'], ['India & overseas', 'Creating moments today. Building memories that last forever.'], ['Design & data in-house', 'Well-equipped offices and ample resources.'], ['A decade of marketing', 'In-depth understanding of Indian consumers.'], ['Top-notch service', 'Half our team has been here almost a decade.']],
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
      // in the order Felicity asked for
      ['DNA Networks', 'dna-networks.svg'], ['Hyperlink Brand Solutions', 'hyperlink.png'], ['GroupM', 'groupm.png'],
      ['Rajasthan Patrika', 'rajasthan-patrika.svg'], ['Dainik Bhaskar', 'dainik-bhaskar.svg'], ['Wizcraft', 'wizcraft-sharp.png'],
      ['Encompass', 'encompass.svg'], ['Hansa Vision', 'hansa-vision.svg'], ['Fountainhead', 'fountainhead-hd.png'],
      ['DDB Mudramax', 'ddb-mudramax-hd.png'], ['Candid', 'candid.svg'], ['MOMS Outdoor Media Solutions', 'moms.svg'],
      ['Impact Marketing Services', 'impact-sharp.png'], ['Impresario', 'impresario.png'], ['Inextis Events', 'inextis.png'],
      ['Beep', 'beep-sharp.png'], ['Acme Events India', 'acme-hd.png'],
    ],
    SECTORS: ['Banking & Finance', 'Automobiles', 'Consumer Electronics', 'Retail', 'Telecom', 'FMCG', 'Insurance', 'Liquor & Tobacco', 'Real Estate', 'Sports'],
    FILMS: [['#AOGRideToSariska', 'Ride film'], ['AOG Kolhapur', 'Community'], ['#AOGRideToSpitiValley', 'Ride film'], ["AOG North Chapter's ride to Mandawa", 'Ride film'], ['Apache Pro Performance, Nagpur', 'Stunt show'], ['Petronas TVS Racing', 'Motorsport'], ["TVS Apache — celebrating Women's Day", 'Brand story'], ['AOG ride to Leh-Ladakh 2021', 'Ride film'], ['TVS AOG South Chapter 2021, Coorg', 'Ride film']],
    OFFICES: [['Jaipur', 'Head office', 'F-2145 (A), RIICO Industrial Area, Ramchandrapura, Jaipur, Rajasthan 302022'], ['Ahmedabad', '', '3/B, Gaurav Park, Opp. Nand Bunglows, Ghatlodia, Ahmedabad 380061']],
    // same order as SERVICES, so "Enquire about this" picks the matching type
    TYPES: ['Conference', 'Sports event', 'Live concert', 'MICE / corporate offsite', 'Ride / stunt show', 'Wedding planning & execution', 'Retail fit-out, branding & merchandising', 'Exhibition', 'Experiential marketing (road show, SCP & CCP)', 'Theme & social event', 'Other'],
  };
})();
