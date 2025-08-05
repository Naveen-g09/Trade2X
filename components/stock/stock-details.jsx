"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { mockStocks } from "@/lib/mock-data"
import { ArrowLeft, TrendingUp, TrendingDown, BarChart3, DollarSign } from "lucide-react"
import NavBar from "@/components/layout/navbar"

export default function StockDetails({ stockId }) {
  const router = useRouter()
  const [stock, setStock] = useState(mockStocks.find((s) => s.id === stockId))

  useEffect(() => {
    const foundStock = mockStocks.find((s) => s.id === stockId)
    setStock(foundStock)
  }, [stockId])

  if (!stock) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Stock Not Found</h1>
            <Button onClick={() => router.push("/dashboard")}>Return to Dashboard</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button variant="ghost" onClick={() => router.push("/dashboard")} className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Main Stock Info */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-3xl font-bold">{stock.symbol}</CardTitle>
                      <p className="text-lg text-gray-600 mt-1">{stock.name}</p>
                    </div>
                    <Badge variant={stock.change >= 0 ? "default" : "destructive"} className="text-lg px-3 py-1">
                      {stock.change >= 0 ? (
                        <TrendingUp className="w-4 h-4 mr-1" />
                      ) : (
                        <TrendingDown className="w-4 h-4 mr-1" />
                      )}
                      {stock.changePercent}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <DollarSign className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <p className="text-sm text-gray-600">Current Price</p>
                      <p className="text-2xl font-bold">${stock.price.toFixed(2)}</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-600" />
                      <p className="text-sm text-gray-600">Change</p>
                      <p className={`text-xl font-bold ${stock.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                        {stock.change >= 0 ? "+" : ""}${stock.change.toFixed(2)}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <BarChart3 className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                      <p className="text-sm text-gray-600">Volume</p>
                      <p className="text-xl font-bold">{stock.volume.toLocaleString()}</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <TrendingUp className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                      <p className="text-sm text-gray-600">Market Cap</p>
                      <p className="text-xl font-bold">${((stock.price * stock.volume) / 1000).toFixed(1)}B</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Chart Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Price Chart</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                      <p className="text-gray-500">Interactive chart would be displayed here</p>
                      <p className="text-sm text-gray-400 mt-2">Integration with charting library needed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" size="lg">
                    Buy Stock
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    Sell Stock
                  </Button>
                  <Button variant="secondary" className="w-full">
                    Add to Watchlist
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">52 Week High</span>
                    <span className="font-semibold">${(stock.price * 1.2).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">52 Week Low</span>
                    <span className="font-semibold">${(stock.price * 0.8).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">P/E Ratio</span>
                    <span className="font-semibold">{(Math.random() * 30 + 10).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dividend Yield</span>
                    <span className="font-semibold">{(Math.random() * 5).toFixed(2)}%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Company Info</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {stock.name} is a leading company in its sector, providing innovative solutions and maintaining
                    strong market presence. The company has shown consistent growth and continues to adapt to market
                    changes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
