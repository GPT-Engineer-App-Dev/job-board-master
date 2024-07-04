import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
        <p className="text-lg mb-8">Search for jobs by title and location</p>
        <div className="flex justify-center space-x-4">
          <Input placeholder="Job title" className="w-1/3" />
          <Input placeholder="Location" className="w-1/3" />
          <Button>Search</Button>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Featured Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((job) => (
            <Card key={job}>
              <CardHeader>
                <CardTitle>Software Engineer</CardTitle>
                <p>Company Name</p>
              </CardHeader>
              <CardContent>
                <p>Location: New York, NY</p>
                <p className="mt-2">Brief description of the job listing...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Company Logos */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Top Hiring Companies</h2>
        <div className="flex justify-center space-x-8">
          {[1, 2, 3, 4, 5].map((company) => (
            <Avatar key={company} className="w-24 h-24">
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-full" />
            </Avatar>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Step 1</h3>
            <p>Register an account and complete your profile.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Step 2</h3>
            <p>Search for jobs that match your skills and interests.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Step 3</h3>
            <p>Apply for jobs and get hired by top companies.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((testimonial) => (
            <Card key={testimonial}>
              <CardHeader>
                <CardTitle>User Name</CardTitle>
                <p>Job Title</p>
              </CardHeader>
              <CardContent>
                <p>"This website helped me find my dream job! Highly recommend it to anyone looking for a new opportunity."</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center space-y-4">
          <div className="flex justify-center space-x-8">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Help Center</a>
          </div>
          <Separator className="bg-gray-600" />
          <div className="flex justify-center space-x-4">
            <Badge variant="outline">Facebook</Badge>
            <Badge variant="outline">Twitter</Badge>
            <Badge variant="outline">LinkedIn</Badge>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;