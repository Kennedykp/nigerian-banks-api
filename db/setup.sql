-- Create banks table
CREATE TABLE IF NOT EXISTS banks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    code TEXT NULL,
    type TEXT CHECK (type IN ('commercial', 'microfinance', 'fintech')) NOT NULL,
    logo_url TEXT NOT NULL,
    website TEXT NULL,
    status TEXT CHECK (status IN ('active', 'inactive')) DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);
 
-- Separate index creation for better performance on queries
CREATE INDEX IF NOT EXISTS banks_slug_idx ON banks(slug);
CREATE INDEX IF NOT EXISTS banks_type_idx ON banks(type);

-- RLS Policies (Optional: if the user enables RLS)
ALTER TABLE banks ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON banks
    FOR SELECT USING (true);

-- Allow authenticated (service role or specific user via app logic) write access
-- Note: In this app, we manage writes via API Key in the backend using the Service Role Key
-- so RLS might effectively be bypassed if using service key, but good to have minimal policy.
CREATE POLICY "Allow specific modifications" ON banks
    FOR ALL USING (true) WITH CHECK (true);
