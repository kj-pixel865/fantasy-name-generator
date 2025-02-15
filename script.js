const nameParts = {
    human: {
        male: {
            firstPrefix: ["Al", "Ced", "Gar", "Nor", "Thal", "Vin", "Leon", "Ald", "Fael", "Reg", "Theo"],
            firstSuffix: ["ric", "an", "ard", "win", "us", "el", "ion"],
            lastPrefix: ["Mont", "Val", "Bright", "Storm", "Black", "Ruther", "Ash", "Beau"],
            lastSuffix: ["clair", "mont", "ford", "vale", "hart", "field", "brook"]
        },
        female: {
            firstPrefix: ["Ely", "Mari", "Sera", "Vin", "Thalia", "Liora", "Evra", "Bri", "Syl"],
            firstSuffix: ["a", "ia", "elle", "yn", "ra", "wen", "thia"],
            lastPrefix: ["Val", "Bright", "Storm", "Black", "Ruther", "Ash", "Beau"],
            lastSuffix: ["clair", "mont", "ford", "vale", "hart", "field", "brook"]
        }
    },
    elf: {
        male: {
            firstPrefix: ["Faer", "Galad", "Ith", "Syl", "Vael", "Eled", "Thal", "Orith", "Naev"],
            firstSuffix: ["ion", "nor", "mir", "riel"],
            lastPrefix: ["Cele", "Elen", "Cala", "Faeli", "Galad"],
            lastSuffix: ["thian", "ion", "mar", "nor"]
        },
        female: {
            firstPrefix: ["Ela", "Gala", "Lyra", "Vaela", "Thela", "Alara", "Ethia", "Saera", "Mira"],
            firstSuffix: ["iel", "wen", "ira", "anis"],
            lastPrefix: ["Cele", "Elen", "Cala", "Faeli", "Galad"],
            lastSuffix: ["thian", "ion", "mar", "nor"]
        }
    },
    dwarf: {
        male: {
            firstPrefix: ["Bal", "Dain", "Gor", "Thor", "Ulf", "Grun", "Thrain", "Harn", "Rak"],
            firstSuffix: ["din", "grim", "gar", "drak", "thor"],
            lastPrefix: ["Stone", "Iron", "Fire", "Hammer", "Gold"],
            lastSuffix: ["beard", "fist", "shield", "stone", "hammer"]
        },
        female: {
            firstPrefix: ["Bruni", "Helga", "Dorna", "Thora", "Korga", "Stona", "Valda", "Grimna"],
            firstSuffix: ["deth", "mir", "hild", "wyn"],
            lastPrefix: ["Stone", "Iron", "Fire", "Hammer", "Gold"],
            lastSuffix: ["beard", "fist", "shield", "stone", "hammer"]
        }
    },
    orc: {
        male: {
            firstPrefix: ["Az", "Ghrak", "Mok", "Thrag", "Urg", "Vrog", "Zhak", "Lok", "Brok"],
            firstSuffix: ["gor", "khan", "thar", "muk", "zug"],
            lastPrefix: ["Blood", "Bone", "Skull", "War", "Fang"],
            lastSuffix: ["fang", "scar", "crusher", "cleaver", "hunter"]
        },
        female: {
            firstPrefix: ["Ghraza", "Morgra", "Sharga", "Vorga", "Ursha", "Zarna", "Krotha"],
            firstSuffix: ["fang", "scar", "cleaver", "howl", "crusher"],
            lastPrefix: ["Blood", "Bone", "Skull", "War", "Fang"],
            lastSuffix: ["fang", "scar", "crusher", "cleaver", "hunter"]
        }
    }
};

