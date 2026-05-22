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
  Persona,
  Card,
  CardContent,
  StatGroup,
  Stat
} from '@blinkdotnew/ui'
import { Plus, Search, Mail, Phone, Building2, MoreVertical, ExternalLink } from 'lucide-react'
import { ColumnDef } from '@tanstack/react-table'

type Customer = {
  id: string
  name: string
  email: string
  company: string
  phone: string
  intakes: number
  lastActive: string
}

const customers: Customer[] = [
  { id: '1', name: 'Sarah Jenkins', email: 'sarah@example.com', company: 'Self-employed', phone: '+1 (555) 123-4567', intakes: 4, lastActive: '2m ago' },
  { id: '2', name: 'Marcus Thorne', email: 'marcus@techflow.io', company: 'TechFlow Inc', phone: '+1 (555) 987-6543', intakes: 12, lastActive: '45m ago' },
  { id: '3', name: 'Elena Rodriguez', email: 'elena@nexus.com', company: 'Nexus Solutions', phone: '+1 (555) 456-7890', intakes: 2, lastActive: '1h ago' },
  { id: '4', name: 'David Kim', email: 'dkim@global.co', company: 'Global Tech', phone: '+1 (555) 222-3333', intakes: 7, lastActive: '3h ago' },
  { id: '5', name: 'Sophie Martin', email: 'sophie@velocity.dev', company: 'Velocity', phone: '+1 (555) 444-5555', intakes: 1, lastActive: '5h ago' },
  { id: '6', name: 'James Wilson', email: 'james@secure.io', company: 'Secure', phone: '+1 (555) 666-7777', intakes: 9, lastActive: '1d ago' },
]

const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: 'name',
    header: 'Customer',
    cell: ({ row }) => <Persona name={row.original.name} subtitle={row.original.email} />
  },
  {
    accessorKey: 'company',
    header: 'Company',
    cell: ({ row }) => (
      <div className="flex items-center gap-2 text-sm">
        <Building2 size={14} className="text-muted-foreground" />
        <span>{row.original.company}</span>
      </div>
    )
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
    cell: ({ row }) => (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Phone size={14} />
        <span>{row.original.phone}</span>
      </div>
    )
  },
  {
    accessorKey: 'intakes',
    header: 'Intakes',
    cell: ({ row }) => (
      <Badge variant="secondary" className="font-mono">{row.original.intakes}</Badge>
    )
  },
  {
    accessorKey: 'lastActive',
    header: 'Last Active',
    cell: ({ row }) => <span className="text-sm text-muted-foreground">{row.original.lastActive}</span>
  },
  {
    id: 'actions',
    cell: () => (
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="h-8 w-8"><Mail size={14} /></Button>
        <Button variant="ghost" size="icon" className="h-8 w-8"><ExternalLink size={14} /></Button>
        <Button variant="ghost" size="icon" className="h-8 w-8"><MoreVertical size={14} /></Button>
      </div>
    )
  }
]

export function Customers() {
  return (
    <Page>
      <PageHeader className="px-8 pt-8">
        <div className="flex flex-col gap-1">
          <PageTitle className="text-3xl">Customers</PageTitle>
          <PageDescription>Manage your customer directory and request history.</PageDescription>
        </div>
        <PageActions>
          <Button className="gap-2">
            <Plus size={16} />
            Add Customer
          </Button>
        </PageActions>
      </PageHeader>
      
      <PageBody className="px-8 space-y-8">
        <StatGroup className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Stat label="Total Customers" value="842" trend={15} trendLabel="this month" />
          <Stat label="Avg Request / Customer" value="3.4" trend={5} trendLabel="up" />
          <Stat label="Customer Retention" value="92%" trend={2} trendLabel="stable" />
        </StatGroup>

        <Card className="glass-card border-white/5 overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input 
                placeholder="Search customers by name, email, or company..." 
                className="pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary w-80 lg:w-[400px]"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="glass">Filter</Button>
              <Button variant="outline" size="sm" className="glass">Export CSV</Button>
            </div>
          </div>
          <CardContent className="p-0">
            <DataTable columns={columns} data={customers} />
          </CardContent>
        </Card>
      </PageBody>
    </Page>
  )
}
