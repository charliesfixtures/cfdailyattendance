# 📋 Daily Attendance Power-Up — Setup Guide

A Trello Power-Up that lets managers log employee attendance (Late, Absent, Sick, Vacation), auto-logs to a hidden board, tracks running counters per employee, and sends a Slack summary on submit.

---

## 📁 Files in This Repo

| File | What it does |
|------|-------------|
| `index.html` | The main attendance UI shown inside Trello cards |
| `connector.js` | Registers the Power-Up with Trello |
| `authorize.html` | Handles Trello login authorization |
| `manifest.json` | Power-Up metadata |

---

## 🚀 Step-by-Step Setup

### STEP 1 — Enable GitHub Pages
1. Go to your GitHub repo → **Settings** → **Pages**
2. Under "Source" select **Deploy from a branch**
3. Branch: `main` | Folder: `/ (root)`
4. Click **Save**
5. Wait ~2 minutes. Your Power-Up will live at:
   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

---

### STEP 2 — Get Your Trello API Key
1. Go to: https://trello.com/app-key
2. Copy your **API Key** (shown at the top)
3. Paste it into **two places**:
   - `index.html` → line with `TRELLO_API_KEY: 'YOUR_TRELLO_API_KEY'`
   - `authorize.html` → line with `const TRELLO_API_KEY = 'YOUR_TRELLO_API_KEY'`

---

### STEP 3 — Create Your Hidden Logging Board
1. In Trello, create a new board (e.g. "Attendance Logs — Do Not Delete")
2. Make it **private** (visible only to you/admins)
3. Copy the Board ID from the URL:
   - URL looks like: `trello.com/b/AbCdEfGh/attendance-logs`
   - The Board ID is: `AbCdEfGh`
4. Paste it into `index.html`:
   - `LOG_BOARD_ID: 'YOUR_LOG_BOARD_ID'`

> 💡 The Power-Up will automatically create a list called "2026" (or the current year) and employee cards inside it. You don't need to create anything manually.

---

### STEP 4 — Create Your Slack Webhook
1. Go to: https://api.slack.com/apps
2. Click **Create New App** → **From scratch**
3. Name it "Attendance Bot", choose your workspace → **Create App**
4. Click **Incoming Webhooks** → toggle **Activate Incoming Webhooks** ON
5. Click **Add New Webhook to Workspace**
6. Choose your **#general** channel (or whichever you prefer)
7. Copy the Webhook URL (starts with `https://hooks.slack.com/services/...`)
8. Paste it into `index.html`:
   - `SLACK_WEBHOOK_URL: 'YOUR_SLACK_WEBHOOK_URL'`

---

### STEP 5 — Add Your Employees
In `index.html`, find the `EMPLOYEES` array and replace the placeholder names:

```javascript
EMPLOYEES: [
  'John Smith',
  'Jane Doe',
  'Maria Garcia',
  // Add everyone here...
],
```

---

### STEP 6 — Register the Power-Up in Trello
1. Go to: https://trello.com/power-ups/admin
2. Click **Create New Power-Up**
3. Fill in:
   - **Name:** Daily Attendance
   - **Workspace:** Your workspace
   - **Iframe connector URL:** `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/connector.js`
4. Under **Capabilities**, check:
   - ✅ Card Buttons
   - ✅ Board Buttons  
   - ✅ Card Back Section
5. Click **Save**

---

### STEP 7 — Add the Power-Up to Your Board
1. Open your main Trello board
2. Click **Power-Ups** (top menu)
3. Search for "Daily Attendance" (your workspace Power-Ups appear under "Custom")
4. Click **Add**
5. Click **Authorize** when prompted

---

### STEP 8 — Set Up Trello Automation (Daily Card Creation)
1. In your board, click **Automation** → **Rules** → **Create Rule**
2. Set trigger: **Every day at [time, e.g. 7:00 AM]**
3. Add action: **Create card**
   - Name: `Attendance — {date}` 
   - List: Your morning list
4. Save the rule

---

## 🗂 How the Logging Board Works

Each employee gets **one card** per year in your hidden board:

```
Hidden Board: "Attendance Logs"
  └── List: "2026"
        ├── Card: John Smith
        │     Description: | Late | Absent | Sick | Vacation |
        │                  |  2   |   0    |  1   |    3     |
        │     Comments:
        │       Feb 19, 2026 — Late
        │       Jan 08, 2026 — Sick
        │
        └── Card: Jane Doe
              ...
```

**At the start of a new year:** A new list "2027" is automatically created with fresh cards. The 2026 data stays untouched.

---

## 💬 Slack Message Example

```
📋 Daily Attendance — Feb 19, 2026

✅ Present (4): John Smith, Jane Doe, Maria Garcia, Tom Lee
🕐 Late (1): Alex Kim
❌ Absent (0):
🤒 Sick (1): Sara Chen
🌴 Vacation (1): Mike Johnson
```

---

## ❓ Common Issues

**"Authorization failed"** — Double-check your API Key is the same in both `index.html` and `authorize.html`.

**"Trello API error: 404"** — Your Log Board ID is wrong. Re-check the URL of your hidden board.

**Slack message not sending** — Make sure your Webhook URL is complete and the Slack app is installed to your workspace.

**Power-Up not showing up** — GitHub Pages may take a few minutes to deploy. Try a hard refresh (Ctrl+Shift+R).

---

## 📞 Need Help?
Go back to Claude and share any error messages — we'll fix it together!
 
