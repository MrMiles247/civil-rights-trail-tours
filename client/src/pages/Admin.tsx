import { useState } from "react";
import { Link } from "wouter";
import { AlertCircle, CheckCircle2, CloudUpload, ImagePlus, Loader2, Plus, RefreshCw, Trash2, Users, Video } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";

type ClientStatus = "lead" | "booked" | "active" | "completed" | "follow-up";
type MediaType = "photo" | "video";

const emptyClient = { fullName: "", email: "", phone: "", city: "", status: "lead" as ClientStatus, tourInterest: "", guestCount: 1, travelWindow: "", budget: "", source: "Website", notes: "" };
const emptyMedia = { type: "photo" as MediaType, title: "", description: "", location: "", url: "", thumbnailUrl: "", featured: false, published: true, sortOrder: 99 };

export default function Admin() {
  const utils = trpc.useUtils();
  const summary = trpc.crm.summary.useQuery();
  const clients = trpc.crm.clients.list.useQuery();
  const media = trpc.crm.media.list.useQuery({ includeUnpublished: true });
  const checks = trpc.crm.checks.useQuery(undefined, { refetchOnWindowFocus: false });
  const [clientForm, setClientForm] = useState(emptyClient);
  const [mediaForm, setMediaForm] = useState(emptyMedia);
  const [publishMessage, setPublishMessage] = useState("");

  const refreshAll = () => {
    utils.crm.summary.invalidate();
    utils.crm.clients.list.invalidate();
    utils.crm.media.list.invalidate();
    utils.crm.checks.invalidate();
  };

  const createClient = trpc.crm.clients.create.useMutation({ onSuccess: () => { setClientForm(emptyClient); refreshAll(); } });
  const deleteClient = trpc.crm.clients.delete.useMutation({ onSuccess: refreshAll });
  const createMedia = trpc.crm.media.create.useMutation({ onSuccess: () => { setMediaForm(emptyMedia); refreshAll(); } });
  const updateMedia = trpc.crm.media.update.useMutation({ onSuccess: refreshAll });
  const deleteMedia = trpc.crm.media.delete.useMutation({ onSuccess: refreshAll });
  const publish = trpc.crm.publish.useMutation({ onSuccess: (data) => { setPublishMessage(data.message); refreshAll(); } });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 pt-20 pb-28">
        <section className="py-12 bg-gradient-to-b from-card to-background border-b border-border">
          <div className="container">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">Admin CRM</p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Civil Rights Trail Tours Command Center</h1>
                <p className="max-w-3xl text-muted-foreground text-lg">Manage clients, track leads and bookings, control gallery photos/videos, run checks, and publish updates through the GitHub to Railway workflow.</p>
              </div>
              <Link href="/gallery"><Button variant="outline" className="border-primary text-primary hover:bg-primary/10">View Gallery</Button></Link>
            </div>
          </div>
        </section>

        <section className="container py-10 space-y-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[{ label: "Clients", value: summary.data?.totalClients ?? 0, icon: Users }, { label: "Active", value: summary.data?.activeClients ?? 0, icon: CheckCircle2 }, { label: "Photos", value: summary.data?.photos ?? 0, icon: ImagePlus }, { label: "Videos", value: summary.data?.videos ?? 0, icon: Video }].map((stat) => (
              <Card key={stat.label} className="bg-card border-border"><CardContent className="p-5 flex items-center justify-between"><div><p className="text-sm text-muted-foreground">{stat.label}</p><p className="text-3xl font-bold text-foreground">{stat.value}</p></div><stat.icon className="text-primary" size={28} /></CardContent></Card>
            ))}
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <Card className="bg-card border-border">
              <CardHeader><CardTitle className="text-foreground">Add Client</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <input className="rounded-md border border-border bg-background p-3 text-foreground" placeholder="Full name" value={clientForm.fullName} onChange={(e) => setClientForm({ ...clientForm, fullName: e.target.value })} />
                  <input className="rounded-md border border-border bg-background p-3 text-foreground" placeholder="Email" value={clientForm.email} onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })} />
                  <input className="rounded-md border border-border bg-background p-3 text-foreground" placeholder="Phone" value={clientForm.phone} onChange={(e) => setClientForm({ ...clientForm, phone: e.target.value })} />
                  <input className="rounded-md border border-border bg-background p-3 text-foreground" placeholder="City / state" value={clientForm.city} onChange={(e) => setClientForm({ ...clientForm, city: e.target.value })} />
                  <select className="rounded-md border border-border bg-background p-3 text-foreground" value={clientForm.status} onChange={(e) => setClientForm({ ...clientForm, status: e.target.value as ClientStatus })}>
                    {['lead','booked','active','completed','follow-up'].map(status => <option key={status} value={status}>{status}</option>)}
                  </select>
                  <input className="rounded-md border border-border bg-background p-3 text-foreground" placeholder="Tour interest" value={clientForm.tourInterest} onChange={(e) => setClientForm({ ...clientForm, tourInterest: e.target.value })} />
                  <input className="rounded-md border border-border bg-background p-3 text-foreground" type="number" min="1" placeholder="Guests" value={clientForm.guestCount} onChange={(e) => setClientForm({ ...clientForm, guestCount: Number(e.target.value) })} />
                  <input className="rounded-md border border-border bg-background p-3 text-foreground" placeholder="Travel window" value={clientForm.travelWindow} onChange={(e) => setClientForm({ ...clientForm, travelWindow: e.target.value })} />
                  <input className="rounded-md border border-border bg-background p-3 text-foreground" placeholder="Budget" value={clientForm.budget} onChange={(e) => setClientForm({ ...clientForm, budget: e.target.value })} />
                  <input className="rounded-md border border-border bg-background p-3 text-foreground" placeholder="Source" value={clientForm.source} onChange={(e) => setClientForm({ ...clientForm, source: e.target.value })} />
                </div>
                <textarea className="min-h-28 w-full rounded-md border border-border bg-background p-3 text-foreground" placeholder="Detailed notes, follow-up steps, accessibility needs, invoice status, hotel/transportation preferences" value={clientForm.notes} onChange={(e) => setClientForm({ ...clientForm, notes: e.target.value })} />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90" disabled={createClient.isPending} onClick={() => createClient.mutate(clientForm)}><Plus className="mr-2" size={16} />Add Client</Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader><CardTitle className="text-foreground">System Checks</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {(checks.data || summary.data?.checks || []).map((check: any) => (
                  <div key={check.name} className="flex gap-3 rounded-md border border-border bg-background p-3"><CheckCircle2 className={check.status === 'passing' ? 'text-green-500' : 'text-yellow-500'} size={20} /><div><p className="font-semibold text-foreground">{check.name}</p><p className="text-sm text-muted-foreground">{check.detail}</p></div></div>
                ))}
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={() => checks.refetch()}><RefreshCw className="mr-2" size={16} />Run Checks</Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardHeader><CardTitle className="text-foreground">Client Pipeline</CardTitle></CardHeader>
            <CardContent className="grid gap-4 lg:grid-cols-2">
              {clients.isLoading ? <p className="text-muted-foreground">Loading clients...</p> : clients.data?.map((client) => (
                <div key={client.id} className="rounded-md border border-border bg-background p-4 space-y-2"><div className="flex items-start justify-between gap-3"><div><h3 className="text-lg font-bold text-foreground">{client.fullName}</h3><p className="text-sm text-muted-foreground">{client.email} · {client.phone}</p></div><span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">{client.status}</span></div><p className="text-sm text-muted-foreground">{client.city} · {client.tourInterest} · {client.guestCount} guests</p><p className="text-sm text-muted-foreground">Window: {client.travelWindow} · Budget: {client.budget} · Source: {client.source}</p><p className="text-sm text-foreground">{client.notes}</p><Button size="sm" variant="outline" className="border-destructive text-destructive hover:bg-destructive/10" onClick={() => deleteClient.mutate({ id: client.id })}><Trash2 size={14} className="mr-2" />Delete</Button></div>
              ))}
            </CardContent>
          </Card>

          <div className="grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
            <Card className="bg-card border-border">
              <CardHeader><CardTitle className="text-foreground">Add Gallery Media</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <select className="w-full rounded-md border border-border bg-background p-3 text-foreground" value={mediaForm.type} onChange={(e) => setMediaForm({ ...mediaForm, type: e.target.value as MediaType })}><option value="photo">Photo</option><option value="video">Video</option></select>
                <input className="w-full rounded-md border border-border bg-background p-3 text-foreground" placeholder="Title" value={mediaForm.title} onChange={(e) => setMediaForm({ ...mediaForm, title: e.target.value })} />
                <input className="w-full rounded-md border border-border bg-background p-3 text-foreground" placeholder="Location" value={mediaForm.location} onChange={(e) => setMediaForm({ ...mediaForm, location: e.target.value })} />
                <input className="w-full rounded-md border border-border bg-background p-3 text-foreground" placeholder="Photo/video URL" value={mediaForm.url} onChange={(e) => setMediaForm({ ...mediaForm, url: e.target.value })} />
                <input className="w-full rounded-md border border-border bg-background p-3 text-foreground" placeholder="Thumbnail URL" value={mediaForm.thumbnailUrl} onChange={(e) => setMediaForm({ ...mediaForm, thumbnailUrl: e.target.value })} />
                <textarea className="min-h-24 w-full rounded-md border border-border bg-background p-3 text-foreground" placeholder="Description" value={mediaForm.description} onChange={(e) => setMediaForm({ ...mediaForm, description: e.target.value })} />
                <div className="grid grid-cols-3 gap-3"><label className="flex items-center gap-2 text-sm text-muted-foreground"><input type="checkbox" checked={mediaForm.featured} onChange={(e) => setMediaForm({ ...mediaForm, featured: e.target.checked })} />Featured</label><label className="flex items-center gap-2 text-sm text-muted-foreground"><input type="checkbox" checked={mediaForm.published} onChange={(e) => setMediaForm({ ...mediaForm, published: e.target.checked })} />Published</label><input className="rounded-md border border-border bg-background p-2 text-foreground" type="number" value={mediaForm.sortOrder} onChange={(e) => setMediaForm({ ...mediaForm, sortOrder: Number(e.target.value) })} /></div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90" disabled={createMedia.isPending} onClick={() => createMedia.mutate(mediaForm)}><ImagePlus className="mr-2" size={16} />Add Media</Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader><CardTitle className="text-foreground">Manage Gallery</CardTitle></CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                {media.data?.map((item) => (
                  <div key={item.id} className="rounded-md border border-border bg-background p-3 space-y-3"><div className="aspect-video overflow-hidden rounded bg-card">{item.type === 'photo' ? <img src={item.thumbnailUrl || item.url} alt={item.title} className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center text-primary"><Video size={42} /></div>}</div><div><h3 className="font-bold text-foreground">{item.title}</h3><p className="text-sm text-muted-foreground">{item.type} · {item.location} · order {item.sortOrder}</p><p className="text-sm text-muted-foreground">{item.published ? 'Published' : 'Draft'}{item.featured ? ' · Featured' : ''}</p></div><div className="flex gap-2"><Button size="sm" variant="outline" onClick={() => updateMedia.mutate({ id: item.id, data: { published: !item.published } })}>{item.published ? 'Unpublish' : 'Publish'}</Button><Button size="sm" variant="outline" className="border-destructive text-destructive hover:bg-destructive/10" onClick={() => deleteMedia.mutate({ id: item.id })}><Trash2 size={14} /></Button></div></div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <div className="fixed bottom-5 left-5 z-50 max-w-sm space-y-2">
        {publishMessage && <div className="rounded-md border border-primary/30 bg-background/95 p-3 text-sm text-muted-foreground shadow-lg">{publishMessage}</div>}
        <Button className="bg-primary text-primary-foreground shadow-xl hover:bg-primary/90" disabled={publish.isPending} onClick={() => publish.mutate()}>
          {publish.isPending ? <Loader2 className="mr-2 animate-spin" size={18} /> : <CloudUpload className="mr-2" size={18} />}
          Push to GitHub & Railway
        </Button>
      </div>

      {(createClient.error || createMedia.error || publish.error) && <div className="fixed bottom-5 right-5 z-50 rounded-md border border-destructive bg-background p-3 text-sm text-destructive shadow-lg"><AlertCircle className="mr-2 inline" size={16} />{createClient.error?.message || createMedia.error?.message || publish.error?.message}</div>}
      <Footer />
    </div>
  );
}
