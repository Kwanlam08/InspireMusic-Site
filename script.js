const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const languageToggle = document.querySelector(".language-toggle");
const themeLabel = document.querySelector(".theme-text");
const shots = Array.from(document.querySelectorAll(".theme-shot"));
const metaTheme = document.querySelector('meta[name="theme-color"]');
const metaDescription = document.querySelector('meta[name="description"]');

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

const translations = {
  zh: {
    pageTitle: "灵感音乐 Inspire Music",
    metaDescription:
      "灵感音乐 Inspire Music 是一款为本地音乐、歌词、AI 推荐和音乐日记而设计的 Android 音乐播放器。",
    brandName: "灵感音乐",
    navStory: "由来",
    navFeatures: "功能",
    navScreens: "截图",
    navDownload: "下载",
    languageToggle: "EN",
    themeLight: "浅色",
    themeDark: "深色",
    heroEyebrow: "Local-first Android music player",
    heroTitle: "把本地音乐，听成一段有温度的日常。",
    heroLead:
      "灵感音乐不是把歌堆进列表里就算完成。它把本地资料库、Liquid Glass 视觉、智能歌词、AI 推荐和音乐日记放在一起，让每一次打开都像重新遇见自己的歌。",
    downloadApk: "下载 APK",
    viewScreens: "看看界面",
    storyEyebrow: "Why Inspire Music",
    storyTitle: "“灵感”不是装饰词，是它存在的理由。",
    storyMainTitle: "它从一个很简单的愿望开始",
    storyMainA:
      "本地音乐播放器不应该只是“能播放”。它应该安静收好你的专辑、歌词、播放列表和听歌记忆，也应该在你不知道想听什么的时候，轻轻递给你一点灵感。",
    storyMainB:
      "所以灵感音乐把资料库、正在播放、歌词、日记、备份和 AI 推荐放进同一个体验里。它不是为了替代你的音乐品味，而是帮你把那些散落在设备里的歌重新整理成生活的一部分。",
    storyAiTitle: "一句话生成歌单",
    storyAiBody: "“下雨天散步”“睡前安静一点”“运动前热身”，把心情交给它。",
    storyDiaryTitle: "音乐日记",
    storyDiaryBody: "日记、周记和月记记录真正听过的音乐，再用 AI 读出你最近的偏好和情绪线索。",
    featuresEyebrow: "Built for listening",
    featuresTitle: "不是堆功能，是把听歌这件事做顺。",
    featureGlass:
      "底栏、迷你播放器和关键控件统一成通透玻璃质感，浅色深色都保留清晰轮廓。",
    featureLibraryTitle: "本地资料库",
    featureLibrary: "歌曲、专辑、艺人、播放列表和我的喜爱集中管理，适合认真整理音乐的人。",
    featureNowTitle: "正在播放",
    featureNow: "专辑封面、进度、音量和播放控制被收进沉浸式页面，横屏也能保持舒展。",
    featureLyricTitle: "歌词与缓存",
    featureLyric: "本地、内嵌和在线歌词配合缓存管理，尽量少打扰你的播放。",
    featureBackupTitle: "数据备份",
    featureBackup: "播放列表、听歌记录和最近播放可以导出导入，换设备或重装时不用从零开始。",
    featureStorageTitle: "存储空间",
    featureStorage: "像系统存储页一样查看本地音乐占用，知道自己的收藏到底有多大。",
    screensEyebrow: "Light and dark",
    screensTitle: "浅色清爽，深色沉浸。截图会跟着主题切换。",
    shotNow: "正在播放",
    shotAlbum: "专辑页",
    shotDiary: "音乐日记",
    shotAiDiary: "AI 日记分析",
    shotSettings: "设置",
    shotStorage: "音乐存储空间",
    shotLyrics: "歌词缓存",
    shotBackup: "数据备份",
    downloadEyebrow: "Ready to listen",
    downloadTitle: "下载灵感音乐，把本地音乐重新点亮。",
    downloadBody:
      "APK 会发布在 GitHub Releases。核心播放、本地资料库、歌词缓存、音乐日记和数据备份都优先在设备本机完成。",
    githubRelease: "GitHub Release",
    viewProject: "查看项目页",
    footerText: "Made for local music, lyrics and late-night inspiration."
  },
  en: {
    pageTitle: "Inspire Music",
    metaDescription:
      "Inspire Music is a local-first Android music player with Liquid Glass visuals, lyrics, AI playlists, music diary and backup tools.",
    brandName: "Inspire Music",
    navStory: "Story",
    navFeatures: "Features",
    navScreens: "Screens",
    navDownload: "Download",
    languageToggle: "中",
    themeLight: "Light",
    themeDark: "Dark",
    heroEyebrow: "Local-first Android music player",
    heroTitle: "Your local music, turned into something warmer.",
    heroLead:
      "Inspire Music is not just a place to dump songs. It brings your local library, Liquid Glass interface, lyrics, AI playlists and music diary into one quiet, personal listening space.",
    downloadApk: "Download APK",
    viewScreens: "View screens",
    storyEyebrow: "Why Inspire Music",
    storyTitle: "Inspiration is not decoration. It is the point.",
    storyMainTitle: "It started from a simple wish",
    storyMainA:
      "A local music player should do more than press play. It should keep albums, lyrics, playlists and memories in order, then offer a little spark when you do not know what to listen to.",
    storyMainB:
      "That is why Inspire Music combines library, now playing, lyrics, diary, backup and AI recommendations. It does not replace your taste. It helps your songs feel alive again.",
    storyAiTitle: "Describe a mood",
    storyAiBody: "Rainy walk, quiet bedtime, pre-workout energy. Say the feeling and let AI build around it.",
    storyDiaryTitle: "Music diary",
    storyDiaryBody: "Daily, weekly and monthly records capture real listening, then AI reads your recent taste and emotional traces.",
    featuresEyebrow: "Built for listening",
    featuresTitle: "Not more clutter. Just smoother listening.",
    featureGlass:
      "The tab bar, mini player and key controls share a transparent Liquid Glass language that stays readable in light and dark modes.",
    featureLibraryTitle: "Local library",
    featureLibrary: "Songs, albums, artists, playlists and favorites are organized for people who care about their collection.",
    featureNowTitle: "Now playing",
    featureNow: "Artwork, progress, volume and playback controls live in an immersive screen that also works in landscape.",
    featureLyricTitle: "Lyrics and cache",
    featureLyric: "Local, embedded and online lyrics work with cache management, so the player bothers you less.",
    featureBackupTitle: "Data backup",
    featureBackup: "Export and import playlists, listening records and recent plays when changing devices or reinstalling.",
    featureStorageTitle: "Storage insight",
    featureStorage: "See how much space your local music takes, in a clear system-style storage view.",
    screensEyebrow: "Light and dark",
    screensTitle: "Fresh in light mode, immersive in dark mode. Screenshots follow the theme.",
    shotNow: "Now playing",
    shotAlbum: "Album",
    shotDiary: "Music diary",
    shotAiDiary: "AI diary analysis",
    shotSettings: "Settings",
    shotStorage: "Music storage",
    shotLyrics: "Lyric cache",
    shotBackup: "Backup",
    downloadEyebrow: "Ready to listen",
    downloadTitle: "Download Inspire Music and light up your local library.",
    downloadBody:
      "APK builds are published through GitHub Releases. Playback, library, lyric cache, diary and backup are designed to work locally on your device first.",
    githubRelease: "GitHub Release",
    viewProject: "Project page",
    footerText: "Made for local music, lyrics and late-night inspiration."
  }
};