// **正確的中英翻譯表**
const chineseTranslation = {
    // **人類（Human）名字前綴**
    "Al": "阿爾", "Ced": "賽德", "Gar": "加爾", "Nor": "諾爾", "Thal": "薩爾",
    "Vin": "文", "Leon": "雷昂", "Ald": "阿爾德", "Fael": "費爾", "Reg": "雷格", "Theo": "西奧",
    "Ely": "艾莉", "Mari": "瑪莉", "Sera": "賽拉", "Thalia": "薩莉亞", "Liora": "莉奧拉",
    "Evra": "艾芙拉", "Bri": "布莉", "Syl": "希爾",

    // **人類（Human）名字後綴**
    "ric": "瑞克", "an": "安", "ard": "亞德", "win": "溫", "us": "烏斯",
    "el": "爾", "ion": "昂", "a": "雅", "ia": "莉亞", "elle": "艾爾",
    "yn": "茵", "ra": "拉", "wen": "溫", "thia": "西亞",

    // **人類（Human）姓氏前綴**
    "Val": "瓦爾", "Bright": "布萊特", "Storm": "斯托姆",
    "Black": "布萊克", "Ruther": "魯瑟", "Ash": "艾許", "Beau": "博",

    // **人類（Human）姓氏後綴**
    "clair": "克萊爾", "mont": "蒙特", "ford": "福德", "vale": "泛爾",
    "hart": "哈特", "field": "菲爾德", "brook": "布魯克",

    // **精靈（Elf）名字前綴**
    "Faer": "菲爾", "Galad": "加拉德", "Ith": "伊斯", "Syl": "席爾", "Vael": "瓦爾",
    "Eled": "艾勒德", "Thal": "塔爾", "Orith": "奧瑞斯", "Naev": "奈芙",
    "Ela": "艾拉", "Gala": "加拉", "Lyra": "萊拉", "Vaela": "瓦艾拉",
    "Thela": "瑟拉", "Alara": "阿拉拉", "Ethia": "艾西亞", "Saera": "塞拉", "Mira": "米拉",

    // **精靈（Elf）名字後綴**
    "ion": "昂", "nor": "諾爾", "mir": "米爾", "riel": "瑞爾",
    "iel": "伊艾爾", "wen": "溫", "ira": "伊拉", "anis": "安尼斯",

    // **精靈（Elf）姓氏前綴**
    "Cele": "瑟勒", "Elen": "艾倫", "Cala": "卡拉", "Faeli": "費莉", "Galad": "加拉德",

    // **精靈（Elf）姓氏後綴**
    "thian": "席恩", "ion": "昂", "mar": "馬爾", "nor": "諾爾",

    // **矮人（Dwarf）名字前綴**
    "Bal": "巴爾", "Dain": "丹恩", "Gor": "戈爾", "Thor": "索爾", "Ulf": "烏爾夫",
    "Grun": "格倫", "Thrain": "索雷恩", "Harn": "哈恩", "Rak": "拉克",
    "Bruni": "布魯妮", "Helga": "海爾加", "Dorna": "多娜", "Thora": "索拉",
    "Korga": "寇加", "Stona": "斯通娜", "Valda": "瓦爾達", "Grimna": "格琳娜",

    // **矮人（Dwarf）名字後綴**
    "din": "丁", "grim": "格林", "gar": "加爾", "drak": "卓克", "thor": "索爾",
    "deth": "德斯", "mir": "米爾", "hild": "希爾德", "wyn": "溫",

    // **矮人（Dwarf）姓氏前綴**
    "Stone": "石", "Iron": "鐵", "Fire": "火", "Hammer": "錘", "Gold": "金",

    // **矮人（Dwarf）姓氏後綴**
    "beard": "鬍", "fist": "拳", "shield": "盾", "stone": "石", "hammer": "錘",

    // **獸人（Orc）名字前綴**
    "Az": "阿茲", "Ghrak": "格拉克", "Mok": "莫克", "Thrag": "瑟拉格",
    "Urg": "烏格", "Vrog": "弗洛格", "Zhak": "扎克", "Lok": "洛克", "Brok": "布羅克",
    "Ghraza": "格拉札", "Morgra": "摩格拉", "Sharga": "沙爾加", "Vorga": "沃爾加",
    "Ursha": "烏爾沙", "Zarna": "扎娜", "Krotha": "克羅莎",

    // **獸人（Orc）名字後綴**
    "gor": "戈爾", "khan": "坎恩", "thar": "薩爾", "muk": "穆克", "zug": "祖格",
    "fang": "牙", "scar": "疤", "cleaver": "劈斧", "howl": "嚎叫", "crusher": "碎擊者",

    // **獸人（Orc）姓氏前綴**
    "Blood": "血", "Bone": "骨", "Skull": "顱", "War": "戰", "Fang": "獠牙",

    // **獸人（Orc）姓氏後綴**
    "fang": "牙", "scar": "疤", "crusher": "粉碎者", "cleaver": "劈斧", "hunter": "獵者"
};


// **翻譯函式**
function translateToChinese(prefix, suffix) {
    const translatedPrefix = chineseTranslation[prefix] || prefix;
    const translatedSuffix = chineseTranslation[suffix] || suffix;
    return translatedPrefix + translatedSuffix;
}

function generateName() {
    const race = document.getElementById("race").value;
    const gender = document.getElementById("gender").value;
    const generateChinese = document.getElementById("generateChinese").checked;
    const generateEnglish = document.getElementById("generateEnglish").checked;

    if (!generateChinese && !generateEnglish) {
        document.getElementById("nameOutput").innerText = "請至少選擇一種語言！";
        return;
    }

    // **分開選擇前綴與後綴**
    const firstPrefix = nameParts[race][gender].firstPrefix[Math.floor(Math.random() * nameParts[race][gender].firstPrefix.length)];
    const firstSuffix = nameParts[race][gender].firstSuffix[Math.floor(Math.random() * nameParts[race][gender].firstSuffix.length)];
    const lastPrefix = nameParts[race][gender].lastPrefix[Math.floor(Math.random() * nameParts[race][gender].lastPrefix.length)];
    const lastSuffix = nameParts[race][gender].lastSuffix[Math.floor(Math.random() * nameParts[race][gender].lastSuffix.length)];

    const englishName = `${firstPrefix}${firstSuffix} ${lastPrefix}${lastSuffix}`;
    const chineseName = translateToChinese(firstPrefix, firstSuffix) + "・" + translateToChinese(lastPrefix, lastSuffix);

    document.getElementById("nameOutput").innerText = generateEnglish && generateChinese ? `${englishName} （${chineseName}）`
        : generateEnglish ? englishName
        : chineseName;
}
