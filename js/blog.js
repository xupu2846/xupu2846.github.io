// ===== 博客文章数据 =====
// 添加新文章：复制下面一条，修改标题、日期、摘要、标签和链接
// 最新的文章放在最前面

const posts = [
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
