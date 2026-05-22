import { 
  Page, 
  PageHeader, 
  PageTitle, 
  PageDescription, 
  PageActions, 
  PageBody, 
  Button, 
  DataTable, 
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Card,
  CardContent,
  Persona
} from '@blinkdotnew/ui'
import { Plus, Filter, Download, MoreHorizontal, Sparkles, Search, Bot } from 'lucide-react'
import { ColumnDef } from '@tanstack/react-table'

type Intake = {
  id: string
  customer: string
  email: string
  category: string
  priority: 'High' | 'Medium' | 'Low'
  status: 'New' | 'Qualified' | 'Follow-up' | 'Rejected'
  summary: string
  date: string
}

const intakes: Intake[] = [
  { id: 'INT-001', customer: 'Sarah Jenkins', email: 'sarah@example.com', category: 'Support', priority: 'High', status: 'Qualified', summary: 'Technical issue with dashboard login', date: '2024-05-20' },
  { id: 'INT-002', customer: 'TechFlow Inc', email: 'admin@techflow.io', category: 'Sales', priority: 'Medium', status: 'New', summary: 'Interested in enterprise license', date: '2024-05-20' },
  { id: 'INT-003', customer: 'Michael Chen', email: 'mchen@gmail.com', category: 'General', priority: 'Low', status: 'Follow-up', summary: 'Inquiry about API documentation', date: '2024-05-19' },
  { id: 'INT-004', customer: 'Nexus Solutions', email: 'contact@nexus.com', category: 'Partnership', priority: 'High', status: 'Qualified', summary: 'Joint marketing proposal', date: '2024-05-19' },
  { id: 'INT-005', customer: 'Amanda Lee', email: 'alee@corp.com', category: 'Billing', priority: 'Medium', status: 'New', summary: 'Invoice dispute for Q1', date: '2024-05-18' },
  { id: 'INT-006', customer: 'Robert Smith', email: 'rsmith@provider.net', category: 'Support', priority: 'Low', status: 'Rejected', summary: 'Spam/Irrelevant request', date: '2024-05-18' },
]

const columns: ColumnDef<Intake>[] = [
  {
    accessorKey: 'customer',
    header: 'Customer',
    cell: ({ row }) => <Persona name={row.original.customer} subtitle={row.original.email} />
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: ({ row }) => <Badge variant="secondary">{row.original.category}</Badge>
  },
  {
    accessorKey: 'summary',
    header: 'AI Summary',
    cell: ({ row }) => (
      <div className="flex items-start gap-2 max-w-xs">
        <Sparkles size={14} className="text-primary mt-1 shrink-0" />
        <span className="text-sm line-clamp-2 text-muted-foreground">{row.original.summary}</span>
      </div>
    )
  },
  {
    accessorKey: 'priority',
    header: 'Priority',
    cell: ({ row }) => (
      <Badge variant="outline" className={`${
        row.original.priority === 'High' ? 'text-red-500 border-red-500/20 bg-red-500/5' : 
        row.original.priority === 'Medium' ? 'text-yellow-500 border-yellow-500/20 bg-yellow-500/5' : 
        'text-blue-500 border-blue-500/20 bg-blue-500/5'
      }`}>
        {row.original.priority}
      </Badge>
    )
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <Badge variant={
        row.original.status === 'Qualified' ? 'default' : 
        row.original.status === 'New' ? 'secondary' : 
        row.original.status === 'Follow-up' ? 'outline' : 'destructive'
      }>
        {row.original.status}
      </Badge>
    )
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => <span className="text-sm text-muted-foreground">{row.original.date}</span>
  },
  {
    id: 'actions',
    cell: () => (
      <Button variant="ghost" size="icon">
        <MoreHorizontal size={16} />
      </Button>
    )
  }
]

export function Intakes() {
  return (
    <Page>
      <PageHeader className="px-8 pt-8">
        <div className="flex flex-col gap-1">
          <PageTitle className="text-3xl">Smart Intakes</PageTitle>
          <PageDescription>View and manage AI-qualified customer requests.</PageDescription>
        </div>
        <PageActions>
          <Button variant="outline" className="gap-2 glass">
            <Download size={16} />
            Export
          </Button>
          <Button className="gap-2">
            <Plus size={16} />
            New Intake
          </Button>
        </PageActions>
      </PageHeader>
      
      <PageBody className="px-8">
        <Tabs defaultValue="all" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList className="bg-white/5 border border-white/10 p-1">
              <TabsTrigger value="all">All Requests</TabsTrigger>
              <TabsTrigger value="qualified">Qualified</TabsTrigger>
              <TabsTrigger value="pending">Pending Review</TabsTrigger>
              <TabsTrigger value="follow-up">Follow-up</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input 
                  placeholder="Search intakes..." 
                  className="pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary w-64 lg:w-80"
                />
              </div>
              <Button variant="ghost" size="icon" className="border border-white/10"><Filter size={16} /></Button>
            </div>
          </div>
          
          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="glass-card border-white/5">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Bot className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">AI Processed</p>
                      <p className="text-2xl font-bold">428</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-card border-white/5">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Sparkles className="text-green-500 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">High Intent</p>
                      <p className="text-2xl font-bold">156</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-card border-white/5">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <Sparkles className="text-red-500 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Urgent Actions</p>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="rounded-xl border border-white/5 overflow-hidden glass">
              <DataTable columns={columns} data={intakes} />
            </div>
          </TabsContent>
          
          <TabsContent value="qualified">
             <div className="rounded-xl border border-white/5 overflow-hidden glass">
              <DataTable columns={columns} data={intakes.filter(i => i.status === 'Qualified')} />
            </div>
          </TabsContent>
          
          <TabsContent value="pending">
             <div className="rounded-xl border border-white/5 overflow-hidden glass">
              <DataTable columns={columns} data={intakes.filter(i => i.status === 'New')} />
            </div>
          </TabsContent>
          
          <TabsContent value="follow-up">
             <div className="rounded-xl border border-white/5 overflow-hidden glass">
              <DataTable columns={columns} data={intakes.filter(i => i.status === 'Follow-up')} />
            </div>
          </TabsContent>
        </Tabs>
      </PageBody>
    </Page>
  )
}
