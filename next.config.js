/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' for Vercel deployment
  images: {
    domains: ['supabase.co']
  }
}

module.exports = nextConfig 