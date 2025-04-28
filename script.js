
// 显示指定内容区域的函数
function showContent(contentId) {
  // 隐藏所有内容区域
  var contents = document.querySelectorAll('.content-section');
  contents.forEach(function(content) {
    content.classList.remove('active-content');
  });

  // 显示指定的内容区域
  var selectedContent = document.getElementById('content' + contentId);
  if (selectedContent) {
    selectedContent.classList.add('active-content');
  }

  // 移除所有链接的 active 类
  var links = document.querySelectorAll('nav ul li a');
  links.forEach(function(link) {
    link.classList.remove('active');
  });

  // 给当前点击的链接添加 active 类
  var activeLink = document.querySelectorAll('nav ul li a')[contentId - 1];
  if (activeLink) {
    activeLink.classList.add('active');
  }
}
;
