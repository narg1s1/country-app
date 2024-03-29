interface Name {
  common: string;
  official: string;
  nativeName: { 
    [key: string]: { 
      official: string; 
      common: string 
    } 
  };
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface GoogleMaos {
  googleMaps: string;
  openStreetMaps: string;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface Country {
  name: Name;
  currencies: { 
    [key: string]: Currency 
  };
  capital: string[];
  region: string;
  population: number;
  flag: string;
  flags: Flags;
  subregion?: string;
  area?: string;
  languages?: {
    [key: string]: string 
  }
  timezones?: string[];
  maps?: GoogleMaos;
}

export default Country;