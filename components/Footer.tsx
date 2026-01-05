import Link from 'next/link'
import { Zap, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold">Sevengen</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empresa especializada em soluções elétricas residenciais, comerciais e industriais.
              Qualidade, segurança e eficiência em cada projeto.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>(41) 99788-4294</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>contato@sevengen.com.br</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Rua Joaquim Celestino Ferreira, 845 - Campo Largo, PR</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary-400 transition">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-primary-400 transition">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-primary-400 transition">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-primary-400 transition">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-400 hover:text-primary-400 transition">
                  Área Administrativa
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Instalações Elétricas</li>
              <li>Manutenção Preventiva</li>
              <li>Projetos Elétricos</li>
              <li>Automação Residencial</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sevengen de Elétrica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
