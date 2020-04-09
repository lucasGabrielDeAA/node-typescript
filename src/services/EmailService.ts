// interfaces defines our custom types and the type of yours attributes.
interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachament?: Array<string>; // The ? operator indicates not-required information.
}

// Data-transfer-object to transfer information between two different files in our application.
interface MessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

// This interface determines the standard model of our EmailService's class.
interface IEmailService {
  send(request: MessageDTO): void
}

class EmailService implements IEmailService {
  send({ to, message }: MessageDTO) {
    console.log(`Email sent to ${to.email}: ${message.subject}`);
  }
}

export default EmailService;
