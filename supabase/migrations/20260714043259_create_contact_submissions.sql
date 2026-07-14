/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `full_name` (text, not null) — submitter's full name
  - `business_name` (text, nullable) — optional business name
  - `email` (text, not null) — submitter's email address
  - `phone` (text, nullable) — optional phone number
  - `website_url` (text, nullable) — optional current website URL
  - `services_required` (text[], nullable) — array of selected services
  - `message` (text, nullable) — free-text message from the submitter
  - `monthly_budget` (text, nullable) — selected monthly marketing budget range
  - `project_timeline` (text, nullable) — selected project timeline
  - `submission_type` (text, not null default 'proposal') — 'proposal' or 'consultation'
  - `status` (text, not null default 'new') — tracking status for internal use
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_submissions`.
- INSERT policy for `anon, authenticated` so the public contact form can submit without signing in.
- No SELECT/UPDATE/DELETE policies — submissions are only readable via the service role key (Supabase dashboard), protecting user data from public access.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  business_name text,
  email text NOT NULL,
  phone text,
  website_url text,
  services_required text[],
  message text,
  monthly_budget text,
  project_timeline text,
  submission_type text NOT NULL DEFAULT 'proposal',
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);
