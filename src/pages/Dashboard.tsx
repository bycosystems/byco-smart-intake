import { motion } from 'framer-motion'
import { 
  StatGroup, 
  Stat, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  Button,
  DataTable,
  Badge,
  Timeline,
  TimelineItem,
  AreaChart
} from '@blinkdotnew/ui'
import { 
  TrendingUp, 
  Users, 
  Inbox, 
  Clock, 
  ArrowRight, 
  Sparkles,
  Search,
  Filter,
  MoreHorizontal,
  Bot,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'
import { ColumnDef } from '@tanstack/react-table'

// Mock data for charts
const chartData = [
  { month: 'Jan', revenue: 4500, users: 400 },
  { month: 'Feb', revenue: 5200, users: 450 },
  { month: 'Mar', revenue: 4800, users: 420 },
  { month: 'Apr', revenue: 6100, users: 500 },
  { month: 'May', revenue: 5900, users: 480 },
  { month: 'Jun', revenue: 7200, users: 600 },
]

type Intake = {
  id: string
  customer: string
  category: string
  priority: 'High' | 'Medium' | 'Low'
  status: 'Qualified' | 'Pending' | 'Rejected'
  time: string
}

const recentIntakes: Intake[] = [
  { id: '1', customer: 'Sarah Jenkins', category: 'Support', priority: 'High', status: 'Qualified', time: '12m ago' },
  { id: '2', customer: 'TechFlow Inc', category: 'Sales', priority: 'Medium', status: 'Pending', time: '45m ago' },
  { id: '3', customer: 'Michael Chen', category: 'General', priority: 'Low', status: 'Qualified', time: '1h ago' },
  { id: '4', customer: 'Nexus Solutions', category: 'Partnership', priority: 'High', status: 'Pending', time: '2h ago' },
  { id: '5', customer: 'Amanda Lee', category: 'Billing', priority: 'Medium', status: 'Qualified', time: '3h ago' },
]

const columns: ColumnDef<Intake>[] = [
  {
    accessorKey: 'customer',
    header: 'Customer',
    cell: ({ row }) => <span className="font-medium">{row.original.customer}</span>
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: ({ row }) => <Badge variant="secondary">{row.original.category}</Badge>
  },
  {
    accessorKey: 'priority',
    header: 'Priority',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className={`w-1.5 h-1.5 rounded-full ${
          row.original.priority === 'High' ? 'bg-red-500' : 
          row.original.priority === 'Medium' ? 'bg-yellow-500' : 'bg-blue-500'
        }`} />
        <span>{row.original.priority}</span>
      </div>
    )
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <Badge variant={
        row.original.status === 'Qualified' ? 'default' : 
        row.original.status === 'Pending' ? 'secondary' : 'destructive'
      }>
        {row.original.status}
      </Badge>
    )
  },
  {
    accessorKey: 'time',
    header: 'Received',
    cell: ({ row }) => <span className="text-muted-foreground text-xs">{row.original.time}</span>
  },
  {
    id: 'actions',
    cell: () => <Button variant="ghost" size="icon"><MoreHorizontal size={16} /></Button>
  }
]

export function Dashboard() {
  return (
    <div className="p-4 lg:p-8 max-w-[1600px] mx-auto space-y-8 animate-fade-in">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">System Overview</h1>
          <p className="text-muted-foreground">Welcome back. Your AI agents are active and processing requests.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 glass">
            <Filter size={16} />
            Filters
          </Button>
          <Button className="gap-2">
            <Sparkles size={16} />
            AI Reports
          </Button>
        </div>
      </header>

      <StatGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat 
          label="Total Intakes" 
          value="1,284" 
          trend={12.5} 
          trendLabel="vs last month" 
          icon={<Inbox className="text-primary" />} 
        />
        <Stat 
          label="Qualification Rate" 
          value="94.2%" 
          trend={3.2} 
          trendLabel="vs last month" 
          icon={<Bot className="text-blue-400" />} 
        />
        <Stat 
          label="Avg Response Time" 
          value="1.2s" 
          trend={-15} 
          trendLabel="faster" 
          icon={<Clock className="text-indigo-400" />} 
        />
        <Stat 
          label="Active Users" 
          value="842" 
          trend={8.1} 
          trendLabel="vs last month" 
          icon={<Users className="text-primary" />} 
        />
      </StatGroup>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 glass-card border-white/5">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Intake Volume</CardTitle>
              <p className="text-sm text-muted-foreground">Requests processed over time</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary">Live</Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <AreaChart 
              data={chartData} 
              dataKey="revenue" 
              xAxisKey="month" 
              height={300} 
            />
          </CardContent>
        </Card>

        <Card className="glass-card border-white/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles size={18} className="text-primary" />
              AI Activity Feed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Timeline className="space-y-6">
              <TimelineItem 
                title="Lead Qualified" 
                description="Sarah Jenkins was automatically qualified for Premium Support."
                time="2m ago"
                icon={<div className="bg-primary/20 p-1.5 rounded-full"><CheckCircle2 size={14} className="text-primary" /></div>}
              />
              <TimelineItem 
                title="Priority Detected" 
                description="High urgency detected in TechFlow Inc request. Sent to Sales."
                time="15m ago"
                icon={<div className="bg-red-500/20 p-1.5 rounded-full"><AlertCircle size={14} className="text-red-500" /></div>}
              />
              <TimelineItem 
                title="Auto-Categorized" 
                description="Michael Chen categorized as 'Billing' based on content."
                time="1h ago"
                icon={<div className="bg-blue-500/20 p-1.5 rounded-full"><Bot size={14} className="text-blue-500" /></div>}
              />
              <TimelineItem 
                title="Profile Synced" 
                description="LinkedIn data synced for Nexus Solutions profile."
                time="3h ago"
                icon={<div className="bg-indigo-500/20 p-1.5 rounded-full"><Users size={14} className="text-indigo-500" /></div>}
              />
            </Timeline>
            <Button variant="ghost" className="w-full mt-6 gap-2 text-primary hover:text-primary hover:bg-primary/5">
              View All Activity
              <ArrowRight size={14} />
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card border-white/5 overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Intakes</CardTitle>
            <p className="text-sm text-muted-foreground">Latest requests from across all channels</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input 
                placeholder="Search..." 
                className="pl-9 pr-4 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary w-48 lg:w-64"
              />
            </div>
            <Button size="sm">Export</Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <DataTable 
            columns={columns} 
            data={recentIntakes} 
          />
        </CardContent>
      </Card>
    </div>
  )
}
