import { AluguelRepository as Repository } from "../src/repositories/AluguelRepository";

const aluguelRepository: jest.Mocked<Repository> = {
  createNewAluguel: jest.fn(),
  deleteAluguel: jest.fn(),
  getAllAlgueisByID: jest.fn(),
  insertNewAluguel: jest.fn(),
}

export const relEquipUserGetAll = [
  {
    id: 1,
    usuario_id: 3,
    equipamento_id: 4
  },
  {
    id: 2,
    usuario_id: 3,
    equipamento_id: 5
  },
  {
    id: 3,
    usuario_id: 3,
    equipamento_id: 6
  }
]

aluguelRepository.createNewAluguel.mockResolvedValue()
aluguelRepository.deleteAluguel.mockResolvedValue()
aluguelRepository.getAllAlgueisByID.mockResolvedValue(relEquipUserGetAll)
aluguelRepository.insertNewAluguel.mockResolvedValue()

export default aluguelRepository