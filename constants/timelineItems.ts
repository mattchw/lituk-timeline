import { TimelineItemModel } from 'react-chrono/dist/models/TimelineItemModel';

export const items: TimelineItemModel[] = [
  {
    title: "10,000 years ago",
    cardTitle: "Stone Age",
    cardSubtitle: "UK was permanently separated from the continent by the Channel",
    media: {
      type: "IMAGE",
      source: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Doggerland.svg/1200px-Doggerland.svg.png",
      },
    },
  },
  {
    title: "6,000 years ago",
    cardTitle: "Stone Age",
    cardSubtitle: "first farmers from south-east Europe arrived in Britain",
  },
  {
    title: "4,000 years ago",
    cardTitle: "Stone Age",
    cardSubtitle: "people in Britain learned to make bronze tools and weapons",
  },
  {
    title: "55 BC",
    cardTitle: "Jullius Caesar invasion",
    cardSubtitle: "Julius Caesar led a Roman invasion of Britain",
    cardDetailedText: "Julius Caesar led a Roman invasion of Britain in 55 BC. He was defeated, but returned the following year and conquered much of southern England. The Romans called the land Britannia.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://www.heritagedaily.com/wp-content/uploads/2021/05/cca.jpg",
      },
    },
  },
  {
    title: "AD 33",
    cardTitle: "Emperor Claudius invasion (success)",
    cardSubtitle: "Emperor Claudius led a Roman invasion of Britain",
    media: {
      type: "IMAGE",
      source: {
        url: "https://static.wixstatic.com/media/8dcf0f_b86e7bab89e04240a09b104f3aac3f5b~mv2.jpg/v1/fill/w_640,h_960,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8dcf0f_b86e7bab89e04240a09b104f3aac3f5b~mv2.jpg"
      }
    },
    items: [
      {
        cardTitle: 'Emperor Claudius led a Roman invasion of Britain',
        cardDetailedText: "Emperor Claudius led a Roman invasion of Britain in AD 43. The Romans defeated the British tribes and ruled Britain for more than 350 years. They built towns, roads, baths, and temples. The Romans also introduced new plants, animals, and crops.\nBoudicca fought against the Romans. She led a rebellion of the Iceni tribe after they were treated harshly by the Romans. The Romans won the battle and Boudicca died.",
      },
      {
        cardTitle: 'Scotland remained unconquered',
        cardDetailedText: "Emperor Hadrian built a wall in the north of England to keep out the Picts",
      },
    ],
  },
  {
    title: "AD 410",
    cardTitle: "Roman left Britain",
    cardSubtitle: "The Romans left Britain",
    media: {
      type: "IMAGE",
      source: {
        url: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F1f6f4688-a688-11ea-a585-dcb14d2bcd47.jpg?crop=2362%2C2362%2C0%2C0"
      }
    },
  },
  {
    title: "AD 600",
    cardTitle: "Anglo-Saxons",
    cardSubtitle: "Anglo-Saxon kingdoms were established",
    media: {
      type: "IMAGE",
      source: {
        url: "https://i.pinimg.com/1200x/76/88/58/7688580da8d0760f011beffb31147ac5.jpg"
      }
    },
    items: [
      {
        cardTitle: 'Anglo-Saxon kingdoms were established',
        cardDetailedText: "Anglo-Saxon kingdoms were established across England. The Angles, Saxons and Jutes came from Europe across the North Sea. They spoke similar languages and worshipped similar gods. The Anglo-Saxons were the dominant people in Britain for about 500 years.",
      },
      {
        cardTitle: 'Christianity was brought to Britain',
        cardDetailedText: [
          "St. Patrick was the patron saint of Ireland.",
          "Christianity was brought to Britain by missionaries from Rome. The most famous was Augustine, who became the first Archbishop of Canterbury in AD 597.",
        ]
      }
    ]
  },
  {
    title: "AD 789",
    cardTitle: "Viking from Denmark and Norway raid Britain",
    cardSubtitle: "King Alfred the Great of Wessex defeated the Vikings",
    media: {
      type: "IMAGE",
      source: {
        url: "https://gameranx.com/wp-content/uploads/2021/12/assassins-creed-valhalla-update-1-4-1.large_-1024x576.webp"
      }
    }
  },
  {
    title: "1066",
    cardTitle: "Norman Conquest",
    cardSubtitle: "last successful foreign invasion of Britain",
    media: {
      type: "IMAGE",
      source: {
        url: "https://www.historic-uk.com/wp-content/uploads/2017/04/norman-conquest-of-britain.jpg"
      }
    },
    items: [
      {
        cardTitle: 'William, Duke of Normandy, defeated King Harold II of England',
        cardDetailedText: "William, Duke of Normandy, defeated King Harold II of England at the Battle of Hastings. William became king of England and is known as William the Conqueror. He built castles all over England to control his new kingdom.",
      },
      {
        cardTitle: 'Domesday Book',
        cardDetailedText: "William the Conqueror ordered a survey of all the land in England. The information was recorded in the Domesday Book.",
      }
    ]
  },
  {
    title: "1215",
    cardTitle: "Magna Carta",
    cardSubtitle: "Magna Carta was signed by King John",
    cardDetailedText: "Magna Carta was signed by King John at Runnymede near London. It was the first document to limit the powers of the king and protect the rights of the people.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://cdn.britannica.com/28/144228-050-FB55C473/engraving-King-John-Magna-Carta-Runnymede-England-June-15-1215.jpg"
      }
    },
  },
  {
    title: "1284",
    cardTitle: "King Edward I of England",
    cardSubtitle: "King Edward I introduced the Statute of Rhuddlan",
    cardDetailedText: "King Edward I introduced the Statute of Rhuddlan, which annexed Wales to England. The Statute of Rhuddlan divided Wales into counties and introduced English law.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://www.historic-uk.com/wp-content/uploads/2018/11/edward-I.jpg"
      }
    },
  },
  {
    title: "1314",
    cardTitle: "Robert the Bruce",
    cardSubtitle: "Robert the Bruce defeated the English at the Battle of Bannockburn",
    cardDetailedText: "King Edward I introduced the Statute of Rhuddlan, which annexed Wales to England. The Statute of Rhuddlan divided Wales into counties and introduced English law.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://www.britishbattles.com/wp-content/uploads/2017/12/robert-de-bruce-kills-bohun-s-web-AAA.jpg"
      }
    },
  },
  {
    title: "1400",
    cardTitle: "Norman French and Angle-Saxon English became English",
    cardSubtitle: "Norman French and Angle-Saxon English became English",
  },
  {
    title: "1415",
    cardTitle: "Battle of Agincourt",
    cardSubtitle: "King Henry V of England defeated the French at the Battle of Agincourt",
    media: {
      type: "IMAGE",
      source: {
        url: "https://cdn.britannica.com/19/172519-050-F3B2578B/Battle-of-Agincourt.jpg"
      }
    },
  },
  {
    title: "1455",
    cardTitle: "Wars of the Roses",
    cardSubtitle: "Wars of the Roses began between the House of Lancaster and the House of York",
    cardDetailedText: "Wars of the Roses began between the House of Lancaster and the House of York. The Wars of the Roses were a series of battles fought between the House of Lancaster and the House of York. Both families were descended from King Edward III. The symbol of the House of Lancaster was a red rose and the symbol of the House of York was a white rose.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://assets.editorial.aetnd.com/uploads/2015/05/gettyimages-1330675795.jpg"
      }
    },
  },
  {
    title: "1485",
    cardTitle: "Battle of Bosworth",
    cardSubtitle: "Henry Tudor became King Henry VII of England",
    cardDetailedText: "Henry Tudor became King Henry VII of England. He ended the Wars of the Roses by marrying Elizabeth of York, the daughter of Edward IV. Henry VII was the first Tudor king of England.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://www.britishbattles.com/wp-content/uploads/2018/07/13-large_richard_iii.jpg"
      }
    },
  },
  {
    title: "1509",
    cardTitle: "King Henry VIII",
    cardSubtitle: "King Henry VIII became king of England",
    cardDetailedText: [
      "King Henry VIII became king of England. He was the second son of Henry VII and Elizabeth of York. He married six times and had three children who ruled England after him: Edward VI, Mary I and Elizabeth I.",
      "established the Church of England to divorce his first wife, Catherine of Aragon, and marry his second wife, Anne Boleyn",
      "Wales was formally united with England by the Act for the Government of Wales",
    ],
    media: {
      type: "IMAGE",
      source: {
        url: "https://www.onthisday.com/images/people/henry-viii.jpg"
      }
    },
  },
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  },
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  },
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  },
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  },
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  },
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  },
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  },
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  }
];