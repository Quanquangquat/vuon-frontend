/* =============================================
   VƯƠN - Common JavaScript
   Mock data, state management, shared components
   ============================================= */

// ── Mock Data ──────────────────────────────────
const PRODUCTS = [
  { id:'1', name:'Rau cải xanh', category:'vegetable', price:120000, image:'https://tse1.mm.bing.net/th/id/OIP.YMyyO4B2E7JowCCN-rgPEwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3', description:'Rau cải xanh tươi, dễ trồng, phù hợp cho người mới bắt đầu', difficulty:'Dễ', light:'Nhiều ánh sáng', careLevel:'Tưới nước 2 lần/ngày', rating:4.5, reviews:128, inStock:true, stock:50 },
  { id:'2', name:'Cà chua bi', category:'vegetable', price:120000, image:'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400', description:'Cà chua bi ngọt, năng suất cao', difficulty:'Trung bình', light:'Nhiều ánh sáng', careLevel:'Tưới nước 1 lần/ngày, bón phân định kỳ', rating:4.8, reviews:95, inStock:true, stock:30 },
  { id:'3', name:'Hoa hồng', category:'flower', price:120000, image:'https://img.thuthuatphanmem.vn/uploads/2018/09/24/hinh-anh-hoa-hong-dep-nhat_053955504.jpg', description:'Hoa hồng đỏ thắm, thơm ngát', difficulty:'Khó', light:'Nhiều ánh sáng', careLevel:'Cần chăm sóc kỹ lưỡng', rating:4.9, reviews:203, inStock:true, stock:20 },
  { id:'4', name:'Hoa oải hương', category:'flower', price:120000, image:'https://charsawfarms.com/cdn/shop/files/PurpleBouquetlavender2.jpg?v=1710207668&width=1946', description:'Hoa oải hương tím, hương thơm dễ chịu', difficulty:'Dễ', light:'Nhiều ánh sáng', careLevel:'Ít cần chăm sóc', rating:4.6, reviews:87, inStock:true, stock:45 },
  { id:'5', name:'Combo cây rau gia vị', category:'combo', price:120000, image:'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400', description:'Bộ 5 loại rau gia vị: húng quế, rau mùi, ngò gai, rau húng, tía tô', difficulty:'Dễ', light:'Ánh sáng trung bình', careLevel:'Tưới nước đều đặn', rating:4.7, reviews:156, inStock:true, stock:25 },
  { id:'6', name:'Phân bón hữu cơ', category:'accessory', price:10000, image:'https://th.bing.com/th/id/R.6c286dba498a4c368b9da7b62e2e04a6?rik=HGOrgHSmda8Yqg&pid=ImgRaw&r=0', description:'Phân bón hữu cơ cho cây trồng', difficulty:'Dễ', light:'Ít ánh sáng', careLevel:'Không cần chăm sóc', rating:4.4, reviews:67, inStock:true, stock:100 },
  { id:'7', name:'Rau diếp xanh', category:'vegetable', price:120000, image:'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400', description:'Rau diếp tươi ngon, giàu vitamin', difficulty:'Dễ', light:'Ánh sáng trung bình', careLevel:'Tưới nước 2 lần/ngày', rating:4.3, reviews:45, inStock:true, stock:60 },
  { id:'8', name:'Hoa cúc vàng', category:'flower', price:120000, image:'https://media.chuabavang.com/files/tu_chinh/2021/12/28/hoa-cuc-vang-clb-cuc-vang-chua-ba-vang-0839.jpg', description:'Hoa cúc vàng rực rỡ, dễ trồng', difficulty:'Dễ', light:'Nhiều ánh sáng', careLevel:'Tưới nước vừa phải', rating:4.5, reviews:92, inStock:true, stock:35 },
  { id:'9', name:'Rau húng quế', category:'vegetable', price:80000, image:'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400', description:'Húng quế thơm, dễ trồng trong chậu', difficulty:'Dễ', light:'Ánh sáng trung bình', careLevel:'Tưới 1 lần/ngày', rating:4.6, reviews:78, inStock:true, stock:80 },
  { id:'10', name:'Chậu đất nung', category:'accessory', price:45000, image:'https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=400', description:'Chậu đất nung thoáng khí, giúp rễ cây phát triển tốt', difficulty:'Dễ', light:'Ít ánh sáng', careLevel:'Không cần chăm sóc', rating:4.2, reviews:34, inStock:true, stock:150 },
  { id:'11', name:'Combo kit trồng rau', category:'combo', price:250000, image:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400', description:'Bộ kit đầy đủ: chậu + đất + hạt giống + hướng dẫn', difficulty:'Dễ', light:'Ánh sáng trung bình', careLevel:'Theo hướng dẫn kèm theo', rating:4.9, reviews:312, inStock:true, stock:40 },
  { id:'12', name:'Hoa dã yên thảo', category:'flower', price:95000, image:'https://images.unsplash.com/photo-1490750967868-88df5691cc9e?w=400', description:'Hoa dã yên thảo nhiều màu sắc, thích hợp trồng ban công', difficulty:'Trung bình', light:'Nhiều ánh sáng', careLevel:'Tưới vừa phải', rating:4.4, reviews:56, inStock:true, stock:28 },
  // ── Hạt giống (seeds) ──
  { id:'13', name:'Hạt giống xà lách', category:'seeds', price:25000, image:'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400', description:'Gói hạt giống xà lách dễ nảy mầm, thu hoạch sau 30-40 ngày', difficulty:'Dễ', light:'Ánh sáng trung bình', careLevel:'Tưới ẩm đều mỗi ngày', rating:4.6, reviews:64, inStock:true, stock:200 },
  { id:'14', name:'Hạt giống cà rốt', category:'seeds', price:22000, image:'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400', description:'Hạt giống cà rốt tỷ lệ nảy mầm cao, củ ngọt giòn', difficulty:'Trung bình', light:'Nhiều ánh sáng', careLevel:'Giữ đất tơi xốp, tưới đều', rating:4.4, reviews:38, inStock:true, stock:180 },
  { id:'15', name:'Hạt giống dưa leo', category:'seeds', price:28000, image:'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=400', description:'Hạt giống dưa leo F1 sai quả, phù hợp ban công có giàn', difficulty:'Trung bình', light:'Nhiều ánh sáng', careLevel:'Làm giàn leo, tưới 1-2 lần/ngày', rating:4.5, reviews:52, inStock:true, stock:150 },
  { id:'16', name:'Hạt giống ớt chuông', category:'seeds', price:30000, image:'https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?w=400', description:'Hạt giống ớt chuông nhiều màu, giàu vitamin C', difficulty:'Trung bình', light:'Nhiều ánh sáng', careLevel:'Bón phân định kỳ, tưới vừa phải', rating:4.3, reviews:29, inStock:true, stock:160 },
  { id:'17', name:'Hạt giống rau muống', category:'seeds', price:18000, image:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400', description:'Hạt giống rau muống nảy mầm nhanh, dễ trồng cho người mới', difficulty:'Dễ', light:'Ánh sáng trung bình', careLevel:'Tưới nước đều, ưa ẩm', rating:4.7, reviews:88, inStock:true, stock:250 },
  // ── Hoa (flower) ──
  { id:'18', name:'Hoa hướng dương', category:'flower', price:90000, image:'https://images.unsplash.com/photo-1597848212624-e19ab1ad36a3?w=400', description:'Hoa hướng dương rực rỡ, vươn theo nắng, dễ trồng', difficulty:'Dễ', light:'Nhiều ánh sáng', careLevel:'Tưới đều, cần nhiều nắng', rating:4.8, reviews:140, inStock:true, stock:60 },
  { id:'19', name:'Hoa cẩm tú cầu', category:'flower', price:135000, image:'https://images.unsplash.com/photo-1597305877032-0668b3c6413a?w=400', description:'Hoa cẩm tú cầu sai bông, đổi màu theo độ pH đất', difficulty:'Khó', light:'Ánh sáng trung bình', careLevel:'Giữ ẩm, tránh nắng gắt buổi trưa', rating:4.6, reviews:74, inStock:true, stock:35 },
  { id:'20', name:'Hoa mười giờ', category:'flower', price:55000, image:'https://images.unsplash.com/photo-1502780402662-acc01917738e?w=400', description:'Hoa mười giờ nhiều màu, nở rộ buổi sáng, cực dễ trồng', difficulty:'Dễ', light:'Nhiều ánh sáng', careLevel:'Chịu hạn tốt, tưới ít', rating:4.7, reviews:96, inStock:true, stock:120 },
  { id:'21', name:'Hoa sống đời', category:'flower', price:70000, image:'https://images.unsplash.com/photo-1509223197845-458d87318791?w=400', description:'Hoa sống đời bền hoa, ít sâu bệnh, hợp để bàn', difficulty:'Dễ', light:'Ánh sáng trung bình', careLevel:'Tưới vừa phải, tránh úng', rating:4.5, reviews:61, inStock:true, stock:80 },
  { id:'22', name:'Hoa thược dược', category:'flower', price:85000, image:'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400', description:'Hoa thược dược nhiều cánh, màu sắc tươi tắn cho dịp Tết', difficulty:'Trung bình', light:'Nhiều ánh sáng', careLevel:'Tưới đều, bón phân khi ra nụ', rating:4.6, reviews:70, inStock:true, stock:50 }
];

const MOCK_USERS = [
  { id:'1', name:'Nguyễn Văn A', email:'nguyenvana@email.com', phone:'0901234567', joinedDate:'2025-01-15', totalOrders:12, totalSpent:2500000 },
  { id:'2', name:'Trần Thị B', email:'tranthib@email.com', phone:'0912345678', joinedDate:'2025-02-20', totalOrders:5, totalSpent:850000 }
];

const MOCK_ORDERS = [
  { id:'ORD001', userId:'1', items:[{productId:'1',quantity:2},{productId:'3',quantity:1}], total:200000, status:'completed', createdAt:'2026-02-28', shippingInfo:{fullName:'Nguyễn Văn A',phone:'0901234567',address:'123 Đường ABC, Quận 1, TP.HCM'}, paymentMethod:'COD' },
  { id:'ORD002', userId:'2', items:[{productId:'5',quantity:1}], total:120000, status:'shipping', createdAt:'2026-03-01', shippingInfo:{fullName:'Trần Thị B',phone:'0912345678',address:'456 Đường XYZ, Quận 3, TP.HCM'}, paymentMethod:'Chuyển khoản' },
  { id:'ORD003', userId:'1', items:[{productId:'2',quantity:3},{productId:'6',quantity:2}], total:195000, status:'processing', createdAt:'2026-03-03', shippingInfo:{fullName:'Nguyễn Văn A',phone:'0901234567',address:'123 Đường ABC, Quận 1, TP.HCM'}, paymentMethod:'Ví điện tử' }
];

const BLOG_POSTS = [
  { id:'1', title:'Cách trồng cà chua bi trên ban công', excerpt:'Hướng dẫn chi tiết cách trồng cà chua bi tại nhà cho người mới bắt đầu...', image:'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600', author:'Chuyên gia Vườn', date:'2026-02-15', category:'Hướng dẫn' },
  { id:'2', title:'10 loại cây dễ trồng nhất cho người bận rộn', excerpt:'Những loại cây không cần chăm sóc nhiều vẫn cho năng suất cao...', image:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600', author:'Admin Vườn', date:'2026-02-20', category:'Tips' },
  { id:'3', title:'Chẩn đoán và xử lý bệnh vàng lá', excerpt:'Nguyên nhân và cách khắc phục tình trạng lá cây bị vàng...', image:'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600', author:'Chuyên gia Vườn', date:'2026-02-25', category:'Bệnh cây' }
];

const PROMOTIONS = [
  { id:'1', title:'Giảm 20% cho đơn hàng đầu tiên', code:'FIRSTORDER', discount:20, description:'Áp dụng cho khách hàng mới', validUntil:'2026-12-31', minOrder:100000 },
  { id:'2', title:'Miễn phí vận chuyển', code:'FREESHIP', discount:0, description:'Cho đơn hàng từ 200k', validUntil:'2026-12-31', minOrder:200000 }
];

const COMMUNITY_POSTS = [
  { id:'1', author:'Minh Anh', avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', content:'Vườn cà chua bi của mình sau 2 tháng! Cảm ơn VƯƠN đã tư vấn nhiệt tình 🍅', image:'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500', likes:45, comments:12 },
  { id:'2', author:'Tuấn Kiệt', avatar:'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100', content:'Combo rau gia vị mua ở VƯƠN phát triển rất tốt. Bữa nào cũng có rau tươi!', image:'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500', likes:32, comments:8 }
];

const AI_QUESTIONS = [
  'Tôi nên trồng cây gì trên ban công?',
  'Làm sao để chăm sóc cây cà chua?',
  'Cây của tôi bị vàng lá phải làm sao?',
  'Loại đất nào phù hợp với cây hoa?',
  'Tưới nước bao nhiêu lần một ngày?'
];

const DEMO_CHAT_RESPONSES = {
  'trồng cà chua': `Hướng dẫn trồng cà chua bi tại nhà\n\n1. Chuẩn bị:\n- Chậu sâu tối thiểu 30cm\n- Đất trộn phân hữu cơ tỉ lệ 2:1\n\n2. Gieo hạt:\n- Gieo sâu 1–2cm, khoảng cách 15cm\n- Nảy mầm sau 7–10 ngày\n\n3. Chăm sóc:\n- Tưới 2 lần/ngày: sáng 6-7h & chiều 17-18h\n- Bón phân NPK mỗi 2 tuần\n\n4. Thu hoạch sau 60–80 ngày`,
  'tưới nước': `Hướng dẫn tưới nước đúng cách\n\n⏰ Thời điểm tốt nhất:\n- Sáng sớm: 6:00–7:00 (tốt nhất)\n- Chiều mát: 17:00–18:00\n- Tránh tưới: 10:00–15:00\n\n💡 Dấu hiệu tưới sai:\n- Lá vàng, rễ thối → tưới quá nhiều\n- Lá héo, mép cháy → tưới quá ít`,
  'vàng lá': `Nguyên nhân lá vàng và cách xử lý\n\n🔍 Nguyên nhân thường gặp:\n1. Thiếu Nitơ → bón phân NPK\n2. Tưới quá nhiều → giảm tần suất tưới\n3. Thiếu ánh sáng → di chuyển gần cửa sổ\n4. Đất cằn → thay đất mới\n\n✅ Giải pháp:\n- Loại bỏ lá vàng ngay\n- Kiểm tra độ ẩm đất trước khi tưới`,
  'ban công': `Gợi ý cây trồng trên ban công\n\n☀️ Ban công nhiều nắng:\n- Cà chua, ớt, húng quế\n- Hoa hướng dương, hoa dã yên thảo\n\n🌤 Ban công ít nắng:\n- Rau cải, xà lách\n- Cây dương xỉ, lan ý\n\n💡 Mẹo: Dùng chậu nhỏ gọn, xếp tầng để tiết kiệm diện tích!`,
  'default': 'Cảm ơn câu hỏi của bạn! Tôi là AI tư vấn trồng cây VƯƠN. Hãy hỏi tôi về cách trồng, chăm sóc cây, hay chẩn đoán bệnh cây nhé. Tôi sẵn sàng giúp bạn! 🌱'
};

// ── State Management (localStorage) ──────────────
const Store = {
  // User
  getUser() { try { return JSON.parse(localStorage.getItem('vuon_user') || 'null'); } catch{ return null; } },
  setUser(u) { localStorage.setItem('vuon_user', JSON.stringify(u)); },
  clearUser() { localStorage.removeItem('vuon_user'); },

  // Cart
  getCart() { try { return JSON.parse(localStorage.getItem('vuon_cart') || '[]'); } catch{ return []; } },
  setCart(c) { localStorage.setItem('vuon_cart', JSON.stringify(c)); },
  addToCart(product, qty=1) {
    const cart = Store.getCart();
    const idx = cart.findIndex(i => i.productId === product.id);
    if(idx>=0) cart[idx].quantity += qty;
    else cart.push({ productId: product.id, product, quantity: qty });
    Store.setCart(cart);
    Store.updateCartBadge();
  },
  removeFromCart(productId) {
    Store.setCart(Store.getCart().filter(i => i.productId !== productId));
    Store.updateCartBadge();
  },
  updateCartQty(productId, qty) {
    if(qty<=0) { Store.removeFromCart(productId); return; }
    const cart = Store.getCart();
    const idx = cart.findIndex(i => i.productId === productId);
    if(idx>=0) { cart[idx].quantity = qty; Store.setCart(cart); }
    Store.updateCartBadge();
  },
  clearCart() { Store.setCart([]); Store.updateCartBadge(); },
  getCartCount() { return Store.getCart().reduce((s,i)=>s+i.quantity, 0); },
  getCartTotal() { return Store.getCart().reduce((s,i)=>s+i.product.price*i.quantity, 0); },
  updateCartBadge() {
    const n = Store.getCartCount();
    document.querySelectorAll('.cart-count').forEach(el => { el.textContent = n; el.style.display = n>0?'flex':'none'; });
  },

  // Favorites
  getFavorites() { try { return JSON.parse(localStorage.getItem('vuon_favs') || '[]'); } catch{ return []; } },
  toggleFavorite(id) {
    const favs = Store.getFavorites();
    const idx = favs.indexOf(id);
    if(idx>=0) favs.splice(idx,1); else favs.push(id);
    localStorage.setItem('vuon_favs', JSON.stringify(favs));
    return idx < 0; // returns true if added
  },
  isFavorite(id) { return Store.getFavorites().includes(id); }
};

// ── Helpers ────────────────────────────────────
function fmt(num) { return num.toLocaleString('vi-VN') + 'đ'; }

function stars(rating) {
  let h = '';
  for(let i=1;i<=5;i++) h += `<svg width="16" height="16" fill="${i<=Math.floor(rating)?'#facc15':'#d1d5db'}" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
  return h;
}

function getParam(name) { return new URLSearchParams(window.location.search).get(name); }

// Cache sản phẩm đã tải từ API (id là UUID) để thêm vào giỏ không cần gọi lại API
const PRODUCT_CACHE = {};
function cacheProducts(list) { (list||[]).forEach(p => { if(p && p.id != null) PRODUCT_CACHE[p.id] = p; }); }
function getProduct(id) { return PRODUCT_CACHE[id] || PRODUCTS.find(p=>p.id===id); }

function statusLabel(s) {
  const map = { completed:'Hoàn thành', shipping:'Đang giao', processing:'Đang xử lý', cancelled:'Đã hủy' };
  const cls = { completed:'badge-green', shipping:'badge-blue', processing:'badge-yellow', cancelled:'badge-red' };
  return `<span class="badge ${cls[s]||'badge-gray'}">${map[s]||s}</span>`;
}

// ── SVG Icons (inline) ─────────────────────────
const I = {
  home: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  cart: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 001.94 1.61h9.72a2 2 0 001.94-1.61L23 6H6"/></svg>',
  heart: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
  bot: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M12 2v3M8 2h8M9 11V7h6v4"/><circle cx="9" cy="15" r="1"/><circle cx="15" cy="15" r="1"/></svg>',
  book: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>',
  users: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>',
  user: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  logout: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>',
  search: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  leaf: '<svg width="32" height="32" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24"><path d="M2 2s6 0 10 4c2 2 3 5 3 8M12 14c-2 4-5 6-8 6"/><path d="M22 2c-4 0-10 2-10 12"/></svg>',
  flower: '<svg width="32" height="32" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2C8 2 5 5 5 9c0 2.5 1.5 5 3 6.5L12 22l4-6.5c1.5-1.5 3-4 3-6.5 0-4-3-7-7-7z"/></svg>',
  box: '<svg width="32" height="32" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',
  wrench: '<svg width="32" height="32" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>',
  fb: '<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>',
  ig: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  yt: '<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>',
  phone: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>',
  mail: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  map: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  check: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
  trash: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>',
  plus: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  minus: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  arrowLeft: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  arrowRight: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  shield: '<svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  sprout: '<svg width="48" height="48" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24"><path d="M7 20h10M12 20V10m0 0C12 5 7 3 3 3s3 7 9 7zm0 0c0-5 5-7 9-7s-3 7-9 7"/></svg>',
  star: '<svg width="20" height="20" fill="#facc15" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  send: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  camera: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>',
  bell: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>',
};

// ── Site Settings (giao diện) ───────────────────
// Giá trị mặc định = đúng như giao diện hiện tại; admin có thể ghi đè qua trang Cài đặt.
const SITE_SETTINGS = {
  brandName: 'VƯƠN',
  logoUrl: '',        // rỗng → dùng assets/logo.png
  logoWhiteUrl: '',   // rỗng → dùng assets/logo-white.png
  faviconUrl: '',
  footerDescription: 'Ứng dụng tư vấn và mua sắm cây trồng thông minh — kết hợp AI Gemini để giúp bạn chăm sóc vườn cây đúng cách mỗi ngày.',
  footerPhone: '1800 6789 (Miễn phí)',
  footerEmail: 'vuonfarm@gmail.com',
  footerAddress: '',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61580801050695',
  instagramUrl: '#',
  youtubeUrl: '#',
  promoBarText: ''
};

// Gộp giá trị từ API vào SITE_SETTINGS (chỉ ghi đè khi có giá trị)
function applySiteSettings(s) {
  if(!s) return;
  Object.keys(SITE_SETTINGS).forEach(k => {
    if(s[k] !== undefined && s[k] !== null && s[k] !== '') SITE_SETTINGS[k] = s[k];
  });
  applyFavicon();
  if(document.getElementById('site-header')) renderHeader();
  if(document.getElementById('site-footer')) renderFooter();
  const promoEl = document.getElementById('promo-bar-text');
  if(promoEl && SITE_SETTINGS.promoBarText) promoEl.innerHTML = SITE_SETTINGS.promoBarText;
}

function applyFavicon() {
  if(!SITE_SETTINGS.faviconUrl) return;
  let link = document.querySelector("link[rel~='icon']");
  if(!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
  link.href = SITE_SETTINGS.faviconUrl;
}

// ── Header Renderer ─────────────────────────────
function renderHeader() {
  const user = Store.getUser();
  const cartCount = Store.getCartCount();
  const base = getBasePath();

  document.getElementById('site-header').innerHTML = `
    <div class="header-inner">
      <a href="${base}home.html" class="logo">
        <img src="${SITE_SETTINGS.logoUrl || base+'assets/logo.png'}" alt="${SITE_SETTINGS.brandName}" style="height:44px;width:auto;display:block">
      </a>
      <nav class="header-nav">
        <a href="${base}home.html">Trang chủ</a>
        <a href="${base}products.html?category=vegetable">Cây rau</a>
        <a href="${base}products.html?category=flower">Cây hoa</a>
        <a href="${base}products.html?category=seeds">Hạt giống</a>
        <a href="${base}ai-chat.html">AI Tư vấn</a>
        <a href="${base}blog.html">Blog</a>
      </nav>
      <div class="header-right">
        <a href="${base}search.html" style="padding:.5rem;border-radius:.5rem;display:flex;align-items:center;" title="Tìm kiếm">${I.search}</a>
        <a href="${base}cart.html" class="cart-btn" title="Giỏ hàng">
          ${I.cart}
          <span class="cart-badge cart-count" style="display:${cartCount>0?'flex':'none'}">${cartCount}</span>
        </a>
        ${user ? `
          <a href="${base}profile.html" style="font-size:.875rem;color:#374151;">${user.name}</a>
          <button onclick="doLogout()" style="padding:.5rem;border:none;background:none;cursor:pointer;display:flex;align-items:center;" title="Đăng xuất">${I.logout}</button>
        ` : `
          <a href="${base}login.html" class="btn btn-green" style="padding:.5rem 1rem;font-size:.875rem;">Đăng nhập</a>
        `}
      </div>
    </div>`;
}

// ── Mobile Nav Renderer ─────────────────────────
function renderMobileNav() {
  const base = getBasePath();
  const el = document.getElementById('mobile-nav');
  if(!el) return;
  el.innerHTML = `
    <a href="${base}home.html" class="mobile-nav-item">${I.home}<span>Trang chủ</span></a>
    <a href="${base}cart.html" class="mobile-nav-item" style="position:relative">
      ${I.cart}
      <span class="cart-count" style="position:absolute;top:2px;right:2px;background:#ef4444;color:#fff;font-size:.6rem;border-radius:50%;width:16px;height:16px;display:${Store.getCartCount()>0?'flex':'none'};align-items:center;justify-content:center">${Store.getCartCount()}</span>
      <span>Giỏ hàng</span>
    </a>
    <a href="${base}favorites.html" class="mobile-nav-item">${I.heart}<span>Yêu thích</span></a>
    <a href="${base}ai-chat.html" class="mobile-nav-item">${I.bot}<span>AI Tư vấn</span></a>
    <a href="${base}profile.html" class="mobile-nav-item">${I.user}<span>Tài khoản</span></a>`;
}

// ── Footer Renderer ─────────────────────────────
function renderFooter() {
  const base = getBasePath();
  const el = document.getElementById('site-footer');
  if(!el) return;
  el.innerHTML = `
    <div class="footer-newsletter">
      <div class="footer-newsletter-inner">
        <div>
          <h3>Nhận mẹo trồng cây mỗi tuần 🌱</h3>
          <p>Đăng ký để nhận hướng dẫn chăm sóc cây và ưu đãi độc quyền.</p>
        </div>
        <div class="footer-subscribe">
          <input type="email" placeholder="Nhập email của bạn...">
          <button>Đăng ký</button>
        </div>
      </div>
    </div>
    <div class="footer-links">
      <div class="footer-links-inner">
        <div class="footer-brand">
          <a href="${base}home.html" class="logo"><img src="${SITE_SETTINGS.logoWhiteUrl || base+'assets/logo-white.png'}" alt="${SITE_SETTINGS.brandName}" style="height:56px;width:auto;display:block"></a>
          <p>${SITE_SETTINGS.footerDescription}</p>
          <div class="footer-contact">
            <a href="tel:${(SITE_SETTINGS.footerPhone||'').replace(/[^0-9+]/g,'')}">${I.phone} ${SITE_SETTINGS.footerPhone}</a>
            <a href="mailto:${SITE_SETTINGS.footerEmail}">${I.mail} ${SITE_SETTINGS.footerEmail}</a>
            ${SITE_SETTINGS.footerAddress ? `<a href="#">${I.map} ${SITE_SETTINGS.footerAddress}</a>` : ''}
          </div>
          <div class="footer-social">
            <a href="${SITE_SETTINGS.facebookUrl||'#'}" target="_blank">${I.fb}</a>
            <a href="${SITE_SETTINGS.instagramUrl||'#'}" target="_blank">${I.ig}</a>
            <a href="${SITE_SETTINGS.youtubeUrl||'#'}" target="_blank">${I.yt}</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Cửa hàng</h4>
          <ul>
            <li><a href="${base}products.html?category=vegetable">Cây rau</a></li>
            <li><a href="${base}products.html?category=flower">Cây hoa</a></li>
            <li><a href="${base}products.html?category=seeds">Hạt giống</a></li>
            <li><a href="${base}products.html?category=combo">Combo</a></li>
            <li><a href="${base}products.html?category=accessory">Phụ kiện</a></li>
            <li><a href="${base}promotions.html">Khuyến mãi</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>AI Tư Vấn</h4>
          <ul>
            <li><a href="${base}ai-chat.html">Chat với AI</a></li>
            <li><a href="${base}ai-recommend.html">Đề xuất cây phù hợp</a></li>
            <li><a href="${base}disease-diagnosis.html">Chẩn đoán bệnh cây</a></li>
            <li><a href="${base}care-guide.html">Hướng dẫn chăm sóc</a></li>
            <li><a href="${base}watering-reminder.html">Nhắc lịch tưới cây</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Khám phá</h4>
          <ul>
            <li><a href="${base}blog.html">Blog trồng cây</a></li>
            <li><a href="${base}community.html">Cộng đồng</a></li>
            <li><a href="${base}favorites.html">Yêu thích</a></li>
            <li><a href="${base}search.html">Tìm kiếm</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Hỗ trợ</h4>
          <ul>
            <li><a href="${base}support.html">Trung tâm hỗ trợ</a></li>
            <li><a href="${base}track-order.html">Theo dõi đơn hàng</a></li>
            <li><a href="${base}orders.html">Lịch sử đơn hàng</a></li>
            <li><a href="${base}profile.html">Tài khoản của tôi</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <p>© ${new Date().getFullYear()} VƯƠN. Bảo lưu mọi quyền.</p>
        <div class="footer-payments">
          <span>Thanh toán an toàn:</span>
          ${['VISA','MC','MOMO','VNPAY','COD'].map(p=>`<span class="payment-tag">${p}</span>`).join('')}
        </div>
      </div>
    </div>`;
}

// ── Base Path Detection ─────────────────────────
function getBasePath() {
  const path = window.location.pathname;
  return path.includes('/admin/') ? '../' : './';
}

// ── Product Card HTML ───────────────────────────
function productCardHTML(p, base='') {
  return `
    <div class="product-card">
      <a href="${base}product-detail.html?id=${p.id}">
        <div class="product-card-img"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
      </a>
      <div class="product-card-body">
        <a href="${base}product-detail.html?id=${p.id}" class="product-card-name">${p.name}</a>
        <div class="stars">${stars(p.rating)}<span style="font-size:.8rem;color:#6b7280;margin-left:.25rem">${p.rating} (${p.reviews})</span></div>
        <div class="product-card-footer">
          <span class="price">${fmt(p.price)}</span>
          <button class="add-to-cart-btn" onclick="addToCartToast('${p.id}')" title="Thêm vào giỏ">${I.cart}</button>
        </div>
      </div>
    </div>`;
}

// ── Add to Cart Toast ───────────────────────────
function addToCartToast(productId) {
  const p = getProduct(productId);
  if(!p) { showToast('Không tìm thấy sản phẩm, vui lòng tải lại trang', 'error'); return; }
  Store.addToCart(p);
  showToast('Đã thêm vào giỏ hàng! 🛒');
}

function showToast(msg, type='success') {
  let t = document.getElementById('toast');
  if(!t) { t = document.createElement('div'); t.id='toast'; t.style.cssText='position:fixed;bottom:80px;right:1rem;padding:.75rem 1.25rem;border-radius:.5rem;font-size:.875rem;z-index:9999;transition:opacity .3s;max-width:280px;box-shadow:0 4px 12px rgba(0,0,0,.15);'; document.body.appendChild(t); }
  t.textContent = msg;
  t.style.background = type==='error'?'#fee2e2':type==='warning'?'#fefce8':'#f0fdf4';
  t.style.color = type==='error'?'#991b1b':type==='warning'?'#92400e':'#166534';
  t.style.border = `1px solid ${type==='error'?'#fecaca':type==='warning'?'#fde68a':'#bbf7d0'}`;
  t.style.opacity='1';
  clearTimeout(t._timer);
  t._timer = setTimeout(()=>{ t.style.opacity='0'; }, 2500);
}

// ── Admin Sidebar ────────────────────────────────
function renderAdminSidebar() {
  const el = document.getElementById('admin-sidebar');
  if(!el) return;

  // Guard quyền admin: chỉ tài khoản role='admin' mới được vào khu vực quản trị.
  // Nếu chưa đăng nhập hoặc là khách thường → chuyển về trang đăng nhập (tránh loạt lỗi 403).
  const _u = Store.getUser();
  if (!getToken() || !_u || _u.role !== 'admin') {
    alert('Khu vực quản trị yêu cầu tài khoản admin. Vui lòng đăng nhập bằng admin@vuon.vn.');
    window.location.href = '../login.html';
    return;
  }

  const page = (window.location.pathname.split('/').pop()) || 'index.html';

  const groups = [
    ['Tổng quan', [['index.html','📊','Dashboard']]],
    ['Quản lý', [
      ['products.html','📦','Sản phẩm'],
      ['inventory.html','🏭','Kho hàng'],
      ['orders.html','🛒','Đơn hàng'],
      ['customers.html','👥','Khách hàng'],
    ]],
    ['Nội dung', [
      ['banners.html','🖼️','Banner trang chủ'],
      ['blog.html','📝','Blog'],
      ['settings.html','🎨','Cài đặt giao diện'],
      ['ai.html','🤖','AI & Dữ liệu'],
      ['faq.html','❓','FAQ'],
      ['promotions.html','🎁','Khuyến mãi'],
    ]],
  ];
  const link = ([p,icon,label]) =>
    `<a href="${p}" class="${p===page?'active':''}" title="${label}">${icon} <span>${label}</span></a>`;

  el.innerHTML = `
    <div class="sidebar-header">
      <span class="sidebar-logo">🌱 VƯƠN Admin</span>
      <button class="sidebar-toggle" type="button" onclick="toggleAdminSidebar()" title="Thu gọn / Mở rộng" aria-label="Thu gọn / Mở rộng">☰</button>
    </div>
    <nav class="sidebar-nav">
      ${groups.map(([title,items]) => `<p class="nav-section">${title}</p>${items.map(link).join('')}`).join('')}
    </nav>
    <div class="sidebar-bottom">
      <a href="../home.html" title="Về trang chủ">← <span>Về trang chủ</span></a>
      <a href="#" onclick="doLogout();return false;" title="Đăng xuất">🚪 <span>Đăng xuất</span></a>
    </div>`;

  // Nút mở sidebar trên mobile + lớp phủ (chỉ tạo 1 lần)
  if(!document.getElementById('admin-mobile-toggle')) {
    const btn = document.createElement('button');
    btn.id = 'admin-mobile-toggle';
    btn.type = 'button';
    btn.textContent = '☰';
    btn.setAttribute('aria-label','Mở menu');
    btn.onclick = () => toggleAdminSidebarMobile(true);
    document.body.appendChild(btn);

    const ov = document.createElement('div');
    ov.id = 'admin-sidebar-overlay';
    ov.onclick = () => toggleAdminSidebarMobile(false);
    document.body.appendChild(ov);
  }

  applyAdminSidebarState(localStorage.getItem('vuon_admin_sidebar') === 'collapsed');
}

function applyAdminSidebarState(collapsed) {
  const sb = document.getElementById('admin-sidebar');
  if(!sb) return;
  const main = document.querySelector('.main-panel') || document.querySelector('.admin-content');
  const isMobile = window.matchMedia('(max-width:768px)').matches;
  sb.classList.toggle('collapsed', collapsed && !isMobile);
  if(main) {
    main.style.transition = 'margin .3s';
    main.style.marginLeft = isMobile ? '0' : (collapsed ? '72px' : '256px');
  }
}

function toggleAdminSidebar() {
  const collapsed = !(localStorage.getItem('vuon_admin_sidebar') === 'collapsed');
  localStorage.setItem('vuon_admin_sidebar', collapsed ? 'collapsed' : 'expanded');
  applyAdminSidebarState(collapsed);
}

function toggleAdminSidebarMobile(open) {
  const sb = document.getElementById('admin-sidebar');
  const ov = document.getElementById('admin-sidebar-overlay');
  if(!sb) return;
  sb.classList.toggle('open', open);
  if(ov) ov.style.display = open ? 'block' : 'none';
}

window.addEventListener('resize', () => {
  applyAdminSidebarState(localStorage.getItem('vuon_admin_sidebar') === 'collapsed');
});

// ── Auth ────────────────────────────────────────
function doLogout() {
  Store.clearUser();
  Store.clearCart();
  const base = getBasePath();
  window.location.href = base + 'login.html';
}

function requireAuth() {
  if(!Store.getUser()) {
    window.location.href = getBasePath() + 'login.html';
    return false;
  }
  return true;
}

// ── AI Chat Logic ───────────────────────────────
// Key Gemini KHÔNG còn nằm ở frontend nữa — mọi lời gọi AI đi qua backend (/api/ai/*).
async function askGemini(userMsg, history=[]) {
  // Câu trả lời mẫu nhanh (không tốn lời gọi AI) cho vài từ khoá phổ biến
  const low = userMsg.toLowerCase();
  for(const [k,v] of Object.entries(DEMO_CHAT_RESPONSES)) {
    if(k!=='default' && low.includes(k)) return v;
  }
  try {
    return await API.aiChat(userMsg, history);
  } catch(e) {
    return DEMO_CHAT_RESPONSES.default;
  }
}

// ── Init on DOM ready ────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if(document.getElementById('site-header')) renderHeader();
  if(document.getElementById('mobile-nav')) renderMobileNav();
  if(document.getElementById('site-footer')) renderFooter();
  // Nạp cài đặt giao diện từ server rồi áp dụng (favicon, logo, footer...)
  if(typeof API !== 'undefined' && API.getSettings) {
    API.getSettings().then(s => { if(s) applySiteSettings(s); });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// BACKEND API LAYER
// Thử gọi API thật tại http://localhost:5000/api, fallback về mock data nếu lỗi
// ─────────────────────────────────────────────────────────────────────────────
// ── API Base URL ────────────────────────────────
// Dev local  → tự động dùng localhost:5000
// Production → dùng Railway URL (cập nhật VUON_RAILWAY_URL sau khi deploy)
// ⚠️  SAU KHI DEPLOY RAILWAY: thay 'https://RAILWAY_URL_HERE' bằng URL thật
const VUON_RAILWAY_URL = 'https://vuon-backend-production.up.railway.app';

const API_BASE = (() => {
  const h = window.location.hostname;
  if (h === 'localhost' || h === '127.0.0.1' || h.startsWith('192.168.'))
    return 'http://localhost:5000/api';
  return VUON_RAILWAY_URL + '/api';
})();

// ── Google Sign-In ──────────────────────────────
// ⚠️ THAY bằng OAuth Client ID thật từ Google Cloud Console
// (dạng: xxxxxxxx-xxxx.apps.googleusercontent.com). Để nguyên placeholder thì nút Google sẽ báo chưa cấu hình.
const GOOGLE_CLIENT_ID = '96857866577-7jppk9l1nkvv1da6v9hbaaeg7iaf7ig7.apps.googleusercontent.com';

// Lấy JWT token từ localStorage
function getToken() { return localStorage.getItem('vuon_token'); }
function saveToken(t) { localStorage.setItem('vuon_token', t); }
function clearToken() { localStorage.removeItem('vuon_token'); }

// Nén ảnh phía client → trả về data URL (base64) nhẹ để lưu thẳng vào DB.
// maxW: chiều rộng tối đa (px), quality: chất lượng JPEG 0..1
function compressImageFile(file, maxW = 1000, quality = 0.72) {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error('Chưa chọn ảnh'));
    if (!file.type || !file.type.startsWith('image/')) return reject(new Error('File không phải ảnh'));
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Không đọc được file'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Ảnh không hợp lệ'));
      img.onload = () => {
        const scale = Math.min(1, maxW / img.width);
        const w = Math.round(img.width * scale);
        const h = Math.round(img.height * scale);
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, w, h);
        // PNG có alpha → ép nền trắng + xuất JPEG cho nhẹ
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

// Headers mặc định (có Bearer nếu đã đăng nhập)
function apiHeaders() {
  const h = { 'Content-Type': 'application/json' };
  const t = getToken();
  if (t) h['Authorization'] = 'Bearer ' + t;
  return h;
}

// Helper: fetch với timeout (mặc định 4 giây; tăng cho upload ảnh base64 lớn)
async function apiFetch(path, opts = {}) {
  const ctrl = new AbortController();
  const timeout = opts.timeout || 4000;
  const tid = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(API_BASE + path, { ...opts, signal: ctrl.signal, headers: { ...apiHeaders(), ...(opts.headers || {}) } });
    clearTimeout(tid);

    // Xử lý các mã lỗi HTTP trước khi parse JSON (response lỗi thường có body rỗng
    // → tránh lỗi khó hiểu "Unexpected end of JSON input")
    if (res.status === 401) {
      clearToken();
      throw new Error('Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.');
    }
    if (res.status === 403) {
      throw new Error('Bạn không có quyền truy cập. Cần đăng nhập bằng tài khoản admin.');
    }

    // Đọc body dạng text rồi mới parse (an toàn với body rỗng)
    const text = await res.text();
    let json = null;
    if (text) {
      try { json = JSON.parse(text); } catch { /* body không phải JSON */ }
    }
    if (!res.ok) {
      throw new Error((json && json.message) || ('Lỗi máy chủ (' + res.status + ')'));
    }
    if (!json || !json.success) throw new Error((json && json.message) || 'API error');
    return json.data;
  } catch (e) {
    // AbortController hết giờ → thông báo dễ hiểu thay vì "signal is aborted without reason"
    if (e && (e.name === 'AbortError' || /aborted/i.test(e.message || ''))) {
      throw new Error('Máy chủ phản hồi chậm (có thể đang khởi động). Vui lòng thử lại sau vài giây.');
    }
    throw e;
  } finally {
    clearTimeout(tid);
  }
}

// ── API: Auth ────────────────────────────────────
const API = {

  async login(email, password) {
    try {
      const data = await apiFetch('/auth/login', {
        method: 'POST', timeout: 25000,
        body: JSON.stringify({ email, password })
      });
      // data = { token, user }
      saveToken(data.token);
      // Chuẩn hoá user về format common.js dùng
      const u = data.user;
      Store.setUser({ id: u.id, name: u.name, email: u.email, phone: u.phone, avatar: u.avatar, role: u.role });
      return { ok: true, user: u };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  },

  async register(name, email, password, phone) {
    try {
      const data = await apiFetch('/auth/register', {
        method: 'POST', timeout: 25000,
        body: JSON.stringify({ name, email, password, phone })
      });
      // data = { user, devOtp? } — devOtp chỉ có khi backend tắt gửi mail thật
      return { ok: true, devOtp: data && data.devOtp };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  },

  // Đăng nhập bằng Google (credential = ID token từ Google Identity Services)
  async loginGoogle(credential) {
    try {
      const data = await apiFetch('/auth/google', {
        method: 'POST',
        body: JSON.stringify({ credential })
      });
      saveToken(data.token);
      const u = data.user;
      Store.setUser({ id: u.id, name: u.name, email: u.email, phone: u.phone, avatar: u.avatar, role: u.role });
      return { ok: true, user: u };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  },

  async verifyOtp(email, otp) {
    try {
      await apiFetch('/auth/verify-otp', {
        method: 'POST',
        body: JSON.stringify({ email, otp })
      });
      return { ok: true };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  },

  async forgotPassword(email) {
    try {
      const data = await apiFetch('/auth/forgot-password', {
        method: 'POST',
        body: JSON.stringify({ email })
      });
      return { ok: true, devOtp: data && data.devOtp };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  },

  async resetPassword(email, otp, newPassword) {
    try {
      await apiFetch('/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({ email, otp, newPassword })
      });
      return { ok: true };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  },

  async resendOtp(email, type = 'verify') {
    try {
      const data = await apiFetch('/auth/resend-otp', {
        method: 'POST',
        body: JSON.stringify({ email, type })
      });
      return { ok: true, devOtp: data && data.devOtp };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  },

  // ── API: Products ──────────────────────────────
  async getProducts({ category, search, page = 1, limit = 12, sort = 'created_at' } = {}) {
    try {
      const params = new URLSearchParams({ page, limit, sort });
      if (category && category !== 'all') params.set('category', category);
      if (search) params.set('search', search);
      const data = await apiFetch('/products?' + params);
      // data = PageResponse: { data: [...], total, page, limit, totalPages }
      const mapped = data.data.map(p => ({
        id: p.id, name: p.name, category: p.category,
        price: p.price, image: p.image, description: p.description,
        difficulty: p.difficulty, light: p.light, careLevel: p.careLevel,
        originalPrice: p.originalPrice, sku: p.sku,
        rating: p.rating, reviews: p.reviewsCount,
        inStock: p.inStock, stock: p.stock
      }));
      cacheProducts(mapped);
      return mapped;
    } catch (e) {
      // fallback mock
      let list = [...PRODUCTS];
      if (category && category !== 'all') list = list.filter(p => p.category === category);
      if (search) list = list.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
      return list;
    }
  },

  async getProduct(id) {
    try {
      const data = await apiFetch('/products/' + id);
      // data = { product: {...}, reviews: [...] }
      const p = data.product;
      const product = {
          id: p.id, name: p.name, category: p.category,
          price: p.price, image: p.image, description: p.description,
          difficulty: p.difficulty, light: p.light, careLevel: p.careLevel,
          rating: p.rating, reviews: p.reviewsCount,
          inStock: p.inStock, stock: p.stock
        };
      cacheProducts([product]);
      return { product, reviews: data.reviews || [] };
    } catch (e) {
      const p = PRODUCTS.find(x => x.id == id) || PRODUCTS[0];
      return { product: p, reviews: [] };
    }
  },

  async getPromotions() {
    try {
      const data = await apiFetch('/promotions');
      return (Array.isArray(data) ? data : data.data || []).map(p => ({
        id: p.id, code: p.code, title: p.title,
        discount: p.discount, discountType: p.type,
        description: p.description, minOrder: p.minOrder,
        validUntil: p.validUntil ? p.validUntil.substring(0, 10) : '', isActive: p.active
      }));
    } catch (e) {
      return PROMOTIONS;
    }
  },

  // ── Logout: xoá cả token ──────────────────────
  logout() {
    clearToken();
    Store.clearUser();
    Store.clearCart();
    window.location.href = getBasePath() + 'login.html';
  },

  // ── API: Cart (server-side sync) ───────────────
  // Xoá giỏ hàng server rồi đồng bộ toàn bộ localStorage cart lên
  async syncCartToServer() {
    if (!getToken()) return false;
    const items = Store.getCart();
    if (!items.length) return false;
    try {
      await apiFetch('/cart', { method: 'DELETE' });
      for (const item of items) {
        await apiFetch('/cart', {
          method: 'POST',
          body: JSON.stringify({ productId: item.productId, quantity: item.quantity })
        });
      }
      return true;
    } catch(e) { return false; }
  },

  // ── API: AI (proxy qua backend, key nằm ở server) ──
  async aiChat(message, history=[]) {
    const data = await apiFetch('/ai/chat', {
      method: 'POST', timeout: 30000,
      body: JSON.stringify({ message, history })
    });
    return data.reply;
  },

  // Trả về { disease, confidence, description, solution } hoặc ném lỗi
  async aiDiagnose(imageDataUrl) {
    return await apiFetch('/ai/diagnose', {
      method: 'POST', timeout: 30000,
      body: JSON.stringify({ image: imageDataUrl })
    });
  },

  // ── API: Orders ────────────────────────────────
  // Đơn của người dùng: lấy thật từ server, không trả dữ liệu giả. Ném lỗi để trang xử lý.
  async getOrders({ page=1, limit=10, status } = {}) {
    const params = new URLSearchParams({ page, limit });
    if (status) params.set('status', status);
    const data = await apiFetch('/orders?' + params, { timeout: 25000 });
    return data.data || [];
  },

  async createOrder(shippingInfo, paymentMethod='COD', promoCode='') {
    try {
      // Gửi thẳng các dòng trong giỏ (kèm snapshot tên/ảnh/giá) để đơn luôn lưu được,
      // không phụ thuộc ID sản phẩm có khớp DB hay không.
      const items = Store.getCart().map(i => ({
        productId:    i.productId,
        productName:  i.product?.name,
        productImage: i.product?.image,
        price:        i.product?.price || 0,
        quantity:     i.quantity
      }));
      const data = await apiFetch('/orders', {
        method: 'POST',
        body: JSON.stringify({
          shippingName:    shippingInfo.fullName,
          shippingPhone:   shippingInfo.phone,
          shippingAddress: shippingInfo.address,
          shippingNote:    shippingInfo.note || '',
          paymentMethod:   paymentMethod,
          promoCode:       promoCode || null,
          items:           items
        })
      });
      return { ok: true, order: data };
    } catch(e) { return { ok: false, error: e.message }; }
  },

  async cancelOrder(orderId) {
    try {
      await apiFetch('/orders/' + orderId + '/cancel', { method: 'PUT' });
      return { ok: true };
    } catch(e) { return { ok: false, error: e.message }; }
  },

  // ── API: User Profile ──────────────────────────
  async getProfile() {
    try {
      return await apiFetch('/users/profile');
    } catch(e) { return null; }
  },

  async updateProfile(name, phone) {
    try {
      const data = await apiFetch('/users/profile', {
        method: 'PUT',
        body: JSON.stringify({ name, phone })
      });
      return { ok: true, user: data };
    } catch(e) { return { ok: false, error: e.message }; }
  },

  async changePassword(currentPassword, newPassword) {
    try {
      await apiFetch('/users/change-password', {
        method: 'PUT',
        body: JSON.stringify({ currentPassword, newPassword })
      });
      return { ok: true };
    } catch(e) { return { ok: false, error: e.message }; }
  },

  // ── API: Admin ─────────────────────────────────
  async adminDashboard() {
    try { return await apiFetch('/admin/dashboard'); } catch(e) { return null; }
  },

  async adminGetProducts({ page=1, limit=20 } = {}) {
    try {
      const data = await apiFetch(`/admin/products?page=${page}&limit=${limit}`);
      return data.data || [];
    } catch(e) { return PRODUCTS; }
  },

  async adminDeleteProduct(id) {
    try { await apiFetch('/admin/products/' + id, { method: 'DELETE' }); return { ok: true }; }
    catch(e) { return { ok: false, error: e.message }; }
  },

  // Admin: KHÔNG trả dữ liệu giả khi lỗi — ném lỗi để trang hiển thị đúng trạng thái thật.
  // timeout dài để chịu được cold-start của Railway.
  async adminGetOrders({ page=1, limit=20, status } = {}) {
    const params = new URLSearchParams({ page, limit });
    if (status) params.set('status', status);
    const data = await apiFetch('/admin/orders?' + params, { timeout: 25000 });
    return data.data || [];
  },

  async adminUpdateOrderStatus(id, status) {
    try {
      const data = await apiFetch('/admin/orders/' + id + '/status', {
        method: 'PUT',
        body: JSON.stringify({ status })
      });
      return { ok: true, order: data };
    } catch(e) { return { ok: false, error: e.message }; }
  },

  async adminCreateOrder(body) {
    try {
      const data = await apiFetch('/admin/orders', {
        method: 'POST', timeout: 20000, body: JSON.stringify(body)
      });
      return { ok: true, order: data };
    } catch(e) { return { ok: false, error: e.message }; }
  },

  // KHÔNG trả khách hàng giả (ID giả gây lỗi khi tạo đơn). Ném lỗi + timeout dài.
  async adminGetCustomers({ page=1, limit=50 } = {}) {
    const data = await apiFetch(`/admin/customers?page=${page}&limit=${limit}`, { timeout: 25000 });
    return data.data || [];
  },

  // ── API: Admin – Products CRUD ─────────────────
  async adminCreateProduct(body) {
    try {
      const data = await apiFetch('/admin/products', {
        method: 'POST', timeout: 20000, body: JSON.stringify(body)
      });
      return { ok: true, product: data };
    } catch(e) { return { ok: false, error: e.message }; }
  },

  async adminUpdateProduct(id, body) {
    try {
      const data = await apiFetch('/admin/products/' + id, {
        method: 'PUT', timeout: 20000, body: JSON.stringify(body)
      });
      return { ok: true, product: data };
    } catch(e) { return { ok: false, error: e.message }; }
  },

  // ── API: Admin – Blog ──────────────────────────
  async adminCreateBlog(body) {
    try {
      const data = await apiFetch('/admin/blog', {
        method: 'POST', timeout: 20000, body: JSON.stringify(body)
      });
      return { ok: true, post: data };
    } catch(e) { return { ok: false, error: e.message }; }
  },

  async adminUpdateBlog(id, body) {
    try {
      const data = await apiFetch('/admin/blog/' + id, {
        method: 'PUT', timeout: 20000, body: JSON.stringify(body)
      });
      return { ok: true, post: data };
    } catch(e) { return { ok: false, error: e.message }; }
  },

  async adminDeleteBlog(id) {
    try {
      await apiFetch('/admin/blog/' + id, { method: 'DELETE' });
      return { ok: true };
    } catch(e) { return { ok: false, error: e.message }; }
  },

  // ── API: Blog (public) ─────────────────────────
  async getBlog({ category, page=1, limit=50 } = {}) {
    try {
      const params = new URLSearchParams({ page, limit });
      if (category && category !== 'all') params.set('category', category);
      const data = await apiFetch('/blog?' + params);
      return data.data || [];
    } catch(e) { return []; }
  },

  async getBlogPost(slug) {
    try {
      const data = await apiFetch('/blog/' + slug);
      return data.post || null;
    } catch(e) { return null; }
  },

  // ── API: Site Settings ─────────────────────────
  async getSettings() {
    try {
      const data = await apiFetch('/settings');
      return data.settings || null;
    } catch(e) { return null; }
  },

  async adminUpdateSettings(body) {
    try {
      const data = await apiFetch('/admin/settings', {
        method: 'PUT', timeout: 20000, body: JSON.stringify(body)
      });
      return { ok: true, settings: data.settings };
    } catch(e) { return { ok: false, error: e.message }; }
  },

  // ── API: Banners ───────────────────────────────
  async getBanners() {
    try {
      const data = await apiFetch('/banners');
      return data.banners || [];
    } catch(e) { return []; }
  },

  async adminGetBanners() {
    try {
      const data = await apiFetch('/admin/banners');
      return data.banners || [];
    } catch(e) { return []; }
  },

  async adminCreateBanner(body) {
    try {
      const data = await apiFetch('/admin/banners', {
        method: 'POST', timeout: 20000, body: JSON.stringify(body)
      });
      return { ok: true, banner: data };
    } catch(e) { return { ok: false, error: e.message }; }
  },

  async adminUpdateBanner(id, body) {
    try {
      const data = await apiFetch('/admin/banners/' + id, {
        method: 'PUT', timeout: 20000, body: JSON.stringify(body)
      });
      return { ok: true, banner: data };
    } catch(e) { return { ok: false, error: e.message }; }
  },

  async adminDeleteBanner(id) {
    try {
      await apiFetch('/admin/banners/' + id, { method: 'DELETE' });
      return { ok: true };
    } catch(e) { return { ok: false, error: e.message }; }
  }
};

// Override doLogout để dùng API.logout
function doLogout() { API.logout(); }
