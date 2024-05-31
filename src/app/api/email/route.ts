import { NotifyFeedbackForm } from "@/components/NotifiFeedbackFrom";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  try {
    const body = await req.json();

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["devarifhossain@gmail.com"],
      subject: "Hello world",
      text: "This is backup",
      react: NotifyFeedbackForm({
        email: body.email,
        message: body.message,
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
