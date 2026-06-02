import { useState } from "react";
import { Link } from "wouter";
import { Activity, AlertCircle, BriefcaseBusiness, CalendarDays, CheckCircle2, ClipboardList, CloudUpload, Download, FileText, GalleryHorizontal, ImagePlus, KeyRound, Loader2, Plus, RefreshCw, Search, ShieldCheck, Trash2, Users, Video } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";

type ClientStatus = "lead" | "booked" | "active" | "completed" | "follow-up";
type MediaType = "photo" | "video";
type AdminTab = "dashboard" | "contacts" | "pipeline" | "bookings" | "tasks" | "gallery" | "finance" | "audit";

const emptyClient = { fullName: "", email: "", phone: "", city: "", status: "lead" as ClientStatus, tourInterest: "", guestCount: 1, travelWindow: "", budget: "", source: "Website", notes: "", leadStage: "new" as const, lifecycleValue: 0, tags: [] as string[], nextStep: "", assignedTo: "Miles", accessibilityNeeds: "" };
const emptyMedia = { type: "photo" as MediaType, title: "", description: "", location: "", url: "", thumbnailUrl: "", featured: false, published: true, sortOrder: 99 };
const emptyTask = { title: "", owner: "Miles", dueDate: "", status: "open" as const, priority: "normal" as const };

const money = (value = 0) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

