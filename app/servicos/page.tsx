import { Zap, Home, Building, Factory, Wrench, Lightbulb, Shield } from 'lucide-react'

export default function Servicos() {
  const services = [
    {
      icon: Home,
      title: 'Instalações Residenciais',
      description: 'Instalações elétricas completas para residências, incluindo reformas, novas construções e adequações.',
      items: [
        'Instalação de quadros elétricos',
        'Fiação e tomadas',
        'Iluminação interna e externa',
        'Adequação às normas técnicas',
      ],
    },
    {
      icon: Building,
      title: 'Instalações Comerciais',
      description: 'Soluções elétricas para empresas, escritórios, lojas e estabelecimentos comerciais.',
      items: [
        'Projetos elétricos comerciais',
        'Instalações de média tensão',
        'Sistemas de iluminação',
        'Automação comercial',
      ],
    },
    {
      icon: Factory,
      title: 'Instalações Industriais',
      description: 'Soluções elétricas para indústrias, com foco em eficiência e produtividade.',
      items: [
        'Instalações de alta tensão',
        'Painéis elétricos industriais',
        'Automação industrial',
        'Manutenção preventiva',
      ],
    },
    {
      icon: Wrench,
      title: 'Manutenção Preventiva',
      description: 'Manutenção regular para garantir segurança e prolongar a vida útil das instalações.',
      items: [
        'Inspeções periódicas',
        'Testes de segurança',
        'Substituição de componentes',
        'Relatórios técnicos',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Automação Residencial',
      description: 'Torne sua casa inteligente com sistemas de automação e controle.',
      items: [
        'Iluminação inteligente',
        'Controle de temperatura',
        'Sistemas de segurança',
        'Integração com assistentes virtuais',
      ],
    },
    {
      icon: Shield,
      title: 'Projetos Elétricos',
      description: 'Desenvolvimento de projetos elétricos completos e adequados às normas.',
      items: [
        'Projetos arquitetônicos',
        'Cálculos e dimensionamentos',
        'Documentação técnica',
        'Aprovação junto aos órgãos competentes',
      ],
    },
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">Nossos Serviços</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços elétricos para atender todas as suas necessidades.
            Da instalação à manutenção, estamos prontos para ajudar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-600">
                      <Zap className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de um orçamento?</h2>
          <p className="text-xl mb-6 text-gray-100">
            Entre em contato conosco e solicite um orçamento gratuito para seu projeto
          </p>
          <a
            href="/contato"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </div>
  )
}
