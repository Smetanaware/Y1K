
// Každý z cílových panelů lze: a) invertovat, b) rozdělit na 2 části, c) rozdělit na tři části. Též jde: d) invertovat a následně rozdělit na 2 části, e) invertovat a rozdělit na tři části. f) rozdělit na dvě části a některé z nich invertovat, g) rozdělit na tři části a některé z nich imvertovat.
// ========== DEFINICE LEVELŮ PRO HRU STROJ ČASU ==========
// 200 levelů postupně ubývajících roků (2025 → 1000)
// Obtížnost operací: a:0, b:1, c:2, d:5, e:6, f:8, g:8

// Číslice pro snadnější použití
const DIGITS = {
    0: 0b0111111, // abcdef
    1: 0b0000110, // bc
    2: 0b1011011, // abdeg
    3: 0b1001111, // abcdg
    4: 0b1100110, // bcfg
    5: 0b1101101, // acdfg
    6: 0b1111101, // acdefg
    7: 0b0000111, // abc
    8: 0b1111111, // abcdefg
    9: 0b1101111  // abcdfg
};

// Helper funkce pro převod roku na pole panelů
function yearToPanels(year) {
    const yearStr = year.toString().padStart(4, '0');
    return [
        DIGITS[parseInt(yearStr[0])],
        DIGITS[parseInt(yearStr[1])],
        DIGITS[parseInt(yearStr[2])],
        DIGITS[parseInt(yearStr[3])]
    ];
}

