const bouquets = [
  {
    id: "SR-001",
    name: "紫粉心愿",
    categories: ["生日", "浪漫"],
    price: 180,
    image: "images/birthday/birthday-180.jpg",
    description: "粉紫与奶白交织的温柔花束，把生日祝福变成一场浪漫的小惊喜。",
    materials: "粉玫瑰、紫玫瑰、白玫瑰、洋桔梗、紫罗兰",
  },
  {
    id: "SR-002",
    name: "梦幻晴空",
    categories: ["生日", "浪漫"],
    price: 218,
    image: "images/birthday/birthday-218-a.jpg",
    description: "粉、紫、蓝三色轻盈相遇，像晴空下的一场梦，明亮又充满仪式感。",
    materials: "玫瑰、百合、剑兰、紫罗兰、康乃馨",
  },
  {
    id: "SR-003",
    name: "炽热偏爱",
    categories: ["生日", "浪漫"],
    price: 218,
    image: "images/birthday/birthday-218-b.jpg",
    description: "浓烈红玫瑰搭配银灰包装，把坚定的偏爱和热烈祝福一次说尽。",
    materials: "红玫瑰、银色永生玫瑰",
  },
  {
    id: "SR-004",
    name: "暖阳祝歌",
    categories: ["生日", "浪漫"],
    price: 260,
    image: "images/birthday/birthday-260-a.jpg",
    description: "柔和裸粉色调配上舒展花枝，温暖大气，适合认真庆祝的重要生日。",
    materials: "粉玫瑰、蝴蝶兰、剑兰、红掌、季节配花",
  },
  {
    id: "XM-002",
    name: "温柔岁月",
    category: "送长辈",
    price: 328,
    image:
      "https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?auto=format&fit=crop&w=900&q=85",
    description: "温柔雅致的粉紫色系，表达感谢、关心和长久陪伴。",
    materials: "康乃馨、洋桔梗、紫罗兰、尤加利叶",
  },
  {
    id: "XM-003",
    name: "怦然心动",
    category: "浪漫",
    price: 398,
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=85",
    description: "热烈却不张扬，适合认真地说一句喜欢或想念。",
    materials: "红玫瑰、郁金香、洋牡丹、季节配花",
  },
  {
    id: "XM-004",
    name: "晴日散步",
    category: "日常",
    price: 168,
    image:
      "https://images.unsplash.com/photo-1509719662287-1413677a72a6?auto=format&fit=crop&w=900&q=85",
    description: "像晴天散步一样轻松的小花束，适合送朋友，也适合送自己。",
    materials: "小雏菊、洋甘菊、喷泉草、季节配花",
  },
  {
    id: "SR-005",
    name: "珍珠公主",
    categories: ["生日", "浪漫"],
    price: 260,
    image: "images/birthday/birthday-260-b.jpg",
    description: "大束浅粉玫瑰与珍珠链相映，精致甜美，为她准备一场公主般的生日。",
    materials: "浅粉玫瑰、珍珠装饰",
  },
  {
    id: "SR-006",
    name: "云朵蜜桃",
    categories: ["生日", "浪漫"],
    price: 280,
    image: "images/birthday/birthday-280.jpg",
    description: "轻柔粉色像蓬松云朵，甜而不腻，把温柔的生日心意装得满满当当。",
    materials: "粉色季节花材、紫罗兰、季节配花",
  },
  {
    id: "XR-001",
    name: "柔光祝愿",
    categories: ["生日", "浪漫"],
    price: 168,
    image: "images/round-2/round2-168.jpg",
    description: "粉白花材清透柔和，像晨光一样温柔，适合送上一份不张扬却真挚的祝福。",
    materials: "粉玫瑰、白玫瑰、蝴蝶兰、紫罗兰",
  },
  {
    id: "XR-002",
    name: "春日白桃",
    categories: ["生日", "浪漫"],
    price: 198,
    image: "images/round-2/round2-198-a.jpg",
    description: "浅粉玫瑰与白色花材轻盈舒展，像春日白桃般清甜明亮。",
    materials: "粉玫瑰、非洲菊、剑兰、紫罗兰、季节配花",
  },
  {
    id: "XR-003",
    name: "甜心陪伴",
    categories: ["生日", "浪漫"],
    price: 198,
    image: "images/round-2/round2-198-b.jpg",
    description: "粉玫瑰、大蝴蝶结与可爱玩偶组合，适合把生日惊喜和甜甜心意一起送达。",
    materials: "粉玫瑰、玩偶与蝴蝶结装饰",
  },
  {
    id: "XR-004",
    name: "芍药初夏",
    categories: ["生日", "浪漫"],
    price: 268,
    image: "images/round-2/round2-268-a.jpg",
    description: "饱满芍药配上柔软蝴蝶结，浪漫盛放，带来初夏般明媚的好心情。",
    materials: "粉芍药或白芍药、蝴蝶结装饰",
  },
  {
    id: "XR-005",
    name: "蜜桃庆典",
    categories: ["生日", "浪漫"],
    price: 268,
    image: "images/round-2/round2-268-b.jpg",
    description: "蜜桃色玫瑰与蝴蝶兰层次丰盈，为重要的生日准备一场温暖庆典。",
    materials: "蜜桃玫瑰、蝴蝶兰、紫罗兰、蓝色配花",
  },
  {
    id: "XR-006",
    name: "暖心问候",
    categories: ["送长辈", "探望慰问"],
    subcategories: ["母亲节"],
    price: 198,
    image: "images/round-2/mothers-day-visit-198.jpg",
    description: "粉色康乃馨温柔又体贴，适合母亲节，也适合探望时送上一份暖心问候。",
    materials: "粉色康乃馨、蝴蝶兰",
  },
  {
    id: "XR-007",
    name: "蜜桃告白",
    categories: ["生日", "浪漫"],
    subcategories: ["情人节"],
    price: 198,
    image: "images/round-2/valentine-birthday-198.jpg",
    description: "一整束蜜桃玫瑰甜而热烈，适合生日祝福，也适合认真说出喜欢。",
    materials: "蜜桃色玫瑰、蝴蝶结装饰",
  },
  {
    id: "XR-008",
    name: "热烈心动",
    categories: ["生日", "浪漫"],
    subcategories: ["情人节"],
    price: 198,
    prices: { 情人节: 218 },
    image: "images/round-2/valentine-218-birthday-198.jpg",
    description: "浓烈红玫瑰搭配大蝴蝶结，生日时热闹，情人节时更显坚定心意。",
    materials: "红玫瑰、蝴蝶结装饰",
  },
  {
    id: "XR-009",
    name: "紫色关怀",
    categories: ["生日", "探望慰问"],
    price: 218,
    image: "images/round-2/birthday-visit-218.jpg",
    description: "紫粉色调温柔清新，既适合庆祝生日，也适合探望时表达关怀。",
    materials: "康乃馨、洋桔梗、紫罗兰、季节配花",
  },
  {
    id: "XM-006",
    name: "白色呼吸",
    category: "日常",
    price: 238,
    image:
      "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=900&q=85",
    description: "干净克制的白绿色系，让家里多一点安静与自然。",
    materials: "白玫瑰、洋桔梗、尤加利叶、季节配花",
  },
  {
    id: "XM-007",
    name: "生意兴隆",
    category: "开业乔迁",
    subcategory: "新店开业",
    price: 688,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85",
    description: "明亮大气的开业花礼，为新店送上一份热闹又真诚的祝福。",
    materials: "向日葵、红掌、百合、季节配花",
  },
  {
    id: "XM-008",
    name: "新居之喜",
    category: "开业乔迁",
    subcategory: "乔迁新居",
    price: 368,
    image:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=85",
    description: "自然清新的乔迁花礼，为新家添一份温暖与生机。",
    materials: "蝴蝶兰、百合、尤加利叶、季节配花",
  },
  {
    id: "XM-009",
    name: "纯白誓言",
    category: "婚礼",
    subcategory: "新娘手捧花",
    price: 598,
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=85",
    description: "轻盈优雅的新娘手捧花，为重要时刻留下温柔的注脚。",
    materials: "白玫瑰、洋桔梗、铃兰、尤加利叶",
  },
  {
    id: "XM-010",
    name: "冬日祝福",
    category: "节日",
    subcategory: "圣诞节",
    price: 298,
    image:
      "https://images.unsplash.com/photo-1548094967-e25a127d1f6d?auto=format&fit=crop&w=900&q=85",
    description: "带着松木香气的节日花礼，把冬日祝福送到身边。",
    materials: "红玫瑰、松枝、冬青果、棉花",
  },
];

