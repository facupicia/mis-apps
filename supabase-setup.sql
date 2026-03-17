-- Supabase projects table setup
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  hero_image TEXT NOT NULL,
  link TEXT NOT NULL,
  tech_tags TEXT[] DEFAULT '{}',
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policy to allow read access to everyone
CREATE POLICY "Allow public read access" ON projects
  FOR SELECT USING (true);

-- Sample data (optional)
INSERT INTO projects (title, description, hero_image, link, tech_tags, order_index) VALUES
  (
    'E-Commerce Platform',
    'A modern shopping experience with real-time inventory and seamless checkout flow.',
    'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    'https://example.com',
    ARRAY['Next.js', 'TypeScript', 'Stripe'],
    0
  ),
  (
    'Task Management App',
    'Collaborative project management tool with real-time updates and team workspaces.',
    'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    'https://example.com',
    ARRAY['React', 'Node.js', 'Socket.io'],
    1
  ),
  (
    'Analytics Dashboard',
    'Data visualization platform with customizable widgets and export capabilities.',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    'https://example.com',
    ARRAY['TypeScript', 'D3.js', 'PostgreSQL'],
    2
  );
