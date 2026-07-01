# 灵感音乐介绍站 / Inspire Music Website

这是灵感音乐的静态介绍网站。它不需要构建工具，直接部署 `index.html`、`styles.css`、`script.js` 和 `assets/` 即可。

## 本地预览

```bash
python -m http.server 4173
```

打开 `http://localhost:4173`。

## 部署到 Cloudflare Pages

1. 在 Cloudflare Pages 里连接这个仓库。
2. Framework preset 选择 `None`。
3. Build command 留空。
4. Build output directory 填 `/`。
5. 自定义域名建议使用 `inspire.kwanlam.cc`。

## GitHub Pages

也可以使用 GitHub Pages。在仓库 Settings -> Pages 里选择 `Deploy from a branch`，分支选择 `main`，目录选择 `/root`。

如果使用 `inspire.kwanlam.cc`，需要在 DNS 里添加对应 CNAME，并在仓库 Pages 里绑定自定义域名。