const categoryChildren = {
  开业乔迁: ["新店开业", "乔迁新居"],
  婚礼: ["头车花", "跟车花", "新娘手捧花", "婚礼布置花艺"],
  节日: [
    "情人节",
    "七夕",
    "母亲节",
    "父亲节",
    "儿童节",
    "教师节",
    "清明节",
    "中秋节",
    "圣诞节",
    "春节",
  ],
};

const grid = document.querySelector("#bouquet-grid");
const dialog = document.querySelector("#product-dialog");
const subfilters = document.querySelector("#subfilters");
let selectedBouquet = null;
let activeFilter = "全部";

function bouquetCategories(bouquet) {
  return bouquet.categories || [bouquet.category];
}

function bouquetSubcategories(bouquet) {
  return bouquet.subcategories || (bouquet.subcategory ? [bouquet.subcategory] : []);
}

function bouquetPrice(bouquet, filter = activeFilter) {
  return bouquet.prices?.[filter] || bouquet.price;
}

function bouquetLabels(bouquet) {
  return [...bouquetCategories(bouquet), ...bouquetSubcategories(bouquet)].join(" - ");
}

function renderBouquets(filter = "全部") {
  activeFilter = filter;
  const visible =
    filter === "全部"
      ? bouquets
      : bouquets.filter(
          (bouquet) =>
            bouquetCategories(bouquet).includes(filter) ||
            bouquetSubcategories(bouquet).includes(filter),
        );

  grid.innerHTML = visible.length
    ? visible
    .map(
      (bouquet) => `
        <article class="bouquet-card" data-id="${bouquet.id}" tabindex="0">
          <img src="${bouquet.image}" alt="${bouquet.name}花束" loading="lazy" />
          <div class="bouquet-info">
            <div>
              <h3>${bouquet.name}</h3>
              <p>${bouquetLabels(bouquet)} · ${bouquet.id}</p>
            </div>
            <strong>¥${bouquetPrice(bouquet, filter)}</strong>
          </div>
        </article>
      `,
    )
    .join("")
    : '<p class="empty-state">这个分类的作品正在整理中，欢迎联系花店定制。</p>';
}

