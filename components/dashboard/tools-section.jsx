"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockNews, mockReports, mockStocks } from "@/lib/mock-data"
import { Calendar, FileText, TrendingUp, TrendingDown } from "lucide-react"

export default function ToolsSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trading Tools</h2>
          <p className="text-lg text-gray-600">Stay informed with the latest news, reports, and portfolio insights</p>
        </div>

        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="news">Market News</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          </TabsList>

          <TabsContent value="news" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockNews.map((news) => (
                <Card key={news.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      {news.date}
                    </div>
                    <CardTitle className="text-lg leading-tight">{news.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-3">{news.summary}</p>
                    <Badge variant="outline">{news.category}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {mockReports.map((report) => (
                <Card key={report.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <CardTitle className="text-lg">{report.title}</CardTitle>
                      </div>
                      <Badge variant={report.type === "Quarterly" ? "default" : "secondary"}>{report.type}</Badge>
                    </div>
                    <CardDescription>{report.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-3">{report.summary}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>Published: {report.date}</span>
                      <span>Pages: {report.pages}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockStocks.map((stock) => (
                <Card key={stock.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{stock.symbol}</CardTitle>
                      <Badge variant={stock.change >= 0 ? "default" : "destructive"}>
                        {stock.change >= 0 ? (
                          <TrendingUp className="w-3 h-3 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-1" />
                        )}
                        {stock.changePercent}%
                      </Badge>
                    </div>
                    <CardDescription>{stock.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Current Price:</span>
                        <span className="font-semibold">${stock.price.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Shares Owned:</span>
                        <span className="font-semibold">10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Total Value:</span>
                        <span className="font-semibold text-blue-600">${(stock.price * 10).toFixed(2)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