function getInitialTheme() {
  const stored = localStorage.getItem("inspire-theme");
  if (stored === "light" || stored === "dark") return stored;
  return prefersDark.matches ? "dark" : "light";
}

function getInitialLanguage() {
  const stored = localStorage.getItem("inspire-language");
  if (stored === "zh" || stored === "en") return stored;
  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  metaTheme.setAttribute("content", theme === "dark" ? "#020504" : "#eff6f3");

  for (const shot of shots) {
    const nextSrc = shot.dataset[theme];
    if (nextSrc && shot.getAttribute("src") !== nextSrc) {
      shot.setAttribute("src", nextSrc);
    }
  }

  applyLanguage(root.dataset.lang || getInitialLanguage());
}

function applyLanguage(language) {
  const copy = translations[language];
  root.dataset.lang = language;
  root.lang = language === "zh" ? "zh-CN" : "en";
  document.title = copy.pageTitle;
  metaDescription.setAttribute("content", copy.metaDescription);

  for (const node of document.querySelectorAll("[data-i18n]")) {
    const key = node.dataset.i18n;
    if (copy[key]) node.textContent = copy[key];
  }

  themeLabel.textContent = root.dataset.theme === "dark" ? copy.themeDark : copy.themeLight;
}

applyLanguage(getInitialLanguage());
applyTheme(getInitialTheme());

themeToggle.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("inspire-theme", next);
  applyTheme(next);
});

languageToggle.addEventListener("click", () => {
  const next = root.dataset.lang === "zh" ? "en" : "zh";
  localStorage.setItem("inspire-language", next);
  applyLanguage(next);
});

prefersDark.addEventListener("change", (event) => {
  if (!localStorage.getItem("inspire-theme")) {
    applyTheme(event.matches ? "dark" : "light");
  }
});
