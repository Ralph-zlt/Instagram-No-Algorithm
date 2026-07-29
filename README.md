🇧🇷 [Ler em português](README.pt-br.md)

# 🚫 Instagram No Reels/Algorithm

## 💡 Why was this script created?

Instagram offers no native option to disable **Reels** or **ads**. In the mobile app, it only allows you to temporarily hide suggested posts, while keeping Reels and ads intact. On the web version (browser), it doesn't allow you to hide any of these.

This script solves all these limitations at once: it removes Reels, hides ads, and eliminates algorithm-suggested posts, delivering a clean feed focused solely on the people you actually chose to follow.

A lightweight Userscript designed to take back control of your time. It removes Instagram's addictive algorithmic feed, hides ads and suggested posts, blocks Reels, and forces the display of **only the people you actually follow**.

---

## 📱 Compatibility & Testing

> 🛠️ **Testing Status:** Tested and working on **Firefox** on **PC/Desktop** and on the **"Firefox: Private  Browser"** app on **Android** (using the **Violentmonkey** extension).
>
> ⚠️ *Mobile Note:* Most common mobile browsers (like Google Chrome) **do not support extensions**. On Android, you must use the standard **Firefox ("Private Fast Browser")**. Versions like *Firefox Focus* **do not have support**.

---

## ⚡ How to Install

### 💻 On PC (Desktop)

1. Install the **Violentmonkey**  extension in your browser.
2. Open the [`instagram-lipo.user.js`](instagram-lipo.user.js) file in this repository and **copy all the code**.
3. Click the extension icon in your browser > **Create a new script** (`+` icon).
4. **Paste** the code inside, click **Save** (or `Ctrl + S`), and you're good to go!
---

### 📱 On Mobile (Android - Step-by-Step for Beginners)

Since the extension menu on mobile isn't as obvious as on desktop, follow this simple guide:

1. **Download the Right Firefox:** 
   * In the Play Store, search for **"Firefox: Private Fast Browser"** (the standard Firefox app).
   * ⚠️ *Attention:* Do **NOT** download "Firefox Focus", as it lacks support.
2. **Install Violentmonkey:**
   * Open Firefox on your phone.
   * Tap the **three dots** (menu icon) and go to **Add-ons** (or *Extensions*).
   * Search for **Violentmonkey** and tap the **+** button to install it.
3. **Copy the Code:**
   * Open the [`instagram-lipo.user.js`](instagram-lipo.user.js) file here on GitHub and **copy all the text/code** inside it.
4. **Paste in Violentmonkey:**
   * In Firefox, go to the three dots menu > **Add-ons** (or *Extensions*) > select **Violentmonkey** and go to settings.
   * 💡 **Screen Attention:** If Violentmonkey opens directly to the settings tab, look at the menu at the top of the screen (`Scripts | Settings | Update | Sync`) and tap **Scripts**.
   * On the Scripts screen, tap the **"+"** icon (New script / Create script).
   * **Delete** all default text that appears there.
   * **Paste** the code you copied.
   * Tap the **Save** icon (the floppy disk at the top) and close that tab.
5. **Done!** Open Instagram in Firefox and enjoy a clean screen.
---

## ✨ How It Works (Read before using!)

* **🏠 Home Screen (Stories Only Mode):** The main page feed is **completely blocked**. You will only see the Stories bar at the top. This is intentional to prevent you from falling into the infinite scroll trap.
* **🎬 Want to see posts from people you follow? Click the Reels button!**
  * The script intercepts the Reels icon (🎬) and turns it into a **direct shortcut to the "Following" tab**.
  * Instead of opening addictive videos, it takes you to a clean, chronological feed with photos and videos **only from accounts you follow**.
* **🧹 Automatic Feed Cleaner:** Even in the "Following" tab, the script automatically hides sponsored posts, ads, and algorithm friend suggestions.
* **🔍 Clean Search/Explore:** Hides the photo/video grid in the Explore tab, leaving **only the search bar** active so you can search for specific profiles without distractions.

---

## ⚠️ Known Limitations (Imposed by Instagram Web)

Since this script runs on the web version of Instagram (via browser) to block algorithmic feeds, it is subject to **limitations enforced by Meta itself** for browsing outside the official app:

* **💬 Question Boxes and Polls in Stories:** Instagram blocks replying to question boxes, polls, and quizzes in web browsers, prompting you to "open in the app". **This is a native restriction by Instagram's website, not a script bug.**


## 🚧 Next Steps (Roadmap)

- [x] Zero-feed Home mode (Stories only)
- [x] Turn Reels button into a shortcut for the "Following" tab
- [x] Hide sponsored and suggested posts
- [ ] Unify Stories and "Following" feed into a single screen (avoiding having to click the Reels button to view posts)
- [ ] Fix the quick "flicker" of the main feed briefly appearing on screen while a Story is loading

---
