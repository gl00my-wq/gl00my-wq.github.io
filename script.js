function loadContent5() {
   fetch('results.json') // 确保路径正确，浏览器可以访问到
    .then(response => {
     if (!response.ok) throw new Error("Network response was not ok");
     return response.json();
    })
    .then(data => {
     fillResultsTable(data);
    })
    .catch(error => {
     console.error('加载 JSON 文件失败:', error);
    });
  }
  function fillResultsTable(data) {
     // 按 SRCC 值降序排列
     data.sort((a, b) => b.srcc - a.srcc);
    
     const tbody = document.getElementById("resultsTable");
     tbody.innerHTML = ""; // 清空旧内容
    
     data.forEach((item, index) => {
      const row = document.createElement("tr");
    
      row.innerHTML = `
       <td>${index + 1}</td> <!-- Rank 从 1 开始 -->
       <td>${item.team}</td>
       <td>${item.contact}</td>
       <td>${item.srcc.toFixed(4)}</td>
       <td>${item.plcc}</td>
      `;
    
      tbody.appendChild(row);
     });
    }
    
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
    if (contentId === 5) {
      loadContent5();
    }
    
}
;

