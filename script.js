const legacyBouquets = [
  {
    id: "SR-001",
    name: "紫粉心愿",
    categories: ["生日", "浪漫"],
    price: 180,
    image: "birthday-180.jpg",
    description: "粉紫与奶白交织的温柔花束，把生日祝福变成一场浪漫的小惊喜。",
    materials: "粉玫瑰、紫玫瑰、白玫瑰、洋桔梗、紫罗兰",
  },
  {
    id: "SR-002",
    name: "梦幻晴空",
    categories: ["生日", "浪漫"],
    price: 218,
    image: "birthday-218-a.jpg",
    description: "粉、紫、蓝三色轻盈相遇，像晴空下的一场梦，明亮又充满仪式感。",
    materials: "玫瑰、百合、剑兰、紫罗兰、康乃馨",
  },
  {
    id: "SR-003",
    name: "炽热偏爱",
    categories: ["生日", "浪漫"],
    price: 218,
    image: "birthday-218-b.jpg",
    description: "浓烈红玫瑰搭配银灰包装，把坚定的偏爱和热烈祝福一次说尽。",
    materials: "红玫瑰、银色永生玫瑰",
  },
  {
    id: "SR-004",
    name: "暖阳祝歌",
    categories: ["生日", "浪漫"],
    price: 260,
    image: "birthday-260-a.jpg",
    description: "柔和裸粉色调配上舒展花枝，温暖大气，适合认真庆祝的重要生日。",
    materials: "粉玫瑰、蝴蝶兰、剑兰、红掌、季节配花",
  },
  {
    id: "SR-005",
    name: "珍珠公主",
    categories: ["生日", "浪漫"],
    price: 260,
    image: "birthday-260-b.jpg",
    description: "大束浅粉玫瑰与珍珠链相映，精致甜美，为她准备一场公主般的生日。",
    materials: "浅粉玫瑰、珍珠装饰",
  },
  {
    id: "SR-006",
    name: "云朵蜜桃",
    categories: ["生日", "浪漫"],
    price: 280,
    image: "birthday-280.jpg",
    description: "轻柔粉色像蓬松云朵，甜而不腻，把温柔的生日心意装得满满当当。",
    materials: "粉色季节花材、紫罗兰、季节配花",
  },
  {
    id: "XR-001",
    name: "柔光祝愿",
    categories: ["生日", "浪漫"],
    price: 168,
    image: "round2-168.jpg",
    description: "粉白花材清透柔和，像晨光一样温柔，适合送上一份不张扬却真挚的祝福。",
    materials: "粉玫瑰、白玫瑰、蝴蝶兰、紫罗兰",
  },
  {
    id: "XR-002",
    name: "春日白桃",
    categories: ["生日", "浪漫"],
    price: 198,
    image: "round2-198-a.jpg",
    description: "浅粉玫瑰与白色花材轻盈舒展，像春日白桃般清甜明亮。",
    materials: "粉玫瑰、非洲菊、剑兰、紫罗兰、季节配花",
  },
  {
    id: "XR-003",
    name: "甜心陪伴",
    categories: ["生日", "浪漫"],
    price: 198,
    image: "round2-198-b.jpg",
    description: "粉玫瑰、大蝴蝶结与可爱玩偶组合，适合把生日惊喜和甜甜心意一起送达。",
    materials: "粉玫瑰、玩偶与蝴蝶结装饰",
  },
  {
    id: "XR-004",
    name: "芍药初夏",
    categories: ["生日", "浪漫"],
    price: 268,
    image: "round2-268-a.jpg",
    description: "饱满芍药配上柔软蝴蝶结，浪漫盛放，带来初夏般明媚的好心情。",
    materials: "粉芍药或白芍药、蝴蝶结装饰",
  },
  {
    id: "XR-005",
    name: "蜜桃庆典",
    categories: ["生日", "浪漫"],
    price: 268,
    image: "round2-268-b.jpg",
    description: "蜜桃色玫瑰与蝴蝶兰层次丰盈，为重要的生日准备一场温暖庆典。",
    materials: "蜜桃玫瑰、蝴蝶兰、紫罗兰、蓝色配花",
  },
  {
    id: "XR-006",
    name: "暖心问候",
    categories: ["送长辈", "探望慰问"],
    subcategories: ["母亲节"],
    price: 198,
    image: "mothers-day-visit-198.jpg",
    description: "粉色康乃馨温柔又体贴，适合母亲节，也适合探望时送上一份暖心问候。",
    materials: "粉色康乃馨、蝴蝶兰",
  },
  {
    id: "XR-007",
    name: "蜜桃告白",
    categories: ["生日", "浪漫"],
    subcategories: ["情人节"],
    price: 198,
    image: "valentine-birthday-198.jpg",
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
    image: "valentine-218-birthday-198.jpg",
    description: "浓烈红玫瑰搭配大蝴蝶结，生日时热闹，情人节时更显坚定心意。",
    materials: "红玫瑰、蝴蝶结装饰",
  },
  {
    id: "XR-009",
    name: "紫色关怀",
    categories: ["生日", "探望慰问"],
    price: 218,
    image: "birthday-visit-218.jpg",
    description: "紫粉色调温柔清新，既适合庆祝生日，也适合探望时表达关怀。",
    materials: "康乃馨、洋桔梗、紫罗兰、季节配花",
  },
];

