🇧🇷 [Ler em português](README.pt-br.md)

# 🚫 Instagram No Algorithm

A lightweight Userscript designed to take back control of your time. It removes Instagram's addictive algorithmic feed, hides ads and suggested posts, blocks Reels, and forces the display of **only the people you actually follow**.

---

## 📱 Compatibility & Testing

> 🛠️ **Testing Status:** Tested and working on **Firefox** on **PC/Desktop** and on the **"Firefox: Private  Browser"** app on **Android** (using the **Violentmonkey** or **Tampermonkey** extension).
>
> ⚠️ *Mobile Note:* Most common mobile browsers (like Google Chrome) **do not support extensions**. On Android, you must use the standard **Firefox ("Private Fast Browser")**. Versions like *Firefox Focus* **do not have extension support**.

---

## ⚡ How to Install

### 💻 On PC (Desktop)

1. Install the **Violentmonkey** or **Tampermonkey** extension in your browser.
2. Open the [`instagram-lipo.user.js`](instagram-lipo.user.js) file in this repository and **copy all the code**.
3. Click the extension icon in your browser > **Create a new script** (`+` icon).
4. **Paste** the code inside, click **Save** (or `Ctrl + S`), and you're good to go!
---

### 📱 On Mobile (Android - Step-by-Step for Beginners)

Since the extension menu on mobile isn't as obvious as on desktop, follow this simple guide:

1. **Download the Right Firefox:** 
   * In the Play Store, search for **"Firefox: Private Fast Browser"** (the standard Firefox app).
   * ⚠️ *Attention:* Do **NOT** download "Firefox Focus", as it lacks extension support.
2. **Install Violentmonkey:**
   * Open Firefox on your phone.
   * Tap the **three dots** (menu icon) and go to **Add-ons** (or *Extensions*).
   * Search for **Violentmonkey** and tap the **+** button to install it.
3. **Copy the Code:**
   * Open the [`instagram-lipo.user.js`](instagram-lipo.user.js) file here on GitHub and **copy all the text/code** inside it.
4. **Paste in Violentmonkey:**
   * In Firefox, go to three dots > **Add-ons** > select **Violentmonkey**.
   * 💡 **Screen Attention:** If Violentmonkey opens directly to the settings tab, look at the menu at the top of the screen (`Scripts | Settings | Sync`) and tap **Scripts**.
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

## 🚧 Next Steps (Roadmap)

- [x] Zero-feed Home mode (Stories only)
- [x] Turn Reels button into a shortcut for the "Following" tab
- [x] Hide sponsored and suggested posts
- [ ] Unify Stories and "Following" feed into a single screen (avoiding having to click the Reels button to view posts)
- [ ] Fix the quick "flicker" of the main feed briefly appearing on screen while a Story is loading

---
