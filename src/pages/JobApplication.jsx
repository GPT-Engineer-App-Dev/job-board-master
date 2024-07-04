import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const applicationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  resume: z.instanceof(FileList).refine(files => files.length > 0, "Resume is required"),
  coverLetter: z.string().min(1, "Cover letter is required"),
});

const JobApplication = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <div className="container mx-auto py-16">
      <Card>
        <CardHeader>
          <CardTitle>Apply for Job</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <Input id="name" {...register("name")} />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" {...register("email")} />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="resume" className="block text-sm font-medium">
                Resume
              </label>
              <Input id="resume" type="file" {...register("resume")} />
              {errors.resume && (
                <p className="text-red-500 text-sm">{errors.resume.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="coverLetter" className="block text-sm font-medium">
                Cover Letter
              </label>
              <Textarea id="coverLetter" {...register("coverLetter")} />
              {errors.coverLetter && (
                <p className="text-red-500 text-sm">{errors.coverLetter.message}</p>
              )}
            </div>
            <Button type="submit">Submit Application</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobApplication;