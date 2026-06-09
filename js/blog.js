// ===== 博客文章数据 =====
// 添加新文章：复制下面一条，修改标题、日期、摘要、标签和链接
// 最新的文章放在最前面

const posts = [
  {
    title: "🎾 网球线使用数据库",
    date: "2026-06-09",
    excerpt: "记录用过的每一款聚酯硬线：Head Lynx、Lynx Tour、Solinco Hyper-G。含 TWU 实验室数据、论坛主流评价与个人主观感受。",
    tags: ["网球", "装备"],
    url: "posts/tennis-strings.html"
  },
  {
    title: "读《企业家：经济增长的国王》有感",
    date: "2026-05-18",
    excerpt: "读张维迎第三版序的思考：关于企业家的创新、政府的产业政策，以及如何寻找有未来的行业。",
    tags: ["读书", "经济学", "思考"],
    url: "posts/entrepreneur-book.html"
  },
  {
    title: "我的第二篇文章",
    date: "2026-05-10",
    excerpt: "这是一篇关于日常生活的随笔，记录了一些最近的小感悟和思考。",
    tags: ["随笔", "生活"],
    url: "posts/my-second-post.html"
  },
  {
    title: "你好，世界！",
    date: "2026-05-01",
    excerpt: "这是我的第一篇博客文章，跟大家打个招呼，聊聊我为什么要开始写博客。",
    tags: ["随笔"],
    url: "posts/hello-world.html"
  }
];

// ===== 标签颜色 =====
// 根据标签名自动分配颜色（相同标签始终同色）
const tagColors = ['blue', 'pink', 'amber', 'purple', 'teal', 'orange', 'gray'];

function getTagClass(tag) {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  return 'tag-' + tagColors[Math.abs(hash) % tagColors.length];
}
