// US States lists derived from django-localflavor.  Canadian lists derived from Wikipedia.
// https://github.com/django/django-localflavor/
// https://en.wikipedia.org/wiki/Canadian_postal_abbreviations_for_provinces_and_territories

var e = {}; // exports

/** Mapping of US State and Territory postal abbreviations to full names. */
e.US_STATES_AND_TERRITORIES = {
    // States
  'AL': 'Alabama',
  'AK': 'Alaska',
  'AZ': 'Arizona',
  'AR': 'Arkansas',
  'CA': 'California',
  'CO': 'Colorado',
  'CT': 'Connecticut',
  'DE': 'Delaware',
  'DC': 'District of Columbia',
  'FL': 'Florida',
  'GA': 'Georgia',
  'HI': 'Hawaii',
  'ID': 'Idaho',
  'IL': 'Illinois',
  'IN': 'Indiana',
  'IA': 'Iowa',
  'KS': 'Kansas',
  'KY': 'Kentucky',
  'LA': 'Louisiana',
  'ME': 'Maine',
  'MD': 'Maryland',
  'MA': 'Massachusetts',
  'MI': 'Michigan',
  'MN': 'Minnesota',
  'MS': 'Mississippi',
  'MO': 'Missouri',
  'MT': 'Montana',
  'NE': 'Nebraska',
  'NV': 'Nevada',
  'NH': 'New Hampshire',
  'NJ': 'New Jersey',
  'NM': 'New Mexico',
  'NY': 'New York',
  'NC': 'North Carolina',
  'ND': 'North Dakota',
  'OH': 'Ohio',
  'OK': 'Oklahoma',
  'OR': 'Oregon',
  'PA': 'Pennsylvania',
  'RI': 'Rhode Island',
  'SC': 'South Carolina',
  'SD': 'South Dakota',
  'TN': 'Tennessee',
  'TX': 'Texas',
  'UT': 'Utah',
  'VT': 'Vermont',
  'VA': 'Virginia',
  'WA': 'Washington',
  'WV': 'West Virginia',
  'WI': 'Wisconsin',
  'WY': 'Wyoming',

  // Non-state territories.
  'AS': 'American Samoa',
  'GU': 'Guam',
  'MP': 'Northern Mariana Islands',
  'PR': 'Puerto Rico',
  'VI': 'Virgin Islands',

  // Military postal "states". Note that 'AE' actually encompasses
  // Europe: Canada, Africa and the Middle East.
  'AA': 'Armed Forces Americas',
  'AE': 'Armed Forces Europe',
  'AP': 'Armed Forces Pacific',

};

/** List of the fifty US States */
e.FIFTY_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID',
  'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO',
  'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA',
  'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY' 
];

/** Mapping of Canadian postal abbreviations to full names. */
e.CANADIAN_TERRITORIES = {
  'AB': 'Alberta',
  'BC': 'British Columbia',
  'MB': 'Manitoba',
  'NB': 'New Brunswick',
  'NL': 'Newfoundland and Labrador',
  'NS': 'Nova Scotia',
  'NT': 'Northwest Territories',
  'NU': 'Nunavut',
  'ON': 'Ontario',
  'PE': 'Prince Edward Island',
  'QC': 'Quebec',
  'SK': 'Saskatchewan',
  'YT': 'Yukon'
};

/**
 * Mapping of all US and Canadian state and territorial postal abbreviations to
 * full names.
 */
e.US_AND_CANADA = {};
for (var key in e.US_STATES_AND_TERRITORIES) {
  e.US_AND_CANADA[key] = e.US_STATES_AND_TERRITORIES[key];
}
for (var key in e.CANADIAN_TERRITORIES) {
  e.US_AND_CANADA[key] = e.CANADIAN_TERRITORIES[key];
}

/**
 * Mapping of lower-cased names and abbreviations of US and Canadian state and
 * territorial names to postal abbreviations.
 */
e.STATES_NORMALIZED = {
  'aa': 'AA',
  'ae': 'AE',
  'ak': 'AK',
  'al': 'AL',
  'ala': 'AL',
  'alabama': 'AL',
  'alaska': 'AK',
  'ap': 'AP',
  'american samao': 'AS',
  'american samoa': 'AS',
  'ar': 'AR',
  'ariz': 'AZ',
  'arizona': 'AZ',
  'ark': 'AR',
  'arkansas': 'AR',
  'as': 'AS',
  'az': 'AZ',
  'ca': 'CA',
  'calf': 'CA',
  'calif': 'CA',
  'california': 'CA',
  'co': 'CO',
  'colo': 'CO',
  'colorado': 'CO',
  'conn': 'CT',
  'connecticut': 'CT',
  'ct': 'CT',
  'dc': 'DC',
  'de': 'DE',
  'del': 'DE',
  'delaware': 'DE',
  'deleware': 'DE',
  'district of columbia': 'DC',
  'fl': 'FL',
  'fla': 'FL',
  'florida': 'FL',
  'ga': 'GA',
  'georgia': 'GA',
  'gu': 'GU',
  'guam': 'GU',
  'hawaii': 'HI',
  'hi': 'HI',
  'ia': 'IA',
  'id': 'ID',
  'idaho': 'ID',
  'il': 'IL',
  'ill': 'IL',
  'illinois': 'IL',
  'in': 'IN',
  'ind': 'IN',
  'indiana': 'IN',
  'iowa': 'IA',
  'kan': 'KS',
  'kans': 'KS',
  'kansas': 'KS',
  'kentucky': 'KY',
  'ks': 'KS',
  'ky': 'KY',
  'la': 'LA',
  'louisiana': 'LA',
  'ma': 'MA',
  'maine': 'ME',
  'marianas islands': 'MP',
  'marianas islands of the pacific': 'MP',
  'marinas islands of the pacific': 'MP',
  'maryland': 'MD',
  'mass': 'MA',
  'massachusetts': 'MA',
  'massachussetts': 'MA',
  'md': 'MD',
  'me': 'ME',
  'mi': 'MI',
  'mich': 'MI',
  'michigan': 'MI',
  'minn': 'MN',
  'minnesota': 'MN',
  'miss': 'MS',
  'mississippi': 'MS',
  'missouri': 'MO',
  'mn': 'MN',
  'mo': 'MO',
  'mont': 'MT',
  'montana': 'MT',
  'mp': 'MP',
  'ms': 'MS',
  'mt': 'MT',
  'n d': 'ND',
  'n dak': 'ND',
  'n h': 'NH',
  'n j': 'NJ',
  'n m': 'NM',
  'n mex': 'NM',
  'nc': 'NC',
  'nd': 'ND',
  'ne': 'NE',
  'neb': 'NE',
  'nebr': 'NE',
  'nebraska': 'NE',
  'nev': 'NV',
  'nevada': 'NV',
  'new hampshire': 'NH',
  'new jersey': 'NJ',
  'new mexico': 'NM',
  'new york': 'NY',
  'nh': 'NH',
  'nj': 'NJ',
  'nm': 'NM',
  'nmex': 'NM',
  'north carolina': 'NC',
  'north dakota': 'ND',
  'northern mariana islands': 'MP',
  'nv': 'NV',
  'ny': 'NY',
  'oh': 'OH',
  'ohio': 'OH',
  'ok': 'OK',
  'okla': 'OK',
  'oklahoma': 'OK',
  'or': 'OR',
  'ore': 'OR',
  'oreg': 'OR',
  'oregon': 'OR',
  'pa': 'PA',
  'penn': 'PA',
  'pennsylvania': 'PA',
  'pr': 'PR',
  'puerto rico': 'PR',
  'rhode island': 'RI',
  'ri': 'RI',
  's dak': 'SD',
  'sc': 'SC',
  'sd': 'SD',
  'sdak': 'SD',
  'south carolina': 'SC',
  'south dakota': 'SD',
  'tenn': 'TN',
  'tennessee': 'TN',
  'territory of hawaii': 'HI',
  'tex': 'TX',
  'texas': 'TX',
  'tn': 'TN',
  'tx': 'TX',
  'us virgin islands': 'VI',
  'usvi': 'VI',
  'ut': 'UT',
  'utah': 'UT',
  'va': 'VA',
  'vermont': 'VT',
  'vi': 'VI',
  'viginia': 'VA',
  'virgin islands': 'VI',
  'virgina': 'VA',
  'virginia': 'VA',
  'vt': 'VT',
  'w va': 'WV',
  'wa': 'WA',
  'wash': 'WA',
  'washington': 'WA',
  'west virginia': 'WV',
  'wi': 'WI',
  'wis': 'WI',
  'wisc': 'WI',
  'wisconsin': 'WI',
  'wv': 'WV',
  'wva': 'WV',
  'wy': 'WY',
  'wyo': 'WY',
  'wyoming': 'WY',
  // Canadian
  'ab': 'AB',
  'bc': 'BC',
  'mb': 'MB',
  'nb': 'NB',
  'nl': 'NL',
  'ns': 'NS',
  'nt': 'NT',
  'nu': 'NU',
  'on': 'ON',
  'pe': 'PE',
  'qc': 'QC',
  'sk': 'SK',
  'yt': 'YT',
  'alberta': 'AB',
  'british columbia': 'BC',
  'manitoba': 'MB',
  'new brunswick': 'NB',
  'newfoundland': 'NL',
  'labrador': 'NL',
  'newfoundland and labrador': 'NL',
  'nova scotia': 'NS',
  'northwest territories': 'NT',
  'nunavut': 'NU',
  'ontario': 'ON',
  'prince edward island': 'PE',
  'pei': 'PE',
  'quebec': 'QC',
  'saskatchewan': 'SK',
  'yukon': 'YT',
  'yukon territory': 'YT',
};

