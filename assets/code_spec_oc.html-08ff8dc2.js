import{_ as i,r as o,o as a,c as l,a as e,b as t,d as r,e as s}from"./app-dadaccb3.js";const c={},A=e("h1",{id:"【objective-c】代码规范规则包",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#【objective-c】代码规范规则包","aria-hidden":"true"},"#"),t(" 【Objective-C】代码规范规则包")],-1),h=e("p",null,"该规则包针对 Objective-C/C++ 语言进行代码规范相关检查。",-1),d=e("h2",{id:"规则列表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#规则列表","aria-hidden":"true"},"#"),t(" 规则列表")],-1),E={href:"https://tencent.github.io/CodeAnalysis/en/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%B7%A5%E5%85%B7/TCA-Armory-C1.html#ObjectiveC/Copyright",target:"_blank",rel:"noopener noreferrer"},C={href:"https://tencent.github.io/CodeAnalysis/en/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%B7%A5%E5%85%B7/TCA-Armory-C1.html#ObjectiveC/Indent",target:"_blank",rel:"noopener noreferrer"},b={href:"https://tencent.github.io/CodeAnalysis/en/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%B7%A5%E5%85%B7/TCA-Armory-C1.html#ObjectiveC/MaxLinesPerFunction",target:"_blank",rel:"noopener noreferrer"},g={href:"https://tencent.github.io/CodeAnalysis/en/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%B7%A5%E5%85%B7/TCA-Armory-C1.html#ObjectiveC/MissingDocInterface",target:"_blank",rel:"noopener noreferrer"},_={href:"https://tencent.github.io/CodeAnalysis/en/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%B7%A5%E5%85%B7/TCA-Armory-C1.html#ObjectiveC/MissingDocProperty",target:"_blank",rel:"noopener noreferrer"},u={href:"https://tencent.github.io/CodeAnalysis/en/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%B7%A5%E5%85%B7/TCA-Armory-C1.html#ObjectiveC/MissingDocProtocol",target:"_blank",rel:"noopener noreferrer"},m={href:"https://tencent.github.io/CodeAnalysis/en/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%B7%A5%E5%85%B7/TCA-Armory-C1.html#ObjectiveC/ParameterCount",target:"_blank",rel:"noopener noreferrer"},B={href:"https://tencent.github.io/CodeAnalysis/en/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%B7%A5%E5%85%B7/TCA-Armory-C1.html#ObjectiveC/ClassNaming",target:"_blank",rel:"noopener noreferrer"},p={href:"https://tencent.github.io/CodeAnalysis/en/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%B7%A5%E5%85%B7/TCA-Armory-C1.html#ObjectiveC/FunctionNaming",target:"_blank",rel:"noopener noreferrer"},f={href:"https://tencent.github.io/CodeAnalysis/en/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%B7%A5%E5%85%B7/TCA-Armory-C1.html#ObjectiveC/GlobalVariableNaming",target:"_blank",rel:"noopener noreferrer"},v={href:"https://tencent.github.io/CodeAnalysis/en/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%B7%A5%E5%85%B7/TCA-Armory-C1.html#ObjectiveC/LocalVariableNaming",target:"_blank",rel:"noopener noreferrer"},j={href:"https://tencent.github.io/CodeAnalysis/en/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%B7%A5%E5%85%B7/TCA-Armory-C1.html#ObjectiveC/MacroNaming",target:"_blank",rel:"noopener noreferrer"},y={href:"https://tencent.github.io/CodeAnalysis/en/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%B7%A5%E5%85%B7/TCA-Armory-C1.html#ObjectiveC/MethodNaming",target:"_blank",rel:"noopener noreferrer"},O={href:"https://tencent.github.io/CodeAnalysis/en/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%B7%A5%E5%85%B7/TCA-Armory-C1.html#ObjectiveC/ParameterNaming",target:"_blank",rel:"noopener noreferrer"},F={href:"https://tencent.github.io/CodeAnalysis/en/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%B7%A5%E5%85%B7/TCA-Armory-C1.html#ObjectiveC/MaxLineLength",target:"_blank",rel:"noopener noreferrer"},k=s(`<h2 id="启用规则包" tabindex="-1"><a class="header-anchor" href="#启用规则包" aria-hidden="true">#</a> 启用规则包</h2><p>分析方案 -&gt; 代码检查 -&gt;【Objective-C】代码规范规则包 -&gt; 启用/查看规则。</p><h2 id="格式化工具" tabindex="-1"><a class="header-anchor" href="#格式化工具" aria-hidden="true">#</a> 格式化工具</h2><p>为了帮助你正确地格式化代码，我们建议你使用clang-format进行代码自动格式化。工具可直接通过 Homebrew 进行安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew install clang-format
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完成后将 .clang-format 配置文件置于工程根目录，执行 clang-format -i FILE.m 即可完成自动格式化。目前格式化工具配置仅支持11.0版本。</p>`,6);function N(T,x){const n=o("ExternalLinkIcon");return a(),l("div",null,[A,h,d,e("ul",null,[e("li",null,[e("a",E,[t("ObjectiveC/Copyright"),r(n)])]),e("li",null,[e("a",C,[t("ObjectiveC/Indent"),r(n)])]),e("li",null,[e("a",b,[t("ObjectiveC/MaxLinesPerFunction"),r(n)])]),e("li",null,[e("a",g,[t("ObjectiveC/MissingDocInterface"),r(n)])]),e("li",null,[e("a",_,[t("ObjectiveC/MissingDocProperty"),r(n)])]),e("li",null,[e("a",u,[t("ObjectiveC/MissingDocProtocol"),r(n)])]),e("li",null,[e("a",m,[t("ObjectiveC/ParameterCount"),r(n)])]),e("li",null,[e("a",B,[t("ObjectiveC/ClassNaming"),r(n)])]),e("li",null,[e("a",p,[t("ObjectiveC/FunctionNaming"),r(n)])]),e("li",null,[e("a",f,[t("ObjectiveC/GlobalVariableNaming"),r(n)])]),e("li",null,[e("a",v,[t("ObjectiveC/LocalVariableNaming"),r(n)])]),e("li",null,[e("a",j,[t("ObjectiveC/MacroNaming"),r(n)])]),e("li",null,[e("a",y,[t("ObjectiveC/MethodNaming"),r(n)])]),e("li",null,[e("a",O,[t("ObjectiveC/ParameterNaming"),r(n)])]),e("li",null,[e("a",F,[t("ObjectiveC/MaxLineLength"),r(n)])])]),k])}const L=i(c,[["render",N],["__file","code_spec_oc.html.vue"]]);export{L as default};