const LEVELS = [
    // ========== WORLD 1: TUTORIAL (1-15) - Učení základů ==========
    // Roky 2025-2011 (-1 každý level)
    
    // L1-3: Jen Split 2 (operace b) - nejlepší pro tutorial
    { levelNumber: 1, targetPanels: yearToPanels(2025), timerDuration: 20000, allowedOperations: ['b'], displayName: "2025", shufflePool: false },
    { levelNumber: 2, targetPanels: yearToPanels(2024), timerDuration: 20000, allowedOperations: ['a','b'], displayName: "2024", shufflePool: false },
    { levelNumber: 3, targetPanels: yearToPanels(2023), timerDuration: 18000, allowedOperations: ['a','b'], displayName: "2023", shufflePool: false },
    
    // L4-6: Jen NOT (operace a) - inverze
    { levelNumber: 4, targetPanels: yearToPanels(2022), timerDuration: 15000, allowedOperations: ['a','b'], displayName: "2022", shufflePool: false },
    { levelNumber: 5, targetPanels: yearToPanels(2021), timerDuration: 15000, allowedOperations: ['a','b'], displayName: "2021", shufflePool: false },
    { levelNumber: 6, targetPanels: yearToPanels(2020), timerDuration: 12000, allowedOperations: ['a','b'], displayName: "2020", shufflePool: false },
    
    // L7-9: NOT + Split 2 (operace a,b)
    { levelNumber: 7, targetPanels: yearToPanels(2019), timerDuration: 12000, allowedOperations: ['a','b'], displayName: "2019", shufflePool: false },
    { levelNumber: 8, targetPanels: yearToPanels(2018), timerDuration: 10000, allowedOperations: ['a','b'], displayName: "2018", shufflePool: false },
    { levelNumber: 9, targetPanels: yearToPanels(2017), timerDuration: 10000, allowedOperations: ['a','b'], displayName: "2017", shufflePool: false },
    
    // L10-12: Split 2+3 bez inverze (operace b,c)
    { levelNumber: 10, targetPanels: yearToPanels(2016), timerDuration: 10000, allowedOperations: ['b','c'], displayName: "2016", shufflePool: false },
    { levelNumber: 11, targetPanels: yearToPanels(2015), timerDuration: 10000, allowedOperations: ['b','c'], displayName: "2015", shufflePool: false },
    { levelNumber: 12, targetPanels: yearToPanels(2014), timerDuration: 8000, allowedOperations: ['b','c'], displayName: "2014", shufflePool: false },
    
    // L13-15: První random! Všechny základy (operace a,b,c)
    { levelNumber: 13, targetPanels: yearToPanels(2013), timerDuration: 8000, allowedOperations: ['a','b','c'], displayName: "2013", shufflePool: true },
    { levelNumber: 14, targetPanels: yearToPanels(2012), timerDuration: 7000, allowedOperations: ['a','b','c'], displayName: "2012", shufflePool: true },
    { levelNumber: 15, targetPanels: yearToPanels(2011), timerDuration: 7000, allowedOperations: ['a','b','c'], displayName: "2011", shufflePool: true },
    
    // ========== WORLD 2: FOUNDATION (16-35) - Upevnění základů ==========
    // Roky 2010-1991 (-1 každý level)
    
    // L16-20: Ustálení random
    { levelNumber: 16, targetPanels: yearToPanels(2010), timerDuration: 5000, allowedOperations: ['a','b','c'], displayName: "2010", shufflePool: true },
    { levelNumber: 17, targetPanels: yearToPanels(2009), timerDuration: 5000, allowedOperations: ['a','b','c'], displayName: "2009", shufflePool: true },
    { levelNumber: 18, targetPanels: yearToPanels(2008), timerDuration: 4500, allowedOperations: ['a','b','c'], displayName: "2008", shufflePool: true },
    { levelNumber: 19, targetPanels: yearToPanels(2007), timerDuration: 4500, allowedOperations: ['a','b','c'], displayName: "2007", shufflePool: true },
    { levelNumber: 20, targetPanels: yearToPanels(2006), timerDuration: 4500, allowedOperations: ['a','b','c'], displayName: "2006", shufflePool: true },
    
    // L21-25: Zrychlení (-1 roky)
    { levelNumber: 21, targetPanels: yearToPanels(2005), timerDuration: 4500, allowedOperations: ['a','b','c'], displayName: "2005", shufflePool: true },
    { levelNumber: 22, targetPanels: yearToPanels(2004), timerDuration: 4000, allowedOperations: ['a','b','c'], displayName: "2004", shufflePool: true },
    { levelNumber: 23, targetPanels: yearToPanels(2003), timerDuration: 4000, allowedOperations: ['a','b','c'], displayName: "2003", shufflePool: true },
    { levelNumber: 24, targetPanels: yearToPanels(2002), timerDuration: 4000, allowedOperations: ['a','b','c'], displayName: "2002", shufflePool: true },
    { levelNumber: 25, targetPanels: yearToPanels(2001), timerDuration: 4000, allowedOperations: ['a','b','c'], displayName: "2001", shufflePool: true },
    
    // L26-30: BEZ inverze = jiná strategie (-1 roky)
    { levelNumber: 26, targetPanels: yearToPanels(2000), timerDuration: 4000, allowedOperations: ['a','b','c','d'], displayName: "2000", shufflePool: true },
    { levelNumber: 27, targetPanels: yearToPanels(1999), timerDuration: 4000, allowedOperations: ['a','b','c','d'], displayName: "1999", shufflePool: true },
    { levelNumber: 28, targetPanels: yearToPanels(1998), timerDuration: 4000, allowedOperations: ['a','b','c','d'], displayName: "1998", shufflePool: true },
    { levelNumber: 29, targetPanels: yearToPanels(1997), timerDuration: 4000, allowedOperations: ['a','b','c','d'], displayName: "1997", shufflePool: true },
    { levelNumber: 30, targetPanels: yearToPanels(1996), timerDuration: 4000, allowedOperations: ['a','b','c','d'], displayName: "1996", shufflePool: true },
    
    // L31-35: Zpět s inverzí (-1 roky)
    { levelNumber: 31, targetPanels: yearToPanels(1995), timerDuration: 4000, allowedOperations: ['a','b','c','d'], displayName: "1995", shufflePool: true },
    { levelNumber: 32, targetPanels: yearToPanels(1994), timerDuration: 4000, allowedOperations: ['a','b','c','d'], displayName: "1994", shufflePool: true },
    { levelNumber: 33, targetPanels: yearToPanels(1993), timerDuration: 4000, allowedOperations: ['a','b','c','d'], displayName: "1993", shufflePool: true },
    { levelNumber: 34, targetPanels: yearToPanels(1992), timerDuration: 4000, allowedOperations: ['a','b','c','d'], displayName: "1992", shufflePool: true },
    { levelNumber: 35, targetPanels: yearToPanels(1991), timerDuration: 3500, allowedOperations: ['a','b','c','d'], displayName: "1991", shufflePool: true },
    
    // ========== WORLD 3: RISING (36-60) - Přidání operace d ==========
    // Roky 1990-1966 (-1 každý level)
    
    // L36-38: Odpočinek před novou operací
    { levelNumber: 36, targetPanels: yearToPanels(1990), timerDuration: 3500, allowedOperations: ['b','c','d'], displayName: "1990", shufflePool: true },
    { levelNumber: 37, targetPanels: yearToPanels(1989), timerDuration: 3500, allowedOperations: ['b','c','d'], displayName: "1989", shufflePool: true },
    { levelNumber: 38, targetPanels: yearToPanels(1988), timerDuration: 3500, allowedOperations: ['b','c','d'], displayName: "1988", shufflePool: true },
    
    // L39-42: POUZE d - naučit NOT+Split2
    { levelNumber: 39, targetPanels: yearToPanels(1987), timerDuration: 3500, allowedOperations: ['b','c','d','e'], displayName: "1987", shufflePool: true },
    { levelNumber: 40, targetPanels: yearToPanels(1986), timerDuration: 3500, allowedOperations: ['b','c','d','e'], displayName: "1986", shufflePool: true },
    { levelNumber: 41, targetPanels: yearToPanels(1985), timerDuration: 3500, allowedOperations: ['b','c','d','e'], displayName: "1985", shufflePool: true },
    { levelNumber: 42, targetPanels: yearToPanels(1984), timerDuration: 3500, allowedOperations: ['b','c','d','e'], displayName: "1984", shufflePool: true },
    
    // L43-47: d s ostatními (bez samostatné inverze) (-1 roky)
    { levelNumber: 43, targetPanels: yearToPanels(1983), timerDuration: 3500, allowedOperations: ['b','c','d','e'], displayName: "1983", shufflePool: true },
    { levelNumber: 44, targetPanels: yearToPanels(1982), timerDuration: 3500, allowedOperations: ['b','c','d','e'], displayName: "1982", shufflePool: true },
    { levelNumber: 45, targetPanels: yearToPanels(1981), timerDuration: 3500, allowedOperations: ['b','c','d','e'], displayName: "1981", shufflePool: true },
    { levelNumber: 46, targetPanels: yearToPanels(1980), timerDuration: 3500, allowedOperations: ['b','c','d','e'], displayName: "1980", shufflePool: true },
    { levelNumber: 47, targetPanels: yearToPanels(1979), timerDuration: 3500, allowedOperations: ['b','c','d','e'], displayName: "1979", shufflePool: true },
    
    // L48-52: Plná paleta základních (-1 roky)
    { levelNumber: 48, targetPanels: yearToPanels(1978), timerDuration: 3500, allowedOperations: ['b','c','d','e','f','g'], displayName: "1978", shufflePool: true },
    { levelNumber: 49, targetPanels: yearToPanels(1977), timerDuration: 3500, allowedOperations: ['b','c','d','e','f','g'], displayName: "1977", shufflePool: true },
    { levelNumber: 50, targetPanels: yearToPanels(1976), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1976", shufflePool: true }, // MILESTONE
    { levelNumber: 51, targetPanels: yearToPanels(1975), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1975", shufflePool: true },
    { levelNumber: 52, targetPanels: yearToPanels(1974), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1974", shufflePool: true },
    
    // L53-60: Zrychlení, začínají -2 roky
    { levelNumber: 53, targetPanels: yearToPanels(1972), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1972", shufflePool: true },
    { levelNumber: 54, targetPanels: yearToPanels(1970), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1970", shufflePool: true },
    { levelNumber: 55, targetPanels: yearToPanels(1968), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1968", shufflePool: true },
    { levelNumber: 56, targetPanels: yearToPanels(1966), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1966", shufflePool: true },
    { levelNumber: 57, targetPanels: yearToPanels(1964), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1964", shufflePool: true },
    { levelNumber: 58, targetPanels: yearToPanels(1962), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1962", shufflePool: true },
    { levelNumber: 59, targetPanels: yearToPanels(1960), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1960", shufflePool: true },
    { levelNumber: 60, targetPanels: yearToPanels(1958), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1958", shufflePool: true },
    
    // ========== WORLD 4: CHALLENGE (61-90) - Přidání operace e ==========
    // Roky 1956-1868 (postupně -2, -3, -4)
    
    // L61-63: Ustálení před novou operací (-2 roky)
    { levelNumber: 61, targetPanels: yearToPanels(1956), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1956", shufflePool: true },
    { levelNumber: 62, targetPanels: yearToPanels(1954), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1954", shufflePool: true },
    { levelNumber: 63, targetPanels: yearToPanels(1952), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1952", shufflePool: true },
    
    // L64-67: POUZE e - naučit NOT+Split3 (-2 roky)
    { levelNumber: 64, targetPanels: yearToPanels(1950), timerDuration: 3000, allowedOperations: ['d','e','f','g'], displayName: "1950", shufflePool: true },
    { levelNumber: 65, targetPanels: yearToPanels(1948), timerDuration: 3000, allowedOperations: ['d','e','f','g'], displayName: "1948", shufflePool: true },
    { levelNumber: 66, targetPanels: yearToPanels(1946), timerDuration: 2750, allowedOperations: ['d','e','f','g'], displayName: "1946", shufflePool: true },
    { levelNumber: 67, targetPanels: yearToPanels(1944), timerDuration: 2750, allowedOperations: ['d','e','f','g'], displayName: "1944", shufflePool: true },
    
    // L68-72: Triple split focus (-3 roky)
    { levelNumber: 68, targetPanels: yearToPanels(1941), timerDuration: 2750, allowedOperations: ['d','e','f','g'], displayName: "1941", shufflePool: true },
    { levelNumber: 69, targetPanels: yearToPanels(1938), timerDuration: 2750, allowedOperations: ['d','e','f','g'], displayName: "1938", shufflePool: true },
    { levelNumber: 70, targetPanels: yearToPanels(1935), timerDuration: 2750, allowedOperations: ['d','e','f','g'], displayName: "1935", shufflePool: true },
    { levelNumber: 71, targetPanels: yearToPanels(1932), timerDuration: 2750, allowedOperations: ['d','e','f','g'], displayName: "1932", shufflePool: true },
    { levelNumber: 72, targetPanels: yearToPanels(1929), timerDuration: 2750, allowedOperations: ['d','e','f','g'], displayName: "1929", shufflePool: true },
    
    // L73-80: Všechny kromě chaos (f,g) (-3 roky)
    { levelNumber: 73, targetPanels: yearToPanels(1926), timerDuration: 2750, allowedOperations: ['d','e','f','g'], displayName: "1926", shufflePool: true },
    { levelNumber: 74, targetPanels: yearToPanels(1923), timerDuration: 2750, allowedOperations: ['d','e','f','g'], displayName: "1923", shufflePool: true },
    { levelNumber: 75, targetPanels: yearToPanels(1920), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1920", shufflePool: true }, // MILESTONE 75
    { levelNumber: 76, targetPanels: yearToPanels(1917), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1917", shufflePool: true },
    { levelNumber: 77, targetPanels: yearToPanels(1914), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1914", shufflePool: true },
    { levelNumber: 78, targetPanels: yearToPanels(1911), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1911", shufflePool: true },
    { levelNumber: 79, targetPanels: yearToPanels(1908), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1908", shufflePool: true },
    { levelNumber: 80, targetPanels: yearToPanels(1905), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1905", shufflePool: true },
    
    // L81-90: Zrychlení, začínají -4 roky
    { levelNumber: 81, targetPanels: yearToPanels(1901), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1901", shufflePool: true },
    { levelNumber: 82, targetPanels: yearToPanels(1897), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1897", shufflePool: true },
    { levelNumber: 83, targetPanels: yearToPanels(1893), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1893", shufflePool: true },
    { levelNumber: 84, targetPanels: yearToPanels(1889), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1889", shufflePool: true },
    { levelNumber: 85, targetPanels: yearToPanels(1885), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1885", shufflePool: true },
    { levelNumber: 86, targetPanels: yearToPanels(1881), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1881", shufflePool: true },
    { levelNumber: 87, targetPanels: yearToPanels(1877), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1877", shufflePool: true },
    { levelNumber: 88, targetPanels: yearToPanels(1873), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1873", shufflePool: true },
    { levelNumber: 89, targetPanels: yearToPanels(1869), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1869", shufflePool: true },
    { levelNumber: 90, targetPanels: yearToPanels(1865), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1865", shufflePool: true },
    
    // ========== WORLD 5: EXPERT (91-130) - Přidání CHAOS (f,g) ==========
    // Roky 1861-1705 (-4, -5 roky)
    
    // L91-93: Odpočinek (-4 roky)
    { levelNumber: 91, targetPanels: yearToPanels(1861), timerDuration: 2500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1861", shufflePool: true },
    { levelNumber: 92, targetPanels: yearToPanels(1857), timerDuration: 2500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1857", shufflePool: true },
    { levelNumber: 93, targetPanels: yearToPanels(1853), timerDuration: 2500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1853", shufflePool: true },
    
    // L94-97: POUZE f - izolovaně naučit chaos (-4 roky)
    { levelNumber: 94, targetPanels: yearToPanels(1849), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1849", shufflePool: true },
    { levelNumber: 95, targetPanels: yearToPanels(1845), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1845", shufflePool: true },
    { levelNumber: 96, targetPanels: yearToPanels(1841), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1841", shufflePool: true },
    { levelNumber: 97, targetPanels: yearToPanels(1837), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1837", shufflePool: true },
    
    // L98-101: POUZE g (-4 roky)
    { levelNumber: 98, targetPanels: yearToPanels(1833), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1833", shufflePool: true },
    { levelNumber: 99, targetPanels: yearToPanels(1829), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1829", shufflePool: true },
    { levelNumber: 100, targetPanels: yearToPanels(1825), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1825", shufflePool: true }, // MILESTONE 100
    { levelNumber: 101, targetPanels: yearToPanels(1821), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1821", shufflePool: true },
    
    // L102-110: f s ostatními (BEZ g) (-4 roky)
    { levelNumber: 102, targetPanels: yearToPanels(1817), timerDuration: 2500, allowedOperations: ['f','g'], displayName: "1817", shufflePool: true },
    { levelNumber: 103, targetPanels: yearToPanels(1813), timerDuration: 2500, allowedOperations: ['f','g'], displayName: "1813", shufflePool: true },
    { levelNumber: 104, targetPanels: yearToPanels(1809), timerDuration: 2500, allowedOperations: ['f','g'], displayName: "1809", shufflePool: true },
    { levelNumber: 105, targetPanels: yearToPanels(1805), timerDuration: 2500, allowedOperations: ['f','g'], displayName: "1805", shufflePool: true },
    { levelNumber: 106, targetPanels: yearToPanels(1801), timerDuration: 2500, allowedOperations: ['f','g'], displayName: "1801", shufflePool: true },
    { levelNumber: 107, targetPanels: yearToPanels(1797), timerDuration: 2500, allowedOperations: ['f','g'], displayName: "1797", shufflePool: true },
    { levelNumber: 108, targetPanels: yearToPanels(1793), timerDuration: 2500, allowedOperations: ['f','g'], displayName: "1793", shufflePool: true },
    { levelNumber: 109, targetPanels: yearToPanels(1789), timerDuration: 2500, allowedOperations: ['f','g'], displayName: "1789", shufflePool: true },
    { levelNumber: 110, targetPanels: yearToPanels(1785), timerDuration: 2500, allowedOperations: ['f','g'], displayName: "1785", shufflePool: true },
    
    // L111-120: Všechny operace! (-5 roky)
    { levelNumber: 111, targetPanels: yearToPanels(1780), timerDuration: 2000, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1780", shufflePool: true },
    { levelNumber: 112, targetPanels: yearToPanels(1775), timerDuration: 2000, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1775", shufflePool: true },
    { levelNumber: 113, targetPanels: yearToPanels(1770), timerDuration: 2000, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1770", shufflePool: true },
    { levelNumber: 114, targetPanels: yearToPanels(1765), timerDuration: 2000, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1765", shufflePool: true },
    { levelNumber: 115, targetPanels: yearToPanels(1760), timerDuration: 2000, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1760", shufflePool: true },
    { levelNumber: 116, targetPanels: yearToPanels(1755), timerDuration: 2000, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1755", shufflePool: true },
    { levelNumber: 117, targetPanels: yearToPanels(1750), timerDuration: 2000, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1750", shufflePool: true },
    { levelNumber: 118, targetPanels: yearToPanels(1745), timerDuration: 2000, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1745", shufflePool: true },
    { levelNumber: 119, targetPanels: yearToPanels(1740), timerDuration: 2000, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1740", shufflePool: true },
    { levelNumber: 120, targetPanels: yearToPanels(1735), timerDuration: 2000, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1735", shufflePool: true },
    
    // L121-130: Další zrychlení (-5 roky)
    { levelNumber: 121, targetPanels: yearToPanels(1730), timerDuration: 2000, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1730", shufflePool: true },
    { levelNumber: 122, targetPanels: yearToPanels(1725), timerDuration: 1750, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1725", shufflePool: true },
    { levelNumber: 123, targetPanels: yearToPanels(1720), timerDuration: 1750, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1720", shufflePool: true },
    { levelNumber: 124, targetPanels: yearToPanels(1715), timerDuration: 1750, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1715", shufflePool: true },
    { levelNumber: 125, targetPanels: yearToPanels(1710), timerDuration: 1750, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1710", shufflePool: true }, // MILESTONE 125
    { levelNumber: 126, targetPanels: yearToPanels(1705), timerDuration: 1750, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1705", shufflePool: true },
    { levelNumber: 127, targetPanels: yearToPanels(1700), timerDuration: 1750, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1700", shufflePool: true },
    { levelNumber: 128, targetPanels: yearToPanels(1695), timerDuration: 1750, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1695", shufflePool: true },
    { levelNumber: 129, targetPanels: yearToPanels(1690), timerDuration: 1500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1690", shufflePool: true },
    { levelNumber: 130, targetPanels: yearToPanels(1685), timerDuration: 1500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1685", shufflePool: true },
    
    // ========== WORLD 6: MASTER (131-170) - Maximum výzvy ==========
    // Roky 1680-1530 (-5, -6, -7 roky)
    
    // L131-140: Rychle, všechno (-5 roky)
    { levelNumber: 131, targetPanels: yearToPanels(1680), timerDuration: 1500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1680", shufflePool: true },
    { levelNumber: 132, targetPanels: yearToPanels(1675), timerDuration: 1500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1675", shufflePool: true },
    { levelNumber: 133, targetPanels: yearToPanels(1670), timerDuration: 1500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1670", shufflePool: true },
    { levelNumber: 134, targetPanels: yearToPanels(1665), timerDuration: 1250, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1665", shufflePool: true },
    { levelNumber: 135, targetPanels: yearToPanels(1660), timerDuration: 1250, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1660", shufflePool: true },
    { levelNumber: 136, targetPanels: yearToPanels(1655), timerDuration: 1250, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1655", shufflePool: true },
    { levelNumber: 137, targetPanels: yearToPanels(1650), timerDuration: 1250, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1650", shufflePool: true },
    { levelNumber: 138, targetPanels: yearToPanels(1645), timerDuration: 1250, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1645", shufflePool: true },
    { levelNumber: 139, targetPanels: yearToPanels(1640), timerDuration: 1250, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1640", shufflePool: true },
    { levelNumber: 140, targetPanels: yearToPanels(1635), timerDuration: 1250, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1635", shufflePool: true },
    
    // L141-150: POUZE chaos (f,g) - extrém! (-6 roky)
    { levelNumber: 141, targetPanels: yearToPanels(1629), timerDuration: 1250, allowedOperations: ['f','g'], displayName: "1629", shufflePool: true },
    { levelNumber: 142, targetPanels: yearToPanels(1623), timerDuration: 1250, allowedOperations: ['f','g'], displayName: "1623", shufflePool: true },
    { levelNumber: 143, targetPanels: yearToPanels(1617), timerDuration: 1250, allowedOperations: ['f','g'], displayName: "1617", shufflePool: true },
    { levelNumber: 144, targetPanels: yearToPanels(1611), timerDuration: 1250, allowedOperations: ['f','g'], displayName: "1611", shufflePool: true },
    { levelNumber: 145, targetPanels: yearToPanels(1605), timerDuration: 1250, allowedOperations: ['f','g'], displayName: "1605", shufflePool: true },
    { levelNumber: 146, targetPanels: yearToPanels(1599), timerDuration: 1250, allowedOperations: ['f','g'], displayName: "1599", shufflePool: true },
    { levelNumber: 147, targetPanels: yearToPanels(1593), timerDuration: 1250, allowedOperations: ['f','g'], displayName: "1593", shufflePool: true },
    { levelNumber: 148, targetPanels: yearToPanels(1587), timerDuration: 1250, allowedOperations: ['f','g'], displayName: "1587", shufflePool: true },
    { levelNumber: 149, targetPanels: yearToPanels(1581), timerDuration: 1250, allowedOperations: ['f','g'], displayName: "1581", shufflePool: true },
    { levelNumber: 150, targetPanels: yearToPanels(1575), timerDuration: 1250, allowedOperations: ['f','g'], displayName: "1575", shufflePool: true }, // MILESTONE 150
    
    // L151-170: Maximum speed (-6, -7 roky)
    { levelNumber: 151, targetPanels: yearToPanels(1569), timerDuration: 1000, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1569", shufflePool: true },
    { levelNumber: 152, targetPanels: yearToPanels(1563), timerDuration: 1000, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1563", shufflePool: true },
    { levelNumber: 153, targetPanels: yearToPanels(1557), timerDuration: 1000, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1557", shufflePool: true },
    { levelNumber: 154, targetPanels: yearToPanels(1551), timerDuration: 1000, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1551", shufflePool: true },
    { levelNumber: 155, targetPanels: yearToPanels(1545), timerDuration: 1000, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1545", shufflePool: true },
    { levelNumber: 156, targetPanels: yearToPanels(1539), timerDuration: 1000, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1539", shufflePool: true },
    { levelNumber: 157, targetPanels: yearToPanels(1533), timerDuration: 1000, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1533", shufflePool: true },
    { levelNumber: 158, targetPanels: yearToPanels(1527), timerDuration: 750, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1527", shufflePool: true },
    { levelNumber: 159, targetPanels: yearToPanels(1521), timerDuration: 750, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1521", shufflePool: true },
    { levelNumber: 160, targetPanels: yearToPanels(1515), timerDuration: 750, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1515", shufflePool: true },
    { levelNumber: 161, targetPanels: yearToPanels(1509), timerDuration: 750, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1509", shufflePool: true },
    { levelNumber: 162, targetPanels: yearToPanels(1503), timerDuration: 750, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1503", shufflePool: true },
    { levelNumber: 163, targetPanels: yearToPanels(1497), timerDuration: 750, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1497", shufflePool: true },
    { levelNumber: 164, targetPanels: yearToPanels(1491), timerDuration: 750, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1491", shufflePool: true },
    { levelNumber: 165, targetPanels: yearToPanels(1485), timerDuration: 750, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1485", shufflePool: true },
    { levelNumber: 166, targetPanels: yearToPanels(1479), timerDuration: 500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1479", shufflePool: true },
    { levelNumber: 167, targetPanels: yearToPanels(1473), timerDuration: 500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1473", shufflePool: true },
    { levelNumber: 168, targetPanels: yearToPanels(1467), timerDuration: 500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1467", shufflePool: true },
    { levelNumber: 169, targetPanels: yearToPanels(1461), timerDuration: 500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1461", shufflePool: true },
    { levelNumber: 170, targetPanels: yearToPanels(1455), timerDuration: 500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1455", shufflePool: true },
    
    // ========== WORLD 7: INSANE (171-200) - Absolutní extrém ==========
    // Roky 1448-1000 (-7, -8, -10 roky)
    
    // L171-180: Sub-sekunda s -7 roky
    { levelNumber: 171, targetPanels: yearToPanels(1448), timerDuration: 500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1448", shufflePool: true },
    { levelNumber: 172, targetPanels: yearToPanels(1441), timerDuration: 500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1441", shufflePool: true },
    { levelNumber: 173, targetPanels: yearToPanels(1434), timerDuration: 500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1434", shufflePool: true },
    { levelNumber: 174, targetPanels: yearToPanels(1427), timerDuration: 500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1427", shufflePool: true },
    { levelNumber: 175, targetPanels: yearToPanels(1420), timerDuration: 500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1420", shufflePool: true }, // MILESTONE 175
    { levelNumber: 176, targetPanels: yearToPanels(1413), timerDuration: 500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1413", shufflePool: true },
    { levelNumber: 177, targetPanels: yearToPanels(1406), timerDuration: 500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1406", shufflePool: true },
    { levelNumber: 178, targetPanels: yearToPanels(1399), timerDuration: 500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1399", shufflePool: true },
    { levelNumber: 179, targetPanels: yearToPanels(1392), timerDuration: 500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1392", shufflePool: true },
    { levelNumber: 180, targetPanels: yearToPanels(1385), timerDuration: 500, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1385", shufflePool: true },
    
    // L181-190: Extrémní rychlost 0.75s s -8 roky
    { levelNumber: 181, targetPanels: yearToPanels(1377), timerDuration: 375, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1377", shufflePool: true },
    { levelNumber: 182, targetPanels: yearToPanels(1369), timerDuration: 375, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1369", shufflePool: true },
    { levelNumber: 183, targetPanels: yearToPanels(1361), timerDuration: 375, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1361", shufflePool: true },
    { levelNumber: 184, targetPanels: yearToPanels(1353), timerDuration: 375, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1353", shufflePool: true },
    { levelNumber: 185, targetPanels: yearToPanels(1345), timerDuration: 375, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1345", shufflePool: true },
    { levelNumber: 186, targetPanels: yearToPanels(1337), timerDuration: 375, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1337", shufflePool: true },
    { levelNumber: 187, targetPanels: yearToPanels(1329), timerDuration: 375, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1329", shufflePool: true },
    { levelNumber: 188, targetPanels: yearToPanels(1321), timerDuration: 375, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1321", shufflePool: true },
    { levelNumber: 189, targetPanels: yearToPanels(1313), timerDuration: 375, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1313", shufflePool: true },
    { levelNumber: 190, targetPanels: yearToPanels(1305), timerDuration: 375, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1305", shufflePool: true },
    
    // L191-199: MAXIMUM 0.5s s -10 roky
    { levelNumber: 191, targetPanels: yearToPanels(1295), timerDuration: 250, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1295", shufflePool: true },
    { levelNumber: 192, targetPanels: yearToPanels(1285), timerDuration: 250, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1285", shufflePool: true },
    { levelNumber: 193, targetPanels: yearToPanels(1275), timerDuration: 250, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1275", shufflePool: true },
    { levelNumber: 194, targetPanels: yearToPanels(1265), timerDuration: 250, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1265", shufflePool: true },
    { levelNumber: 195, targetPanels: yearToPanels(1255), timerDuration: 250, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1255", shufflePool: true },
    { levelNumber: 196, targetPanels: yearToPanels(1245), timerDuration: 250, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1245", shufflePool: true },
    { levelNumber: 197, targetPanels: yearToPanels(1235), timerDuration: 250, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1235", shufflePool: true },
    { levelNumber: 198, targetPanels: yearToPanels(1225), timerDuration: 250, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1225", shufflePool: true },
    { levelNumber: 199, targetPanels: yearToPanels(1215), timerDuration: 250, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1215", shufflePool: true },
    
    // L200: FINÁLE - Rok 1000, všechny operace, 0.5s!
    { levelNumber: 200, targetPanels: yearToPanels(1000), timerDuration: 250, allowedOperations: ['a','b','c','d','e','f','g'], displayName: "1000", shufflePool: true }
];

console.log(`✨ Načteno ${LEVELS.length} levelů!`);
console.log(`📅 Roky: ${LEVELS[0].displayName} → ${LEVELS[LEVELS.length-1].displayName}`);
console.log(`⏱️ Timer: ${LEVELS[0].timerDuration/1000}s → ${LEVELS[LEVELS.length-1].timerDuration/1000}s`);
