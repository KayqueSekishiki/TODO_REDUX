import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../models/Tarefa'
import * as enums from '../utils/enums/Tarefa'

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar Redux',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Rever Provider e Store',
      1
    ),
    new Tarefa(
      'Estudar React',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Rever aula 2 do módulo',
      2
    ),
    new Tarefa(
      'Estudar TypeScript',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Reforçar intendimento sobre tipagem',
      3
    )
  ],
  reducers: {
    removeTarefa: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { removeTarefa } = tarefaSlice.actions
export default tarefaSlice.reducer
