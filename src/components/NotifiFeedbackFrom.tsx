import * as React from "react";

interface NotifyFeedbackFormProps {
  email: string;
  message: string;
}

export const NotifyFeedbackForm: React.FC<
  Readonly<NotifyFeedbackFormProps>
> = ({ email, message }) => (
  <div>
    <p className="text-lg text-zinc-300">
      HI, someone submitted the feedback form
    </p>
    <ul className="flex flex-col space-y-4">
      <li>
        Email:
        <a className="font-medium" href={`mailto: ${email}`}>
          {email}
        </a>{" "}
      </li>
      <li>Message: {message}</li>
    </ul>
  </div>
);
