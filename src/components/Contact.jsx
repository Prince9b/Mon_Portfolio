import { useState } from "react";
import { motion as Motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { Mail, Send } from "lucide-react";
import Title from "./Title";

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const isEmailJsConfigured = Object.values(emailJsConfig).every(Boolean);

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isEmailJsConfigured) {
      setStatus({
        type: "error",
        message:
          "Le formulaire n’est pas encore configuré. Ajoute les identifiants EmailJS indiqués dans .env.example.",
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSending(true);
    setStatus(null);

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: formData.get("name"),
          reply_to: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        },
        { publicKey: emailJsConfig.publicKey },
      );

      form.reset();
      setStatus({
        type: "success",
        message: "Ton message a bien été envoyé. Merci de m’avoir contacté !",
      });
    } catch (error) {
      console.error("Échec de l’envoi du message avec EmailJS.", error);
      setStatus({
        type: "error",
        message:
          "L’envoi du message a échoué. Réessaie dans quelques instants.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Motion.section
      id="Contact"
      className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28"
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ amount: 0.15, once: true }}
    >
      <Title title="Me contacter" />
      <div className="mx-auto grid max-w-5xl gap-10 rounded-3xl border border-base-content/10 bg-base-200/50 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:p-12">
        <div className="space-y-5">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <Mail className="size-6" aria-hidden="true" />
          </span>
          <h3 className="text-2xl font-semibold">Parlons de ton projet</h3>
          <p className="leading-7 text-base-content/65">
            Une idée, une question ou une opportunité ? Décris-moi ton besoin et
            je te répondrai dès que possible.
          </p>
          {/* {!isEmailJsConfigured && (
            <p className="rounded-xl border border-accent/20 bg-accent/5 p-4 text-sm leading-6 text-base-content/70">
              L’envoi sera activé après la configuration des identifiants
              EmailJS dans le fichier <code>.env</code>.
            </p>
          )} */}
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="form-control w-full">
              <span className="label-text mb-2 font-medium">Nom</span>
              <input
                autoComplete="name"
                className="input input-bordered w-full rounded-xl border-base-content/15 bg-base-100"
                maxLength={100}
                name="name"
                placeholder="Ton nom"
                required
              />
            </label>
            <label className="form-control w-full">
              <span className="label-text mb-2 font-medium">E-mail</span>
              <input
                autoComplete="email"
                className="input input-bordered w-full rounded-xl border-base-content/15 bg-base-100"
                maxLength={254}
                name="email"
                placeholder="nom@exemple.com"
                required
                type="email"
              />
            </label>
          </div>
          <label className="form-control w-full">
            <span className="label-text mb-2 font-medium">Sujet</span>
            <input
              className="input input-bordered w-full rounded-xl border-base-content/15 bg-base-100"
              maxLength={150}
              name="subject"
              placeholder="Le sujet de ton message"
              required
            />
          </label>
          <label className="form-control w-full">
            <span className="label-text mb-2 font-medium">Message</span>
            <textarea
              className="textarea textarea-bordered min-h-36 w-full rounded-xl border-base-content/15 bg-base-100"
              maxLength={5000}
              name="message"
              placeholder="Décris-moi ton projet ou ta demande..."
              required
              rows={5}
            />
          </label>
          <button
            className="btn rounded-full border-0 bg-accent px-6 text-accent-content hover:brightness-110"
            disabled={isSending}
            type="submit"
          >
            {isSending ? "Envoi en cours..." : "Envoyer le message"}
            <Send className="size-4" aria-hidden="true" />
          </button>
          {status && (
            <p
              className={`text-sm ${status.type === "success" ? "text-success" : "text-error"}`}
              role={status.type === "error" ? "alert" : "status"}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </Motion.section>
  );
}

export default Contact;
