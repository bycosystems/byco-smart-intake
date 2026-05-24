import { motion } from 'framer-motion'

import { 
  Sparkles, 
  ArrowRight, 
  Bot, 
  BarChart3, 
  Clock, 
  Shield, 
  Users, 
  MessageSquare, 
  CheckCircle2,
  Zap,
  Globe,
  Layers
} from 'lucide-react'
import { Link } from '@tanstack/react-router'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl tracking-tight">ByCo Smart</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#workflow" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How it works</a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm" className="hidden sm:flex">Login</Button>
            </Link>
            <Link to="/dashboard">
              <Button size="sm" className="group">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
          <div className="absolute top-[20%] right-[10%] w-[35%] h-[35%] bg-blue-500 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-medium tracking-wide uppercase">AI-Powered Intake is here</span>
          </motion.div>
          
          <motion.h1 
            {...fadeIn}
            className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto"
          >
            Turn every request into <span className="text-gradient">Structured Growth</span>
          </motion.h1>
          
          <motion.p 
            {...fadeIn}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Automatically capture, qualify, and organize customer requests 24/7. ByCo Smart Intake uses advanced AI to ensure you never miss a lead again.
          </motion.p>
          
          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/dashboard">
              <Button size="lg" className="h-12 px-8 text-base group">
                Build your AI workspace
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base glass">
              Watch Demo
            </Button>
          </motion.div>

          {/* Hero Image/Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-20 relative mx-auto max-w-5xl"
          >
            <div className="relative rounded-2xl border border-white/10 bg-card/50 p-2 backdrop-blur-sm shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-blue-500/10 opacity-50" />
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
                alt="Dashboard Preview" 
                className="rounded-xl w-full object-cover shadow-2xl border border-white/5"
              />
              {/* Overlays to make it look like a UI */}
              <div className="absolute top-8 left-8 p-4 glass rounded-lg shadow-xl hidden md:block border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold">AI Qualification</p>
                    <p className="text-[10px] text-muted-foreground">Lead verified successfully</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10">Buit for modern service businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
            <div className="flex items-center gap-2 font-bold text-xl"><Globe className="w-6 h-6" /> GLOBALTECH</div>
            <div className="flex items-center gap-2 font-bold text-xl"><Layers className="w-6 h-6" /> NEXUS</div>
            <div className="flex items-center gap-2 font-bold text-xl"><Zap className="w-6 h-6" /> VELOCITY</div>
            <div className="flex items-center gap-2 font-bold text-xl"><Shield className="w-6 h-6" /> SECURE</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">Everything you need to <span className="text-gradient">automate intake</span></h2>
            <p className="text-lg text-muted-foreground">Our platform combines powerful AI with intuitive workflows to streamline your business operations.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Bot className="w-6 h-6 text-primary" />,
                title: "AI Intake Assistant",
                description: "Conversational AI that captures request details and provides immediate feedback to customers."
              },
              {
                icon: <Zap className="w-6 h-6 text-blue-400" />,
                title: "Smart Qualification",
                description: "AI automatically scores and categorizes leads based on urgency, priority, and business fit."
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-indigo-400" />,
                title: "Unified Analytics",
                description: "Get real-time insights into request volume, lead quality, and conversion performance."
              },
              {
                icon: <Clock className="w-6 h-6 text-primary" />,
                title: "24/7 Availability",
                description: "Your intake process never sleeps. Capture business while you rest, without extra headcount."
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
                title: "Multi-Channel Sync",
                description: "Integrate with WhatsApp, Email, and your website with one centralized smart dashboard."
              },
              {
                icon: <Shield className="w-6 h-6 text-indigo-400" />,
                title: "Enterprise Security",
                description: "Data encryption and RBAC ensure your customer information is always safe and compliant."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Workflow Section */}
      <section id="workflow" className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8 tracking-tight">How our <span className="text-gradient">AI Workflow</span> works</h2>
              <div className="space-y-10">
                {[
                  {
                    step: "01",
                    title: "Capture",
                    description: "AI collects unstructured data from emails, chats, or forms instantly."
                  },
                  {
                    step: "02",
                    title: "Process",
                    description: "Advanced LLMs extract intent, entities, and urgency in milliseconds."
                  },
                  {
                    step: "03",
                    title: "Organize",
                    description: "Request is automatically assigned to the right team with an AI summary."
                  }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-4xl font-bold text-white/10 shrink-0">{step.step}</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10" />
              <div className="glass-card p-1 rounded-2xl overflow-hidden">
                 <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2426" 
                  alt="Workflow diagram" 
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Simple, scalable <span className="text-gradient">pricing</span></h2>
            <p className="text-lg text-muted-foreground">Start free and scale as your business grows. No hidden fees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$0",
                description: "Perfect for solopreneurs",
                features: ["Up to 100 intakes/mo", "Basic AI summary", "Email support", "1 Workspace"]
              },
              {
                name: "Professional",
                price: "$49",
                description: "Most popular for growing teams",
                features: ["Unlimited intakes", "Advanced AI qualification", "Priority support", "3 Workspaces", "WhatsApp integration"],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For scale-up organizations",
                features: ["Custom AI training", "Dedicated account manager", "SLA guarantees", "Unlimited Workspaces", "Custom API access"]
              }
            ].map((plan, i) => (
              <div 
                key={i} 
                className={`p-8 rounded-2xl border ${plan.popular ? 'border-primary bg-primary/5' : 'border-white/5 bg-white/[0.03]'} relative overflow-hidden group hover:scale-[1.02] transition-transform`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground text-sm">/month</span>}
                </div>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/dashboard">
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto p-12 lg:p-20 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-primary/20 via-background to-blue-500/20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">Ready to transform your <span className="text-gradient">customer intake?</span></h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">Built for teams that never want to miss a customer request again.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/dashboard">
                  <Button size="lg" className="h-12 px-10 text-base shadow-xl shadow-primary/20">
                    Get Started Now
                  </Button>
                </Link>
                <Button variant="ghost" size="lg" className="h-12 px-10 text-base">
                  Talk to Sales
                </Button>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl tracking-tight">ByCo Smart</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Empowering businesses with intelligent automation to capture and qualify every opportunity.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Enterprise</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5">
            <p className="text-xs text-muted-foreground mb-4 md:mb-0">© 2026 ByCo Smart Intake. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground"><Globe className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Users className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><MessageSquare className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
