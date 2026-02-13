import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { MapPin, Phone, Mail, Calendar as CalendarIcon, Download } from "lucide-react";
import { format } from "date-fns";

export default function Contact() {
  const [selectedTourId, setSelectedTourId] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedDateId, setSelectedDateId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    numberOfGuests: "1",
    specialRequests: "",
  });
  const [bookingId, setBookingId] = useState<number | null>(null);

  const { data: tours } = trpc.tours.list.useQuery();
  const { data: availableDates } = trpc.availableDates.getByTourId.useQuery(
    { tourId: selectedTourId! },
    { enabled: !!selectedTourId }
  );
  const createBooking = trpc.bookings.create.useMutation();
  const { data: calendarData } = trpc.calendar.generateICS.useQuery(
    { bookingId: bookingId! },
    { enabled: !!bookingId }
  );

  const handleTourChange = (value: string) => {
    setSelectedTourId(Number(value));
    setSelectedDate(undefined);
    setSelectedDateId(null);
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (!date || !availableDates) return;
    
    setSelectedDate(date);
    
    // Find matching available date
    const matchingDate = availableDates.find(ad => {
      const adDate = new Date(ad.date);
      return adDate.toDateString() === date.toDateString();
    });
    
    if (matchingDate) {
      setSelectedDateId(matchingDate.id);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedTourId || !selectedDateId) {
      toast.error("Please select a tour and date");
      return;
    }

    try {
      const result = await createBooking.mutateAsync({
        tourId: selectedTourId,
        availableDateId: selectedDateId,
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone,
        numberOfGuests: Number(formData.numberOfGuests),
        specialRequests: formData.specialRequests || undefined,
      });

      setBookingId(result.bookingId);
      toast.success("Booking confirmed! Check your email for details.");
      
      // Reset form
      setFormData({
        customerName: "",
        customerEmail: "",
        customerPhone: "",
        numberOfGuests: "1",
        specialRequests: "",
      });
      setSelectedTourId(null);
      setSelectedDate(undefined);
      setSelectedDateId(null);
    } catch (error: any) {
      toast.error(error.message || "Failed to create booking");
    }
  };

  const handleDownloadCalendar = () => {
    if (!calendarData) return;

    const blob = new Blob([calendarData.icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = calendarData.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success("Calendar file downloaded! Add it to your iPhone calendar.");
  };

  // Get available dates for calendar highlighting
  const availableDateObjects = availableDates?.map(ad => new Date(ad.date)) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-card">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="text-foreground">Contact &</span>{" "}
                <span className="text-primary">Book</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to begin your journey? Select a tour and date to reserve your spot.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Booking Form */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Book Your Tour</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill out the form below to reserve your spot on a Civil Rights Trail tour
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Tour Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="tour" className="text-foreground">Select Tour</Label>
                      <Select value={selectedTourId?.toString() || ""} onValueChange={handleTourChange}>
                        <SelectTrigger id="tour" className="bg-input border-border text-foreground">
                          <SelectValue placeholder="Choose a tour" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border-border">
                          {tours?.map((tour) => (
                            <SelectItem key={tour.id} value={tour.id.toString()}>
                              {tour.name} - ${(tour.price / 100).toFixed(2)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Date Selection */}
                    {selectedTourId && (
                      <div className="space-y-2">
                        <Label className="text-foreground">Select Date</Label>
                        <div className="border border-border rounded-lg p-4 bg-input">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={handleDateSelect}
                            disabled={(date) => {
                              return !availableDateObjects.some(
                                ad => ad.toDateString() === date.toDateString()
                              );
                            }}
                            className="mx-auto"
                          />
                        </div>
                        {selectedDate && (
                          <p className="text-sm text-muted-foreground">
                            Selected: {format(selectedDate, "MMMM d, yyyy")}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Customer Info */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        required
                        className="bg-input border-border text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.customerEmail}
                        onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                        required
                        className="bg-input border-border text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.customerPhone}
                        onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                        required
                        className="bg-input border-border text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guests" className="text-foreground">Number of Guests</Label>
                      <Select
                        value={formData.numberOfGuests}
                        onValueChange={(value) => setFormData({ ...formData, numberOfGuests: value })}
                      >
                        <SelectTrigger id="guests" className="bg-input border-border text-foreground">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border-border">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "Guest" : "Guests"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requests" className="text-foreground">Special Requests (Optional)</Label>
                      <Textarea
                        id="requests"
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        className="bg-input border-border text-foreground"
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={createBooking.isPending}
                    >
                      {createBooking.isPending ? "Processing..." : "Confirm Booking"}
                    </Button>
                  </form>

                  {/* Download Calendar Button */}
                  {bookingId && calendarData && (
                    <div className="mt-6 p-4 bg-primary/10 border border-primary rounded-lg">
                      <p className="text-sm text-foreground mb-3">
                        Your booking is confirmed! Download the calendar file to add this tour to your iPhone calendar.
                      </p>
                      <Button
                        onClick={handleDownloadCalendar}
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary/10"
                      >
                        <Download className="mr-2" size={16} />
                        Download Calendar File (.ics)
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Contact Information</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Have questions? Reach out to us directly
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Location</h3>
                        <p className="text-muted-foreground">Huntsville, Alabama</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <a
                          href="tel:+12565551234"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          (256) 555-1234
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <a
                          href="mailto:info@civilrightstrailtours.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@civilrightstrailtours.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-foreground">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
