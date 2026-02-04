/*
  # Create contact_submissions table
  
  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, not null) - Contact person's name
      - `email` (text, not null) - Contact email address
      - `phone` (text) - Contact phone number
      - `message` (text, not null) - Message content
      - `created_at` (timestamptz) - Submission timestamp
      
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting submissions (public access for form submission)
    - Add policy for viewing submissions (authenticated users only - for admin panel later)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);