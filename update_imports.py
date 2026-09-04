with open('src/components/microsistec/MicrosistecLanding.tsx', 'r') as f:
    content = f.read()

imports = """
const StatsStrip = React.lazy(() => import('./sections/StatsStrip'));
const Pillars = React.lazy(() => import('./sections/Pillars'));
const Albert = React.lazy(() => import('./sections/Albert'));
const Funil = React.lazy(() => import('./sections/Funil'));
const Ecosystem = React.lazy(() => import('./sections/Ecosystem'));
const IntegrationsSection = React.lazy(() => import('./sections/IntegrationsSection'));
const Blog = React.lazy(() => import('./sections/Blog'));
const CTA = React.lazy(() => import('./sections/CTA'));
const Footer = React.lazy(() => import('./sections/Footer'));
"""

# add it after Testimonial lazy import
content = content.replace('const Testimonial = React.lazy(() => import("./Testimonial"));', 'const Testimonial = React.lazy(() => import("./Testimonial"));\n' + imports)

# We need to wrap the body of MicrosistecLanding with Suspense.
# Actually, the simplest is to wrap all these calls with Suspense locally where they are called.
with open('src/components/microsistec/MicrosistecLanding.tsx', 'w') as f:
    f.write(content)
print("Updated imports")