/**
 * Mapping of US geographic regions to state postal abbreviations.
 */
e.US_REGIONS = {
  "Northeast": [
    // Division 1: New England.
    "CT", "ME", "MA", "NH", "RI", "VT",
    // Division 2: Mid-atlantic
    "NJ", "NY", "PA"
  ],
  "Midwest": [
    // Division 3: East North
    "IL", "IN", "MI", "OH", "WI",
    // Division 4: West North Central
    "IA", "KS", "MN", "MO", "NE", "ND", "SD",
    // and ... uh ... Canada.
    "ON"
  ],
  "South": [
    // Division 5: South
    "DE", "FL", "GA", "MD", "NC", "SC", "VA", "DC", "WV",
    // Division 6: East South
    "AL", "KY", "MS", "TN",
    // Division 7: West South
    "AR", "LA", "OK", "TX",
  ],
  "West": [
    // Division 8: Mountain
    "AZ", "CO", "ID", "MT", "NV", "NM", "UT", "WY",
    // Division 9: Pacific
    "AK", "CA", "HI", "OR", "WA"
  ],
};

/** Mapping of US postal abbreviations to geographic regions */
e.US_REGIONS_BY_STATE = {};
for (var key in e.US_REGIONS) {
  for (var i = 0; i < e.US_REGIONS[key].length; i++) {
    e.US_REGIONS_BY_STATE[e.US_REGIONS[key][i]] = key;
  }
}

/**
 * Find the postal abbreviation for the given US or Canada state or territory
 * name.
 * @param {string} name - the name to look up
 * @return {string|undefined} A postal abbreviation, or undefined if not found.
 */
e.postalAbbr = function(name) {
  return e.STATES_NORMALIZED[name.toLowerCase().replace(/[^a-z ]/g, '')];
};

/**
 * Find the normalized full name for the given US or Canada state or territory
 * name or abbreviation.
 * @param {string} name - the name to look up
 * @return {string|undefined} A full state name, or undefined if not found.
 */
e.normalize = function(name) {
  return e.US_AND_CANADA[e.postalAbbr(name)];
};

/**
 * Find the US geographic region for the given name.
 * @param {string} name - the name to look up
 * @return {string|undefined} A region name, or undefined if not found.
 */
e.region = function(name) {
  return e.US_REGIONS_BY_STATE[e.postalAbbr(name)];
};

module.exports = e;
