const u=[{id:"001_序言",title:"序言",url:"/001_序言",content:"投资是认知升级、长期坚守与系统执行的自然结果。财富跃迁需要认知深度、框架韧性和情绪稳定能力。"},{id:"002_第一章",title:"第一章：投资认知起点",url:"/002_第一章",content:"投资的第一步，是看清自己，看懂世界。自我觉知是投资智慧的起点，需要哲学、宗教、心理学与现代科学的综合训练。"},{id:"003_第二章",title:"第二章：投资心理与风险管理",url:"/003_第二章",content:"投资不仅是理性的计算，更是心理的博弈。投资心理管理是成功投资的核心要素，需要识别和克服认知偏差。"},{id:"004_第三章",title:"第三章：历史规律与高倍股研究",url:"/004_第三章",content:"历史不会简单重复，但总有相似的韵律。历史规律揭示市场周期性和结构性机会，为投资决策提供重要参考。"},{id:"005_第四章",title:"第四章：赛道选择与行业趋势",url:"/005_第四章",content:"选择对的赛道，顺势而为。赛道选择是投资成功的关键，需要识别长期结构性趋势。"},{id:"006_第五章",title:"第五章：基本面分析",url:"/006_第五章",content:"基本面是投资的基石。股票筛选需要建立系统化的评估框架，包括基本面、技术面和情绪面。"},{id:"007_第六章",title:"第六章：技术分析与量化",url:"/007_第六章",content:"技术分析与量化工具助力投资决策。交易策略需要明确的入场、出场和仓位管理规则。"},{id:"008_第七章",title:"第七章：资产配置与组合管理",url:"/008_第七章",content:"合理配置资产，分散风险。投资工具包括数据源、分析软件、交易平台等，需要合理选择和配置。"},{id:"009_第八章",title:"第八章：投资工具与平台",url:"/009_第八章",content:"善用工具，事半功倍。案例复盘是学习投资的重要方法，需要系统化分析成功和失败案例。"},{id:"010_第九章",title:"第九章：全球视野与宏观趋势",url:"/010_第九章",content:"放眼全球，洞察大势。投资体系是个人投资哲学的体现，需要系统化构建和完善。"},{id:"011_第十章",title:"第十章：实战案例与复盘",url:"/011_第十章",content:"实践是检验认知的唯一标准。实战执行需要将理论转化为具体操作，需要充分的准备和练习。"},{id:"012_附录",title:"附录",url:"/012_附录",content:"附录提供补充资料和工具，支持主要章节的学习和应用。"}],m=document.getElementById("searchInput"),i=document.getElementById("searchResults");function h(t){if(!t.trim()){i.innerHTML=`
          <div class="search-result">
            <h3>搜索提示</h3>
            <p>输入关键词开始搜索，支持章节标题和内容搜索。</p>
            <p>例如：投资、心理、风险、技术分析、基本面等</p>
          </div>
        `;return}const n=u.filter(e=>(e.title+" "+e.content).toLowerCase().includes(t.toLowerCase()));if(n.length===0){i.innerHTML=`
          <div class="search-result">
            <h3>未找到相关结果</h3>
            <p>请尝试其他关键词或检查拼写。</p>
          </div>
        `;return}const a=n.map(e=>`
        <div class="search-result">
          <h3><a href="${e.url}">${e.title}</a></h3>
          <p>${e.content}</p>
          <a href="${e.url}">阅读全文 →</a>
        </div>
      `).join("");i.innerHTML=a}let o;m.addEventListener("input",t=>{clearTimeout(o),o=setTimeout(()=>{h(t.target.value)},300)});const l=document.getElementById("themeToggle"),c=document.body,s=localStorage.getItem("theme");s&&(c.setAttribute("data-theme",s),l.textContent=s==="dark"?"☀️":"🌙");l.addEventListener("click",()=>{const n=c.getAttribute("data-theme")==="dark"?"light":"dark";c.setAttribute("data-theme",n),l.textContent=n==="dark"?"☀️":"🌙",localStorage.setItem("theme",n)});const d=document.getElementById("sidebarToggle"),r=document.getElementById("sidebar");d.addEventListener("click",()=>{r.classList.toggle("open")});document.addEventListener("click",t=>{!r.contains(t.target)&&!d.contains(t.target)&&r.classList.remove("open")});const g=document.querySelectorAll(".sidebar-nav a");g.forEach(t=>{t.addEventListener("click",()=>{r.classList.remove("open")})});
