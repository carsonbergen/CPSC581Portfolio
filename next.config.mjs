import createMDX from '@next/mdx';
import remarkMath from 'remark-math';
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [],
  },
})
 
// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig)