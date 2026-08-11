import { CheckCircle2, Layout, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Story() {
  return (
    <div className="my-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

      {/* LEFT: Image Collage */}
      <div className="lg:col-span-6 relative">
        <div className="grid grid-cols-2 gap-4">

          <div className="relative rounded-2xl overflow-hidden shadow-lg h-72">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
              alt="Technology team working together"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg h-72 mt-8">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
              alt="Modern technology workspace"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Floating Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-2xl p-6 shadow-2xl z-20 border border-blue-400/30 text-center min-w-[200px]">

          <span className="text-4xl font-extrabold block">
            100%
          </span>

          <span className="text-xs font-bold uppercase tracking-wider text-blue-100 mt-1 block">
            Project Focused
          </span>

        </div>
      </div>


      {/* RIGHT: Content */}
      <div className="lg:col-span-6 space-y-6">

        {/* Section Label */}
        <div className="flex items-center gap-2">
          <span className="h-0.5 w-6 bg-blue-600"></span>

          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
            About AD FutureStack
          </span>
        </div>


        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
          Turning Ideas Into
          <span className="text-blue-600"> Digital Solutions</span>
        </h2>


        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed">
          AD FutureStack is a growing technology startup focused on building
          modern and practical digital solutions for businesses, startups,
          and individuals.
        </p>

        <p className="text-sm text-slate-600 leading-relaxed">
          From websites and web applications to mobile apps, custom software,
          and AI-powered solutions, we turn ideas into digital products that
          create real-world value.
        </p>


        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">

          {/* Feature 1 */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50/60 border border-blue-100">

            <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Layout className="h-5 w-5" />
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Website Development
              </h4>

              <p className="text-xs text-slate-500 mt-0.5">
                Modern, responsive and high-performance websites.
              </p>
            </div>

          </div>


          {/* Feature 2 */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50/60 border border-blue-100">

            <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Smartphone className="h-5 w-5" />
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Web & Mobile Apps
              </h4>

              <p className="text-xs text-slate-500 mt-0.5">
                Scalable applications built for real-world needs.
              </p>
            </div>

          </div>

        </div>


        {/* Bullet Points */}
        <div className="space-y-2.5 pt-2">

          <div className="flex items-center gap-3 text-xs font-semibold text-slate-700">
            <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
            <span>Modern technologies & clean development</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold text-slate-700">
            <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
            <span>Solutions built around real business needs</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold text-slate-700">
            <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
            <span>Focused on quality, performance & scalability</span>
          </div>

        </div>


        {/* CTA */}
        <div className="pt-4">

          <Link
            to="/about"
            className="inline-flex items-center justify-center bg-blue-600 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-md hover:bg-blue-700 transition-all shadow-md"
          >
            OUR STORY →
          </Link>

        </div>

      </div>

    </div>
  )
}