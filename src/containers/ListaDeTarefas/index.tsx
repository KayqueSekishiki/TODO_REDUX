import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    prioridade: 'Impotante',
    status: 'Pendente',
    descricao: 'Estudar Typescript para melhorar o conhecimento em React'
  },
  {
    titulo: 'Pagar a Conta de Intenet',
    prioridade: 'Urgente',
    status: 'Concluída',
    descricao: 'Baixar a fatura no gmail e pagar no banco'
  },
  {
    titulo: 'Ir a academia',
    prioridade: 'Impotante',
    status: 'Pendente',
    descricao: 'Fazer musculação e aeróbico por 1 hora'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
            descricao={t.descricao}
          />
        </li>
      ))}
    </ul>
  </Container>
)
export default ListaDeTarefas
