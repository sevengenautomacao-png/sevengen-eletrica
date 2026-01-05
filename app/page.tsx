import Link from 'next/link'
import { Zap, Shield, Clock, Award } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Soluções Elétricas Profissionais
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Especialistas em instalações elétricas residenciais, comerciais e industriais.
              Qualidade e segurança em cada projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Solicitar Orçamento
              </Link>
              <Link
                href="/servicos"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition"
              >
                Nossos Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instalações Modernas</h3>
              <p className="text-gray-600">
                Tecnologia de ponta para instalações elétricas seguras e eficientes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Segurança Garantida</h3>
              <p className="text-gray-600">
                Todos os projetos seguem as normas técnicas e de segurança.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Atendimento Rápido</h3>
              <p className="text-gray-600">
                Resposta ágil e eficiente para todas as suas necessidades.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade Comprovada</h3>
              <p className="text-gray-600">
                Anos de experiência e clientes satisfeitos em todo o país.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600">
              Soluções completas para suas necessidades elétricas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <Zap className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Instalações Residenciais</h3>
              <p className="text-gray-600 mb-4">
                Instalações elétricas completas para residências, com foco em segurança e eficiência energética.
              </p>
              <Link href="/servicos" className="text-primary-600 font-semibold hover:underline">
                Saiba mais →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <Zap className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Instalações Comerciais</h3>
              <p className="text-gray-600 mb-4">
                Soluções elétricas para empresas, escritórios e estabelecimentos comerciais.
              </p>
              <Link href="/servicos" className="text-primary-600 font-semibold hover:underline">
                Saiba mais →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <Zap className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Manutenção Preventiva</h3>
              <p className="text-gray-600 mb-4">
                Manutenção regular para garantir a segurança e o bom funcionamento das instalações.
              </p>
              <Link href="/servicos" className="text-primary-600 font-semibold hover:underline">
                Saiba mais →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Pronto para começar seu projeto?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Entre em contato conosco e solicite um orçamento gratuito
          </p>
          <Link
            href="/contato"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  )
}
