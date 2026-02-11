# CI/CD Guide for Beginners

## What is CI/CD? (Simple Explanation)

Imagine you're writing a school essay:

**Without CI/CD:**
1. You write on your computer
2. You email it to your teacher
3. Teacher finds a typo
4. You fix it, email again
5. Repeat...

**With CI/CD:**
1. You write on Google Docs
2. Teacher sees changes **instantly**
3. Automatic spell-check runs as you type
4. Everyone always sees the latest version

CI/CD does this for code and websites.

---

## Breaking Down the Acronym

### **CI = Continuous Integration**
"Continuous" = happening automatically
"Integration" = combining code changes

**What it does:**
- Automatically checks your code when you save/push
- Runs tests to make sure nothing broke
- Checks for typos and errors
- Makes sure the website still builds

**Real example for your website:**
```
You change homepage text → Save → Push to GitHub
    ↓
GitHub automatically:
    ✅ Checks TypeScript has no errors
    ✅ Runs ESLint to check code quality
    ✅ Tries to build the website
    ✅ Tells you if something broke
```

### **CD = Continuous Deployment**
"Deployment" = putting your website live on the internet

**What it does:**
- Automatically publishes your website when code is ready
- No manual uploading needed
- Happens in seconds/minutes

**Real example for your website:**
```
You push code to GitHub → GitHub tells Vercel
    ↓
Vercel automatically:
    ✅ Downloads your new code
    ✅ Builds the Next.js website
    ✅ Uploads to their servers
    ✅ Your website is live at yoursite.vercel.app
```

---

## The Simplest CI/CD Setup (For Your Project)

Here's what I recommend as a **complete beginner**:

### Step 1: Push Your Code to GitHub

```bash
# In your terminal, in your project folder
git init
git add .
git commit -m "Initial commit"

# Create a repo on github.com, then:
git remote add origin https://github.com/yourusername/pact-website.git
git push -u origin main
```

### Step 2: Connect to Vercel (This IS Your CI/CD!)

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "Add New Project"
3. Select your `pact-website` repository
4. Click "Deploy"

**That's it!** You now have full CI/CD. Here's what happens automatically:

```
┌─────────────────────────────────────────────┐
│  YOU: Make a change to your code           │
│       git add .                             │
│       git commit -m "Update homepage"       │
│       git push                              │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│  GITHUB: Receives your code                 │
│          Stores it safely                   │
│          Notifies Vercel "New code!"        │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│  VERCEL: (This is the CI/CD magic)          │
│          ✅ Downloads your code             │
│          ✅ Runs npm install                │
│          ✅ Runs npm run build              │
│          ✅ Checks for errors               │
│          ✅ Uploads to their servers        │
│          ✅ Makes it live on the internet   │
│                                             │
│          ⏱️  Takes ~1-2 minutes total       │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│  RESULT: Your website is updated!           │
│          Visit: yoursite.vercel.app         │
└─────────────────────────────────────────────┘
```

---

## What About Those GitHub Actions Files?

GitHub Actions files are **optional extras**. Vercel already does CI/CD for you. You only need GitHub Actions if you want to add:

- ✅ Run tests before deploying
- ✅ Check code quality (linting)
- ✅ Send notifications to Slack/Discord
- ✅ Deploy to multiple places (staging + production)

**For now, ignore them.** You don't need them yet.

---

## Your CI/CD Workflow (Day-to-Day)

Here's what your daily workflow will look like:

```bash
# 1. Make changes to your code
# Edit files in VS Code

# 2. Test locally
npm run dev
# Check http://localhost:3000 - does it look good?

# 3. Save your changes to GitHub
git add .
git commit -m "Added new hero section"
git push

# 4. Wait ~2 minutes
# Check vercel.com dashboard or your email

# 5. Your website is live!
# Visit yoursite.vercel.app to see changes
```

---

## Common Questions

**Q: What if my code has errors?**
A: Vercel will try to build it and **fail**. You'll get an email saying "Deployment failed" with error details. Fix the error locally, push again.

**Q: Can I test before it goes live?**
A: Yes! Vercel gives you **preview URLs**. If you create a pull request on GitHub, Vercel creates a temporary URL (like `yoursite-pr-5.vercel.app`) so you can test before merging.

**Q: What if I push bad code to production?**
A: Vercel keeps all old versions. You can click "Rollback" in the dashboard to instantly go back to any previous version.

**Q: Is this free?**
A: Yes! Vercel's free tier is very generous for personal projects.

**Q: Do I need those secret tokens?**
A: **No!** Not if you connect GitHub to Vercel through their dashboard. Vercel handles authentication automatically.

---

## Visual: The Complete Picture

```
┌──────────────────────────────────────────────────────────┐
│                     YOUR COMPUTER                         │
│                                                           │
│  ┌─────────────┐   ┌──────────────┐   ┌──────────────┐  │
│  │ VS Code     │   │ Terminal     │   │ Browser      │  │
│  │             │   │              │   │              │  │
│  │ Edit code   │   │ git push     │   │ localhost:   │  │
│  │             │   │              │   │ 3000         │  │
│  └─────────────┘   └──────┬───────┘   └──────────────┘  │
│                            │                              │
└────────────────────────────┼──────────────────────────────┘
                             │
                             │ git push
                             │
                             ▼
┌──────────────────────────────────────────────────────────┐
│                         GITHUB                            │
│                    (Code Storage)                         │
│                                                           │
│  Your code is safely stored here                          │
│  Anyone can see it (if public)                            │
│  You can go back to any old version                       │
│                                                           │
└────────────────────────────┬─────────────────────────────┘
                             │
                             │ Webhook: "New code available!"
                             │
                             ▼
┌──────────────────────────────────────────────────────────┐
│                         VERCEL                            │
│                   (CI/CD + Hosting)                       │
│                                                           │
│  1. Downloads code from GitHub                            │
│  2. Runs: npm install                                     │
│  3. Runs: npm run build                                   │
│  4. If successful → Deploy to servers                     │
│  5. If failed → Send error email                          │
│                                                           │
└────────────────────────────┬─────────────────────────────┘
                             │
                             │ Deployed!
                             │
                             ▼
┌──────────────────────────────────────────────────────────┐
│                    THE INTERNET                           │
│                                                           │
│  Your website is live at:                                 │
│  https://yoursite.vercel.app                              │
│                                                           │
│  Anyone in the world can visit it!                        │
└──────────────────────────────────────────────────────────┘
```

