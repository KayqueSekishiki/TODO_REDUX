import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'

import * as S from './styles'
import { alterarTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="Pendentes" contador={1} />
          <FiltroCard legenda="Concluídas" contador={2} />
          <FiltroCard legenda="Urgentes" contador={3} />
          <FiltroCard legenda="Importantes" contador={4} />
          <FiltroCard legenda="Normal" contador={5} />
          <FiltroCard legenda="Todas" contador={10} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
