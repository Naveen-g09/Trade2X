export const mockStocks = [
  {
    id: "1",
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 175.43,
    change: 2.15,
    changePercent: 1.24,
    volume: 52847392,
  },
  {
    id: "2",
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 2847.52,
    change: -15.23,
    changePercent: -0.53,
    volume: 1247583,
  },
  {
    id: "3",
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 378.85,
    change: 4.67,
    changePercent: 1.25,
    volume: 28475839,
  },
  {
    id: "4",
    symbol: "TSLA",
    name: "Tesla, Inc.",
    price: 248.73,
    change: -8.42,
    changePercent: -3.28,
    volume: 45738291,
  },
  {
    id: "5",
    symbol: "AMZN",
    name: "Amazon.com, Inc.",
    price: 3247.89,
    change: 12.45,
    changePercent: 0.38,
    volume: 3847592,
  },
  {
    id: "6",
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    price: 875.32,
    change: 23.67,
    changePercent: 2.78,
    volume: 18475839,
  },
  {
    id: "7",
    symbol: "META",
    name: "Meta Platforms, Inc.",
    price: 487.65,
    change: -5.23,
    changePercent: -1.06,
    volume: 15847392,
  },
]

export const mockNews = [
  {
    id: "1",
    title: "Federal Reserve Signals Potential Rate Cut in Q2",
    summary:
      "The Federal Reserve hints at possible interest rate adjustments following recent inflation data, potentially impacting market sentiment and trading volumes.",
    date: "2024-01-15",
    category: "Economic Policy",
  },
  {
    id: "2",
    title: "Tech Sector Shows Strong Q4 Earnings Growth",
    summary:
      "Major technology companies report better-than-expected quarterly earnings, driving renewed investor confidence in the sector.",
    date: "2024-01-14",
    category: "Earnings",
  },
  {
    id: "3",
    title: "Oil Prices Surge Amid Middle East Tensions",
    summary:
      "Crude oil futures climb 3% as geopolitical tensions in the Middle East raise concerns about supply chain disruptions.",
    date: "2024-01-13",
    category: "Commodities",
  },
  {
    id: "4",
    title: "Electric Vehicle Sales Hit Record High",
    summary:
      "EV manufacturers report unprecedented sales figures for 2023, with Tesla and other major players exceeding market expectations.",
    date: "2024-01-12",
    category: "Automotive",
  },
  {
    id: "5",
    title: "Banking Sector Faces Regulatory Changes",
    summary:
      "New banking regulations proposed by federal agencies could impact lending practices and profitability across major financial institutions.",
    date: "2024-01-11",
    category: "Financial Services",
  },
  {
    id: "6",
    title: "AI Stocks Rally on New Partnership Announcements",
    summary:
      "Artificial intelligence companies see significant gains following major partnership deals with Fortune 500 companies.",
    date: "2024-01-10",
    category: "Technology",
  },
]

export const mockReports = [
  {
    id: "1",
    title: "Q4 2023 Financial Results",
    company: "Apple Inc.",
    type: "Quarterly",
    date: "2024-01-15",
    summary:
      "Apple reports strong Q4 performance with iPhone sales exceeding expectations and services revenue showing continued growth.",
    pages: 24,
  },
  {
    id: "2",
    title: "Annual Market Outlook 2024",
    company: "Goldman Sachs",
    type: "Annual",
    date: "2024-01-10",
    summary:
      "Comprehensive analysis of market trends and investment opportunities for the upcoming year, with focus on emerging sectors.",
    pages: 156,
  },
  {
    id: "3",
    title: "Electric Vehicle Industry Analysis",
    company: "Tesla, Inc.",
    type: "Industry",
    date: "2024-01-08",
    summary: "In-depth analysis of the EV market landscape, competitive positioning, and future growth projections.",
    pages: 89,
  },
  {
    id: "4",
    title: "Cloud Computing Sector Review",
    company: "Microsoft Corporation",
    type: "Sector",
    date: "2024-01-05",
    summary:
      "Detailed examination of cloud infrastructure trends, market share analysis, and revenue growth opportunities.",
    pages: 67,
  },
  {
    id: "5",
    title: "Semiconductor Market Forecast",
    company: "NVIDIA Corporation",
    type: "Market",
    date: "2024-01-03",
    summary:
      "Analysis of semiconductor demand, supply chain dynamics, and the impact of AI adoption on chip manufacturers.",
    pages: 43,
  },
]

// Mock API service functions
export const stockService = {
  getAllStocks: async () => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))
    return mockStocks
  },

  getStockById: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return mockStocks.find((stock) => stock.id === id) || null
  },

  searchStocks: async (query) => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return mockStocks.filter(
      (stock) =>
        stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
        stock.name.toLowerCase().includes(query.toLowerCase()),
    )
  },
}

export const newsService = {
  getAllNews: async () => {
    await new Promise((resolve) => setTimeout(resolve, 400))
    return mockNews
  },

  getNewsByCategory: async (category) => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return mockNews.filter((news) => news.category === category)
  },
}

export const reportService = {
  getAllReports: async () => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    return mockReports
  },

  getReportsByType: async (type) => {
    await new Promise((resolve) => setTimeout(resolve, 400))
    return mockReports.filter((report) => report.type === type)
  },
}
