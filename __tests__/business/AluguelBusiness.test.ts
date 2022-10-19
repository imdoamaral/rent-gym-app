import { AluguelBusiness } from './../../src/business/AluguelBusiness';
import equipamentoRepository from '../../__mocks__/EquipamentoRepository'
import aluguelRepository from '../../__mocks__/AluguelRepository'
import userRepository from '../../__mocks__/UserRepository'


describe("Aluguel.ts test", () => {
  const aluguelBusiness: AluguelBusiness = new AluguelBusiness(equipamentoRepository, aluguelRepository, userRepository)

  test("Get Aluguel lista", async () => {
    const id = 3
    const relIds = [4,5,6]
    const res = await aluguelBusiness.getAluguelLista(id)
    expect(userRepository.getUserById).toBeCalledWith(id)
    expect(aluguelRepository.getAllAlgueisByID).toBeCalledWith(id)
    expect(equipamentoRepository.getEquipamentos).toBeCalledWith(relIds)
    expect(res?.equipamentos.length).toEqual(2)
  })

  test("Create Aluguel", async () => {
    const userId = 3
    const equipamentoId = 4
    await aluguelBusiness.createAluguel(userId, equipamentoId)
    expect(userRepository.getUserById).toBeCalledWith(userId)
    expect(equipamentoRepository.getEquipamento).toBeCalledWith(equipamentoId)
    expect(aluguelRepository.createNewAluguel).toBeCalledTimes(1)
  })

  test("Delete Aluguel", async () => {
    const userId = 3
    const equipamentoId = 4
    await aluguelBusiness.deleteAluguel(userId, equipamentoId)
    expect(aluguelRepository.deleteAluguel).toBeCalledWith(userId, equipamentoId)
  })
});