export default function Admin() {
  const utils = trpc.useUtils();
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const [query, setQuery] = useState("");
  const [adminCode, setAdminCode] = useState(() => typeof window === "undefined" ? "" : window.sessionStorage.getItem("adminAccessCode") || "");
  const [clientForm, setClientForm] = useState(emptyClient);
  const [mediaForm, setMediaForm] = useState(emptyMedia);
  const [taskForm, setTaskForm] = useState(emptyTask);
  const [publishMessage, setPublishMessage] = useState("");

  const security = trpc.crm.security.session.useQuery();
  const canLoadAdminData = security.data?.authorized ?? true;
  const summary = trpc.crm.summary.useQuery(undefined, { enabled: canLoadAdminData });
  const dashboard = trpc.crm.dashboard.useQuery(undefined, { enabled: canLoadAdminData });
  const clients = trpc.crm.clients.list.useQuery(undefined, { enabled: canLoadAdminData });
  const organizations = trpc.crm.organizations.list.useQuery(undefined, { enabled: canLoadAdminData });
  const deals = trpc.crm.deals.list.useQuery(undefined, { enabled: canLoadAdminData });
  const bookings = trpc.crm.adminBookings.list.useQuery(undefined, { enabled: canLoadAdminData });
  const tasks = trpc.crm.tasks.list.useQuery(undefined, { enabled: canLoadAdminData });
  const invoices = trpc.crm.invoices.list.useQuery(undefined, { enabled: canLoadAdminData });
  const templates = trpc.crm.emailTemplates.list.useQuery(undefined, { enabled: canLoadAdminData });
  const media = trpc.crm.media.list.useQuery({ includeUnpublished: true }, { enabled: canLoadAdminData });
  const checks = trpc.crm.checks.useQuery(undefined, { refetchOnWindowFocus: false, enabled: canLoadAdminData });
  const auditLogs = trpc.crm.security.auditLogs.useQuery(undefined, { enabled: canLoadAdminData });

  const refreshAll = () => {
    utils.crm.summary.invalidate();
    utils.crm.dashboard.invalidate();
    utils.crm.clients.list.invalidate();
    utils.crm.organizations.list.invalidate();
    utils.crm.deals.list.invalidate();
    utils.crm.adminBookings.list.invalidate();
    utils.crm.tasks.list.invalidate();
    utils.crm.invoices.list.invalidate();
    utils.crm.emailTemplates.list.invalidate();
    utils.crm.media.list.invalidate();
    utils.crm.checks.invalidate();
    utils.crm.security.auditLogs.invalidate();
  };

  const createClient = trpc.crm.clients.create.useMutation({ onSuccess: () => { setClientForm(emptyClient); refreshAll(); } });
  const deleteClient = trpc.crm.clients.delete.useMutation({ onSuccess: refreshAll });
  const createMedia = trpc.crm.media.create.useMutation({ onSuccess: () => { setMediaForm(emptyMedia); refreshAll(); } });
  const updateMedia = trpc.crm.media.update.useMutation({ onSuccess: refreshAll });
  const deleteMedia = trpc.crm.media.delete.useMutation({ onSuccess: refreshAll });
  const createTask = trpc.crm.tasks.create.useMutation({ onSuccess: () => { setTaskForm(emptyTask); refreshAll(); } });
  const updateTask = trpc.crm.tasks.update.useMutation({ onSuccess: refreshAll });
  const exportCsv = trpc.crm.exportContactsCsv.useQuery(undefined, { enabled: false });
  const publish = trpc.crm.publish.useMutation({ onSuccess: (data) => { setPublishMessage(data.message); refreshAll(); } });

  const filteredClients = (clients.data || []).filter(client => [client.fullName, client.email, client.phone, client.city, client.tourInterest, client.assignedTo].join(" ").toLowerCase().includes(query.toLowerCase()));
  const latestError = createClient.error?.message || createMedia.error?.message || createTask.error?.message || publish.error?.message || exportCsv.error?.message;

  const saveAccessCode = () => {
    window.sessionStorage.setItem("adminAccessCode", adminCode);
    security.refetch();
    refreshAll();
  };

  const tabs: Array<{ id: AdminTab; label: string; icon: typeof Users }> = [
    { id: "dashboard", label: "Dashboard", icon: Activity },
    { id: "contacts", label: "Contacts", icon: Users },
    { id: "pipeline", label: "Pipeline", icon: BriefcaseBusiness },
    { id: "bookings", label: "Bookings", icon: CalendarDays },
    { id: "tasks", label: "Tasks", icon: ClipboardList },
    { id: "gallery", label: "Gallery", icon: GalleryHorizontal },
    { id: "finance", label: "Finance", icon: FileText },
    { id: "audit", label: "Audit", icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 pt-20 pb-28">
        <section className="border-b border-border bg-card py-10">
          <div className="container space-y-6">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">Enterprise Admin CRM</p>
                <h1 className="text-4xl font-bold text-foreground md:text-5xl">Civil Rights Trail Tours Command Center</h1>
                <p className="max-w-3xl text-lg text-muted-foreground">Manage contacts, tours, bookings, media, tasks, revenue, audit history, checks, and the GitHub to Railway publishing flow from one secure workspace.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/gallery"><Button variant="outline" className="border-primary text-primary hover:bg-primary/10"><GalleryHorizontal className="mr-2" size={16} />Tour Gallery</Button></Link>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={() => checks.refetch()}><RefreshCw className="mr-2" size={16} />Run Checks</Button>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1fr_380px]">
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return <button key={tab.id} className={(activeTab === tab.id ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary") + " flex h-10 items-center gap-2 rounded-md border border-border px-3 text-sm font-semibold transition"} onClick={() => setActiveTab(tab.id)}><Icon size={16} />{tab.label}</button>;
                })}
              </div>
              <div className="flex gap-2">
                <input className="h-10 min-w-0 flex-1 rounded-md border border-border bg-background px-3 text-sm text-foreground" placeholder="Admin access code" type="password" value={adminCode} onChange={(event) => setAdminCode(event.target.value)} />
                <Button className="h-10 bg-primary text-primary-foreground hover:bg-primary/90" onClick={saveAccessCode}><KeyRound className="mr-2" size={16} />Save</Button>
              </div>
            </div>

            {security.data && <div className={(security.data.setupMode ? "border-yellow-500/40 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300" : "border-green-500/40 bg-green-500/10 text-green-700 dark:text-green-300") + " rounded-md border p-3 text-sm"}>{security.data.warning} Role: {security.data.role}. Permissions: {security.data.permissions.join(", ")}.</div>}
          </div>
        </section>

        <section className="container py-8">
          <div className="mb-6 flex max-w-xl items-center gap-2 rounded-md border border-border bg-card px-3 py-2">
            <Search size={18} className="text-muted-foreground" />
            <input className="w-full bg-transparent text-sm text-foreground outline-none" placeholder="Search contacts, emails, cities, tours, owners" value={query} onChange={(event) => setQuery(event.target.value)} />
          </div>

          {activeTab === "dashboard" && <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "Clients", value: summary.data?.totalClients ?? 0, detail: (summary.data?.leads ?? 0) + " leads", icon: Users },
                { label: "Pipeline", value: money(summary.data?.pipelineValue), detail: (deals.data?.length ?? 0) + " deals", icon: BriefcaseBusiness },
                { label: "Bookings", value: summary.data?.bookings ?? 0, detail: money(summary.data?.confirmedRevenue) + " balance", icon: CalendarDays },
                { label: "Media", value: summary.data?.totalMedia ?? 0, detail: (summary.data?.publishedMedia ?? 0) + " published", icon: GalleryHorizontal },
              ].map((stat) => { const Icon = stat.icon; return <Card key={stat.label} className="border-border bg-card"><CardContent className="flex items-center justify-between p-5"><div><p className="text-sm text-muted-foreground">{stat.label}</p><p className="text-3xl font-bold text-foreground">{stat.value}</p><p className="text-xs text-muted-foreground">{stat.detail}</p></div><Icon className="text-primary" size={28} /></CardContent></Card>; })}
            </div>
            <div className="grid gap-6 xl:grid-cols-2">
              <Card className="border-border bg-card"><CardHeader><CardTitle className="text-foreground">Operational Checks</CardTitle></CardHeader><CardContent className="space-y-3">{(checks.data || summary.data?.checks || []).map((check: any) => <div key={check.name} className="flex gap-3 rounded-md border border-border bg-background p-3"><CheckCircle2 className={check.status === "passing" ? "text-green-500" : "text-yellow-500"} size={20} /><div><p className="font-semibold text-foreground">{check.name}</p><p className="text-sm text-muted-foreground">{check.detail}</p></div></div>)}</CardContent></Card>
              <Card className="border-border bg-card"><CardHeader><CardTitle className="text-foreground">Today and Next</CardTitle></CardHeader><CardContent className="space-y-3">{(dashboard.data?.openTasks || []).map(task => <div key={task.id} className="rounded-md border border-border bg-background p-3"><p className="font-semibold text-foreground">{task.title}</p><p className="text-sm text-muted-foreground">{task.owner} · {task.priority} · due {task.dueDate}</p></div>)}</CardContent></Card>
            </div>
          </div>}

          {activeTab === "contacts" && <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <Card className="border-border bg-card"><CardHeader><CardTitle className="text-foreground">Add Detailed Client</CardTitle></CardHeader><CardContent className="space-y-4">
              <div className="grid gap-3 md:grid-cols-2">
                <input className="rounded-md border border-border bg-background p-3 text-foreground" placeholder="Full name" value={clientForm.fullName} onChange={(event) => setClientForm({ ...clientForm, fullName: event.target.value })} />
                <input className="rounded-md border border-border bg-background p-3 text-foreground" placeholder="Email" value={clientForm.email} onChange={(event) => setClientForm({ ...clientForm, email: event.target.value })} />
                <input className="rounded-md border border-border bg-background p-3 text-foreground" placeholder="Phone" value={clientForm.phone} onChange={(event) => setClientForm({ ...clientForm, phone: event.target.value })} />
                <input className="rounded-md border border-border bg-background p-3 text-foreground" placeholder="City / state" value={clientForm.city} onChange={(event) => setClientForm({ ...clientForm, city: event.target.value })} />
                <select className="rounded-md border border-border bg-background p-3 text-foreground" value={clientForm.status} onChange={(event) => setClientForm({ ...clientForm, status: event.target.value as ClientStatus })}>{["lead", "booked", "active", "completed", "follow-up"].map(status => <option key={status} value={status}>{status}</option>)}</select>
                <select className="rounded-md border border-border bg-background p-3 text-foreground" value={clientForm.leadStage} onChange={(event) => setClientForm({ ...clientForm, leadStage: event.target.value as typeof clientForm.leadStage })}>{["new", "qualified", "proposal", "booked", "completed", "lost"].map(stage => <option key={stage} value={stage}>{stage}</option>)}</select>
                <input className="rounded-md border border-border bg-background p-3 text-foreground" placeholder="Tour interest" value={clientForm.tourInterest} onChange={(event) => setClientForm({ ...clientForm, tourInterest: event.target.value })} />
                <input className="rounded-md border border-border bg-background p-3 text-foreground" type="number" min="1" placeholder="Guests" value={clientForm.guestCount} onChange={(event) => setClientForm({ ...clientForm, guestCount: Number(event.target.value) })} />
                <input className="rounded-md border border-border bg-background p-3 text-foreground" placeholder="Travel window" value={clientForm.travelWindow} onChange={(event) => setClientForm({ ...clientForm, travelWindow: event.target.value })} />
                <input className="rounded-md border border-border bg-background p-3 text-foreground" placeholder="Budget" value={clientForm.budget} onChange={(event) => setClientForm({ ...clientForm, budget: event.target.value })} />
                <input className="rounded-md border border-border bg-background p-3 text-foreground" placeholder="Assigned to" value={clientForm.assignedTo} onChange={(event) => setClientForm({ ...clientForm, assignedTo: event.target.value })} />
                <input className="rounded-md border border-border bg-background p-3 text-foreground" placeholder="Source" value={clientForm.source} onChange={(event) => setClientForm({ ...clientForm, source: event.target.value })} />
              </div>
              <textarea className="min-h-24 w-full rounded-md border border-border bg-background p-3 text-foreground" placeholder="Notes, payment status, accessibility needs, hotel/transportation preferences" value={clientForm.notes} onChange={(event) => setClientForm({ ...clientForm, notes: event.target.value })} />
              <input className="w-full rounded-md border border-border bg-background p-3 text-foreground" placeholder="Next step" value={clientForm.nextStep} onChange={(event) => setClientForm({ ...clientForm, nextStep: event.target.value })} />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" disabled={createClient.isPending} onClick={() => createClient.mutate(clientForm)}><Plus className="mr-2" size={16} />Add Client</Button>
            </CardContent></Card>
            <div className="space-y-4">{filteredClients.map(client => <Card key={client.id} className="border-border bg-card"><CardContent className="space-y-3 p-4"><div className="flex items-start justify-between gap-3"><div><h3 className="text-lg font-bold text-foreground">{client.fullName}</h3><p className="text-sm text-muted-foreground">{client.email} · {client.phone}</p></div><span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">{client.leadStage}</span></div><p className="text-sm text-muted-foreground">{client.city} · {client.tourInterest} · {client.guestCount} guests · {client.assignedTo}</p><p className="text-sm text-foreground">{client.notes}</p><p className="text-sm text-muted-foreground">Next: {client.nextStep || "Not set"} · Duplicate risk: {client.duplicateRisk}</p><Button size="sm" variant="outline" className="border-destructive text-destructive hover:bg-destructive/10" onClick={() => deleteClient.mutate({ id: client.id })}><Trash2 size={14} className="mr-2" />Delete</Button></CardContent></Card>)}</div>
          </div>}

          {activeTab === "pipeline" && <div className="grid gap-6 xl:grid-cols-2">
            <Card className="border-border bg-card"><CardHeader><CardTitle className="text-foreground">Organizations</CardTitle></CardHeader><CardContent className="space-y-3">{organizations.data?.map(org => <div key={org.id} className="rounded-md border border-border bg-background p-3"><p className="font-semibold text-foreground">{org.name}</p><p className="text-sm text-muted-foreground">{org.type} · {org.city}</p><p className="text-sm text-muted-foreground">{org.notes}</p></div>)}</CardContent></Card>
            <Card className="border-border bg-card"><CardHeader><CardTitle className="text-foreground">Deals</CardTitle></CardHeader><CardContent className="space-y-3">{deals.data?.map(deal => <div key={deal.id} className="rounded-md border border-border bg-background p-3"><div className="flex items-center justify-between gap-3"><p className="font-semibold text-foreground">{deal.title}</p><span className="text-sm font-bold text-primary">{money(deal.value)}</span></div><p className="text-sm text-muted-foreground">{deal.stage} · {deal.probability}% probability · closes {deal.expectedCloseDate}</p></div>)}</CardContent></Card>
          </div>}

          {activeTab === "bookings" && <div className="grid gap-4 lg:grid-cols-2">{bookings.data?.map(booking => <Card key={booking.id} className="border-border bg-card"><CardContent className="space-y-2 p-4"><div className="flex items-center justify-between gap-3"><h3 className="font-bold text-foreground">{booking.tourName}</h3><span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">{booking.status}</span></div><p className="text-sm text-muted-foreground">{booking.startDate} to {booking.endDate} · {booking.guests} guests</p><p className="text-sm text-muted-foreground">Deposit: {booking.depositPaid ? "Paid" : "Open"} · Balance: {money(booking.balanceDue)}</p><p className="text-sm text-foreground">{booking.logisticsNotes}</p></CardContent></Card>)}</div>}

          {activeTab === "tasks" && <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr]">
            <Card className="border-border bg-card"><CardHeader><CardTitle className="text-foreground">Add Task</CardTitle></CardHeader><CardContent className="space-y-3"><input className="w-full rounded-md border border-border bg-background p-3 text-foreground" placeholder="Task title" value={taskForm.title} onChange={(event) => setTaskForm({ ...taskForm, title: event.target.value })} /><input className="w-full rounded-md border border-border bg-background p-3 text-foreground" placeholder="Owner" value={taskForm.owner} onChange={(event) => setTaskForm({ ...taskForm, owner: event.target.value })} /><input className="w-full rounded-md border border-border bg-background p-3 text-foreground" type="date" value={taskForm.dueDate} onChange={(event) => setTaskForm({ ...taskForm, dueDate: event.target.value })} /><select className="w-full rounded-md border border-border bg-background p-3 text-foreground" value={taskForm.priority} onChange={(event) => setTaskForm({ ...taskForm, priority: event.target.value as typeof taskForm.priority })}>{["low", "normal", "high", "urgent"].map(priority => <option key={priority} value={priority}>{priority}</option>)}</select><Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => createTask.mutate(taskForm)}><Plus className="mr-2" size={16} />Add Task</Button></CardContent></Card>
            <div className="space-y-3">{tasks.data?.map(task => <div key={task.id} className="flex items-center justify-between gap-3 rounded-md border border-border bg-card p-4"><div><p className="font-semibold text-foreground">{task.title}</p><p className="text-sm text-muted-foreground">{task.owner} · {task.priority} · due {task.dueDate}</p></div><Button size="sm" variant="outline" onClick={() => updateTask.mutate({ id: task.id, data: { status: task.status === "done" ? "open" : "done" } })}>{task.status}</Button></div>)}</div>
          </div>}

          {activeTab === "gallery" && <div className="grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
            <Card className="border-border bg-card"><CardHeader><CardTitle className="text-foreground">Add Gallery Media</CardTitle></CardHeader><CardContent className="space-y-3"><select className="w-full rounded-md border border-border bg-background p-3 text-foreground" value={mediaForm.type} onChange={(event) => setMediaForm({ ...mediaForm, type: event.target.value as MediaType })}><option value="photo">Photo</option><option value="video">Video</option></select><input className="w-full rounded-md border border-border bg-background p-3 text-foreground" placeholder="Title" value={mediaForm.title} onChange={(event) => setMediaForm({ ...mediaForm, title: event.target.value })} /><input className="w-full rounded-md border border-border bg-background p-3 text-foreground" placeholder="Location" value={mediaForm.location} onChange={(event) => setMediaForm({ ...mediaForm, location: event.target.value })} /><input className="w-full rounded-md border border-border bg-background p-3 text-foreground" placeholder="Photo/video URL" value={mediaForm.url} onChange={(event) => setMediaForm({ ...mediaForm, url: event.target.value })} /><input className="w-full rounded-md border border-border bg-background p-3 text-foreground" placeholder="Thumbnail URL" value={mediaForm.thumbnailUrl} onChange={(event) => setMediaForm({ ...mediaForm, thumbnailUrl: event.target.value })} /><textarea className="min-h-24 w-full rounded-md border border-border bg-background p-3 text-foreground" placeholder="Description" value={mediaForm.description} onChange={(event) => setMediaForm({ ...mediaForm, description: event.target.value })} /><div className="grid grid-cols-3 gap-3"><label className="flex items-center gap-2 text-sm text-muted-foreground"><input type="checkbox" checked={mediaForm.featured} onChange={(event) => setMediaForm({ ...mediaForm, featured: event.target.checked })} />Featured</label><label className="flex items-center gap-2 text-sm text-muted-foreground"><input type="checkbox" checked={mediaForm.published} onChange={(event) => setMediaForm({ ...mediaForm, published: event.target.checked })} />Published</label><input className="rounded-md border border-border bg-background p-2 text-foreground" type="number" value={mediaForm.sortOrder} onChange={(event) => setMediaForm({ ...mediaForm, sortOrder: Number(event.target.value) })} /></div><Button className="bg-primary text-primary-foreground hover:bg-primary/90" disabled={createMedia.isPending} onClick={() => createMedia.mutate(mediaForm)}><ImagePlus className="mr-2" size={16} />Add Media</Button></CardContent></Card>
            <Card className="border-border bg-card"><CardHeader><CardTitle className="text-foreground">Manage Photos and Videos</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2">{media.data?.map(item => <div key={item.id} className="space-y-3 rounded-md border border-border bg-background p-3"><div className="aspect-video overflow-hidden rounded bg-card">{item.type === "photo" ? <img src={item.thumbnailUrl || item.url} alt={item.title} className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center text-primary"><Video size={42} /></div>}</div><div><h3 className="font-bold text-foreground">{item.title}</h3><p className="text-sm text-muted-foreground">{item.type} · {item.location} · order {item.sortOrder}</p><p className="text-sm text-muted-foreground">{item.published ? "Published" : "Draft"}{item.featured ? " · Featured" : ""}</p></div><div className="flex gap-2"><Button size="sm" variant="outline" onClick={() => updateMedia.mutate({ id: item.id, data: { published: !item.published } })}>{item.published ? "Unpublish" : "Publish"}</Button><Button size="sm" variant="outline" className="border-destructive text-destructive hover:bg-destructive/10" onClick={() => deleteMedia.mutate({ id: item.id })}><Trash2 size={14} /></Button></div></div>)}</CardContent></Card>
          </div>}

          {activeTab === "finance" && <div className="grid gap-6 xl:grid-cols-2"><Card className="border-border bg-card"><CardHeader><CardTitle className="text-foreground">Invoices</CardTitle></CardHeader><CardContent className="space-y-3">{invoices.data?.map(invoice => <div key={invoice.id} className="rounded-md border border-border bg-background p-3"><p className="font-semibold text-foreground">{invoice.invoiceNumber} · {money(invoice.amount)}</p><p className="text-sm text-muted-foreground">{invoice.status} · due {invoice.dueDate}</p></div>)}</CardContent></Card><Card className="border-border bg-card"><CardHeader><CardTitle className="text-foreground">Email Templates</CardTitle></CardHeader><CardContent className="space-y-3">{templates.data?.map(template => <div key={template.id} className="rounded-md border border-border bg-background p-3"><p className="font-semibold text-foreground">{template.name}</p><p className="text-sm text-muted-foreground">{template.subject}</p></div>)}<Button variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={() => exportCsv.refetch()}><Download className="mr-2" size={16} />Export Contacts CSV</Button></CardContent></Card></div>}

          {activeTab === "audit" && <Card className="border-border bg-card"><CardHeader><CardTitle className="text-foreground">Security and Activity Audit Log</CardTitle></CardHeader><CardContent className="space-y-3">{auditLogs.data?.map(log => <div key={log.id} className="rounded-md border border-border bg-background p-3"><div className="flex items-center justify-between gap-3"><p className="font-semibold text-foreground">{log.action}</p><span className="text-xs text-muted-foreground">{new Date(log.createdAt).toLocaleString()}</span></div><p className="text-sm text-muted-foreground">{log.actorRole} · {log.targetType}{log.targetId ? " #" + log.targetId : ""}</p><p className="text-sm text-foreground">{log.details}</p></div>)}</CardContent></Card>}
        </section>
      </main>

      <div className="fixed bottom-5 left-5 z-50 max-w-sm space-y-2">
        {publishMessage && <div className="rounded-md border border-primary/30 bg-background/95 p-3 text-sm text-muted-foreground shadow-lg">{publishMessage}</div>}
        <Button className="bg-primary text-primary-foreground shadow-xl hover:bg-primary/90" disabled={publish.isPending} onClick={() => publish.mutate()}>
          {publish.isPending ? <Loader2 className="mr-2 animate-spin" size={18} /> : <CloudUpload className="mr-2" size={18} />}
          Push to GitHub & Railway
        </Button>
      </div>

      {latestError && <div className="fixed bottom-5 right-5 z-50 rounded-md border border-destructive bg-background p-3 text-sm text-destructive shadow-lg"><AlertCircle className="mr-2 inline" size={16} />{latestError}</div>}
      <Footer />
    </div>
  );
}
