# Supabase Setup Guide for MedRa Landing Page

This guide will walk you through setting up Supabase as the backend for the MedRa pre-order form.

---

## 📋 Prerequisites

- Supabase account (free tier works perfectly)
- Your MedRa project running locally

---

## 🚀 Step-by-Step Setup

### Step 1: Create a Supabase Project

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Sign up or log in
3. Click **"New Project"**
4. Fill in the details:
   - **Name**: `medra-landing` (or whatever you prefer)
   - **Database Password**: Choose a strong password (save it!)
   - **Region**: Choose closest to your target audience
   - **Pricing Plan**: Free tier is fine
5. Click **"Create new project"**
6. Wait 2-3 minutes for the project to be created

---

### Step 2: Create the Database Table

1. In your Supabase project dashboard, click **"SQL Editor"** in the left sidebar
2. Click **"New query"**
3. Copy and paste this SQL code:

```sql
-- Create the preorders table
CREATE TABLE preorders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  institution TEXT,
  role TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX idx_preorders_email ON preorders(email);

-- Create an index on created_at for sorting
CREATE INDEX idx_preorders_created_at ON preorders(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE preorders ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts from anyone (for the public form)
CREATE POLICY "Allow public inserts"
ON preorders
FOR INSERT
TO anon
WITH CHECK (true);

-- Create a policy to allow authenticated users to read all records
-- (This is for you to view submissions in Supabase dashboard)
CREATE POLICY "Allow authenticated reads"
ON preorders
FOR SELECT
TO authenticated
USING (true);

-- Add a trigger to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_preorders_updated_at
BEFORE UPDATE ON preorders
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
```

4. Click **"Run"** or press `Cmd/Ctrl + Enter`
5. You should see: ✅ **"Success. No rows returned"**

---

### Step 3: Get Your API Keys

1. In your Supabase dashboard, click **"Settings"** (gear icon) in the left sidebar
2. Click **"API"** under Project Settings
3. You'll see two important values:

   **Project URL**:
   ```
   https://your-project-id.supabase.co
   ```

   **anon public key** (under "Project API keys"):
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

4. **Keep this page open** - you'll need these in the next step

---

### Step 4: Configure Environment Variables

1. In your MedRa project folder, create a file called `.env.local`:

```bash
# In your terminal, from the project root:
cp .env.local.example .env.local
```

2. Open `.env.local` and paste your Supabase credentials:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

