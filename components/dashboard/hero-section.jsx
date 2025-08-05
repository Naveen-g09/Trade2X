"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockStocks } from "@/lib/mock-data"
import { useRouter } from "next/navigation"
import { TrendingUp, TrendingDown } from "lucide-react"

export default function HeroSection() {
  const router = useRouter()

  const handleStockClick = (stockId) => {
    router.push(`/stock/${stockId}`)
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Market Overview</h1>
          <p className="text-xl text-gray-600">Track your favorite stocks and make informed trading decisions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockStocks.map((stock) => (
            <Card
              key={stock.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-0 shadow-md"
              onClick={() => handleStockClick(stock.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">{stock.symbol}</CardTitle>
                  <Badge variant={stock.change >= 0 ? "default" : "destructive"}>
                    {stock.change >= 0 ? (
                      <TrendingUp className="w-3 h-3 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-1" />
                    )}
                    {stock.changePercent}%
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{stock.name}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">${stock.price.toFixed(2)}</span>
                    <span className={`text-sm font-medium ${stock.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                      {stock.change >= 0 ? "+" : ""}${stock.change.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">Volume: {stock.volume.toLocaleString()}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
