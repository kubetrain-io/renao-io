# How to Run this Site?

## Run Site in local machine

Direct terminal to site folder `renao`

install all node dependency with `npm install` or `yarn install` on terminal

Run hugo site with `hugo server` or `npm run dev`

## 🚀 How to Deploy a Hugo Site on Cloudflare Pages

### **Step 1 – Log in to Cloudflare**

1. Go to [https://dash.cloudflare.com](https://dash.cloudflare.com).
2. Sign in with your Cloudflare account.
3. In the left sidebar, select **“Pages”** under the **Compute (Workers)** section.

---

### **Step 2 – Create a New Project**

1. Click **“Create a project”** or **“Connect to Git”**.
2. Select **GitHub** as your provider.
3. Authorize Cloudflare to access your GitHub repositories if prompted.
4. Choose your Hugo site’s repository.

---

### **Step 3 – Configure Project Settings**

Once the repository is connected, you’ll see the setup screen (like in your screenshot).

1. **Project name**
   Enter your desired project name (for example: `renao`).
   Your site will be deployed to `renao.pages.dev`.

2. **Production branch**
   Select your deployment branch — usually `main` or `master`.

---

### **Step 4 – Build Settings**

Under **Build settings**, configure the following:

* **Framework preset:**
  Choose **Hugo** from the dropdown list.

* **Build command:**
  Enter:

  ```
  hugo --gc --minify
  ```

  This tells Cloudflare to clean up unused files and minify your output.

* **Build output directory:**
  Enter:

  ```
  public
  ```

  Hugo automatically outputs the generated site into the `public/` folder.

---

### **Step 5 – (Optional) Advanced Settings**

If your Hugo site is not located in the repository root, open **Root directory (advanced)** and specify the folder name (e.g., `/site`).

If your project uses specific versions or environment variables, you can set them under **Environment variables (advanced)**, such as:

```
HUGO_VERSION = 0.148.1
```

---

### **Step 6 – Deploy Your Site**

1. Click **“Save and Deploy.”**
2. Cloudflare will start building your site automatically.
3. When the build process finishes, your site will be live at:

   ```
   https://yourprojectname.pages.dev
   ```

   Example: `https://renao.pages.dev`

---

### ✅ **Done!**

Your Hugo website is now successfully deployed on **Cloudflare Pages**.
Any future commits you push to the `main` branch will automatically trigger a new build and redeploy.

