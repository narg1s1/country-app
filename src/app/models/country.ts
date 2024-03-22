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

interface Country {
  name: Name;
  currencies: { 
    [key: string]: Currency 
  };
  capital: string[];
  region: string;
  population: number;
  flagUrl: string;
}

export default Country;