const bouquetSource = window.catalogBouquets
  ? [...legacyBouquets, ...window.catalogBouquets]
  : legacyBouquets;

const bouquets = bouquetSource.map((bouquet) => {
  const categories = (bouquet.categories || [bouquet.category]).filter(
    (category) => category && category !== "送长辈",
  );
  let subcategories = [
    ...(bouquet.subcategories ||
      (bouquet.subcategory ? [bouquet.subcategory] : [])),
  ].map((subcategory) =>
    subcategory === "婚礼布置花艺" ? "婚礼布置" : subcategory,
  );

  if (bouquet.id === "HB-048") {
    return {
      ...bouquet,
      name: "婚车装饰",
      categories: ["婚礼"],
      subcategories: ["婚车装饰"],
      description: "婚车装饰实拍案例，具体尺寸、花材与现场方案可联系花店沟通。",
      materials: "按现场方案配置",
    };
  }

  if (categories.includes("生日")) {
    subcategories.push(bouquet.name.includes("布置") ? "生日布置" : "生日花束");
  }
  if (categories.includes("浪漫")) {
    subcategories.push(bouquet.name.includes("布置") ? "浪漫布置" : "浪漫花束");
  }
  if (categories.includes("开业乔迁")) {
    subcategories = subcategories.filter(
      (subcategory) => !["新店开业", "乔迁、开工"].includes(subcategory),
    );
    subcategories.push(bouquet.name.includes("开业") ? "花篮" : "花束");
  }

  return { ...bouquet, categories, subcategories: [...new Set(subcategories)] };
});

