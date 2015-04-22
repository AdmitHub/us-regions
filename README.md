US Regions
==========

Lists of states and territories in the US and Canada, and mappings to regions.  Data sources:

Installation
------------

    npm install us-regions

Usage
-----

    var regions = require("us-regions");

 - ``regions.postalAbbr(name)``: Returns a postal abbreviation (e.g. "CA", "MT", "MA") for the given state or territory name or abbreviation (e.g. "calif", "Montana", "Mass."), or undefined if not found.
 - ``regions.normalize(name)``: Returns a normalized full name ("District of Columbia", "Newfoundland and Labrador", "Wyoming") for the given state or territory name or abbreviation ("DC", "Newfoundland", "wyo"), or undefined if not found.
 - ``regions.region(name)``: Returns a US geographic region for the given state or territory name or abbreviation. Regions: ``"Northeast"``, ``"Midwest"``, ``"South"``, ``"West"``.

Also includes several mappings for raw usage -- consult ``index.js`` for details:
 - ``regions.US_STATES_AND_TERRITORIES``
 - ``regions.FIFTY_STATES``
 - ``regions.CANADIAN_TERRITORIES``
 - ``regions.US_AND_CANADA``
 - ``regions.STATES_NORMALIZED``
 - ``regions.US_REGIONS``
 - ``regions.US_REGIONS_BY_STATE``

Data sources:

 - https://github.com/django/django-localflavor/
 - https://en.wikipedia.org/wiki/Canadian_postal_abbreviations_for_provinces_and_territories
 - https://en.wikipedia.org/wiki/List_of_regions_of_the_United_States

