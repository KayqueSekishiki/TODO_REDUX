import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE,
    descricao: 'Estudar Typescript para melhorar o conhecimento em React'
  },
  {
    titulo: 'Pagar a Conta de Intenet',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA,
    descricao: 'Baixar a fatura no gmail e pagar no banco'
  },
  {
    titulo: 'Ir a academia',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE,
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