const categoryChildren = {
  生日: ["生日花束", "生日布置"],
  浪漫: ["浪漫花束", "浪漫布置"],
  开业乔迁: ["花篮", "花束"],
  婚礼: ["婚车装饰", "新娘手捧花", "婚礼布置"],
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
const contactDialog = document.querySelector("#contact-dialog");
const subfilters = document.querySelector("#subfilters");
const shortlistBar = document.querySelector("#shortlist-bar");
const shortlistDialog = document.querySelector("#shortlist-dialog");
const shortlistItems = document.querySelector("#shortlist-items");
const shortlistCount = document.querySelector("#shortlist-count");
const orderButton = document.querySelector("#order-button");
let selectedBouquet = null;
let activeFilter = "日常";
let shortlist = JSON.parse(localStorage.getItem("flowerShortlist") || "[]")
  .filter((id) => bouquets.some((bouquet) => bouquet.id === id))
  .slice(0, 6);

function bouquetCategories(bouquet) {
  return bouquet.categories || [bouquet.category];
}

function bouquetSubcategories(bouquet) {
  return bouquet.subcategories || (bouquet.subcategory ? [bouquet.subcategory] : []);
}

function bouquetPrice(bouquet, filter = activeFilter) {
  return bouquet.prices?.[filter] || bouquet.price;
}

function priceText(bouquet, filter = activeFilter) {
  const price = bouquetPrice(bouquet, filter);
  return price ? `¥${price}` : "价格面议";
}

function bouquetLabels(bouquet) {
  return [...bouquetCategories(bouquet), ...bouquetSubcategories(bouquet)].join(" - ");
}

function saveShortlist() {
  localStorage.setItem("flowerShortlist", JSON.stringify(shortlist));
  shortlistCount.textContent = shortlist.length;
  shortlistBar.classList.toggle("visible", shortlist.length > 0);
}

function updateOrderButton() {
  const isSelected = selectedBouquet && shortlist.includes(selectedBouquet.id);
  orderButton.textContent = isSelected ? "已加入备选" : "加入备选";
  orderButton.classList.toggle("selected", isSelected);
}

function renderShortlist() {
  const selected = shortlist
    .map((id) => bouquets.find((bouquet) => bouquet.id === id))
    .filter(Boolean);

  shortlistItems.innerHTML = selected.length
    ? selected
        .map(
          (bouquet) => `
            <article class="shortlist-item">
              <img src="${bouquet.image}" alt="${bouquet.name}" />
              <div>
                <h3>${bouquet.name}</h3>
                <p>${bouquet.id} · ${priceText(bouquet, "全部")}</p>
              </div>
              <button class="remove-pick" type="button" data-remove-id="${bouquet.id}">移出</button>
            </article>
          `,
        )
        .join("")
    : '<p class="shortlist-empty">还没有加入备选的花，先去挑几款喜欢的吧。</p>';
}

function renderBouquets(filter = "日常") {
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
          <img
            src="${bouquet.image}"
            alt="${bouquet.name}花束"
            loading="lazy"
            decoding="async"
          />
          <div class="bouquet-info">
            <div>
              <h3>${bouquet.name}</h3>
              <p>${bouquetLabels(bouquet)} · ${bouquet.id}</p>
            </div>
            <strong>${priceText(bouquet, filter)}</strong>
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
    return null;
  }

  subfilters.innerHTML = children
    .map(
      (child, index) =>
        `<button class="subfilter${index === 0 ? " active" : ""}" data-filter="${child}">${child}</button>`,
    )
    .join("");
  subfilters.classList.add("visible");
  return children[0];
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
    priceText(selectedBouquet);
  document.querySelector("#copy-tip").textContent = "";
  updateOrderButton();
  dialog.showModal();
}

document.querySelector(".filters").addEventListener("click", (event) => {
  const button = event.target.closest(".filter");
  if (!button) return;

  document.querySelectorAll(".filter").forEach((filter) => {
    filter.classList.toggle("active", filter === button);
  });
  const firstSubfilter = renderSubfilters(button.dataset.filter);
  renderBouquets(firstSubfilter || button.dataset.filter);
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

document.querySelector("#contact-open").addEventListener("click", () => {
  document.querySelector("#contact-tip").textContent = "";
  contactDialog.showModal();
});

document.querySelector("#custom-contact-open").addEventListener("click", () => {
  document.querySelector("#contact-tip").textContent =
    "可先复制定制需求模板，再添加微信联系花店。";
  contactDialog.showModal();
});

document.querySelector("#contact-close").addEventListener("click", () => {
  contactDialog.close();
});

document.querySelector("#custom-template-copy").addEventListener("click", async () => {
  const template = [
    "你好，我想咨询定制花束：",
    "赠送对象：",
    "使用日期：",
    "预算：",
    "喜欢的颜色：",
    "配送或自取：",
    "其他要求：",
  ].join("\n");
  try {
    await navigator.clipboard.writeText(template);
    document.querySelector("#contact-tip").textContent =
      "定制需求模板已复制，可粘贴到微信填写。";
  } catch {
    document.querySelector("#contact-tip").textContent =
      "请添加微信后，告诉我们赠送对象、日期、预算和喜欢的颜色。";
  }
});

document.querySelector("#wechat-copy").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("wwhf1371856693");
    document.querySelector("#contact-tip").textContent = "微信号已复制";
  } catch {
    document.querySelector("#contact-tip").textContent =
      "微信号：wwhf1371856693，请长按复制";
  }
});

