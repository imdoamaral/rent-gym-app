interface AbstractFactory {
  createEsteira(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number): Esteira
  createHalter(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number): Halter
  createBarraReta(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number): BarraReta
}

class Factory implements AbstractFactory {
  public createEsteira(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number): Esteira {
    return new Esteira(id, nome, valor, dimensoes, grupo_muscular, peso_produto)
  }

  public createHalter(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number): Halter {
    return new Halter(id, nome, valor, dimensoes, grupo_muscular, peso_produto)
  }

  public createBarraReta(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number): BarraReta {
    return new BarraReta(id, nome, valor, dimensoes, grupo_muscular, peso_produto)
  }
}