function renderSubfilters(category) {
  const children = categoryChildren[category];
  if (!children) {
    subfilters.classList.remove("visible");
    subfilters.innerHTML = "";
    return;
  }

  subfilters.innerHTML = children
    .map(
      (child) =>
        `<button class="subfilter" data-filter="${child}">${child}</button>`,
    )
    .join("");
  subfilters.classList.add("visible");
}

function openProduct(id) {
  selectedBouquet = bouquets.find((bouquet) => bouquet.id === id);
  document.querySelector("#dialog-image").src = selectedBouquet.image;
  document.querySelector("#dialog-image").alt = `${selectedBouquet.name}花束`;
  document.querySelector("#dialog-tag").textContent =
    `${bouquetLabels(selectedBouquet)} · ${selectedBouquet.id}`;
  document.querySelector("#dialog-name").textContent = selectedBouquet.name;
  document.querySelector("#dialog-description").textContent =
    selectedBouquet.description;
  document.querySelector("#dialog-materials").textContent =
    `参考花材：${selectedBouquet.materials}`;
  document.querySelector("#dialog-price").textContent =
    `¥${bouquetPrice(selectedBouquet)}`;
  document.querySelector("#copy-tip").textContent = "";
  dialog.showModal();
}

document.querySelector(".filters").addEventListener("click", (event) => {
  const button = event.target.closest(".filter");
  if (!button) return;

  document.querySelectorAll(".filter").forEach((filter) => {
    filter.classList.toggle("active", filter === button);
  });
  renderSubfilters(button.dataset.filter);
  renderBouquets(button.dataset.filter);
});

subfilters.addEventListener("click", (event) => {
  const button = event.target.closest(".subfilter");
  if (!button) return;

  document.querySelectorAll(".subfilter").forEach((filter) => {
    filter.classList.toggle("active", filter === button);
  });
  renderBouquets(button.dataset.filter);
});

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".bouquet-card");
  if (card) openProduct(card.dataset.id);
});

grid.addEventListener("keydown", (event) => {
  const card = event.target.closest(".bouquet-card");
  if (card && (event.key === "Enter" || event.key === " ")) {
    openProduct(card.dataset.id);
  }
});

document.querySelector("#dialog-close").addEventListener("click", () => {
  dialog.close();
});

document.querySelector("#order-button").addEventListener("click", async () => {
  const message = `你好，我想咨询花束「${selectedBouquet.name}」（编号：${selectedBouquet.id}，参考价：¥${bouquetPrice(selectedBouquet)}），请问近期可以预订吗？`;

  try {
    await navigator.clipboard.writeText(message);
    document.querySelector("#copy-tip").textContent =
      "咨询文案已复制，可以粘贴发给花店。";
  } catch {
    document.querySelector("#copy-tip").textContent = message;
  }
});

renderBouquets();
