import { jest } from '@jest/globals';
import { EquipamentoRepository as Repository } from "../src/repositories/EquipamentoRepository"

const equipamentoRepository: jest.Mocked<Repository> = {
  createEquipamento: jest.fn(),
  deleteEquipamento: jest.fn(),
  getEquipamento: jest.fn(),
  getEquipamentos: jest.fn(),
  listAllEquipamentos: jest.fn(),
  updateEquipamento: jest.fn(),
}

export const reqBodyCreate = {
  nome: "EQUIPAMENTO_TEST_CREATE",
  valor: 1000,
  grupo_muscular: "GRUPO_TEST",
  dimensoes: "DESCONHECIDAS",
  peso_produto: 100,
  categoria: "CATEGORIA"
}

export const reqBodyUpdate = {
  id: 4,
  nome: "EQUIPAMENTO_TEST_UPDATE",
  valor: 1000,
  grupo_muscular: "GRUPO_TEST",
  dimensoes: "DESCONHECIDAS",
  peso_produto: 100,
  categoria: "CATEGORIA"
}

export const createEquip = {
  id: 4,
  nome: "EQUIPAMENTO_TEST_CREATE",
  valor: 1000,
  grupo_muscular: "GRUPO_TEST",
  dimensoes: "DESCONHECIDAS",
  peso_produto: 100,
  created_at: new Date("2022-10-18T20:53:12.464Z"),
  categoria: "CATEGORIA"
}

export const deleteEquip = {
  id: 4,
  nome: "EQUIPAMENTO_TEST_DELETE",
  valor: 1000,
  grupo_muscular: "GRUPO_TEST",
  dimensoes: "DESCONHECIDAS",
  peso_produto: 100,
  created_at: new Date("2022-10-18T20:53:12.464Z"),
  categoria: "CATEGORIA"
}

export const getEquip = {
  id: 4,
  nome: "EQUIPAMENTO_TEST_GET",
  valor: 1000,
  grupo_muscular: "GRUPO_TEST",
  dimensoes: "DESCONHECIDAS",
  peso_produto: 100,
  created_at: new Date("2022-10-18T20:53:12.464Z"),
  categoria: "CATEGORIA"
}

export const listEquips = [
  {
    id: 4,
    nome: "EQUIPAMENTO_TEST_LIST",
    valor: 1000,
    grupo_muscular: "GRUPO_TEST",
    dimensoes: "DESCONHECIDAS",
    peso_produto: 100,
    created_at: new Date("2022-10-18T20:53:12.464Z"),
    categoria: "CATEGORIA"
  },
  {
    id: 5,
    nome: "EQUIPAMENTO_TEST_LIST_1",
    valor: 2000,
    grupo_muscular: "GRUPO_TEST",
    dimensoes: "DESCONHECIDAS",
    peso_produto: 100,
    created_at: new Date("2022-10-18T20:53:12.464Z"),
    categoria: "CATEGORIA"
  }
]

export const updateEquip = {
  id: 4,
  nome: "EQUIPAMENTO_TEST_UPDATE",
  valor: 1000,
  grupo_muscular: "GRUPO_TEST",
  dimensoes: "DESCONHECIDAS",
  peso_produto: 100,
  created_at: new Date("2022-10-18T20:53:12.464Z"),
  categoria: "CATEGORIA"
}

equipamentoRepository.createEquipamento.mockResolvedValue(createEquip)

equipamentoRepository.deleteEquipamento.mockResolvedValue(deleteEquip)

equipamentoRepository.getEquipamento.mockResolvedValue(getEquip)

equipamentoRepository.getEquipamentos.mockResolvedValue(listEquips)

equipamentoRepository.listAllEquipamentos.mockResolvedValue(listEquips)

equipamentoRepository.updateEquipamento.mockResolvedValue(updateEquip)

export default equipamentoRepository