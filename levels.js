// Každý z cílových panelů lze: a) invertovat, b) rozdělit na 2 části, c) rozdělit na tři části. Též jde: d) invertovat a následně rozdělit na 2 části, e) invertovat a rozdělit na tři části. f) rozdělit na dvě části a některé z nich invertovat, g) rozdělit na tři části a některé z nich imvertovat.
// ========== DEFINICE LEVELŮ PRO HRU STROJ ČASU ==========
// 100 levelů postupně ubývajících roků (2025 → 1000)
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
    
    
   
    { levelNumber: 1, targetPanels: yearToPanels(2025), timerDuration: 0, allowedOperations: ['b'], displayName: "2025", shufflePool: false },
    { levelNumber: 2, targetPanels: yearToPanels(2024), timerDuration: 0, allowedOperations: ['a'], displayName: "2024", shufflePool: false },
    { levelNumber: 3, targetPanels: yearToPanels(2023), timerDuration: 0, allowedOperations: ['b'], displayName: "2023", shufflePool: false },
    

    { levelNumber: 4, targetPanels: yearToPanels(2022), timerDuration: 0, allowedOperations: ['a','b'], displayName: "2022", shufflePool: false },
    { levelNumber: 5, targetPanels: yearToPanels(2021), timerDuration: 0, allowedOperations: ['a','b'], displayName: "2021", shufflePool: false },
    { levelNumber: 6, targetPanels: yearToPanels(2020), timerDuration: 15000, allowedOperations: ['a','b'], displayName: "2020", shufflePool: false },
    

    { levelNumber: 7, targetPanels: yearToPanels(2019), timerDuration: 15000, allowedOperations: ['a','b'], displayName: "2019", shufflePool: false },
    { levelNumber: 8, targetPanels: yearToPanels(2018), timerDuration: 15000, allowedOperations: ['a','b'], displayName: "2018", shufflePool: false },
    { levelNumber: 9, targetPanels: yearToPanels(2017), timerDuration: 15000, allowedOperations: ['a','b'], displayName: "2017", shufflePool: false },
    

    { levelNumber: 10, targetPanels: yearToPanels(2016), timerDuration: 15000, allowedOperations: ['a','b','c'], displayName: "2016", shufflePool: false },
    { levelNumber: 11, targetPanels: yearToPanels(2015), timerDuration: 14000, allowedOperations: ['a','b','c'], displayName: "2015", shufflePool: false },
    { levelNumber: 12, targetPanels: yearToPanels(2014), timerDuration: 13000, allowedOperations: ['a','b','c'], displayName: "2014", shufflePool: false },
    

    { levelNumber: 13, targetPanels: yearToPanels(2013), timerDuration: 12000, allowedOperations: ['a','b','c'], displayName: "2013", shufflePool: true },
    { levelNumber: 14, targetPanels: yearToPanels(2012), timerDuration: 11000, allowedOperations: ['a','b','c'], displayName: "2012", shufflePool: true },
    { levelNumber: 15, targetPanels: yearToPanels(2011), timerDuration: 10000, allowedOperations: ['a','b','c'], displayName: "2011", shufflePool: true },
    

    { levelNumber: 16, targetPanels: yearToPanels(2010), timerDuration: 9000, allowedOperations: ['a','b','c'], displayName: "2010", shufflePool: true },
    { levelNumber: 17, targetPanels: yearToPanels(2009), timerDuration: 8000, allowedOperations: ['a','b','c'], displayName: "2009", shufflePool: true },
    { levelNumber: 18, targetPanels: yearToPanels(2008), timerDuration: 7000, allowedOperations: ['a','b','c'], displayName: "2008", shufflePool: true },
    { levelNumber: 19, targetPanels: yearToPanels(2007), timerDuration: 6000, allowedOperations: ['a','b','c'], displayName: "2007", shufflePool: true },
    { levelNumber: 20, targetPanels: yearToPanels(2006), timerDuration: 5000, allowedOperations: ['a','b','c'], displayName: "2006", shufflePool: true },
    

    { levelNumber: 21, targetPanels: yearToPanels(2004), timerDuration: 4500, allowedOperations: ['a','b','c'], displayName: "2004", shufflePool: true },
    { levelNumber: 22, targetPanels: yearToPanels(2002), timerDuration: 4000, allowedOperations: ['a','b','c'], displayName: "2002", shufflePool: true },
    { levelNumber: 23, targetPanels: yearToPanels(2000), timerDuration: 4000, allowedOperations: ['a','b','c'], displayName: "2000", shufflePool: true },
    { levelNumber: 24, targetPanels: yearToPanels(1998), timerDuration: 4000, allowedOperations: ['a','b','c'], displayName: "1998", shufflePool: true },
    { levelNumber: 25, targetPanels: yearToPanels(1996), timerDuration: 4000, allowedOperations: ['a','b','c'], displayName: "1996", shufflePool: true },
    

    { levelNumber: 26, targetPanels: yearToPanels(1994), timerDuration: 4000, allowedOperations: ['a','b','c','d'], displayName: "1994", shufflePool: true },
    { levelNumber: 27, targetPanels: yearToPanels(1991), timerDuration: 4000, allowedOperations: ['a','b','c','d'], displayName: "1991", shufflePool: true },
    { levelNumber: 28, targetPanels: yearToPanels(1988), timerDuration: 4000, allowedOperations: ['a','b','c','d'], displayName: "1988", shufflePool: true },
    { levelNumber: 29, targetPanels: yearToPanels(1985), timerDuration: 4000, allowedOperations: ['a','b','c','d'], displayName: "1985", shufflePool: true },
    { levelNumber: 30, targetPanels: yearToPanels(1982), timerDuration: 4000, allowedOperations: ['a','b','c','d'], displayName: "1982", shufflePool: true },
    

    { levelNumber: 31, targetPanels: yearToPanels(1979), timerDuration: 4000, allowedOperations: ['a','b','c','d'], displayName: "1979", shufflePool: true },
    { levelNumber: 32, targetPanels: yearToPanels(1976), timerDuration: 4000, allowedOperations: ['a','b','c','d'], displayName: "1976", shufflePool: true },
    { levelNumber: 33, targetPanels: yearToPanels(1972), timerDuration: 4000, allowedOperations: ['a','b','c','d'], displayName: "1972", shufflePool: true },
    { levelNumber: 34, targetPanels: yearToPanels(1968), timerDuration: 4000, allowedOperations: ['a','b','c','d'], displayName: "1968", shufflePool: true },
    { levelNumber: 35, targetPanels: yearToPanels(1964), timerDuration: 3500, allowedOperations: ['a','b','c','d'], displayName: "1964", shufflePool: true },
    

    { levelNumber: 36, targetPanels: yearToPanels(1960), timerDuration: 3500, allowedOperations: ['b','c','d'], displayName: "1960", shufflePool: true },
    { levelNumber: 37, targetPanels: yearToPanels(1955), timerDuration: 3500, allowedOperations: ['b','c','d'], displayName: "1955", shufflePool: true },
    { levelNumber: 38, targetPanels: yearToPanels(1950), timerDuration: 3500, allowedOperations: ['b','c','d'], displayName: "1950", shufflePool: true },
    

    { levelNumber: 39, targetPanels: yearToPanels(1945), timerDuration: 3500, allowedOperations: ['b','c','d','e'], displayName: "1945", shufflePool: true },
    { levelNumber: 40, targetPanels: yearToPanels(1940), timerDuration: 3500, allowedOperations: ['b','c','d','e'], displayName: "1940", shufflePool: true },
    { levelNumber: 41, targetPanels: yearToPanels(1934), timerDuration: 3500, allowedOperations: ['b','c','d','e'], displayName: "1934", shufflePool: true },
    { levelNumber: 42, targetPanels: yearToPanels(1928), timerDuration: 3500, allowedOperations: ['b','c','d','e'], displayName: "1928", shufflePool: true },
    

    { levelNumber: 43, targetPanels: yearToPanels(1922), timerDuration: 3500, allowedOperations: ['b','c','d','e'], displayName: "1922", shufflePool: true },
    { levelNumber: 44, targetPanels: yearToPanels(1916), timerDuration: 3500, allowedOperations: ['b','c','d','e'], displayName: "1916", shufflePool: true },
    { levelNumber: 45, targetPanels: yearToPanels(1909), timerDuration: 3500, allowedOperations: ['b','c','d','e'], displayName: "1909", shufflePool: true },
    { levelNumber: 46, targetPanels: yearToPanels(1902), timerDuration: 3500, allowedOperations: ['b','c','d','e'], displayName: "1902", shufflePool: true },
    { levelNumber: 47, targetPanels: yearToPanels(1895), timerDuration: 3500, allowedOperations: ['b','c','d','e'], displayName: "1895", shufflePool: true },
    

    { levelNumber: 48, targetPanels: yearToPanels(1888), timerDuration: 3500, allowedOperations: ['b','c','d','e','f','g'], displayName: "1888", shufflePool: true },
    { levelNumber: 49, targetPanels: yearToPanels(1880), timerDuration: 3500, allowedOperations: ['b','c','d','e','f','g'], displayName: "1880", shufflePool: true },
    { levelNumber: 50, targetPanels: yearToPanels(1872), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1872", shufflePool: true }, // MILESTONE
    { levelNumber: 51, targetPanels: yearToPanels(1864), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1864", shufflePool: true },
    { levelNumber: 52, targetPanels: yearToPanels(1855), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1855", shufflePool: true },
    

    { levelNumber: 53, targetPanels: yearToPanels(1846), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1846", shufflePool: true },
    { levelNumber: 54, targetPanels: yearToPanels(1837), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1837", shufflePool: true },
    { levelNumber: 55, targetPanels: yearToPanels(1827), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1827", shufflePool: true },
    { levelNumber: 56, targetPanels: yearToPanels(1817), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1817", shufflePool: true },
    { levelNumber: 57, targetPanels: yearToPanels(1807), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1807", shufflePool: true },
    { levelNumber: 58, targetPanels: yearToPanels(1796), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1796", shufflePool: true },
    { levelNumber: 59, targetPanels: yearToPanels(1785), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1785", shufflePool: true },
    { levelNumber: 60, targetPanels: yearToPanels(1774), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1774", shufflePool: true },
    

    { levelNumber: 61, targetPanels: yearToPanels(1762), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1762", shufflePool: true },
    { levelNumber: 62, targetPanels: yearToPanels(1750), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1750", shufflePool: true },
    { levelNumber: 63, targetPanels: yearToPanels(1737), timerDuration: 3000, allowedOperations: ['b','c','d','e','f','g'], displayName: "1737", shufflePool: true },
    

    { levelNumber: 64, targetPanels: yearToPanels(1724), timerDuration: 3000, allowedOperations: ['d','e','f','g'], displayName: "1724", shufflePool: true },
    { levelNumber: 65, targetPanels: yearToPanels(1711), timerDuration: 3000, allowedOperations: ['d','e','f','g'], displayName: "1711", shufflePool: true },
    { levelNumber: 66, targetPanels: yearToPanels(1697), timerDuration: 2750, allowedOperations: ['d','e','f','g'], displayName: "1697", shufflePool: true },
    { levelNumber: 67, targetPanels: yearToPanels(1683), timerDuration: 2750, allowedOperations: ['d','e','f','g'], displayName: "1683", shufflePool: true },
    

    { levelNumber: 68, targetPanels: yearToPanels(1669), timerDuration: 2750, allowedOperations: ['d','e','f','g'], displayName: "1669", shufflePool: true },
    { levelNumber: 69, targetPanels: yearToPanels(1654), timerDuration: 2750, allowedOperations: ['d','e','f','g'], displayName: "1654", shufflePool: true },
    { levelNumber: 70, targetPanels: yearToPanels(1639), timerDuration: 2750, allowedOperations: ['d','e','f','g'], displayName: "1639", shufflePool: true },
    { levelNumber: 71, targetPanels: yearToPanels(1623), timerDuration: 2750, allowedOperations: ['d','e','f','g'], displayName: "1623", shufflePool: true },
    { levelNumber: 72, targetPanels: yearToPanels(1607), timerDuration: 2750, allowedOperations: ['d','e','f','g'], displayName: "1607", shufflePool: true },
    

    { levelNumber: 73, targetPanels: yearToPanels(1590), timerDuration: 2750, allowedOperations: ['d','e','f','g'], displayName: "1590", shufflePool: true },
    { levelNumber: 74, targetPanels: yearToPanels(1573), timerDuration: 2750, allowedOperations: ['d','e','f','g'], displayName: "1573", shufflePool: true },
    { levelNumber: 75, targetPanels: yearToPanels(1556), timerDuration: 2700, allowedOperations: ['d','e','f','g'], displayName: "1556", shufflePool: true },
    { levelNumber: 76, targetPanels: yearToPanels(1538), timerDuration: 2650, allowedOperations: ['d','e','f','g'], displayName: "1538", shufflePool: true },
    { levelNumber: 77, targetPanels: yearToPanels(1520), timerDuration: 2600, allowedOperations: ['d','e','f','g'], displayName: "1520", shufflePool: true },
    { levelNumber: 78, targetPanels: yearToPanels(1501), timerDuration: 2550, allowedOperations: ['d','e','f','g'], displayName: "1501", shufflePool: true },
    { levelNumber: 79, targetPanels: yearToPanels(1482), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1482", shufflePool: true },
    { levelNumber: 80, targetPanels: yearToPanels(1462), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1462", shufflePool: true },
    

    { levelNumber: 81, targetPanels: yearToPanels(1442), timerDuration: 2500, allowedOperations: ['d','e','f','g'], displayName: "1442", shufflePool: true },
    { levelNumber: 82, targetPanels: yearToPanels(1421), timerDuration: 2400, allowedOperations: ['d','e','f','g'], displayName: "1421", shufflePool: true },
    { levelNumber: 83, targetPanels: yearToPanels(1400), timerDuration: 2300, allowedOperations: ['d','e','f','g'], displayName: "1400", shufflePool: true },
    { levelNumber: 84, targetPanels: yearToPanels(1378), timerDuration: 2200, allowedOperations: ['d','e','f','g'], displayName: "1378", shufflePool: true },
    { levelNumber: 85, targetPanels: yearToPanels(1356), timerDuration: 2100, allowedOperations: ['d','e','f','g'], displayName: "1356", shufflePool: true },
    { levelNumber: 86, targetPanels: yearToPanels(1333), timerDuration: 2000, allowedOperations: ['d','e','f','g'], displayName: "1333", shufflePool: true },
    { levelNumber: 87, targetPanels: yearToPanels(1310), timerDuration: 1900, allowedOperations: ['d','e','f','g'], displayName: "1310", shufflePool: true },
    { levelNumber: 88, targetPanels: yearToPanels(1286), timerDuration: 1800, allowedOperations: ['d','e','f','g'], displayName: "1286", shufflePool: true },
    { levelNumber: 89, targetPanels: yearToPanels(1262), timerDuration: 1700, allowedOperations: ['d','e','f','g'], displayName: "1262", shufflePool: true },
    { levelNumber: 90, targetPanels: yearToPanels(1237), timerDuration: 1600, allowedOperations: ['d','e','f','g'], displayName: "1237", shufflePool: true },
    { levelNumber: 91, targetPanels: yearToPanels(1212), timerDuration: 1500, allowedOperations: ['d','e','f','g'], displayName: "1212", shufflePool: true },
    { levelNumber: 92, targetPanels: yearToPanels(1186), timerDuration: 1400, allowedOperations: ['d','e','f','g'], displayName: "1186", shufflePool: true },
    { levelNumber: 93, targetPanels: yearToPanels(1160), timerDuration: 1300, allowedOperations: ['d','e','f','g'], displayName: "1160", shufflePool: true },
    { levelNumber: 94, targetPanels: yearToPanels(1133), timerDuration: 1200, allowedOperations: ['d','e','f','g'], displayName: "1133", shufflePool: true },
    { levelNumber: 95, targetPanels: yearToPanels(1106), timerDuration: 1100, allowedOperations: ['d','e','f','g'], displayName: "1106", shufflePool: true },
    { levelNumber: 96, targetPanels: yearToPanels(1078), timerDuration: 1000, allowedOperations: ['d','e','f','g'], displayName: "1078", shufflePool: true },
    { levelNumber: 97, targetPanels: yearToPanels(1053), timerDuration: 1000, allowedOperations: ['d','e','f','g'], displayName: "1053", shufflePool: true },
    { levelNumber: 98, targetPanels: yearToPanels(1027), timerDuration: 1000, allowedOperations: ['d','e','f','g'], displayName: "1027", shufflePool: true },
    { levelNumber: 99, targetPanels: yearToPanels(1001), timerDuration: 1000, allowedOperations: ['d','e','f','g'], displayName: "1001", shufflePool: true },
    { levelNumber: 100, targetPanels: yearToPanels(1000), timerDuration: 10000, allowedOperations: ['a'], displayName: "1000", shufflePool: true }
   
];

console.log(`✨ Načteno ${LEVELS.length} levelů!`);
console.log(`📅 Roky: ${LEVELS[0].displayName} → ${LEVELS[LEVELS.length-1].displayName}`);
console.log(`⏱️ Timer: ${LEVELS[0].timerDuration/1000}s → ${LEVELS[LEVELS.length-1].timerDuration/1000}s`);
