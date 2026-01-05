import { Users, Target, Award } from 'lucide-react'

export default function Sobre() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">Sobre a Sevengen</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma empresa comprometida com a excelência em soluções elétricas,
            oferecendo serviços de alta qualidade para residências, comércios e indústrias.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Target className="h-12 w-12 text-primary-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Nossa Missão</h2>
            <p className="text-gray-600">
              Fornecer soluções elétricas de alta qualidade, seguras e eficientes,
              superando as expectativas dos nossos clientes através de um atendimento
              profissional e personalizado.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <Award className="h-12 w-12 text-primary-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Nossa Visão</h2>
            <p className="text-gray-600">
              Ser referência nacional em serviços elétricos, reconhecida pela
              excelência, inovação e compromisso com a sustentabilidade e segurança.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <Users className="h-12 w-12 text-primary-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Nossos Valores</h2>
            <p className="text-gray-600">
              Segurança, qualidade, transparência, inovação e compromisso com
              a satisfação do cliente são os pilares que guiam nosso trabalho diário.
            </p>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Nossa História</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              A Sevengen de Elétrica foi fundada com o objetivo de oferecer soluções
              elétricas completas e de alta qualidade. Com uma equipe de profissionais
              altamente qualificados e experientes, temos construído uma reputação
              sólida no mercado.
            </p>
            <p className="mb-4">
              Ao longo dos anos, expandimos nossos serviços para atender desde pequenas
              instalações residenciais até grandes projetos industriais, sempre mantendo
              o foco na segurança, qualidade e satisfação do cliente.
            </p>
            <p>
              Hoje, somos reconhecidos pela excelência em nossos serviços e pelo
              compromisso com a inovação e as melhores práticas do setor elétrico.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Nossa Equipe</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contamos com uma equipe de profissionais qualificados, certificados e
            comprometidos com a excelência em cada projeto. Nossos técnicos passam por
            treinamentos constantes para se manterem atualizados com as mais recentes
            tecnologias e normas do setor.
          </p>
        </div>
      </div>
    </div>
  )
}