document.querySelector("#address-view").addEventListener("click", () => {
  contactDialog.close();
  setTimeout(() => {
    window.location.hash = "store-address";
  }, 180);
});

orderButton.addEventListener("click", () => {
  const existingIndex = shortlist.indexOf(selectedBouquet.id);
  if (existingIndex >= 0) {
    shortlist.splice(existingIndex, 1);
    document.querySelector("#copy-tip").textContent = "已从备选中移出。";
  } else if (shortlist.length >= 6) {
    document.querySelector("#copy-tip").textContent =
      "最多可保留 6 款，请先在“我的备选”中移出一款。";
    return;
  } else {
    shortlist.push(selectedBouquet.id);
    document.querySelector("#copy-tip").textContent = "已加入我的备选。";
  }
  saveShortlist();
  updateOrderButton();
});

shortlistBar.addEventListener("click", () => {
  renderShortlist();
  document.querySelector("#form-tip").textContent = "";
  shortlistDialog.showModal();
});

document.querySelector("#shortlist-close").addEventListener("click", () => {
  shortlistDialog.close();
});

shortlistItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-id]");
  if (!button) return;
  shortlist = shortlist.filter((id) => id !== button.dataset.removeId);
  saveShortlist();
  renderShortlist();
});

function loadConsultImage(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
}

function drawWrappedText(context, text, x, y, maxWidth, lineHeight, maxLines = 3) {
  const characters = [...text];
  let line = "";
  let lineCount = 0;
  for (const character of characters) {
    const testLine = line + character;
    if (context.measureText(testLine).width > maxWidth && line) {
      context.fillText(line, x, y);
      line = character;
      y += lineHeight;
      lineCount += 1;
      if (lineCount >= maxLines - 1) break;
    } else {
      line = testLine;
    }
  }
  if (lineCount < maxLines) context.fillText(line, x, y);
  return y;
}

function drawCoverImage(context, image, x, y, width, height) {
  if (!image) {
    context.fillStyle = "#eeeae2";
    context.fillRect(x, y, width, height);
    return;
  }
  const scale = Math.max(width / image.width, height / image.height);
  const sourceWidth = width / scale;
  const sourceHeight = height / scale;
  const sourceX = (image.width - sourceWidth) / 2;
  const sourceY = (image.height - sourceHeight) / 2;
  context.drawImage(
    image,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    x,
    y,
    width,
    height,
  );
}

