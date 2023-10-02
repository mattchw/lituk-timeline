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
      items: [
        {
          title: "Charles II became king of Scotland",
          description: "Charles II became king of Scotland. He was crowned at Scone.",
        }
      ]
    },
    {
      title: "1660",
      dotColor: "primary",
      cardTitle: "Parliament invited King Charles II to return",
      cardDescription: "Parliament invited King Charles II to return from Netherlands and to be king of England",
    },
    {
      title: "1665",
      dotColor: "primary",
      cardTitle: "Major outbreak of plague in London",
      cardDescription: "",
    },
    {
      title: "1679",
      dotColor: "primary",
      cardTitle: "Habeas Corpus Act",
      cardDescription: "Habeas Corpus Act was passed by Parliament. Every prisoner has the right to a court hearing",
    },
    {
      title: "1688",
      dotColor: "primary",
      cardTitle: "Glorious Revolution",
      cardDescription: "William of Orange invaded England and proclaimed himself as King William III of England. He ruled jointly with his wife, Mary II, who was the daughter of King James II",
    },
    {
      title: "1689",
      dotColor: "primary",
      cardTitle: "Bill of Rights",
      cardDescription: "Bill of Rights was passed by Parliament. It confirmed the rights of Parliament and the limits of the king's power",
    },
    {
      title: "1690",
      dotColor: "primary",
      cardTitle: "Battle of the Boyne",
      cardDescription: "Battle of the Boyne was fought between the forces of the deposed King James II of England and Ireland, and those of King William III. William III defeated James II, who fled to France",
    },
    {
      title: "1707",
      dotColor: "primary",
      cardTitle: "Treaty of Union in Scotland (Act of Union)",
      cardDescription: "Treaty of Union in Scotland (Act of Union) was passed by the Scottish and English Parliaments. It kept the Scottish legal and education systems and the Presbyterian Church of Scotland. It also created the Parliament of Great Britain",
    },
    {
      title: "1714",
      dotColor: "primary",
      cardTitle: "King George I",
      cardDescription: "King George I, who was a German, became king of Great Britain",
    },
    {
      title: "1721",
      dotColor: "primary",
      cardTitle: "Sir Robert Walpole became the first Prime Minister",
      cardDescription: "Sir Robert Walpole became the first Prime Minister",
    },
    {
      title: "1745",
      dotColor: "primary",
      cardTitle: "Rebellion of the clans",
      cardDescription: "Rebellion of the clans was led by Bonnie Prince Charlie, the grandson of King James II, attempted to take back the throne from King George II.",
    },
    {
      title: "1746",
      dotColor: "primary",
      cardTitle: "Battle of Culloden",
      cardDescription: "Bonnie Prince Charlie was defeated by the king's army at the Battle of Culloden. He escaped to Europe (France). This was the last battle to be fought on British soil.",
    },
    {
      title: "1776",
      dotColor: "primary",
      cardTitle: "American War of Independence started",
      cardDescription: "American War of Independence started. 13 American colonies declared their independence from Britain",
    },
    {
      title: "1783",
      dotColor: "primary",
      cardTitle: "American War of Independence ended",
      cardDescription: "American War of Independence ended. Britain recognised the independence of the United States of America",
    },
    {
      title: "1801",
      dotColor: "primary",
      cardTitle: "Ireland was united with Great Britain",
      cardDescription: "Ireland was united with Great Britain",
    },
    {
      title: "1805",
      dotColor: "primary",
      cardTitle: "Battle of Trafalgar",
      cardDescription: "Admiral Nelson led British navy to fight against the French and Spanish navies at the Battle of Trafalgar. He was killed in the battle.",
    },
    {
      title: "1807",
      dotColor: "primary",
      cardTitle: "Slave trade was abolished",
      cardDescription: "It became illegal to trade slaves in the British Empire",
    },
    {
      title: "1815",
      dotColor: "primary",
      cardTitle: "Battle of Waterloo",
      cardDescription: "Emperor Napoleon of France was defeated by the Duke of Wellington at the Battle of Waterloo",
    },
    {
      title: "1833",
      dotColor: "primary",
      cardTitle: "Emancipation Act",
      cardDescription: "Slavery was abolished in the British Empire",
    },
    {
      title: "1837",
      dotColor: "primary",
      cardTitle: "Queen Victoria",
      cardDescription: "Queen Victoria became queen of Great Britain",
    },
    {
      title: "1853",
      dotColor: "primary",
      cardTitle: "Crimean War",
      cardDescription: "Crimean War started between Britain, France and Turkey on one side and Russia on the other side. It was extensively covered by media for the first time.",
    },
    {
      title: "1889",
      dotColor: "primary",
      cardTitle: "Women's Franchise League",
      cardDescription: "Emmeline Pankhurst set up Women's Franchise League",
    },
    {
      title: "1895",
      dotColor: "primary",
      cardTitle: "National Trust",
      cardDescription: "National Trust was founded by 3 volunteers. It is a charity that protects historic places and green spaces in England, Wales and Northern Ireland.",
    },
    {
      title: "1899",
      dotColor: "primary",
      cardTitle: "Boer War",
      cardDescription: "Boer War started between Britain and the Boers (Dutch settlers from Netherlands) in South Africa",
    },
    {
      title: "1908",
      dotColor: "primary",
      cardTitle: "First UK Olympics Games",
      cardDescription: "First UK Olympics Games was held in London",
    },
    {
      title: "1913",
      dotColor: "primary",
      cardTitle: "Home Rule Act for Ireland",
      cardDescription: "Home Rule Act for Ireland was passed by the British Parliament. It was suspended because of the First World War.",
    },
    {
      title: "1914",
      dotColor: "primary",
      cardTitle: "World War I started",
      cardDescription: "Archduke Franz Ferdinand of Austria was assassinated on 28 June 1914. World War I started between Britain, France and Russia on one side and Germany, Austria-Hungary and Turkey on the other side.",
    },
    {
      title: "1918",
      dotColor: "primary",
      cardTitle: "World War I ended",
      cardDescription: "World War I ended at 11am on 11 November 1918 (Armistice Day). Germany surrendered and the fighting stopped.",
    },
    {
      title: "1918",
      dotColor: "primary",
      cardTitle: "Women over 30 were given the right to vote",
      cardDescription: "Women over 30 were given the right to vote",
    },
    {
      title: "1922",
      dotColor: "primary",
      cardTitle: "Ireland was divided into Northern Ireland and Southern Ireland",
      cardDescription: "Ireland was divided into Northern Ireland and Southern Ireland",
    },
    {
      title: "1928",
      dotColor: "primary",
      cardTitle: "Women over 21 were given the right to vote",
      cardDescription: "Women over 21 were given the right to vote",
    },
    {
      title: "1929",
      dotColor: "primary",
      cardTitle: "Great Depression",
      cardDescription: "Great Depression started. It was a worldwide economic depression that lasted until the late 1930s.",
    },
    {
      title: "1933",
      dotColor: "primary",
      cardTitle: "Adolf Hitler became Chancellor of Germany",
      cardDescription: "Adolf Hitler came to power in Germany",
    },
    {
      title: "1939",
      dotColor: "primary",
      cardTitle: "World War II started",
      cardDescription: "Hitler invaded Poland. World War II started between Britain and France on one side and Germany on the other side.",
    },
    {
      title: "1940",
      dotColor: "primary",
      cardTitle: "Winson Churchill became Prime Minister",
      cardDescription: "Winson Churchill became Prime Minister",
    },
    {
      title: "1941",
      dotColor: "primary",
      cardTitle: "Germany invaded the Soviet Union",
      cardDescription: "Germany invaded the Soviet Union",
    },
    {
      title: "1944",
      dotColor: "primary",
      cardTitle: "Allied forces landed in Normandy, France",
      cardDescription: "Allied forces landed in Normandy, France",
    },
    {
      title: "1945",
      dotColor: "primary",
      cardTitle: "World War II ended",
      cardDescription: "World War II ended. Germany surrendered on 7 May 1945. Japan surrendered on 14 August 1945.",
    },
    {
      title: "1947",
      dotColor: "primary",
      cardTitle: "Independence was granted to 9 countries",
      cardDescription: "Independence was granted to 9 countries, including India, Pakistan and Ceylon (now Sri Lanka)",
    },
    {
      title: "1948",
      dotColor: "primary",
      cardTitle: "Aneurin Bevan established the National Health Service (NHS)",
      cardDescription: "Aneurin Bevan established the National Health Service (NHS)",
    },
    {
      title: "1949",
      dotColor: "primary",
      cardTitle: "Ireland became a republic",
      cardDescription: "Ireland became a republic",
    },
    {
      title: "1952",
      dotColor: "primary",
      cardTitle: "Queen Elizabeth II",
      cardDescription: "Queen Elizabeth II became queen of the United Kingdom",
    },
    {
      title: "1957",
      dotColor: "primary",
      cardTitle: "European Economic Community (EEC)",
      cardDescription: "European Economic Community (EEC) was established by 6 countries, including France, West Germany and Italy",
    },
    {
      title: "1960",
      dotColor: "primary",
      cardTitle: "Swinging Sixties",
      cardDescription: "Swinging Sixties started. It was a youth-driven cultural revolution that took place in the United Kingdom during the mid-to-late 1960s",
    },
    {
      title: "1969",
      dotColor: "primary",
      cardTitle: "Concorde first flight",
      cardDescription: "Britain and France jointly developed Concorde, the world's first supersonic passenger airliner",
    },
    {
      title: "1969",
      dotColor: "primary",
      cardTitle: "Voting age was reduced to 18",
      cardDescription: "Voting age was reduced to 18 for men and women.",
    },
    {
      title: "1973",
      dotColor: "primary",
      cardTitle: "UK joined the European Economic Community (EEC)",
      cardDescription: "UK joined the European Economic Community (EEC)",
    },
    {
      title: "1976",
      dotColor: "primary",
      cardTitle: "Concorde first commercial flight",
      cardDescription: "Concorde began carrying passengers",
    },
    {
      title: "1979",
      dotColor: "primary",
      cardTitle: "Margaret Thatcher became Prime Minister",
      cardDescription: "Margaret Thatcher became the first woman Prime Minister in UK. She worked closely with US President Ronald Reagan to end the Cold War.",
    },
    {
      title: "1982",
      dotColor: "primary",
      cardTitle: "Argentina invaded the Falkland Islands",
      cardDescription: "Argentina invaded the Falkland Islands. Britain sent troops to the Falkland Islands and defeated the Argentinians.",
    },
    {
      title: "1990",
      dotColor: "primary",
      cardTitle: "Iraqi invasion",
      cardDescription: "Iraq invaded Kuwait. Britain sent troops to the Gulf War.",
    },
    {
      title: "1998",
      dotColor: "primary",
      cardTitle: "Good Friday Agreement",
      cardDescription: "Good Friday Agreement was signed. It was an agreement between the British and Irish governments and most of the political parties in Northern Ireland on how Northern Ireland should be governed.",
    },
    {
      title: "2009",
      dotColor: "primary",
      cardTitle: "Briitsh combat troops left Iraq",
      cardDescription: "Briitsh combat troops left Iraq",
    },
    {
      title: "2012",
      dotColor: "primary",
      cardTitle: "Third UK Olympics Games",
      cardDescription: "Third UK Olympics Games was held in London",
    },
    {
      title: "2020",
      dotColor: "primary",
      cardTitle: "UK left the European Union",
      cardDescription: "UK left the European Union on 31 January 2020",
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