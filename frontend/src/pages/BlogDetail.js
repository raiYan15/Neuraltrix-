import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import CTASection from "../components/CTASection";
import PageContactForm from "../components/PageContactForm";
import blogArticles from "../data/blog";

export default function BlogDetail() {
  const { slug } = useParams();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold text-[#0B1B3D] mb-4">Article Not Found</h1><Link to="/blog" className="text-[#2563EB] font-medium">Back to Blog</Link></div></div>);
  }

  return (
    <div>
      {/* Article Hero */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: "#0B1B3D" }}>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12">
          <Link to="/blog" data-testid="back-to-blog" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest block mb-4">{article.category}</span>
          <h1 data-testid="blog-article-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif", letterSpacing: "-0.03em" }}>
            {article.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
          </div>
        </div>
      </section>
      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 -mt-8">
        <img src={article.image} alt={article.title} className="w-full h-64 sm:h-80 object-cover rounded-sm border border-slate-200" />
      </div>
      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 md:px-12">
          <article className="prose-custom">
            {article.content.map((block, i) => {
              if (block.type === "heading") {
                return <h2 key={i} className="text-2xl font-bold tracking-tight text-[#0B1B3D] mt-10 mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{block.text}</h2>;
              }
              return <p key={i} className="text-base text-slate-600 leading-relaxed mb-6">{block.text}</p>;
            })}
          </article>
        </div>
      </section>
      {/* Related Articles */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <h2 className="text-2xl font-bold text-[#0B1B3D] mb-8" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogArticles.filter((a) => a.slug !== slug).map((a) => (
              <Link key={a.slug} to={`/blog/${a.slug}`} className="group bg-white border border-slate-200 rounded-sm p-6 hover:-translate-y-1 transition-all duration-300">
                <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">{a.category}</span>
                <h3 className="text-base font-bold text-[#0B1B3D] mt-2 group-hover:text-[#2563EB] transition-colors" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{a.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Want Expert AI Insights?" description="Subscribe to our newsletter for the latest AI development trends and insights from our engineering team." buttonText="Get in Touch" />
      <PageContactForm context="Blog Article" />
    </div>
  );
}
