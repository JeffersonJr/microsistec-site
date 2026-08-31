import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { sendIndicacaoToClickUp } from "@/lib/clickup";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { X } from "lucide-react";

export const Route = createFileRoute("/indica-e-ganha/indicar")({
  head: () => ({
    meta: [{ title: "Indicar uma imobiliária | Microsistec" }],
  }),
  component: IndicaEGanhaForm,
});

const formSchema = z.object({
  indicador_nome: z.string().min(2, "O nome da sua imobiliária é obrigatório"),
  indicador_telefone: z.string().min(10, "Telefone inválido"),
  indicador_email: z.string().email("E-mail inválido"),

  indicado_nome: z
    .string()
    .min(2, "O nome da imobiliária indicada é obrigatório"),
  indicado_responsavel: z
    .string()
    .min(2, "O nome do responsável é obrigatório"),
  indicado_telefone: z.string().min(10, "Telefone inválido"),
  indicado_email: z.string().email("E-mail inválido"),
});

function IndicaEGanhaForm() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      indicador_nome: "",
      indicador_telefone: "",
      indicador_email: "",
      indicado_nome: "",
      indicado_responsavel: "",
      indicado_telefone: "",
      indicado_email: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      await sendIndicacaoToClickUp({ data: values });
      navigate({ to: "/indica-e-ganha/confirmacao" });
    } catch (error) {
      console.error(error);
      toast.error("Erro ao enviar indicação. Tente novamente mais tarde.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#1A1A1A] pb-12 md:pb-20">
      <header className="flex items-center justify-center bg-white px-4 md:px-8 py-4 shadow-sm relative z-10 mb-12">
        <Link
          to="/"
          className="flex flex-row items-center gap-2 font-bold text-2xl tracking-[-0.03em] hover:opacity-85 transition-opacity"
          title="Microsistec - Marca Registrada"
        >
          <img
            src="/icon.svg"
            alt="Microsistec Logo"
            title="Microsistec - Tecnologia e Inovação"
            width={32}
            height={32}
            fetchPriority="high"
            className="w-8 h-8 object-contain"
          />
          <div className="flex items-baseline gap-0.5">
            Microsistec
            <span
              className="text-[18px] text-muted-foreground self-start mt-1 select-none font-sans font-normal"
              title="Marca Registrada"
            >
              ®
            </span>
          </div>
        </Link>
        <div className="absolute right-4 md:right-8">
          <Link to="/indica-e-ganha">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-neutral-100 hover:bg-neutral-200" title="Voltar">
              <X className="h-5 w-5 text-neutral-600" />
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-[#1A1A1A] md:text-5xl">
            Quem você quer indicar para a Microsistec?
          </h1>
          <p className="text-lg text-[#6B7878]">
            Preencha seus dados e os dados da imobiliária indicada. Leva menos
            de um minuto.
          </p>
        </div>

        <Card className="mx-auto max-w-4xl border-none shadow-xl">
          <CardContent className="p-6 md:p-10">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid gap-10 md:grid-cols-2 md:divide-x md:divide-[#E8EDED]">
                  {/* LADO ESQUERDO: QUEM ESTÁ INDICANDO */}
                  <div className="space-y-6 md:pr-10">
                    <div>
                      <h2 className="mb-1 text-xl font-bold text-[#2B5250]">
                        1. Seus dados
                      </h2>
                      <p className="text-sm text-[#6B7878]">
                        Quem está fazendo a indicação
                      </p>
                    </div>

                    <FormField
                      control={form.control}
                      name="indicador_nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome da Imobiliária*</FormLabel>
                          <FormControl>
                            <Input placeholder="Sua imobiliária" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="indicador_telefone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone / WhatsApp*</FormLabel>
                          <FormControl>
                            <PhoneInput
                              placeholder="(00) 00000-0000"
                              value={field.value}
                              dialCode="+55"
                              onPhoneChange={(phone) => field.onChange(phone)}
                              name={field.name}
                              onBlur={field.onBlur}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="indicador_email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail*</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="seu@email.com.br"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* LADO DIREITO: QUEM ESTÁ SENDO INDICADO */}
                  <div className="space-y-6 md:pl-10">
                    <div>
                      <h2 className="mb-1 text-xl font-bold text-[#2B5250]">
                        2. Dados do indicado
                      </h2>
                      <p className="text-sm text-[#6B7878]">
                        Quem você está indicando
                      </p>
                    </div>

                    <FormField
                      control={form.control}
                      name="indicado_nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome da Imobiliária*</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Imobiliária indicada"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="indicado_responsavel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome do Responsável*</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nome de quem vai nos atender"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="indicado_telefone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone / WhatsApp*</FormLabel>
                          <FormControl>
                            <PhoneInput
                              placeholder="(00) 00000-0000"
                              value={field.value}
                              dialCode="+55"
                              onPhoneChange={(phone) => field.onChange(phone)}
                              name={field.name}
                              onBlur={field.onBlur}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="indicado_email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail*</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="contato@indicada.com.br"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="mt-10 flex flex-col items-center border-t border-[#E8EDED] pt-8">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="h-14 w-full bg-[#E8A14B] font-bold text-white px-12 text-lg hover:bg-[#E8A14B]/90 md:w-auto"
                  >
                    {isSubmitting ? "ENVIANDO..." : "ENVIAR INDICAÇÃO"}
                  </Button>
                  <p className="mt-4 max-w-2xl text-center text-xs text-[#6B7878]">
                    Ao enviar a indicação, você confirma que os dados informados
                    poderão ser utilizados pela Microsistec para entrar em
                    contato com a empresa indicada.
                  </p>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
