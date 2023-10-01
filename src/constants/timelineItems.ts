interface TimelineMoreItem {
  title: string;
  description: string;
}

export interface TimelineItem {
  title: string;
  dotColor: 'inherit' | 'grey' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  image?: string;
  cardTitle: string;
  cardDescription: string;
  items?: TimelineMoreItem[];
}

const timelineItems: Record<string, TimelineItem[]> = {
  en: [
    {
      title: "10,000 years ago",
      dotColor: "primary",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Doggerland.svg/1200px-Doggerland.svg.png",
      cardTitle: "Stone Age",
      cardDescription: "UK was permanently separated from the continent by the Channel",
    },
    {
      title: "6,000 years ago",
      dotColor: "primary",
      cardTitle: "Stone Age",
      cardDescription: "first farmers from south-east Europe arrived in Britain",
    },
    {
      title: "4,000 years ago",
      dotColor: "primary",
      cardTitle: "Stone Age",
      cardDescription: "people in Britain learned to make bronze tools and weapons",
    },
    {
      title: "55 BC",
      dotColor: "primary",
      image: "https://www.heritagedaily.com/wp-content/uploads/2021/05/cca.jpg",
      cardTitle: "Jullius Caesar invasion",
      cardDescription: "Julius Caesar led a Roman invasion of Britain in 55 BC. He was defeated, but returned the following year and conquered much of southern England. The Romans called the land Britannia.",
    },
    {
      title: "AD 33",
      dotColor: "primary",
      image: "https://static.wixstatic.com/media/8dcf0f_b86e7bab89e04240a09b104f3aac3f5b~mv2.jpg/v1/fill/w_640,h_960,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8dcf0f_b86e7bab89e04240a09b104f3aac3f5b~mv2.jpg",
      cardTitle: "Emperor Claudius invasion (success)",
      cardDescription: "Emperor Claudius led a Roman invasion of Britain",
      items: [
        {
          title: 'Emperor Claudius led a Roman invasion of Britain',
          description: "Emperor Claudius led a Roman invasion of Britain in AD 43. The Romans defeated the British tribes and ruled Britain for more than 350 years. They built towns, roads, baths, and temples. The Romans also introduced new plants, animals, and crops.\nBoudicca fought against the Romans. She led a rebellion of the Iceni tribe after they were treated harshly by the Romans. The Romans won the battle and Boudicca died.",
        },
        {
          title: 'Scotland remained unconquered',
          description: "Emperor Hadrian built a wall in the north of England to keep out the Picts",
        },
      ],
    },
    {
      title: "AD 410",
      dotColor: "primary",
      image: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F1f6f4688-a688-11ea-a585-dcb14d2bcd47.jpg?crop=2362%2C2362%2C0%2C0",
      cardTitle: "Roman left Britain",
      cardDescription: "The Romans left Britain",
    },
    {
      title: "AD 600",
      dotColor: "primary",
      image: "https://i.pinimg.com/1200x/76/88/58/7688580da8d0760f011beffb31147ac5.jpg",
      cardTitle: "Anglo-Saxons",
      cardDescription: "Anglo-Saxon kingdoms were established",
      items: [
        {
          title: 'Anglo-Saxon kingdoms were established',
          description: "Anglo-Saxon kingdoms were established across England. The Angles, Saxons and Jutes came from Europe across the North Sea. They spoke similar languages and worshipped similar gods. The Anglo-Saxons were the dominant people in Britain for about 500 years.",
        },
        {
          title: 'Christianity was brought to Britain',
          description: "Christianity was brought to Britain by missionaries from Rome. The most famous was Augustine, who became the first Archbishop of Canterbury in AD 597.",
        },
      ],
    },
    {
      title: "AD 789",
      dotColor: "primary",
      image: "https://gameranx.com/wp-content/uploads/2021/12/assassins-creed-valhalla-update-1-4-1.large_-1024x576.webp",
      cardTitle: "Viking from Denmark and Norway raid Britain",
      cardDescription: "King Alfred the Great of Wessex defeated the Vikings"
    },
    {
      title: "1066",
      dotColor: "primary",
      cardTitle: "Norman Conquest",
      cardDescription: "last successful foreign invasion of Britain",
      image: "https://www.historic-uk.com/wp-content/uploads/2017/04/norman-conquest-of-britain.jpg",
      items: [
        {
          title: 'William, Duke of Normandy, defeated King Harold II of England',
          description: "William, Duke of Normandy, defeated King Harold II of England at the Battle of Hastings. William became king of England and is known as William the Conqueror. He built castles all over England to control his new kingdom.",
        },
        {
          title: 'Domesday Book',
          description: "William the Conqueror ordered a survey of all the land in England. The information was recorded in the Domesday Book.",
        }
      ]
    },
    {
      title: "1215",
      dotColor: "primary",
      cardTitle: "Magna Carta",
      cardDescription: "Magna Carta was signed by King John at Runnymede near London. It was the first document to limit the powers of the king and protect the rights of the people.",
      image: "https://cdn.britannica.com/28/144228-050-FB55C473/engraving-King-John-Magna-Carta-Runnymede-England-June-15-1215.jpg",
    },
    {
      title: "1284",
      dotColor: "primary",
      cardTitle: "King Edward I of England",
      cardDescription: "King Edward I introduced the Statute of Rhuddlan, which annexed Wales to England. The Statute of Rhuddlan divided Wales into counties and introduced English law.",
      image: "https://www.historic-uk.com/wp-content/uploads/2018/11/edward-I.jpg"
    },
    {
      title: "1314",
      dotColor: "primary",
      cardTitle: "Robert the Bruce",
      cardDescription: "King Edward I introduced the Statute of Rhuddlan, which annexed Wales to England. The Statute of Rhuddlan divided Wales into counties and introduced English law.",
      image: "https://www.britishbattles.com/wp-content/uploads/2017/12/robert-de-bruce-kills-bohun-s-web-AAA.jpg"
    },
    {
      title: "1400",
      dotColor: "primary",
      cardTitle: "Norman French and Angle-Saxon English became English",
      cardDescription: "Norman French and Angle-Saxon English became English",
    },
    {
      title: "1415",
      dotColor: "primary",
      cardTitle: "Battle of Agincourt",
      cardDescription: "King Henry V of England defeated the French at the Battle of Agincourt",
      image: "https://cdn.britannica.com/19/172519-050-F3B2578B/Battle-of-Agincourt.jpg"
    },
    {
      title: "1455",
      dotColor: "primary",
      cardTitle: "Wars of the Roses",
      cardDescription: "Wars of the Roses began between the House of Lancaster and the House of York. The Wars of the Roses were a series of battles fought between the House of Lancaster and the House of York. Both families were descended from King Edward III. The symbol of the House of Lancaster was a red rose and the symbol of the House of York was a white rose.",
      image: "https://assets.editorial.aetnd.com/uploads/2015/05/gettyimages-1330675795.jpg"
    },
    {
      title: "1485",
      dotColor: "primary",
      cardTitle: "Battle of Bosworth",
      cardDescription: "Henry Tudor became King Henry VII of England. He ended the Wars of the Roses by marrying Elizabeth of York, the daughter of Edward IV. Henry VII was the first Tudor king of England.",
      image: "https://www.britishbattles.com/wp-content/uploads/2018/07/13-large_richard_iii.jpg"
    },
    {
      title: "1509",
      dotColor: "primary",
      cardTitle: "King Henry VIII",
      cardDescription: "King Henry VIII became king of England",
      image: "https://www.onthisday.com/images/people/henry-viii.jpg",
      items: [
        {
          title: 'King Henry VIII established the Church of England',
          description: "King Henry VIII established the Church of England. He did this because the Pope would not allow him to divorce his wife, Catherine of Aragon.",
        },
        {
          title: 'Wales united with England',
          description: "King Henry VIII united Wales with England. He gave his son, Edward, the title Prince of Wales.",
        }
      ]
    },
    {
      title: "1547",
      dotColor: "primary",
      cardTitle: "Edward VI",
      cardDescription: "King Edward VI became king of England",
      items: [
        {
          title: 'Book of Common Prayer',
          description: "King Edward VI introduced the Book of Common Prayer. This was a book of services for the Church of England.",
        },
      ]
    },
    {
      title: "1553",
      dotColor: "primary",
      cardTitle: "Queen Mary I",
      cardDescription: "Queen Mary I became queen of England",
      items: [
        {
          title: 'Bloody Mary',
          description: "Queen Mary I was a Catholic. She tried to make England a Catholic country again. She had many Protestants killed. She was known as Bloody Mary.",
        },
      ]
    },
    {
      title: "1558",
      dotColor: "primary",
      cardTitle: "Queen Elizabeth I",
      cardDescription: "Queen Mary I became queen of England",
      items: [
        {
          title: 'Queen Elizabeth I re-established the Church of England',
          description: "Queen Elizabeth I restored the Church of England. She made England a Protestant country again.",
        },
      ]
    },
    {
      title: "1560",
      dotColor: "primary",
      cardTitle: "Protestantism",
      cardDescription: "Protestant Scottish Parliament abolished the authority of the Pope in Scotland",
    },
    {
      title: "1564",
      dotColor: "primary",
      cardTitle: "William Shakespeare",
      cardDescription: "William Shakespeare was born in Stratford-upon-Avon",
    },
    {
      title: "1588",
      dotColor: "primary",
      cardTitle: "English defeated the Spanish Armada",
      cardDescription: "English defeated the Spanish Armada",
    },
    {
      title: "1603",
      dotColor: "primary",
      cardTitle: "Queen Elizabeth I died",
      cardDescription: "Queen Elizabeth I died. She was the last Tudor monarch of England",
    },
    {
      title: "1603",
      dotColor: "primary",
      cardTitle: "King James I of England",
      cardDescription: "James VI of Scotland became King James I of England",
      items: [
        {
          title: "Authorised Version of the Bible",
          description: "King James I of England authorised a new translation of the Bible. It was called the King James Bible.",
        },
        {
          title: "Divine Right of Kings",
          description: "King James I of England believed in the Divine Right of Kings. He believed that kings were directly appointed by God to rule.",
        }
      ]
    },
    {
      title: "1625",
      dotColor: "primary",
      cardTitle: "King Charles I",
      cardDescription: "King Charles I became king of England",
    },
    {
      title: "1640",
      dotColor: "primary",
      cardTitle: "King Charles I recalled Parliament",
      cardDescription: "King Charles I recalled Parliament to ask for funds to fight the Scots. But Parliament refused to give him any money.",
    },
    {
      title: "1642",
      dotColor: "primary",
      cardTitle: "English Civil War started",
      cardDescription: "English Civil War began between the Royalists (Cavaliers), who supported the king, and the Parliamentarians (Roundheads), who supported Parliament",
      items: [
        {
          title: "King's army defeated",
          description: "The king's army was defeated by the Parliamentarians at the Battle of Naseby and the Battle of Marston Moor.",
        }
      ]
    },
    {
      title: "1646",
      dotColor: "primary",
      cardTitle: "English Civil War ended",
      cardDescription: "Parliamentarians defeated the Royalists in the English Civil War",
    },
    {
      title: "1649",
      dotColor: "primary",
      cardTitle: "King Charles I was executed",
      cardDescription: "King Charles I was executed. England became a republic",
    },
  ],
  zhHK: [
    {
      title: "10,000 年前",
      dotColor: "primary",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Doggerland.svg/1200px-Doggerland.svg.png",
      "cardTitle": "石器時代",
      "cardDescription": "英國被永久與大陸隔開，形成英倫海峽"
    },
    {
      title: "6,000 年前",
      dotColor: "primary",
      "cardTitle": "石器時代",
      "cardDescription": "第一批農夫從東南歐抵達英國"
    },
    {
      title: "4,000 年前",
      dotColor: "primary",
      "cardTitle": "石器時代",
      "cardDescription": "英國人學會製作青銅工具和武器"
    },
    {
      title: "公元前55年",
      dotColor: "primary",
      "image": "https://www.heritagedaily.com/wp-content/uploads/2021/05/cca.jpg",
      "cardTitle": "凱撒入侵",
      "cardDescription": "公元前55年，羅馬的朱利葉·凱撒領導了對英國的入侵。他被擊敗，但次年返回，征服了英格蘭南部的大部分地區。羅馬人稱這片土地為不列顛。"
    },
    {
      title: "公元33年",
      dotColor: "primary",
      "image": "https://static.wixstatic.com/media/8dcf0f_b86e7bab89e04240a09b104f3aac3f5b~mv2.jpg/v1/fill/w_640,h_960,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8dcf0f_b86e7bab89e04240a09b104f3aac3f5b~mv2.jpg",
      "cardTitle": "克勞狄烏斯皇帝入侵（成功）",
      "cardDescription": "克勞狄烏斯皇帝領導羅馬入侵英國",
      "items": [
        {
          title: "克勞狄烏斯皇帝領導羅馬入侵英國",
          "description": "公元43年，克勞狄烏斯皇帝領導羅馬入侵英國。羅馬人擊敗了英國的部落，統治英國超過350年。他們建造了城鎮，道路，浴場和神廟。羅馬人也引入了新的植物，動物和作物。\n博狄卡對抗羅馬人。她領導伊塞尼部落反抗，因為他們受到了羅馬人的苛待。羅馬人贏得了這場戰鬥，博狄卡死了。"
        },
        {
          title: "蘇格蘭仍未被征服",
          "description": "哈德良皇帝在英格蘭北部建造了一座城墙，以防皮克特人侵入。"
        }
      ]
    },
    {
      title: "公元410年",
      dotColor: "primary",
      "image": "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F1f6f4688-a688-11ea-a585-dcb14d2bcd47.jpg?crop=2362%2C2362%2C0%2C0",
      "cardTitle": "羅馬人離開英國",
      "cardDescription": "羅馬人離開了英國"
    },
    {
      title: "公元600年",
      dotColor: "primary",
      "image": "https://i.pinimg.com/1200x/76/88/58/7688580da8d0760f011beffb31147ac5.jpg",
      "cardTitle": "盎格魯-撒克遜人",
      "cardDescription": "在英格蘭建立了盎格魯-撒克遜王國",
      "items": [
        {
          title: "盎格魯-撒克遜王國得以建立",
          "description": "盎格魯-撒克遜王國在英格蘭得以建立。盎格魯人，撒克遜人和朱特人都來自北海的歐洲。他們說著類似的語言，崇拜著類似的神。盎格魯-撒克遜人在英國成為了主要居民，持續了大約500年。"
        },
        {
          title: "基督教傳入英國",
          "description": "基督教由來自羅馬的傳教士傳入英國。最著名的是在公元597年成為坎特伯雷大主教的奧古斯丁。"
        }
      ]
    },
    {
      title: "公元789年",
      dotColor: "primary",
      "image": "https://gameranx.com/wp-content/uploads/2021/12/assassins-creed-valhalla-update-1-4-1.large_-1024x576.webp",
      "cardTitle": "來自丹麥和挪威的維京人襲擊英國",
      "cardDescription": "衛塞克斯的大王阿爾弗雷德大帝擊敗了維京人"
    },
    {
      title: "1066",
      dotColor: "primary",
      "cardTitle": "諾曼征服",
      "cardDescription": "這是英國最後一次成功的外國入侵",
      "image": "https://www.historic-uk.com/wp-content/uploads/2017/04/norman-conquest-of-britain.jpg",
      "items": [
        {
          title: "諾曼底公爵威廉擊敗了英格蘭的哈羅德二世國王",
          "description": "諾曼底公爵威廉在黑斯廷斯戰役中擊敗了英格蘭的哈羅德二世國王。威廉成為了英格蘭的國王，被稱為征服者威廉。他在英格蘭各地建造了城堡，以控制他的新王國。"
        },
        {
          title: "末日審判錄",
          "description": "征服者威廉下令對英格蘭所有土地進行調查。該信息被記錄在末日審判錄中。"
        }
      ]
    },
    {
      title: "1215",
      dotColor: "primary",
      "cardTitle": "大憲章",
      "cardDescription": "大憲章由約翰王在倫敦附近的拉尼米德簽署。這是第一份限制國王權力和保護人民權利的文件。",
      "image": "https://cdn.britannica.com/28/144228-050-FB55C473/engraving-King-John-Magna-Carta-Runnymede-England-June-15-1215.jpg"
    },
    {
      title: "1284",
      dotColor: "primary",
      "cardTitle": "英格蘭的愛德華一世",
      "cardDescription": "英格蘭的愛德華一世引入了拉德蘭法令，該法令將威爾士併入英格蘭。拉德蘭法令將威爾士分為數個郡，並引入了英格蘭法律。",
      "image": "https://www.historic-uk.com/wp-content/uploads/2018/11/edward-I.jpg"
    },
    {
      title: "1314",
      dotColor: "primary",
      "cardTitle": "羅伯特·布魯斯",
      "cardDescription": "英格蘭的愛德華一世引入了拉德蘭法令，該法令將威爾士併入英格蘭。拉德蘭法令將威爾士分為數個郡，並引入了英格蘭法律。",
      "image": "https://www.britishbattles.com/wp-content/uploads/2017/12/robert-de-bruce-kills-bohun-s-web-AAA.jpg"
    },
    {
      title: "1400",
      dotColor: "primary",
      "cardTitle": "諾曼法語和盎格魯-撒克遜英語變成了英語",
      "cardDescription": "諾曼法語和盎格魯-撒克遜英語融合成了英語"
    },
    {
      title: "1415",
      dotColor: "primary",
      "cardTitle": "阿金科特戰役",
      "cardDescription": "英格蘭的亨利五世國王在阿金科特戰役中擊敗了法國人",
      "image": "https://cdn.britannica.com/19/172519-050-F3B2578B/Battle-of-Agincourt.jpg"
    },
    {
      title: "1455",
      dotColor: "primary",
      "cardTitle": "玫瑰戰爭",
      "cardDescription": "蘭開斯特家族和約克家族之間爆發了玫瑰戰爭。玫瑰戰爭是一系列由蘭開斯特家族和約克家族之間進行的戰役。兩個家族都是愛德華三世的後裔。蘭開斯特家族的象徵是一朵紅玫瑰，約克家族的象徵是一朵白玫瑰。",
      "image": "https://assets.editorial.aetnd.com/uploads/2015/05/gettyimages-1330675795.jpg"
    },
    {
      title: "1485",
      dotColor: "primary",
      "cardTitle": "博斯沃思戰役",
      "cardDescription": "亨利·都鐸成為英格蘭的亨利七世國王。他通過與約克家族的伊麗莎白結婚，結束了玫瑰戰爭。亨利七世是都鐸王朝的第一位國王。",
      "image": "https://www.britishbattles.com/wp-content/uploads/2018/07/13-large_richard_iii.jpg"
    },
    {
      title: "1509",
      dotColor: "primary",
      "cardTitle": "亨利八世國王",
      "cardDescription": "亨利八世成為英格蘭的國王",
      "image": "https://www.onthisday.com/images/people/henry-viii.jpg"
    }
  ]
  // ...more languages
};

export default timelineItems;