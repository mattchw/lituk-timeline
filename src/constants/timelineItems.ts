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
      cardTitle: "The Stone Age",
      cardDescription: "UK was permanently separated from the continent by the Channel",
    },
    {
      title: "6,000 years ago",
      dotColor: "primary",
      cardTitle: "The Stone Age",
      cardDescription: "The first farmers from south-east Europe arrived in Britain",
    },
    {
      title: "4,000 years ago",
      dotColor: "primary",
      cardTitle: "The Stone Age",
      cardDescription: "People in Britain learned to make bronze tools and weapons",
    },
    {
      title: "55 BC",
      dotColor: "primary",
      image: "https://www.heritagedaily.com/wp-content/uploads/2021/05/cca.jpg",
      cardTitle: "Julius Caesar invasion (Unsuccessful)",
      cardDescription: "Julius Caesar led a Roman invasion of Britain in 55 BC.",
      items: [
        {
          title: "Julius Caesar was defeated",
          description: "He was defeated, but returned the following year and conquered much of southern England. The Romans called the land Britannia.",
        },
      ],
    },
    {
      title: "AD 43",
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
      cardTitle: "The Roman army left Britain",
      cardDescription: "The Roman army left Britain to defend other parts of the Roman Empire and never returned.",
    },
    {
      title: "AD 600",
      dotColor: "primary",
      image: "https://i.pinimg.com/1200x/76/88/58/7688580da8d0760f011beffb31147ac5.jpg",
      cardTitle: "The Anglo-Saxons",
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
      cardTitle: "Vikings from Denmark and Norway raid Britain",
      cardDescription: "King Alfred the Great of Wessex defeated the Vikings"
    },
    {
      title: "1066",
      dotColor: "primary",
      cardTitle: "The Norman Conquest",
      cardDescription: "This was the last successful foreign invasion of Britain",
      image: "https://www.historic-uk.com/wp-content/uploads/2017/04/norman-conquest-of-britain.jpg",
      items: [
        {
          title: 'William, Duke of Normandy, defeated King Harold II of England',
          description: "William, Duke of Normandy, defeated King Harold II of England at the Battle of Hastings. William became king of England and is known as William the Conqueror. He built castles all over England to control his new kingdom.",
        },
        {
          title: 'The Domesday Book',
          description: "William the Conqueror drew up lists of all the towns and villages in England. The information was recorded in the Domesday Book.",
        }
      ]
    },
    {
      title: "1215",
      dotColor: "primary",
      cardTitle: "The Magna Carta",
      cardDescription: "The Magna Carta was signed by King John. It was the first document to limit the powers of the king and protect the rights of the nobility.",
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
      cardDescription: "The Scottish, led by Robert the Bruce, defeated the English at the Battle of Bannockburn, and Scotland remained unconquered by the English.",
      image: "https://www.britishbattles.com/wp-content/uploads/2017/12/robert-de-bruce-kills-bohun-s-web-AAA.jpg"
    },
    {
      title: "1400",
      dotColor: "primary",
      cardTitle: "Norman French and Angle-Saxon English became English",
      cardDescription: "Norman French and Angle-Saxon English became English. In England, official documents were being written in English, and English had become the preferred language of the royal court and Parliament.",
    },
    {
      title: "1415",
      dotColor: "primary",
      cardTitle: "The Battle of Agincourt",
      cardDescription: "King Henry V of England defeated the French at the Battle of Agincourt",
      image: "https://cdn.britannica.com/19/172519-050-F3B2578B/Battle-of-Agincourt.jpg"
    },
    {
      title: "1455",
      dotColor: "primary",
      cardTitle: "The Wars of the Roses",
      cardDescription: "The Wars of the Roses began between the House of Lancaster and the House of York. The Wars of the Roses were a series of battles fought between the House of Lancaster and the House of York. Both families were descended from King Edward III. The symbol of the House of Lancaster was a red rose and the symbol of the House of York was a white rose.",
      image: "https://assets.editorial.aetnd.com/uploads/2015/05/gettyimages-1330675795.jpg"
    },
    {
      title: "1485",
      dotColor: "primary",
      cardTitle: "The Battle of Bosworth Field",
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
      cardDescription: "King Edward VI became king of England, who was strongly Protestant.",
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
      cardDescription: "Queen Mary I became queen of England and was a devout Catholic.",
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
      cardDescription: "Queen Elizabeth I became queen of England",
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
      cardTitle: "Scottish Reformation - Protestantism",
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
      cardDescription: "The Spanish Armada was defeated.",
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
      cardDescription: "Elizabeth's cousin, James VI of Scotland became King James I of England",
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
      cardTitle: "The English Civil War started",
      cardDescription: "The English Civil War began between the Royalists (Cavaliers), who supported the king, and the Parliamentarians (Roundheads), who supported Parliament",
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
      cardTitle: "The English Civil War ended",
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
      cardTitle: "The Habeas Corpus Act",
      cardDescription: "The Habeas Corpus Act was passed by Parliament. Every prisoner has the right to a court hearing",
    },
    {
      title: "1688",
      dotColor: "primary",
      cardTitle: "The Glorious Revolution",
      cardDescription: "William of Orange invaded England and proclaimed himself as King William III of England. When William reached England, there was no resistance. He ruled jointly with his wife, Mary II, who was the daughter of King James II",
    },
    {
      title: "1689",
      dotColor: "primary",
      cardTitle: "The Bill of Rights",
      cardDescription: "The Bill of Rights was passed by Parliament. It confirmed the rights of Parliament and the limits of the king's power",
    },
    {
      title: "1690",
      dotColor: "primary",
      cardTitle: "Battle of the Boyne",
      cardDescription: "The Battle of the Boyne was fought between the forces of the deposed King James II of England and Ireland, and those of King William III. William III defeated James II, who fled to France",
    },
    {
      title: "1707",
      dotColor: "primary",
      cardTitle: "The Treaty of Union in Scotland (The Act of Union)",
      cardDescription: "The Treaty of Union in Scotland (The Act of Union) was passed by the Scottish and English Parliaments. It kept the Scottish legal and education systems and the Presbyterian Church of Scotland. It also created the Parliament of Great Britain",
    },
    {
      title: "1714",
      dotColor: "primary",
      cardTitle: "King George I",
      cardDescription: "King George I, who was a German, became the king of Great Britain",
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
      cardTitle: "The Rebellion of the clans",
      cardDescription: "The Rebellion of the clans was led by Bonnie Prince Charlie, the grandson of King James II, attempted to take back the throne from King George II.",
    },
    {
      title: "1746",
      dotColor: "primary",
      cardTitle: "The Battle of Culloden",
      cardDescription: "Bonnie Prince Charlie was defeated by the king's army at the Battle of Culloden. He escaped to Europe (France). This was the last battle to be fought on British soil.",
    },
    {
      title: "1776",
      dotColor: "primary",
      cardTitle: "The American War of Independence started",
      cardDescription: "The American War of Independence started. 13 American colonies declared their independence from Britain",
    },
    {
      title: "1783",
      dotColor: "primary",
      cardTitle: "The American War of Independence ended",
      cardDescription: "The American War of Independence ended. Britain recognised the independence of the United States of America",
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
      cardTitle: "The Battle of Trafalgar",
      cardDescription: "Admiral Nelson led British navy to fight against the French and Spanish navies at the Battle of Trafalgar. He was killed in the battle.",
    },
    {
      title: "1807",
      dotColor: "primary",
      cardTitle: "The Slave trade was abolished",
      cardDescription: "It became illegal to trade slaves in the British Empire",
    },
    {
      title: "1815",
      dotColor: "primary",
      cardTitle: "The Battle of Waterloo",
      cardDescription: "Emperor Napoleon of France was defeated by the Duke of Wellington at the Battle of Waterloo",
    },
    {
      title: "1833",
      dotColor: "primary",
      cardTitle: "The Emancipation Act",
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
      cardTitle: "The Crimean War",
      cardDescription: "The Crimean War started between Britain, France and Turkey on one side and Russia on the other side. It was extensively covered by media for the first time.",
    },
    {
      title: "1889",
      dotColor: "primary",
      cardTitle: "Women's Franchise League",
      cardDescription: "Emmeline Pankhurst set up the Women's Franchise League",
    },
    {
      title: "1895",
      dotColor: "primary",
      cardTitle: "The National Trust",
      cardDescription: "The National Trust was founded by 3 volunteers. It is a charity that protects historic places and green spaces in England, Wales and Northern Ireland.",
    },
    {
      title: "1899",
      dotColor: "primary",
      cardTitle: "The Boer War",
      cardDescription: "The Boer War started between Britain and the Boers (Dutch settlers from Netherlands) in South Africa",
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
      cardTitle: "The Home Rule Bill for Ireland",
      cardDescription: "Home Rule Bill for Ireland was passed by the British Parliament. It was suspended because of the First World War.",
    },
    {
      title: "1914",
      dotColor: "primary",
      cardTitle: "The First World War started",
      cardDescription: "Archduke Franz Ferdinand of Austria was assassinated on 28 June 1914. The First World War started between Britain, France and Russia on one side and Germany, Austria-Hungary and Turkey on the other side.",
    },
    {
      title: "1918",
      dotColor: "primary",
      cardTitle: "The First World War ended",
      cardDescription: "The First World War ended at 11am on 11 November 1918 (Armistice Day). Germany surrendered and the fighting stopped.",
    },
    {
      title: "1918",
      dotColor: "primary",
      cardTitle: "Right to vote for women (over 30)",
      cardDescription: "Women over 30 were given the right to vote",
    },
    {
      title: "1922",
      dotColor: "primary",
      cardTitle: "Ireland became two countries",
      cardDescription: "Ireland was divided into Northern Ireland and Southern Ireland",
    },
    {
      title: "1928",
      dotColor: "primary",
      cardTitle: "Right to vote for women (over 21)",
      cardDescription: "Women were given the right to vote at the age of 21, the same as men",
    },
    {
      title: "1929",
      dotColor: "primary",
      cardTitle: "The Great Depression",
      cardDescription: "The Great Depression started. It was a worldwide economic depression that lasted until the late 1930s.",
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
      cardTitle: "The Second World War started",
      cardDescription: "Hitler invaded Poland. The Second World War started between Britain and France on one side and Germany on the other side.",
    },
    {
      title: "1940",
      dotColor: "primary",
      cardTitle: "Winson Churchill",
      cardDescription: "Winson Churchill became Prime Minister",
    },
    {
      title: "1941",
      dotColor: "primary",
      cardTitle: "Germany invaded the Soviet Union",
      cardDescription: "Germany invaded the Soviet Union",
    },
    {
      title: "1941",
      dotColor: "primary",
      cardTitle: "The United State entered the war",
      cardDescription: "The United States entered the war when the Japanese bombed its naval base at Pearl Harbour in December 1941",
    },
    {
      title: "1944",
      dotColor: "primary",
      cardTitle: "D-Day",
      cardDescription: "Allied forces landed in Normandy, France",
    },
    {
      title: "1945",
      dotColor: "primary",
      cardTitle: "The Second World War ended",
      cardDescription: "The Second World War ended. Germany surrendered on 7 May 1945. Japan surrendered on 14 August 1945.",
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
      title: "1948",
      dotColor: "primary",
      cardTitle: "Second UK Olympics Games",
      cardDescription: "Second UK Olympics Games was held in London",
    },
    {
      title: "1949",
      dotColor: "primary",
      cardTitle: "Ireland became a republic",
      cardDescription: "Ireland became a republic and had its own government",
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
      cardTitle: "The Swinging Sixties",
      cardDescription: "The Swinging Sixties started. It was a youth-driven cultural revolution that took place in the United Kingdom during the mid-to-late 1960s",
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
      title: "10,000年前",
      dotColor: "primary",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Doggerland.svg/1200px-Doggerland.svg.png",
      cardTitle: "石器時代",
      cardDescription: "英國永久地與大陸由海峽分隔",
    },
    {
      title: "6,000年前",
      dotColor: "primary",
      cardTitle: "石器時代",
      cardDescription: "來自東南歐的第一批農民抵達英國",
    },
    {
      title: "4,000年前",
      dotColor: "primary",
      cardTitle: "石器時代",
      cardDescription: "英國人學會製作青銅工具和武器",
    },
    {
      title: "公元前55年",
      dotColor: "primary",
      image: "https://www.heritagedaily.com/wp-content/uploads/2021/05/cca.jpg",
      cardTitle: "凱撒入侵（未成功）",
      cardDescription: "凱撒於公元前55年率領羅馬軍隊入侵英國。",
      items: [
        {
          title: "凱撒被擊敗",
          description: "他被擊敗，但次年返回，佔領了英國南部的大部分地區。羅馬人稱該地為不列顛。",
        },
      ],
    },
    {
      title: "公元43年",
      dotColor: "primary",
      image: "https://static.wixstatic.com/media/8dcf0f_b86e7bab89e04240a09b104f3aac3f5b~mv2.jpg/v1/fill/w_640,h_960,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8dcf0f_b86e7bab89e04240a09b104f3aac3f5b~mv2.jpg",
      cardTitle: "克勞狄烏斯皇帝入侵（成功）",
      cardDescription: "克勞狄烏斯皇帝率領羅馬軍隊入侵英國",
      items: [
        {
          title: "克勞狄烏斯皇帝率領羅馬軍隊入侵英國",
          description: "克勞狄烏斯皇帝於公元43年率領羅馬軍隊入侵英國。羅馬人擊敗了英國部落並統治英國超過350年。他們建造了城鎮、道路、浴場和神廟。羅馬人還引入了新的植物、動物和作物。\n博狄卡反抗羅馬人。她領導伊塞尼部落反抗，因為他們受到羅馬人的嚴重虐待。羅馬人贏得了戰鬥，博狄卡去世。",
        },
        {
          title: '蘇格蘭仍未被征服',
          description: "哈德良皇帝在英格蘭北部建造了一道牆，以防止皮克特人入侵",
        },
      ],
    },
    {
      title: "公元410年",
      dotColor: "primary",
      image: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F1f6f4688-a688-11ea-a585-dcb14d2bcd47.jpg?crop=2362%2C2362%2C0%2C0",
      cardTitle: "羅馬軍隊離開英國",
      cardDescription: "羅馬軍隊離開英國去捍衛羅馬帝國的其他部分，從未返回。",
    },
    {
      title: "公元600年",
      dotColor: "primary",
      image: "https://i.pinimg.com/1200x/76/88/58/7688580da8d0760f011beffb31147ac5.jpg",
      cardTitle: "盎格魯-撒克遜人",
      cardDescription: "建立了盎格魯-撒克遜王國",
      items: [
        {
          title: "建立了盎格魯-撒克遜王國",
          description: "在英國建立了盎格魯-撒克遜王國。Angles、Saxons和Jutes從北海對面的歐洲來到。他們說相似的語言，信奉相似的神。盎格魯-撒克遜人在英國是主導的民族，持續了大約500年。",
        },
        {
          title: "基督教被帶到英國",
          description: "基督教由來自羅馬的傳教士帶到英國。最著名的是奧古斯丁，他於公元597年成為第一位坎特伯雷大主教。",
        },
      ],
    },
    {
      title: "公元789年",
      dotColor: "primary",
      image: "https://gameranx.com/wp-content/uploads/2021/12/assassins-creed-valhalla-update-1-4-1.large_-1024x576.webp",
      cardTitle: "來自丹麥和挪威的維京人襲擊英國",
      cardDescription: "威塞克斯的阿爾弗雷德大帝擊敗了維京人"
    },
    {
      title: "1066",
      dotColor: "primary",
      cardTitle: "諾曼征服",
      cardDescription: "這是英國的最後一次成功的外來入侵",
      image: "https://www.historic-uk.com/wp-content/uploads/2017/04/norman-conquest-of-britain.jpg",
      items: [
        {
          title: '諾曼底的威廉擊敗了英國的哈羅德二世國王',
          description: "諾曼底的威廉在黑斯廷斯戰役中擊敗了英國的哈羅德二世國王。威廉成為英國的國王，被稱為征服者威廉。他在英國各地建造了城堡，以控制他的新王國。",
        },
        {
          title: '末日審判書',
          description: "征服者威廉列出了所有在英國的城鎮和村莊。這些資訊被記錄在《末日審判書》中。",
        }
      ]
    },
    {
      title: "1215",
      dotColor: "primary",
      cardTitle: "大憲章",
      cardDescription: "約翰王簽署了大憲章。這是第一個限制國王權力和保護貴族權利的文件。",
      image: "https://cdn.britannica.com/28/144228-050-FB55C473/engraving-King-John-Magna-Carta-Runnymede-England-June-1215.jpg",
    },
    {
      title: "1284",
      dotColor: "primary",
      cardTitle: "英格兰的爱德华一世国王",
      cardDescription: "爱德华一世引入了《鲁德兰法令》，将威尔士并入英格兰。《鲁德兰法令》将威尔士划分为各个郡，并引入了英格兰法律。",
      image: "https://www.historic-uk.com/wp-content/uploads/2018/11/edward-I.jpg"
    },
    {
      title: "1314",
      dotColor: "primary",
      cardTitle: "罗伯特·布鲁斯",
      cardDescription: "由罗伯特·布鲁斯领导的苏格兰人在班诺克本战役中击败了英格兰人，苏格兰没有被英格兰征服。",
      image: "https://www.britishbattles.com/wp-content/uploads/2017/12/robert-de-bruce-kills-bohun-s-web-AAA.jpg"
    },
    {
      title: "1400",
      dotColor: "primary",
      cardTitle: "诺曼法语和盎格鲁-撒克逊英语变成英语",
      cardDescription: "诺曼法语和盎格鲁-撒克逊英语合并成为英语。在英格兰，官方文件开始用英语书写，英语也成为了皇家法庭和议会的首选语言。",
    },
    {
      title: "1415",
      dotColor: "primary",
      cardTitle: "阿金库尔战役",
      cardDescription: "英格兰的亨利五世国王在阿金库尔战役中击败了法国人。",
      image: "https://cdn.britannica.com/19/172519-050-F3B2578B/Battle-of-Agincourt.jpg"
    },
    {
      title: "1455",
      dotColor: "primary",
      cardTitle: "玫瑰戰爭",
      cardDescription: "玫瑰戰爭開始於蘭開斯特家族和約克家族之間。兩個家族都是來自愛德華三世國王的後裔。蘭開斯特家族的象徵是紅玫瑰，約克家族的象徵是白玫瑰。",
      image: "https://assets.editorial.aetnd.com/uploads/2015/05/gettyimages-1330675795.jpg"
    },
    {
      title: "1485",
      dotColor: "primary",
      cardTitle: "波茲沃斯戰場",
      cardDescription: "亨利·都鐸成為英格蘭的亨利七世國王。他通過嫁給約克的伊麗莎白，愛德華四世的女兒，結束了玫瑰戰爭。亨利七世是英格蘭的第一位都鐸國王。",
      image: "https://www.britishbattles.com/wp-content/uploads/2018/07/13-large_richard_iii.jpg"
    },
    {
      title: "1509",
      dotColor: "primary",
      cardTitle: "亨利八世國王",
      cardDescription: "亨利八世成為英格蘭國王",
      image: "https://www.onthisday.com/images/people/henry-viii.jpg",
      items: [
        {
          title: '建立英格蘭教會',
          description: "亨利八世建立了英格蘭教會。他這麼做是因為教宗不允許他與他的妻子凱瑟琳·阿拉岡離婚。"
        },
        {
          title: '威爾斯與英格蘭統一',
          description: "亨利八世將威爾斯與英格蘭統一。他給了他的兒子，愛德華，威爾斯王子的頭銜。"
        }
      ]
    },
    {
      title: "1547",
      dotColor: "primary",
      cardTitle: "愛德華六世",
      cardDescription: "堅定的新教徒愛德華六世成為英格蘭國王。",
      items: [
        {
          title: '公共禱告書',
          description: "愛德華六世引入了公共禱告書。這是英格蘭教會的一本服務書。"
        }
      ]
    },
    {
      title: "1553",
      dotColor: "primary",
      cardTitle: "瑪麗一世女王",
      cardDescription: "瑪麗一世成為英格蘭女王，她是一位虔誠的天主教徒。",
      items: [
        {
          title: '血腥瑪麗',
          description: "瑪麗一世是天主教徒。她試圖再次使英格蘭成為天主教國家。她使許多新教徒遭到殺害，因此被稱為血腥瑪麗。"
        }
      ]
    },
    {
      title: "1558",
      dotColor: "primary",
      cardTitle: "伊麗莎白一世女王",
      cardDescription: "伊麗莎白一世成為英格蘭女王",
      items: [
        {
          title: '伊麗莎白一世重建英格蘭教會',
          description: "伊麗莎白一世恢復了英格蘭教會。她使英格蘭再次成為新教國家。"
        }
      ]
    },
    {
      title: "1560",
      dotColor: "primary",
      cardTitle: "蘇格蘭的宗教改革 - 新教",
      cardDescription: "新教的蘇格蘭議會廢除了教宗在蘇格蘭的權威"
    },
    {
      title: "1564",
      dotColor: "primary",
      cardTitle: "威廉·莎士比亞",
      cardDescription: "威廉·莎士比亞出生於斯特拉福德"
    },
    {
      title: "1588",
      dotColor: "primary",
      cardTitle: "英國擊敗西班牙無敵艦隊",
      cardDescription: "西班牙無敵艦隊被擊敗。"
    },
    {
      title: "1603",
      dotColor: "primary",
      cardTitle: "伊麗莎白一世女王逝世",
      cardDescription: "伊麗莎白一世女王去世。她是英格蘭的最後一位都鐸王朝君主"
    },
    {
      title: "1603",
      dotColor: "primary",
      cardTitle: "英國的詹姆斯一世國王",
      cardDescription: "伊麗莎白的表親，蘇格蘭的詹姆斯六世成為英格蘭的詹姆斯一世國王",
      items: [
        {
          title: "聖經的授權版本",
          description: "詹姆斯一世國王授權了新的聖經翻譯。它被稱為詹姆斯國王版聖經。"
        },
        {
          title: "國王的神聖權利",
          description: "詹姆斯一世國王相信國王的神聖權利。他認為國王是由上帝直接任命來統治的。"
        }
      ]
    },
    {
      title: "1625",
      dotColor: "primary",
      cardTitle: "查理一世國王",
      cardDescription: "查理一世成為英格蘭國王"
    },
    {
      title: "1640",
      dotColor: "primary",
      cardTitle: "查理一世召回議會",
      cardDescription: "查理一世召回議會要求資金對抗蘇格蘭。但議會拒絕給他任何錢。"
    },
    {
      title: "1642",
      dotColor: "primary",
      cardTitle: "英國內戰開始",
      cardDescription: "英國內戰開始，皇家主義者（騎士）支持國王，而議會主義者（圓頭兵）支持議會",
      items: [
        {
          title: "國王的軍隊被擊敗",
          description: "國王的軍隊在Naseby戰役和Marston Moor戰役中被議會主義者擊敗。"
        }
      ]
    },
    {
      title: "1646",
      dotColor: "primary",
      cardTitle: "英國內戰結束",
      cardDescription: "議會主義者在英國內戰中擊敗了皇家主義者"
    },
    {
      title: "1649",
      dotColor: "primary",
      cardTitle: "查理一世被處決",
      cardDescription: "查理一世被處決。英格蘭成為共和國",
      items: [
        {
          title: "查理二世成為蘇格蘭國王",
          description: "查理二世成為蘇格蘭國王。他在Scone被加冕。"
        }
      ]
    },
    {
      title: "1660",
      dotColor: "primary",
      cardTitle: "議會邀請查理二世返回",
      cardDescription: "議會邀請查理二世從荷蘭返回，成為英格蘭國王"
    },
    {
      title: "1665",
      dotColor: "primary",
      cardTitle: "倫敦的大瘟疫爆發",
      cardDescription: ""
    },
    {
      title: "1679",
      dotColor: "primary",
      cardTitle: "《人身保護法案》",
      cardDescription: "議會通過《人身保護法案》。每名囚犯都有權進行法庭聽證。"
    },
    {
      title: "1688",
      dotColor: "primary",
      cardTitle: "光榮革命",
      cardDescription: "橙色的威廉入侵英格蘭，自稱為英格蘭的威廉三世國王。當威廉到達英格蘭時，沒有任何抵抗。他與他的妻子瑪麗二世共同統治，她是詹姆斯二世的女兒。"
    },
    {
      title: "1689",
      dotColor: "primary",
      cardTitle: "權利法案",
      cardDescription: "議會通過權利法案。確認議會的權利和國王權力的限制。"
    },
    {
      title: "1690",
      dotColor: "primary",
      cardTitle: "博因河之戰",
      cardDescription: "博因河之戰在被廢黜的英格蘭和愛爾蘭的詹姆斯二世的部隊之間以及英格蘭的威廉三世之間進行。威廉三世擊敗了詹姆斯二世，後者逃到法國。"
    },
    {
      title: "1707",
      dotColor: "primary",
      cardTitle: "蘇格蘭的聯合條約（聯合法案）",
      cardDescription: "蘇格蘭和英格蘭議會通過蘇格蘭的聯合條約（聯合法案）。保留蘇格蘭的法律和教育體系以及蘇格蘭的長老會。它還創建了大不列顛議會。"
    },
    {
      title: "1714",
      dotColor: "primary",
      cardTitle: "喬治一世",
      cardDescription: "喬治一世，他是德國人，成為了大不列顛的國王。"
    },
    {
      title: "1721",
      dotColor: "primary",
      cardTitle: "羅伯特·沃波爵士成為首位首相",
      cardDescription: "羅伯特·沃波爵士成為首位首相。"
    },
    {
      title: "1745",
      dotColor: "primary",
      cardTitle: "氏族的反叛",
      cardDescription: "氏族的反叛由詹姆斯二世的孫子、邦尼王子查理領導，試圖從喬治二世手中奪回王位。"
    },
    {
      title: "1746",
      dotColor: "primary",
      cardTitle: "寇洛登戰役",
      cardDescription: "邦尼王子查理在寇洛登戰役中被國王的軍隊打敗。他逃往歐洲(法國)。這是在英國土地上的最後一場戰鬥。"
    },
    {
      title: "1776",
      dotColor: "primary",
      cardTitle: "美國獨立戰爭開始",
      cardDescription: "美國獨立戰爭開始。13個美國殖民地宣布脫離英國獨立。"
    },
    {
      title: "1783",
      dotColor: "primary",
      cardTitle: "美國獨立戰爭結束",
      cardDescription: "美國獨立戰爭結束。英國承認美國的獨立。"
    },
    {
      title: "1801",
      dotColor: "primary",
      cardTitle: "愛爾蘭與大不列顛結合",
      cardDescription: "愛爾蘭與大不列顛結合。"
    },
    {
      title: "1805",
      dotColor: "primary",
      cardTitle: "特拉法爾加戰役",
      cardDescription: "納爾遜海軍上將在特拉法爾加戰役中領導英國海軍對抗法國和西班牙海軍。他在戰鬥中喪生。"
    },
    {
      title: "1807",
      dotColor: "primary",
      cardTitle: "奴隸貿易被廢止",
      cardDescription: "在大英帝國內貿易奴隸成為非法。"
    },
    {
      title: "1815",
      dotColor: "primary",
      cardTitle: "滑鐵盧戰役",
      cardDescription: "法國的拿破崙皇帝在滑鐵盧戰役中被威靈頓公爵打敗。"
    },
    {
      title: "1833",
      dotColor: "primary",
      cardTitle: "解放法案",
      cardDescription: "在大英帝國內奴隸制被廢止。"
    },
    {
      title: "1837",
      dotColor: "primary",
      cardTitle: "維多利亞女王",
      cardDescription: "維多利亞女王成為大不列顛女王。"
    },
    {
      title: "1853",
      dotColor: "primary",
      cardTitle: "克里米亞戰爭",
      cardDescription: "克里米亞戰爭在英國、法國和土耳其與俄羅斯之間開始。這是首次被媒體廣泛報導的。"
    },
    {
      title: "1889",
      dotColor: "primary",
      cardTitle: "婦女選舉聯盟",
      cardDescription: "Emmeline Pankhurst 成立了婦女選舉聯盟。"
    },
    {
      title: "1895",
      dotColor: "primary",
      cardTitle: "國家信託",
      cardDescription: "國家信託由3名志願者成立。它是一個在英格蘭、威爾斯和北愛爾蘭保護歷史場所和綠色空間的慈善組織。"
    },
    {
      title: "1899",
      dotColor: "primary",
      cardTitle: "布爾戰爭",
      cardDescription: "布爾戰爭在英國和布爾(來自荷蘭的荷蘭定居者)之間在南非開始。"
    },
    {
      title: "1908",
      dotColor: "primary",
      cardTitle: "首屆英國奧運會",
      cardDescription: "首屆英國奧運會在倫敦舉行。"
    },
    {
      title: "1913",
      dotColor: "primary",
      cardTitle: "愛爾蘭自治法案",
      cardDescription: "英國議會通過了愛爾蘭的自治法案。它由於第一次世界大戰而被暫停。"
    },
    {
      title: "1914",
      dotColor: "primary",
      cardTitle: "第一次世界大戰開始",
      cardDescription: "1914年6月28日，奧地利大公弗朗茲·斐迪南被暗殺。第一次世界大戰在英國、法國和俄羅斯與德國、奧匈帝國和土耳其之間爆發。",
    },
    {
      title: "1918",
      dotColor: "primary",
      cardTitle: "第一次世界大戰結束",
      cardDescription: "第一次世界大戰在1918年11月11日上午11點結束（休戰日）。德國投降，戰鬥停止。",
    },
    {
      title: "1918",
      dotColor: "primary",
      cardTitle: "30歲以上婦女獲得投票權",
      cardDescription: "30歲以上的婦女獲得了投票權",
    },
    {
      title: "1922",
      dotColor: "primary",
      cardTitle: "愛爾蘭分裂為兩國",
      cardDescription: "愛爾蘭被劃分為北愛爾蘭和南愛爾蘭",
    },
    {
      title: "1928",
      dotColor: "primary",
      cardTitle: "21歲以上婦女獲得投票權",
      cardDescription: "21歲的婦女獲得了和男性一樣的投票權",
    },
    {
      title: "1929",
      dotColor: "primary",
      cardTitle: "大蕭條",
      cardDescription: "大蕭條開始。這是一場持續到1930年代末的全球經濟衰退。",
    },
    {
      title: "1933",
      dotColor: "primary",
      cardTitle: "阿道夫·希特勒成為德國總理",
      cardDescription: "阿道夫·希特勒在德國掌權",
    },
    {
      title: "1939",
      dotColor: "primary",
      cardTitle: "第二次世界大戰開始",
      cardDescription: "希特勒入侵波蘭。第二次世界大戰在英法和德國之間爆發。",
    },
    {
      title: "1940",
      dotColor: "primary",
      cardTitle: "溫斯頓·邱吉爾",
      cardDescription: "溫斯頓·邱吉爾成為首相",
    },
    {
      title: "1941",
      dotColor: "primary",
      cardTitle: "德國入侵蘇聯",
      cardDescription: "德國入侵蘇聯",
    },
    {
      title: "1941",
      dotColor: "primary",
      cardTitle: "美國參戰",
      cardDescription: "1941年12月，日本轟炸珍珠港，美國參加了這場戰爭",
    },
    {
      title: "1944",
      dotColor: "primary",
      cardTitle: "D日",
      cardDescription: "盟軍登陸了法國諾曼底",
    },
    {
      title: "1945",
      dotColor: "primary",
      cardTitle: "第二次世界大戰結束",
      cardDescription: "第二次世界大戰結束。1945年5月7日，德國投降。1945年8月14日，日本投降。",
    },
    {
      title: "1947",
      dotColor: "primary",
      cardTitle: "9個國家獲得獨立",
      cardDescription: "9個國家獲得獨立，其中包括印度、巴基斯坦和錫蘭（現在的斯里蘭卡）",
    },
    {
      title: "1948",
      dotColor: "primary",
      cardTitle: "安尼林·貝文建立國家醫療服務系統（NHS）",
      cardDescription: "安尼林·貝文建立國家醫療服務系統（NHS）",
    },
    {
      title: "1948",
      dotColor: "primary",
      cardTitle: "第二次英國奧運會",
      cardDescription: "第二次英國奧運會在倫敦舉行",
    },
    {
      title: "1949",
      dotColor: "primary",
      cardTitle: "愛爾蘭成為共和國",
      cardDescription: "愛爾蘭成為共和國，擁有自己的政府",
    },
    {
      title: "1952",
      dotColor: "primary",
      cardTitle: "伊麗莎白二世女王",
      cardDescription: "伊麗莎白二世成為英國女王",
    },
    {
      title: "1957",
      dotColor: "primary",
      cardTitle: "歐洲經濟共同體（EEC）",
      cardDescription: "包括法國、西德和義大利在內的6個國家建立了歐洲經濟共同體（EEC）",
    },
    {
      title: "1960",
      dotColor: "primary",
      cardTitle: "搖擺的六十年代",
      cardDescription: "搖擺的六十年代開始。它是在1960年代中後期在英國發生的由青年驅動的文化革命",
    },
    {
      title: "1969",
      dotColor: "primary",
      cardTitle: "協和客機首次飛行",
      cardDescription: "英國和法國共同開發了協和客機，這是世界上第一架超音速客機",
    },
    {
      title: "1969",
      dotColor: "primary",
      cardTitle: "投票年齡降至18歲",
      cardDescription: "男女的投票年齡都降至18歲。",
    },
    {
      title: "1973",
      dotColor: "primary",
      cardTitle: "英國加入歐洲經濟共同體(EEC)",
      cardDescription: "英國加入歐洲經濟共同體(EEC)",
    },
    {
      title: "1976",
      dotColor: "primary",
      cardTitle: "協和客機的首次商業航班",
      cardDescription: "協和客機開始運送乘客",
    },
    {
      title: "1979",
      dotColor: "primary",
      cardTitle: "瑪格麗特·撒切爾成為首相",
      cardDescription: "瑪格麗特·撒切爾成為英國首位女性首相。她與美國總統羅納德·裡根緊密合作，結束了冷戰。",
    },
    {
      title: "1982",
      dotColor: "primary",
      cardTitle: "阿根廷入侵福克蘭群島",
      cardDescription: "阿根廷入侵福克蘭群島。英國派兵至福克蘭群島，擊敗了阿根廷軍隊。",
    },
    {
      title: "1990",
      dotColor: "primary",
      cardTitle: "伊拉克入侵",
      cardDescription: "伊拉克入侵科威特。英國派兵參加海灣戰爭。",
    },
    {
      title: "1998",
      dotColor: "primary",
      cardTitle: "耶穌受難節協定",
      cardDescription: "簽署了耶穌受難節協定。這是英國和愛爾蘭政府以及北愛爾蘭的大多數政黨之間的協定，關於北愛爾蘭的治理方式。",
    },
    {
      title: "2009",
      dotColor: "primary",
      cardTitle: "英國戰鬥部隊撤出伊拉克",
      cardDescription: "英國戰鬥部隊撤出伊拉克",
    },
    {
      title: "2012",
      dotColor: "primary",
      cardTitle: "英國第三屆奧運會",
      cardDescription: "英國第三屆奧運會在倫敦舉行",
    },
    {
      title: "2020",
      dotColor: "primary",
      cardTitle: "英國脫歐",
      cardDescription: "英國於2020年1月31日脫離歐盟",
    }
  ]
};

export default timelineItems;