---

## Try It Out! (Your First Deployment)

Let's do this step by step:

**Step 1:** Make sure your code works locally
```bash
npm run dev
# Visit http://localhost:3000
# Does it look good? Great!
```

**Step 2:** Push to GitHub
```bash
git status  # See what changed
git add .
git commit -m "Ready for first deployment"
git push
```

**Step 3:** Connect to Vercel
- Go to vercel.com and sign up
- Import your GitHub repository
- Click Deploy
- Wait 2 minutes

**Step 4:** Visit your live website!
- Vercel gives you a URL like `pact-website.vercel.app`
- Share it with friends!

---

## Repository Secrets Explained

Repository secrets are **encrypted environment variables** stored in GitHub that your CI/CD workflows can access securely. They're used to store sensitive data like API keys, tokens, and credentials that your workflows need but shouldn't be exposed in your code.

### What Are Repository Secrets?

Think of them as a secure vault in GitHub where you store sensitive information that GitHub Actions workflows need to run, but you don't want to commit to your repository (visible to everyone).

### Common Secrets You'll Need

For your Vercel deployment, you'll need these secrets:

1. **`VERCEL_TOKEN`** - Your personal Vercel authentication token
2. **`VERCEL_ORG_ID`** - Your Vercel organization/team ID
3. **`VERCEL_PROJECT_ID`** - Your specific project ID in Vercel

### How to Get These Values

#### 1. Get your VERCEL_TOKEN

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Generate a token
vercel tokens create
```

Or via Vercel Dashboard:
- Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
- Click "Create Token"
- Give it a name (e.g., "GitHub Actions")
- Copy the token (you'll only see it once!)

#### 2. Get VERCEL_ORG_ID and VERCEL_PROJECT_ID

After you've deployed your project to Vercel once (either via CLI or dashboard):

```bash
# Run this in your project directory
vercel link

# Then check the .vercel/project.json file
cat .vercel/project.json
```

The file will look like this:

```json
{
  "orgId": "team_xxxxxxxxxxxxxxxxxxxxxx",
  "projectId": "prj_xxxxxxxxxxxxxxxxxxxxxx"
}
```

### How to Add Secrets to GitHub

**Step-by-step:**

1. **Go to your GitHub repository** → `https://github.com/yourusername/pact-website`

2. **Click "Settings"** tab (at the top)

3. **In the left sidebar**, click "Secrets and variables" → "Actions"

4. **Click "New repository secret"** button

5. **Add each secret:**
   - **Name:** `VERCEL_TOKEN`
   - **Value:** Paste your Vercel token
   - Click "Add secret"

6. **Repeat for other secrets:**
   - `VERCEL_ORG_ID` → paste your org ID
   - `VERCEL_PROJECT_ID` → paste your project ID

### How Workflows Access Secrets

In your GitHub Actions workflows, you reference secrets like this:

```yaml
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v25
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}           # ← Accesses secret
    vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}         # ← Accesses secret
    vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }} # ← Accesses secret
```

**Key points:**
- Secrets are **never** printed in workflow logs (GitHub automatically masks them)
- You use `${{ secrets.SECRET_NAME }}` syntax to access them
- They're encrypted at rest in GitHub's database
- Only repository collaborators with admin/write access can manage secrets

### Alternative: Vercel's Built-in GitHub Integration

**Important note:** If you connect your GitHub repo to Vercel through their dashboard (Import Git Repository), **you don't need these secrets or custom workflows!** Vercel automatically:

- ✅ Deploys every push to `main` → production
- ✅ Creates preview URLs for every PR
- ✅ No GitHub Actions configuration needed
- ✅ No secrets to manage

The GitHub Actions workflows are only needed if you want:
- Custom CI steps (linting, testing) before deployment
- Deploy to multiple environments (staging, production)
- Deploy to non-Vercel platforms (AWS, Netlify, etc.)
- More control over the deployment process

---

## Next Steps

Once you're comfortable with the basics:

1. **Learn about branches** (work on features without breaking production)
2. **Add preview deployments** (test changes before going live)
3. **Add custom domains** (use your own domain name)
4. **Add monitoring** (see who visits your site)

But for now, just master the basic cycle:
**Code → Push → Deploy → Live** ✨

---

## Recommended Approach for Beginners

**Option 1 (Easiest):** Let Vercel handle everything
1. Push your code to GitHub
2. Import repository in Vercel dashboard
3. Vercel automatically sets up CI/CD
4. No secrets needed!

**Option 2 (More Control):** GitHub Actions + Vercel
1. Push code to GitHub
2. Add GitHub Actions workflow files
3. Create Vercel project and get secrets
4. Add secrets to GitHub
5. GitHub Actions handles CI/CD

For beginners, **Option 1 is highly recommended!**
