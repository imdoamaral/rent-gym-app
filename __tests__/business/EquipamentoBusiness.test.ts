import { EquipamentoBusiness } from './../../src/business/EquipamentoBusiness';
import {expect, test} from '@jest/globals';
import equipamentoRepository, { reqBodyCreate, reqBodyUpdate} from '../../__mocks__/EquipamentoRepository'
import { UserRepository } from '../../src/repositories/UserRepository';

const userRepository = UserRepository.getInstance()

describe("EquipamentoBusiness.ts test", () => {
  const equipamentoBusiness = new EquipamentoBusiness(equipamentoRepository, userRepository)
  test("Get All Equipments", async () => {
    const res = await equipamentoBusiness.getAllEquipamentos()
    expect(equipamentoRepository.listAllEquipamentos).toHaveBeenCalledTimes(1)
    expect(res.length).toEqual(2)
  })

  test("Get equipamento", async () => {
    const id = 4
    const res = await equipamentoBusiness.getEquipamento(id)
    expect(equipamentoRepository.getEquipamento).toHaveBeenCalledWith(id)
    expect(res.id).toEqual(id)
  })

  test("Create Equipamento", async () => {
    const res = await equipamentoBusiness.createEquipamento(reqBodyCreate)
    expect(equipamentoRepository.createEquipamento).toBeCalledWith(
      reqBodyCreate.nome,
      reqBodyCreate.valor,
      reqBodyCreate.grupo_muscular,
      reqBodyCreate.categoria,
      reqBodyCreate.dimensoes,
      reqBodyCreate.peso_produto
    )
    expect(res.nome).toEqual(reqBodyCreate.nome)
  })

  test("Update equipamento", async () => {
    const res = await equipamentoBusiness.updateEquipamento(reqBodyUpdate)
    expect(equipamentoRepository.updateEquipamento).toBeCalledWith(
      reqBodyUpdate.id,
      reqBodyUpdate.nome,
      reqBodyUpdate.valor,
      reqBodyUpdate.grupo_muscular,
      reqBodyUpdate.categoria,
      reqBodyUpdate.dimensoes,
      reqBodyUpdate.peso_produto
    )
    expect(res.nome).toEqual(reqBodyUpdate.nome)
  })

  test("Delete Equipamento", async () => {
    const id = 4
    const res = await equipamentoBusiness.deleteEquipamento(id)
    expect(equipamentoRepository.deleteEquipamento).toBeCalledWith(id)
    expect(res.id).toEqual(id)
  })
});