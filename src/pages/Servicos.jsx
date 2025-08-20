import { 
  Wrench, 
  Tv, 
  Laptop, 
  Smartphone, 
  Monitor, 
  Volume2, 
  Gamepad2,
  CheckCircle,
  Clock,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom"; // adicionei porque você já usa <Link>

const Servicos = () => {
  const services = [
    {
      icon: Wrench,
      title: "Reparo de Impressoras",
      description: "Manutenção completa de impressoras jato de tinta, laser e multifuncionais",
      features: [
        "Limpeza de cabeçotes de impressão",
        "Substituição de cartuchos e toners",
        "Reparo de mecanismos de alimentação",
        "Configuração de rede e wireless",
        "Manutenção preventiva"
      ],
      brands: ["EPSON", "HP", "Canon", "Brother"],
      pricing: "A partir de R$ 80",
      duration: "2-3 dias úteis"
    },
    {
      icon: Tv,
      title: "Conserto de TVs",
      description: "Reparo especializado em televisores LED, OLED, Smart TV e displays",
      features: [
        "Troca de tela e backlight",
        "Reparo de placa principal",
        "Configuração Smart TV",
        "Calibração de cores",
        "Atualização de firmware"
      ],
      brands: ["LG", "Samsung", "Sony", "Hisense"],
      pricing: "A partir de R$ 120",
      duration: "3-5 dias úteis"
    },
    {
      icon: Laptop,
      title: "Manutenção de Notebooks",
      description: "Serviços completos para laptops, ultrabooks e notebooks gamers",
      features: [
        "Limpeza interna e troca de pasta térmica",
        "Upgrade de memória e SSD",
        "Troca de teclado e tela",
        "Reparo de conectores",
        "Recuperação de dados"
      ],
      brands: ["Dell", "Lenovo", "Asus", "Acer"],
      pricing: "A partir de R$ 100",
      duration: "2-4 dias úteis"
    },
    {
      icon: Smartphone,
      title: "Reparo de Celulares",
      description: "Conserto de smartphones, tablets e dispositivos móveis",
      features: [
        "Troca de tela e touch",
        "Substituição de bateria",
        "Reparo de conectores de carga",
        "Desbloqueio e reset",
        "Recuperação de dados"
      ],
      brands: ["Samsung", "Apple", "Motorola", "Xiaomi"],
      pricing: "A partir de R$ 60",
      duration: "1-2 dias úteis"
    },
    {
      icon: Monitor,
      title: "Manutenção de Computadores",
      description: "Assistência técnica para desktops, workstations e servidores",
      features: [
        "Formatação e instalação de SO",
        "Limpeza e manutenção preventiva",
        "Upgrade de componentes",
        "Remoção de vírus",
        "Backup e recuperação"
      ],
      brands: ["Dell", "HP", "Lenovo", "Multilaser"],
      pricing: "A partir de R$ 90",
      duration: "1-3 dias úteis"
    },
    {
      icon: Volume2,
      title: "Aparelhos de Som",
      description: "Reparo de equipamentos de áudio profissionais e domésticos",
      features: [
        "Troca de alto-falantes",
        "Reparo de amplificadores",
        "Configuração de sistemas",
        "Limpeza de contatos",
        "Calibração de áudio"
      ],
      brands: ["Pioneer", "JBL", "Sony", "NHS"],
      pricing: "A partir de R$ 70",
      duration: "2-4 dias úteis"
    },
    {
      icon: Gamepad2,
      title: "Consoles de Videogame",
      description: "Manutenção especializada em consoles e acessórios gamers",
      features: [
        "Limpeza e manutenção preventiva",
        "Troca de controles analógicos",
        "Reparo de leitores de disco",
        "Atualização de firmware",
        "Desbloqueio e modificações"
      ],
      brands: ["PlayStation", "Xbox", "Nintendo", "Steam Deck"],
      pricing: "A partir de R$ 110",
      duration: "3-5 dias úteis"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Serviços Especializados
            </h1>
            <p className="text-xl text-white/90">
              Oferecemos soluções completas para reparo e manutenção de equipamentos eletrônicos com qualidade e garantia.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="rounded-xl border border-border/50 bg-gradient-card p-6 hover:shadow-medium transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{service.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Serviços Inclusos:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Brands */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Marcas Atendidas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.brands.map((brand, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing & Duration */}
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Shield className="h-4 w-4 mr-1" />
                      {service.pricing}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  <button className="px-3 py-2 text-sm font-medium rounded-md bg-primary text-white hover:opacity-90 transition">
                    <Link to="/suporte">Solicitar Orçamento</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como Funciona Nosso Processo
            </h2>
            <p className="text-xl text-muted-foreground">
              Um processo simples e transparente para garantir a melhor experiência
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Diagnóstico", description: "Análise completa do problema em até 24h" },
              { step: "2", title: "Orçamento", description: "Apresentação de custos sem compromisso" },
              { step: "3", title: "Reparo", description: "Execução do serviço com peças originais" },
              { step: "4", title: "Entrega", description: "Devolução com teste e garantia estendida" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precisa de Ajuda com Seu Equipamento?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Entre em contato conosco e receba um diagnóstico gratuito
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-md bg-white text-primary font-medium hover:bg-white/90 transition">
              <Link to="/suporte">Solicitar Atendimento</Link>
            </button>
            <button className="px-6 py-3 rounded-md border border-white text-white font-medium hover:bg-white hover:text-primary transition">
              <Link to="/cadastro">Criar Conta</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;