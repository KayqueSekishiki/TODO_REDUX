import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar Redux',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,

      descricao: 'Rever Provider e Store'
    },
    {
      id: 2,
      titulo: 'Estudar React',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA,
      descricao: 'Rever aula 2 do módulo'
    },
    {
      id: 3,
      titulo: 'Estudar TypeScript',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      descricao: 'Reforçar intendimento sobre tipagem'
    }
  ]
}

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    removeTarefa: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editarTarefa: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { removeTarefa, editarTarefa } = tarefaSlice.actions
export default tarefaSlice.reducer