async function createConsultationImage(selected, fields) {
  const details = [
    ["赠送对象", fields.recipient],
    ["使用日期", fields.date],
    ["预算", fields.budget],
    ["配送或自取", fields.delivery],
    ["其他要求", fields.notes],
  ].filter(([, value]) => value);
  const heroImageUrl =
    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1800&q=85";
  const width = 900;
  const headerHeight = 250;
  const itemHeight = 300;
  const detailsHeight = details.length ? 100 + details.length * 55 : 28;
  const footerHeight = 72;
  const height =
    headerHeight + selected.length * itemHeight + detailsHeight + footerHeight;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  const [heroImage, ...images] = await Promise.all([
    loadConsultImage(heroImageUrl),
    ...selected.map((bouquet) => loadConsultImage(bouquet.image)),
  ]);

  context.fillStyle = "#fffdf8";
  context.fillRect(0, 0, width, height);
  context.save();
  context.filter = "blur(5px)";
  drawCoverImage(context, heroImage, -12, -12, width + 24, headerHeight + 24);
  context.restore();
  context.fillStyle = "rgba(24, 43, 33, .58)";
  context.fillRect(0, 0, width, headerHeight);
  context.fillStyle = "#ffffff";
  context.font = '700 46px "Noto Serif SC", serif';
  context.fillText("吻吻花坊 · 图文咨询单", 55, 102);
  context.fillStyle = "rgba(255,255,255,.78)";
  context.font = '24px "PingFang SC", sans-serif';
  context.fillText(`共选择 ${selected.length} 款 · 价格与花材以当日确认为准`, 55, 162);
  context.fillStyle = "rgba(255,255,255,.55)";
  context.fillRect(55, 195, 96, 2);

  selected.forEach((bouquet, index) => {
    const top = headerHeight + index * itemHeight;
    context.fillStyle = index % 2 ? "#f7f3eb" : "#fffdf8";
    context.fillRect(0, top, width, itemHeight);
    drawCoverImage(context, images[index], 55, top + 28, 310, 244);
    context.fillStyle = "#27322b";
    context.font = '700 30px "Noto Serif SC", serif';
    drawWrappedText(context, bouquet.name, 410, top + 92, 430, 42, 2);
    context.fillStyle = "#335846";
    context.font = '700 27px "PingFang SC", sans-serif';
    context.fillText(`参考价格：${priceText(bouquet, "全部")}`, 410, top + 188);
    context.fillStyle = "rgba(51, 88, 70, .25)";
    context.fillRect(410, top + 218, 80, 2);
  });

  if (details.length) {
    let detailY = headerHeight + selected.length * itemHeight + 58;
    context.fillStyle = "#27322b";
    context.font = '700 28px "Noto Serif SC", serif';
    context.fillText("顾客需求", 55, detailY);
    detailY += 50;
    context.font = '22px "PingFang SC", sans-serif';
    details.forEach(([label, value]) => {
      context.fillStyle = "#69736c";
      context.fillText(`${label}：`, 55, detailY);
      context.fillStyle = "#27322b";
      detailY = drawWrappedText(context, value, 190, detailY, 650, 34, 2);
      detailY += 55;
    });
  }

  context.fillStyle = "#335846";
  context.fillRect(0, height - footerHeight, width, footerHeight);
  context.fillStyle = "#ffffff";
  context.font = '23px "PingFang SC", sans-serif';
  context.fillText("联系电话：13282152868", 55, height - 25);

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("无法生成咨询单图片"));
    }, "image/jpeg", 0.9);
  });
}

function downloadConsultationImage(blob) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "吻吻花坊-咨询单.jpg";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

document.querySelector("#request-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!shortlist.length) {
    document.querySelector("#form-tip").textContent = "请先加入至少一款备选。";
    return;
  }

  const fields = Object.fromEntries(new FormData(event.currentTarget));
  const selected = shortlist
    .map((id) => bouquets.find((bouquet) => bouquet.id === id))
    .filter(Boolean);
  const lines = selected.map(
    (bouquet, index) =>
      `${index + 1}. ${bouquet.name}（参考价格：${priceText(bouquet, "全部")}）`,
  );
  const details = [
    ["赠送对象", fields.recipient],
    ["使用日期", fields.date],
    ["预算", fields.budget],
    ["配送或自取", fields.delivery],
    ["其他要求", fields.notes],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}：${value}`);
  const message = [
    "你好，我想咨询以下备选：",
    "",
    ...lines,
    ...(details.length ? ["", ...details] : []),
  ].join("\n");

  const tip = document.querySelector("#form-tip");
  const submitButton = event.currentTarget.querySelector('[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = "正在生成图片…";

  try {
    await navigator.clipboard.writeText(message);
  } catch {}

  try {
    const blob = await createConsultationImage(selected, fields);
    const file =
      typeof File !== "undefined"
        ? new File([blob], "吻吻花坊-咨询单.jpg", { type: "image/jpeg" })
        : null;
    if (file && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({
          title: "吻吻花坊图文咨询单",
          text: message,
          files: [file],
        });
        tip.textContent = "图文咨询单已生成并打开分享菜单。";
      } catch (shareError) {
        if (shareError?.name === "AbortError") {
          tip.textContent = "已取消分享，文字清单仍已复制。";
        } else {
          downloadConsultationImage(blob);
          tip.textContent = "分享未能打开，图文咨询单已保存，文字也已复制。";
        }
      }
    } else {
      downloadConsultationImage(blob);
      tip.textContent = "图文咨询单已下载，文字清单也已复制。";
    }
  } catch (error) {
    if (error?.name === "AbortError") {
      tip.textContent = "已取消分享，文字清单仍已复制。";
    } else {
      tip.textContent = "图片生成失败，文字清单已复制，可以先发送文字咨询。";
    }
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "生成图文咨询单";
  }
});

saveShortlist();
renderBouquets();
