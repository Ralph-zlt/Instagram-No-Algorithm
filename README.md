🇧🇷 [Ler em português](README.pt-br.md)

# 🚫 Instagram No Reels/Algorithm

## 💡 Why was this script created?

Instagram offers no native option to disable **Reels** or **ads**. In the mobile app, it only allows you to temporarily hide suggested posts, while keeping Reels and ads intact. On the web version (browser), it doesn't allow you to hide any of these.

This script solves all these limitations at once: it removes Reels, hides ads, and eliminates algorithm-suggested posts, delivering a clean feed focused solely on the people you actually chose to follow.



---

### 🛠️ Compatibility & Testing

This script was built with **Firefox** as its primary development base. In theory, it **should work on any browser that supports extensions and Violentmonkey**, but **it has not been tested on other browsers** (such as Chrome, Edge, Brave, etc.), so compatibility with them is not guaranteed.

* 💻 **PC / Desktop:** Tested and working on **Firefox** (using the **Violentmonkey** extension).
* 📱 **Mobile / Android:** Tested and working on **"Firefox browser privado"** (official Firefox app name on Google Play Store) using the **Violentmonkey** extension.

> ⚠️ **Note for mobile:** Most standard mobile browsers (like Google Chrome) **do not support extensions**. On Android, search for **"Firefox browser privado"** on Google Play. Lightweight versions like *Firefox Focus* do not support extensions and **have not been tested**.

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

### ⚠️ Known Limitations (Instagram Web Native Restrictions)

Since this script runs directly on the Web version of Instagram (to clean up the feed and block algorithms), it is subject to the **limitations imposed by Meta** for browsing outside the official mobile app.

> **Note:** The limitations listed below **are not script bugs or errors**, but native restrictions of the Instagram Web platform itself.

These limitations include, **for example, but are not limited to:**

* **💬 Interactive Story Features:** Instagram blocks responding to or using question boxes, polls, quizzes, and interactive stickers in web browsers, displaying a prompt to *"open in app"*.
* **📸 Story Creation and Posting:** Tools available when creating or publishing Stories via browser are significantly reduced compared to the app (such as limitations with adding music, filters, advanced editing, and media formats).



## 🚧 Next Steps (Roadmap)

- [x] Zero-feed Home mode (Stories only)
- [x] Turn Reels button into a shortcut for the "Following" tab
- [x] Hide sponsored and suggested posts
- [ ] Unify Stories and "Following" feed into a single screen (avoiding having to click the Reels button to view posts)
- [ ] Fix the quick "flicker" of the main feed briefly appearing on screen while a Story is loading

---