⚠️ **Important**:
- Replace `your-project-id` with your actual project URL
- Replace the anon key with your actual key
- **NEVER commit `.env.local` to Git** (it's already in `.gitignore`)

---

### Step 5: Install Dependencies & Test

1. Install the Supabase client library:

```bash
npm install
```

2. Start your development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

4. Scroll to the pre-order form and submit a test entry:
   - **Name**: Test User
   - **Email**: test@example.com
   - **Institution**: Test Hospital
   - **Role**: Tester

5. If successful, you'll see: ✅ **"You're on the List!"**

---

### Step 6: Verify Data in Supabase

1. Go back to your Supabase dashboard
2. Click **"Table Editor"** in the left sidebar
3. Click the **"preorders"** table
4. You should see your test submission! 🎉

---

## 📊 Viewing Your Pre-Orders

### Option 1: Supabase Dashboard

- Go to **Table Editor** → **preorders**
- View all submissions in a spreadsheet-like interface
- Click any row to see full details
- Export to CSV if needed

### Option 2: SQL Queries

In the **SQL Editor**, you can run queries like:

```sql
-- View all pre-orders
SELECT * FROM preorders ORDER BY created_at DESC;

-- Count total pre-orders
SELECT COUNT(*) FROM preorders;

-- View recent pre-orders (last 7 days)
SELECT * FROM preorders
WHERE created_at > NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;

-- Find duplicates by email
SELECT email, COUNT(*) as count
FROM preorders
GROUP BY email
HAVING COUNT(*) > 1;
```

---

## 🔒 Security Notes

### What's Secure:

✅ **Row Level Security (RLS)** is enabled
✅ **Public can only INSERT** (submit forms)
✅ **Public CANNOT read** other people's data
✅ **Only you (authenticated)** can view all submissions
✅ **API keys are in `.env.local`** (not committed to Git)

### What to Know:

- The `anon` key is safe to expose in frontend code (it's public)
- RLS policies prevent unauthorized access
- Anyone can submit the form (that's the point!)
- Only authenticated Supabase users can view submissions

---

## 📧 Email Notifications (Optional)

Want to get notified when someone pre-orders?

### Option 1: Supabase Database Webhooks

1. Go to **Database** → **Webhooks**
2. Click **"Create a new webhook"**
3. Configure:
   - **Table**: `preorders`
   - **Events**: `INSERT`
   - **Type**: `HTTP Request`
   - **Method**: `POST`
   - **URL**: Your email service endpoint (e.g., Zapier, Make.com)

### Option 2: Use a Third-Party Service

**Zapier Integration**:
1. Create a Zap with Supabase trigger
2. Add Gmail/Slack action
3. Connect to your table

**Example Zap**:
- Trigger: New row in Supabase `preorders`
- Action: Send email via Gmail

---

## 🐛 Troubleshooting

### Error: "Failed to submit. Please try again."

**Check:**
1. Are your environment variables set correctly in `.env.local`?
2. Did you restart the dev server after adding `.env.local`?
3. Is the Supabase project URL correct?
4. Is the anon key copied fully (it's very long)?

**Test connection**:
```bash
# In your browser console (F12), run:
console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)
```

If it shows `undefined`, your `.env.local` isn't loaded.

---

### Error: "new row violates row-level security policy"

**Solution:**
- Make sure you ran the SQL from Step 2 that includes the RLS policy
- Check that the policy allows `anon` users to INSERT

**Fix:**
```sql
-- Re-run this policy
CREATE POLICY "Allow public inserts"
ON preorders
FOR INSERT
TO anon
WITH CHECK (true);
```

---

### Error: "relation 'preorders' does not exist"

**Solution:**
- The table wasn't created
- Go back to Step 2 and run the SQL query again

---

### Form submits but no data appears in Supabase

**Check:**
1. Are you looking at the right project?
2. Refresh the Table Editor page
3. Check the browser console for errors (F12)

---

## 📈 Advanced Features (Optional)

### Email Validation

Prevent duplicate emails:

```sql
-- Add unique constraint to email
ALTER TABLE preorders
ADD CONSTRAINT unique_email UNIQUE (email);
```

Then update the form to handle duplicate errors gracefully.

---

### Analytics

Track conversion rates:

```sql
-- Add source tracking
ALTER TABLE preorders ADD COLUMN source TEXT;

-- Track where users came from
INSERT INTO preorders (name, email, source)
VALUES ('John Doe', 'john@example.com', 'google-ads');
```

---

### Export Data

Export all pre-orders as CSV:

```sql
COPY (
  SELECT name, email, institution, role, created_at
  FROM preorders
  ORDER BY created_at DESC
) TO '/tmp/preorders.csv' WITH CSV HEADER;
```

Or just use the **"Export to CSV"** button in Table Editor.

---

## 🎯 Next Steps

Now that Supabase is set up:

1. ✅ Test the form thoroughly
2. ✅ Set up email notifications (optional)
3. ✅ Add form to your marketing campaigns
4. ✅ Monitor submissions regularly
5. ✅ Export data to your CRM (HubSpot, Salesforce, etc.)

---

## 📞 Support

- **Supabase Docs**: [https://supabase.com/docs](https://supabase.com/docs)
- **Supabase Discord**: [https://discord.supabase.com](https://discord.supabase.com)
- **Next.js Docs**: [https://nextjs.org/docs](https://nextjs.org/docs)

---

## 🔑 Database Schema Reference

For your records, here's the table structure:

```typescript
type PreOrder = {
  id: string              // UUID, auto-generated
  name: string            // Required
  email: string           // Required
  institution: string | null  // Optional
  role: string | null     // Optional
  created_at: string      // ISO timestamp, auto-generated
  updated_at: string      // ISO timestamp, auto-updated
}
```

---

**That's it!** Your MedRa landing page is now connected to Supabase. Every form submission will be stored securely in your database. 🚀
