# 謝侑均個人網站
個人網站連結 [https://xieyou.me/](https://xieyou.me/)  
使用 Next.js 及 Tailwind CSS 來製作，除了想學新技術外，剛好個人網站也很適合這個搭配，網站主要放置網頁工程師及魔術相關的作品  

&nbsp;
## Getting Started
```bash
yarn install && yarn dev
```

&nbsp;
## 技術選擇 (一) Next.js
練習之外，也達成 SEO 效果，個人網站不會有每分每秒都在變動的東西，只需要做 SSG 就好，目前沒有使用 getStaticProps 或 getServerSideProps(沒有用到這兩個功能的頁面 Next.js 會自動做 SSG)。

### build 階段如何進行動態 SSG
如果要替作品集生成獨立頁面，例如```./portfolio/id```這種，就用 getStaticProps 搭配 getStaticPath，可以在 build 的階段進行 pre-render。

### 上線後如何動態更新網站 (ISR)
#### A. 更新已有的頁面
在 getStaticProps 設定 revalidate 參數，超過 revalidate 時間後如果有人點進那個網址，server 會先回傳 cache(已經做好的頁面)，然後自己做 getStaticProps 重新 pre-render 那個頁面，像是作品集總覽(網站首頁)或**已經存在的**作品集獨立頁面適用。

#### B. 加入新的網址
在 getStaticPaths 設定 fallback:'blocking'，當在資料庫新增完全新的作品之後，進入那個 id 的網址就會生成新的獨立頁面並儲存。

#### 觀念釐清
要注意 A 是傳舊的後才在 server 自己重新 pre-render，而 B 則是第一次點進網址時會做 pre-render 後再傳給 client，等於是做 SSR，但有把頁面存下來，之後就會變成 A 的情況。  
#### 例子: 新增一個作品
1. 作品集總覽會是情況 A：第一個人會拿到舊的，可以自己先點進去讓 server 更新一下
2. 作品集獨立頁面是情況 B：第一個人是 SSR，比較慢，但保證是新的。

&nbsp;
## 技術選擇 (二) Tailwind CSS
### 優缺比較
##### 優點
用 MUI 這種 UI 框架的話風格有點受限，選用 CSS 框架可以比較容易客製化，雖然 MUI 也有styled API 可以用，但實際寫過後覺得 Tailwind 這種 inline style 比想像中乾淨，因為 css 只會被塞在 className 裡，不用上下滾動 code，html 架構也很清楚。過去會覺得 css 跟 js 切開比較好看，而且 style component 取名可以知道每個 tag 的語意，但不用取名的話開發上很輕鬆(甚至名字沒取好的話還會誤導人)，而且像 React 這種元件切開來的開發模式，好好切就不太會有看不懂某個 div 在幹嘛的情況。
##### 缺點
造輪子還是蠻累得，像是 IconButton 之類，做動畫也是有點棘手(像是 group hover 這種，用純 css 的話很容易 select child，但 Tailwind 就比較麻煩，而且閱讀起來不乾淨)，之後要研究怎麼在 Tailwind 寫純 css。另外如果 RWD 屬性不多的話寫起來超快，但有多個屬性就會變成像 ```md:w-3 md:h-3 md:flex```，希望未來可以弄成像 md:{w-3 h-3 flex} 之類的。
&nbsp;
### 動畫
- 動畫的部分為純 Tailwind 手刻，主要用來熟悉 CSS 跟 Tailwind 的邏輯，未來可以記錄幾個動畫效果的做法(換頁的升降幕、作品集 hover 字體上升、Timeline接連出現效果、輪播圖等等)
- 實作一次手刻後在其他不是使用 Tailwind 的網站也能用其他方式做出想要的動畫，像是購物車展開收合這種

&nbsp;
## Features of future website
1. 增加 markdown 部落格記錄一些五四三，或引入 hackmd 即可
2. 作品集目前也是直接寫死，考慮放進資料庫(用 Vercel 做 CI/CD 其實已經足夠方便，如果有部落格需求再考慮接資料庫)


&nbsp;
## Ref.
[Favicon產生器](https://www.ifreesite.com/favicon/)  
[React-icon](https://react-icons.github.io/react-icons/)  
[從零開始學習 Next.js 系列](https://ithelp.ithome.com.tw/articles/10269655)
有依序講解用法，但觀念有點難理解   
[[NextDoc] Basic Feature 閱讀筆記](https://pjchender.dev/react/nextjs-doc-basic-feature/)
這篇對 ISR 的解釋比較清楚