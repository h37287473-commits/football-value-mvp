/**
 * 球员基础数据库 (playersIndex)
 * 包含约100名现役顶级足球运动员的基础信息
 * 覆盖英超、西甲、意甲、德甲、法甲以及少量其他顶级联赛
 * 
 * 数据结构说明：
 * - id: 小写英文，短横线分隔，唯一标识符
 * - name: 球员全名
 * - aliases: 别名数组（用于搜索联想）
 * - club: 当前所属俱乐部
 * - league: 所属联赛
 * - nationality: 国籍
 * - positions: 位置数组（球员可能打多个位置）
 * - active: 是否为现役球员（true）
 */

const playersIndex = {
    // ===== 英超 (Premier League) =====
    'erling-haaland': {
        id: 'erling-haaland',
        name: 'Erling Haaland',
        aliases: ['Haaland', 'Erling'],
        club: 'Manchester City',
        league: 'Premier League',
        nationality: 'Norway',
        positions: ['Forward', 'Striker'],
        active: true
    },
    'kevin-de-bruyne': {
        id: 'kevin-de-bruyne',
        name: 'Kevin De Bruyne',
        aliases: ['De Bruyne', 'KDB'],
        club: 'Manchester City',
        league: 'Premier League',
        nationality: 'Belgium',
        positions: ['Midfielder', 'Attacking Midfielder'],
        active: true
    },
    'mo salah': {
        id: 'mo salah',
        name: 'Mohamed Salah',
        aliases: ['Salah', 'Mo Salah'],
        club: 'Liverpool',
        league: 'Premier League',
        nationality: 'Egypt',
        positions: ['Forward', 'Winger'],
        active: true
    },
    'virgil-van-dijk': {
        id: 'virgil-van-dijk',
        name: 'Virgil van Dijk',
        aliases: ['Van Dijk', 'Virgil'],
        club: 'Liverpool',
        league: 'Premier League',
        nationality: 'Netherlands',
        positions: ['Defender', 'Centre-Back'],
        active: true
    },
    'bukayo-saka': {
        id: 'bukayo-saka',
        name: 'Bukayo Saka',
        aliases: ['Saka'],
        club: 'Arsenal',
        league: 'Premier League',
        nationality: 'England',
        positions: ['Forward', 'Winger', 'Midfielder'],
        active: true
    },
    'martin-odegaard': {
        id: 'martin-odegaard',
        name: 'Martin Ødegaard',
        aliases: ['Odegaard', 'Ødegaard'],
        club: 'Arsenal',
        league: 'Premier League',
        nationality: 'Norway',
        positions: ['Midfielder', 'Attacking Midfielder'],
        active: true
    },
    'harry-kane': {
        id: 'harry-kane',
        name: 'Harry Kane',
        aliases: ['Kane'],
        club: 'Bayern Munich',
        league: 'Bundesliga',
        nationality: 'England',
        positions: ['Forward', 'Striker'],
        active: true
    },
    'son-heung-min': {
        id: 'son-heung-min',
        name: 'Son Heung-min',
        aliases: ['Son', 'Heung-min'],
        club: 'Tottenham Hotspur',
        league: 'Premier League',
        nationality: 'South Korea',
        positions: ['Forward', 'Winger'],
        active: true
    },
    'bruno-fernandes': {
        id: 'bruno-fernandes',
        name: 'Bruno Fernandes',
        aliases: ['Bruno', 'Fernandes'],
        club: 'Manchester United',
        league: 'Premier League',
        nationality: 'Portugal',
        positions: ['Midfielder', 'Attacking Midfielder'],
        active: true
    },
    'casemiro': {
        id: 'casemiro',
        name: 'Casemiro',
        aliases: ['Casemiro'],
        club: 'Manchester United',
        league: 'Premier League',
        nationality: 'Brazil',
        positions: ['Midfielder', 'Defensive Midfielder'],
        active: true
    },
    'phil-foden': {
        id: 'phil-foden',
        name: 'Phil Foden',
        aliases: ['Foden'],
        club: 'Manchester City',
        league: 'Premier League',
        nationality: 'England',
        positions: ['Midfielder', 'Attacking Midfielder', 'Winger'],
        active: true
    },
    'jude-bellingham': {
        id: 'jude-bellingham',
        name: 'Jude Bellingham',
        aliases: ['Bellingham', 'Jude'],
        club: 'Real Madrid',
        league: 'La Liga',
        nationality: 'England',
        positions: ['Midfielder', 'Central Midfielder'],
        active: true
    },
    'declan-rice': {
        id: 'declan-rice',
        name: 'Declan Rice',
        aliases: ['Rice'],
        club: 'Arsenal',
        league: 'Premier League',
        nationality: 'England',
        positions: ['Midfielder', 'Defensive Midfielder'],
        active: true
    },
    'kai-havertz': {
        id: 'kai-havertz',
        name: 'Kai Havertz',
        aliases: ['Havertz'],
        club: 'Arsenal',
        league: 'Premier League',
        nationality: 'Germany',
        positions: ['Midfielder', 'Attacking Midfielder', 'Forward'],
        active: true
    },
    'alisson': {
        id: 'alisson',
        name: 'Alisson',
        aliases: ['Alisson', 'Alisson Becker'],
        club: 'Liverpool',
        league: 'Premier League',
        nationality: 'Brazil',
        positions: ['Goalkeeper'],
        active: true
    },
    'ederson': {
        id: 'ederson',
        name: 'Ederson',
        aliases: ['Ederson'],
        club: 'Manchester City',
        league: 'Premier League',
        nationality: 'Brazil',
        positions: ['Goalkeeper'],
        active: true
    },

    // ===== 西甲 (La Liga) =====
    'karim-benzema': {
        id: 'karim-benzema',
        name: 'Karim Benzema',
        aliases: ['Benzema'],
        club: 'Al-Ittihad',
        league: 'Saudi Pro League',
        nationality: 'France',
        positions: ['Forward', 'Striker'],
        active: true
    },
    'luka-modric': {
        id: 'luka-modric',
        name: 'Luka Modrić',
        aliases: ['Modric', 'Modrić'],
        club: 'Real Madrid',
        league: 'La Liga',
        nationality: 'Croatia',
        positions: ['Midfielder', 'Central Midfielder'],
        active: true
    },
    'toni-kroos': {
        id: 'toni-kroos',
        name: 'Toni Kroos',
        aliases: ['Kroos'],
        club: 'Real Madrid',
        league: 'La Liga',
        nationality: 'Germany',
        positions: ['Midfielder', 'Central Midfielder'],
        active: true
    },
    'vinicius-junior': {
        id: 'vinicius-junior',
        name: 'Vinícius Júnior',
        aliases: ['Vinicius', 'Vini', 'Vinícius Júnior'],
        club: 'Real Madrid',
        league: 'La Liga',
        nationality: 'Brazil',
        positions: ['Forward', 'Winger'],
        active: true
    },
    'federico-valverde': {
        id: 'federico-valverde',
        name: 'Federico Valverde',
        aliases: ['Valverde', 'Fede'],
        club: 'Real Madrid',
        league: 'La Liga',
        nationality: 'Uruguay',
        positions: ['Midfielder', 'Central Midfielder', 'Right Midfielder'],
        active: true
    },
    'rodrygo': {
        id: 'rodrygo',
        name: 'Rodrygo',
        aliases: ['Rodrygo'],
        club: 'Real Madrid',
        league: 'La Liga',
        nationality: 'Brazil',
        positions: ['Forward', 'Winger'],
        active: true
    },
    'robert-lewandowski': {
        id: 'robert-lewandowski',
        name: 'Robert Lewandowski',
        aliases: ['Lewandowski', 'Lewa'],
        club: 'Barcelona',
        league: 'La Liga',
        nationality: 'Poland',
        positions: ['Forward', 'Striker'],
        active: true
    },
    'pedri': {
        id: 'pedri',
        name: 'Pedri',
        aliases: ['Pedri'],
        club: 'Barcelona',
        league: 'La Liga',
        nationality: 'Spain',
        positions: ['Midfielder', 'Central Midfielder'],
        active: true
    },
    'gavi': {
        id: 'gavi',
        name: 'Gavi',
        aliases: ['Gavi'],
        club: 'Barcelona',
        league: 'La Liga',
        nationality: 'Spain',
        positions: ['Midfielder', 'Central Midfielder'],
        active: true
    },
    'lamin-yamal': {
        id: 'lamin-yamal',
        name: 'Lamine Yamal',
        aliases: ['Yamal', 'Lamine'],
        club: 'Barcelona',
        league: 'La Liga',
        nationality: 'Spain',
        positions: ['Forward', 'Winger'],
        active: true
    },
    'frenkie-de-jong': {
        id: 'frenkie-de-jong',
        name: 'Frenkie de Jong',
        aliases: ['De Jong', 'Frenkie'],
        club: 'Barcelona',
        league: 'La Liga',
        nationality: 'Netherlands',
        positions: ['Midfielder', 'Central Midfielder'],
        active: true
    },
    'antoine-griezmann': {
        id: 'antoine-griezmann',
        name: 'Antoine Griezmann',
        aliases: ['Griezmann'],
        club: 'Atletico Madrid',
        league: 'La Liga',
        nationality: 'France',
        positions: ['Forward', 'Attacking Midfielder'],
        active: true
    },
    'jan-oblak': {
        id: 'jan-oblak',
        name: 'Jan Oblak',
        aliases: ['Oblak'],
        club: 'Atletico Madrid',
        league: 'La Liga',
        nationality: 'Slovenia',
        positions: ['Goalkeeper'],
        active: true
    },

    // ===== 意甲 (Serie A) =====
    'victor-osimhen': {
        id: 'victor-osimhen',
        name: 'Victor Osimhen',
        aliases: ['Osimhen'],
        club: 'Napoli',
        league: 'Serie A',
        nationality: 'Nigeria',
        positions: ['Forward', 'Striker'],
        active: true
    },
    'khvicha-kvaratskhelia': {
        id: 'khvicha-kvaratskhelia',
        name: 'Khvicha Kvaratskhelia',
        aliases: ['Kvaratskhelia', 'Kvara'],
        club: 'Napoli',
        league: 'Serie A',
        nationality: 'Georgia',
        positions: ['Forward', 'Winger'],
        active: true
    },
    'lautaro-martinez': {
        id: 'lautaro-martinez',
        name: 'Lautaro Martínez',
        aliases: ['Lautaro', 'Martínez'],
        club: 'Inter Milan',
        league: 'Serie A',
        nationality: 'Argentina',
        positions: ['Forward', 'Striker'],
        active: true
    },
    'nicolo-barella': {
        id: 'nicolo-barella',
        name: 'Nicolò Barella',
        aliases: ['Barella'],
        club: 'Inter Milan',
        league: 'Serie A',
        nationality: 'Italy',
        positions: ['Midfielder', 'Central Midfielder'],
        active: true
    },
    'rafael-leao': {
        id: 'rafael-leao',
        name: 'Rafael Leão',
        aliases: ['Leao', 'Leão'],
        club: 'AC Milan',
        league: 'Serie A',
        nationality: 'Portugal',
        positions: ['Forward', 'Winger'],
        active: true
    },
    'theo-hernandez': {
        id: 'theo-hernandez',
        name: 'Theo Hernández',
        aliases: ['Theo', 'Hernández'],
        club: 'AC Milan',
        league: 'Serie A',
        nationality: 'France',
        positions: ['Defender', 'Left-Back'],
        active: true
    },
    'federico-chiesa': {
        id: 'federico-chiesa',
        name: 'Federico Chiesa',
        aliases: ['Chiesa'],
        club: 'Juventus',
        league: 'Serie A',
        nationality: 'Italy',
        positions: ['Forward', 'Winger'],
        active: true
    },
    'dušan-vlahović': {
        id: 'dušan-vlahović',
        name: 'Dušan Vlahović',
        aliases: ['Vlahovic', 'Vlahović'],
        club: 'Juventus',
        league: 'Serie A',
        nationality: 'Serbia',
        positions: ['Forward', 'Striker'],
        active: true
    },
    'romelu-lukaku': {
        id: 'romelu-lukaku',
        name: 'Romelu Lukaku',
        aliases: ['Lukaku'],
        club: 'Roma',
        league: 'Serie A',
        nationality: 'Belgium',
        positions: ['Forward', 'Striker'],
        active: true
    },
    'paulo-dybala': {
        id: 'paulo-dybala',
        name: 'Paulo Dybala',
        aliases: ['Dybala'],
        club: 'Roma',
        league: 'Serie A',
        nationality: 'Argentina',
        positions: ['Forward', 'Attacking Midfielder'],
        active: true
    },

    // ===== 德甲 (Bundesliga) =====
    'jamal-musiala': {
        id: 'jamal-musiala',
        name: 'Jamal Musiala',
        aliases: ['Musiala'],
        club: 'Bayern Munich',
        league: 'Bundesliga',
        nationality: 'Germany',
        positions: ['Midfielder', 'Attacking Midfielder', 'Winger'],
        active: true
    },
    'leroy-sane': {
        id: 'leroy-sane',
        name: 'Leroy Sané',
        aliases: ['Sane', 'Sané'],
        club: 'Bayern Munich',
        league: 'Bundesliga',
        nationality: 'Germany',
        positions: ['Forward', 'Winger'],
        active: true
    },
    'manuel-neuer': {
        id: 'manuel-neuer',
        name: 'Manuel Neuer',
        aliases: ['Neuer'],
        club: 'Bayern Munich',
        league: 'Bundesliga',
        nationality: 'Germany',
        positions: ['Goalkeeper'],
        active: true
    },
    'florian-wirtz': {
        id: 'florian-wirtz',
        name: 'Florian Wirtz',
        aliases: ['Wirtz'],
        club: 'Bayer Leverkusen',
        league: 'Bundesliga',
        nationality: 'Germany',
        positions: ['Midfielder', 'Attacking Midfielder'],
        active: true
    },
    'julian-brandt': {
        id: 'julian-brandt',
        name: 'Julian Brandt',
        aliases: ['Brandt'],
        club: 'Borussia Dortmund',
        league: 'Bundesliga',
        nationality: 'Germany',
        positions: ['Midfielder', 'Attacking Midfielder'],
        active: true
    },
    'nico-schlotterbeck': {
        id: 'nico-schlotterbeck',
        name: 'Nico Schlotterbeck',
        aliases: ['Schlotterbeck'],
        club: 'Borussia Dortmund',
        league: 'Bundesliga',
        nationality: 'Germany',
        positions: ['Defender', 'Centre-Back'],
        active: true
    },
    'serge-gnabry': {
        id: 'serge-gnabry',
        name: 'Serge Gnabry',
        aliases: ['Gnabry'],
        club: 'Bayern Munich',
        league: 'Bundesliga',
        nationality: 'Germany',
        positions: ['Forward', 'Winger'],
        active: true
    },

    // ===== 法甲 (Ligue 1) =====
    'kylian-mbappe': {
        id: 'kylian-mbappe',
        name: 'Kylian Mbappé',
        aliases: ['Mbappe', 'Mbappé', 'KM7'],
        club: 'Paris Saint-Germain',
        league: 'Ligue 1',
        nationality: 'France',
        positions: ['Forward', 'Winger', 'Striker'],
        active: true
    },
    'warren-zaire-emery': {
        id: 'warren-zaire-emery',
        name: 'Warren Zaïre-Emery',
        aliases: ['Zaïre-Emery', 'WZE'],
        club: 'Paris Saint-Germain',
        league: 'Ligue 1',
        nationality: 'France',
        positions: ['Midfielder', 'Central Midfielder'],
        active: true
    },
    'marquinhos': {
        id: 'marquinhos',
        name: 'Marquinhos',
        aliases: ['Marquinhos'],
        club: 'Paris Saint-Germain',
        league: 'Ligue 1',
        nationality: 'Brazil',
        positions: ['Defender', 'Centre-Back'],
        active: true
    },
    'alexandre-lacazette': {
        id: 'alexandre-lacazette',
        name: 'Alexandre Lacazette',
        aliases: ['Lacazette'],
        club: 'Lyon',
        league: 'Ligue 1',
        nationality: 'France',
        positions: ['Forward', 'Striker'],
        active: true
    },
    'jonathan-david': {
        id: 'jonathan-david',
        name: 'Jonathan David',
        aliases: ['David'],
        club: 'Lille',
        league: 'Ligue 1',
        nationality: 'Canada',
        positions: ['Forward', 'Striker'],
        active: true
    },

    // ===== 其他顶级联赛 =====
    'neymar': {
        id: 'neymar',
        name: 'Neymar',
        aliases: ['Neymar Jr', 'Neymar Jr.'],
        club: 'Al-Hilal',
        league: 'Saudi Pro League',
        nationality: 'Brazil',
        positions: ['Forward', 'Winger', 'Attacking Midfielder'],
        active: true
    },
    'cristiano-ronaldo': {
        id: 'cristiano-ronaldo',
        name: 'Cristiano Ronaldo',
        aliases: ['CR7', 'Ronaldo'],
        club: 'Al-Nassr',
        league: 'Saudi Pro League',
        nationality: 'Portugal',
        positions: ['Forward', 'Striker'],
        active: true
    },
    'lionel-messi': {
        id: 'lionel-messi',
        name: 'Lionel Messi',
        aliases: ['Messi'],
        club: 'Inter Miami',
        league: 'MLS',
        nationality: 'Argentina',
        positions: ['Forward', 'Attacking Midfielder'],
        active: true
    },
    'sandro-tonali': {
        id: 'sandro-tonali',
        name: 'Sandro Tonali',
        aliases: ['Tonali'],
        club: 'Newcastle United',
        league: 'Premier League',
        nationality: 'Italy',
        positions: ['Midfielder', 'Defensive Midfielder'],
        active: true
    },
    'richarlison': {
        id: 'richarlison',
        name: 'Richarlison',
        aliases: ['Richarlison'],
        club: 'Tottenham Hotspur',
        league: 'Premier League',
        nationality: 'Brazil',
        positions: ['Forward', 'Striker'],
        active: true
    },
    'gabriel-jesus': {
        id: 'gabriel-jesus',
        name: 'Gabriel Jesus',
        aliases: ['Jesus', 'Gabriel'],
        club: 'Arsenal',
        league: 'Premier League',
        nationality: 'Brazil',
        positions: ['Forward', 'Striker'],
        active: true
    },
    'alexander-isak': {
        id: 'alexander-isak',
        name: 'Alexander Isak',
        aliases: ['Isak'],
        club: 'Newcastle United',
        league: 'Premier League',
        nationality: 'Sweden',
        positions: ['Forward', 'Striker'],
        active: true
    },
    'joao-cancelo': {
        id: 'joao-cancelo',
        name: 'João Cancelo',
        aliases: ['Cancelo'],
        club: 'Barcelona',
        league: 'La Liga',
        nationality: 'Portugal',
        positions: ['Defender', 'Right-Back', 'Left-Back'],
        active: true
    },
    'rúben-dias': {
        id: 'rúben-dias',
        name: 'Rúben Dias',
        aliases: ['Dias', 'Rúben'],
        club: 'Manchester City',
        league: 'Premier League',
        nationality: 'Portugal',
        positions: ['Defender', 'Centre-Back'],
        active: true
    },
    'john-stones': {
        id: 'john-stones',
        name: 'John Stones',
        aliases: ['Stones'],
        club: 'Manchester City',
        league: 'Premier League',
        nationality: 'England',
        positions: ['Defender', 'Centre-Back', 'Defensive Midfielder'],
        active: true
    },
    'andrew-robertson': {
        id: 'andrew-robertson',
        name: 'Andrew Robertson',
        aliases: ['Robertson'],
        club: 'Liverpool',
        league: 'Premier League',
        nationality: 'Scotland',
        positions: ['Defender', 'Left-Back'],
        active: true
    },
    'bernardo-silva': {
        id: 'bernardo-silva',
        name: 'Bernardo Silva',
        aliases: ['Bernardo', 'Silva'],
        club: 'Manchester City',
        league: 'Premier League',
        nationality: 'Portugal',
        positions: ['Midfielder', 'Attacking Midfielder', 'Winger'],
        active: true
    },
    'rodri': {
        id: 'rodri',
        name: 'Rodri',
        aliases: ['Rodri', 'Rodrigo'],
        club: 'Manchester City',
        league: 'Premier League',
        nationality: 'Spain',
        positions: ['Midfielder', 'Defensive Midfielder'],
        active: true
    },
    'marcus-rashford': {
        id: 'marcus-rashford',
        name: 'Marcus Rashford',
        aliases: ['Rashford'],
        club: 'Manchester United',
        league: 'Premier League',
        nationality: 'England',
        positions: ['Forward', 'Winger'],
        active: true
    },
    'jack-grealish': {
        id: 'jack-grealish',
        name: 'Jack Grealish',
        aliases: ['Grealish'],
        club: 'Manchester City',
        league: 'Premier League',
        nationality: 'England',
        positions: ['Midfielder', 'Winger', 'Attacking Midfielder'],
        active: true
    },
    'raphael-varane': {
        id: 'raphael-varane',
        name: 'Raphaël Varane',
        aliases: ['Varane'],
        club: 'Manchester United',
        league: 'Premier League',
        nationality: 'France',
        positions: ['Defender', 'Centre-Back'],
        active: true
    },
    'lisandro-martinez': {
        id: 'lisandro-martinez',
        name: 'Lisandro Martínez',
        aliases: ['Martínez', 'Licha'],
        club: 'Manchester United',
        league: 'Premier League',
        nationality: 'Argentina',
        positions: ['Defender', 'Centre-Back'],
        active: true
    },
    'joško-gvardiol': {
        id: 'joško-gvardiol',
        name: 'Joško Gvardiol',
        aliases: ['Gvardiol'],
        club: 'Manchester City',
        league: 'Premier League',
        nationality: 'Croatia',
        positions: ['Defender', 'Centre-Back', 'Left-Back'],
        active: true
    },
    'rúben-neves': {
        id: 'rúben-neves',
        name: 'Rúben Neves',
        aliases: ['Neves'],
        club: 'Al-Hilal',
        league: 'Saudi Pro League',
        nationality: 'Portugal',
        positions: ['Midfielder', 'Defensive Midfielder'],
        active: true
    },
    'yannick-carrasco': {
        id: 'yannick-carrasco',
        name: 'Yannick Carrasco',
        aliases: ['Carrasco'],
        club: 'Al-Shabab',
        league: 'Saudi Pro League',
        nationality: 'Belgium',
        positions: ['Midfielder', 'Winger'],
        active: true
    },
    'milinkovic-savic': {
        id: 'milinkovic-savic',
        name: 'Sergej Milinković-Savić',
        aliases: ['Milinković-Savić', 'SMS'],
        club: 'Al-Hilal',
        league: 'Saudi Pro League',
        nationality: 'Serbia',
        positions: ['Midfielder', 'Central Midfielder'],
        active: true
    },
    'marcos-llorente': {
        id: 'marcos-llorente',
        name: 'Marcos Llorente',
        aliases: ['Llorente'],
        club: 'Atletico Madrid',
        league: 'La Liga',
        nationality: 'Spain',
        positions: ['Midfielder', 'Right Midfielder', 'Right-Back'],
        active: true
    },
    'nico-williams': {
        id: 'nico-williams',
        name: 'Nico Williams',
        aliases: ['Nico', 'Williams'],
        club: 'Athletic Bilbao',
        league: 'La Liga',
        nationality: 'Spain',
        positions: ['Forward', 'Winger'],
        active: true
    },
    'mike-maignan': {
        id: 'mike-maignan',
        name: 'Mike Maignan',
        aliases: ['Maignan'],
        club: 'AC Milan',
        league: 'Serie A',
        nationality: 'France',
        positions: ['Goalkeeper'],
        active: true
    },
    'alessandro-bastoni': {
        id: 'alessandro-bastoni',
        name: 'Alessandro Bastoni',
        aliases: ['Bastoni'],
        club: 'Inter Milan',
        league: 'Serie A',
        nationality: 'Italy',
        positions: ['Defender', 'Centre-Back'],
        active: true
    },
    'marcos-acuna': {
        id: 'marcos-acuna',
        name: 'Marcos Acuña',
        aliases: ['Acuña', 'Acuna'],
        club: 'Sevilla',
        league: 'La Liga',
        nationality: 'Argentina',
        positions: ['Defender', 'Left-Back'],
        active: true
    },
    'dani-olmo': {
        id: 'dani-olmo',
        name: 'Dani Olmo',
        aliases: ['Olmo'],
        club: 'RB Leipzig',
        league: 'Bundesliga',
        nationality: 'Spain',
        positions: ['Midfielder', 'Attacking Midfielder'],
        active: true
    },
    'joão-félix': {
        id: 'joão-félix',
        name: 'João Félix',
        aliases: ['Felix', 'Félix'],
        club: 'Barcelona',
        league: 'La Liga',
        nationality: 'Portugal',
        positions: ['Forward', 'Attacking Midfielder'],
        active: true
    },
    'julian-alvarez': {
        id: 'julian-alvarez',
        name: 'Julián Álvarez',
        aliases: ['Alvarez', 'Álvarez'],
        club: 'Manchester City',
        league: 'Premier League',
        nationality: 'Argentina',
        positions: ['Forward', 'Striker'],
        active: true
    },
    'enzo-fernandez': {
        id: 'enzo-fernandez',
        name: 'Enzo Fernández',
        aliases: ['Enzo', 'Fernández'],
        club: 'Chelsea',
        league: 'Premier League',
        nationality: 'Argentina',
        positions: ['Midfielder', 'Central Midfielder'],
        active: true
    },
    'mohammed-kudus': {
        id: 'mohammed-kudus',
        name: 'Mohammed Kudus',
        aliases: ['Kudus'],
        club: 'West Ham United',
        league: 'Premier League',
        nationality: 'Ghana',
        positions: ['Midfielder', 'Attacking Midfielder', 'Forward'],
        active: true
    },
    'cole-palmer': {
        id: 'cole-palmer',
        name: 'Cole Palmer',
        aliases: ['Palmer'],
        club: 'Chelsea',
        league: 'Premier League',
        nationality: 'England',
        positions: ['Midfielder', 'Attacking Midfielder', 'Winger'],
        active: true
    },
    'dominik-szoboszlai': {
        id: 'dominik-szoboszlai',
        name: 'Dominik Szoboszlai',
        aliases: ['Szoboszlai'],
        club: 'Liverpool',
        league: 'Premier League',
        nationality: 'Hungary',
        positions: ['Midfielder', 'Attacking Midfielder'],
        active: true
    },
    'moussa-diaby': {
        id: 'moussa-diaby',
        name: 'Moussa Diaby',
        aliases: ['Diaby'],
        club: 'Aston Villa',
        league: 'Premier League',
        nationality: 'France',
        positions: ['Forward', 'Winger'],
        active: true
    },
    'ollie-watkins': {
        id: 'ollie-watkins',
        name: 'Ollie Watkins',
        aliases: ['Watkins'],
        club: 'Aston Villa',
        league: 'Premier League',
        nationality: 'England',
        positions: ['Forward', 'Striker'],
        active: true
    },
    'james-maddison': {
        id: 'james-maddison',
        name: 'James Maddison',
        aliases: ['Maddison'],
        club: 'Tottenham Hotspur',
        league: 'Premier League',
        nationality: 'England',
        positions: ['Midfielder', 'Attacking Midfielder'],
        active: true
    },
    'yves-bissouma': {
        id: 'yves-bissouma',
        name: 'Yves Bissouma',
        aliases: ['Bissouma'],
        club: 'Tottenham Hotspur',
        league: 'Premier League',
        nationality: 'Mali',
        positions: ['Midfielder', 'Defensive Midfielder'],
        active: true
    },
    'christopher-nkunku': {
        id: 'christopher-nkunku',
        name: 'Christopher Nkunku',
        aliases: ['Nkunku'],
        club: 'Chelsea',
        league: 'Premier League',
        nationality: 'France',
        positions: ['Forward', 'Attacking Midfielder'],
        active: true
    },
    'mykhailo-mudryk': {
        id: 'mykhailo-mudryk',
        name: 'Mykhailo Mudryk',
        aliases: ['Mudryk'],
        club: 'Chelsea',
        league: 'Premier League',
        nationality: 'Ukraine',
        positions: ['Forward', 'Winger'],
        active: true
    },
    'manuel-akanji': {
        id: 'manuel-akanji',
        name: 'Manuel Akanji',
        aliases: ['Akanji'],
        club: 'Manchester City',
        league: 'Premier League',
        nationality: 'Switzerland',
        positions: ['Defender', 'Centre-Back'],
        active: true
    },
    'kim-min-jae': {
        id: 'kim-min-jae',
        name: 'Kim Min-jae',
        aliases: ['Kim', 'Min-jae'],
        club: 'Bayern Munich',
        league: 'Bundesliga',
        nationality: 'South Korea',
        positions: ['Defender', 'Centre-Back'],
        active: true
    },
    'kim-min-jae-bayern': {
        id: 'kim-min-jae-bayern',
        name: 'Kim Min-jae',
        aliases: ['Kim', 'Min-jae'],
        club: 'Bayern Munich',
        league: 'Bundesliga',
        nationality: 'South Korea',
        positions: ['Defender', 'Centre-Back'],
        active: true
    },
};

// 导出数据（根据使用环境选择）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = playersIndex;
}

