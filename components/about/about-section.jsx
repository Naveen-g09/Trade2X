"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Shield, BarChart3, Users, Globe, Award } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: TrendingUp,
      title: "Real-Time Trading",
      description: "Execute trades instantly with real-time market data and advanced order types.",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Bank-level security with encrypted transactions and secure data storage.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive charts, technical indicators, and market analysis tools.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 customer support from experienced trading professionals.",
    },
    {
      icon: Globe,
      title: "Global Markets",
      description: "Access to US stock markets with plans to expand internationally.",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in trading technology and user experience.",
    },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Trade2X</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trade2X is a cutting-edge stock trading platform designed to democratize access to the US stock market. We
            provide retail investors with institutional-grade tools and real-time market data to make informed trading
            decisions.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              To empower individual investors with professional-grade trading tools, comprehensive market insights, and
              educational resources that level the playing field in stock trading. We believe everyone deserves access
              to the same quality of financial tools that were once exclusive to Wall Street professionals.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Trade2X?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Market Education */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Understanding the US Stock Market</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">What is Stock Trading?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Stock trading involves buying and selling shares of publicly traded companies. When you purchase
                  stock, you're buying a small ownership stake in that company. The value of your shares can increase or
                  decrease based on the company's performance and market conditions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">How Trade2X Helps</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our platform provides you with real-time market data, research tools, and educational resources to
                  help you make informed investment decisions. Whether you're a beginner or experienced trader, Trade2X
                  offers the tools you need to succeed in the stock market.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Getting Started</h3>
              <p className="text-blue-800 leading-relaxed">
                New to trading? Start with our educational resources and paper trading simulator. Learn the basics of
                stock analysis, understand market trends, and practice your trading strategies risk-free before
                investing real money. Our support team is always available to help you on your trading journey.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Company Stats */}
        <div className="grid gap-8 md:grid-cols-4 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-600 mb-2">50K+</h3>
            <p className="text-gray-600">Active Traders</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600 mb-2">$2B+</h3>
            <p className="text-gray-600">Trading Volume</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600 mb-2">99.9%</h3>
            <p className="text-gray-600">Uptime</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600 mb-2">24/7</h3>
            <p className="text-gray-600">Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
