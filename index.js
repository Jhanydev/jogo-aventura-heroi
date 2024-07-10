// Definindo a classe Heroi
class Heroi {
    // O construtor inicializa as propriedades da classe
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar que exibe a mensagem apropriada
    atacar() {
      let ataque;
      
      // Verificando o tipo do herói e definindo a mensagem de ataque
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque desconhecido';
          break;
      }
      
      // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias da classe Heroi e testando o método atacar
  
  // Exemplo 1: mago
  let heroi1 = new Heroi('Gandalf', 1000, 'mago');
  heroi1.atacar(); // Saída: O mago atacou usando magia
  
  // Exemplo 2: guerreiro
  let heroi2 = new Heroi('Aragorn', 87, 'guerreiro');
  heroi2.atacar(); // Saída: O guerreiro atacou usando espada
  
  // Exemplo 3: monge
  let heroi3 = new Heroi('Liu Kang', 35, 'monge');
  heroi3.atacar(); // Saída: O monge atacou usando artes marciais
  
  // Exemplo 4: ninja
  let heroi4 = new Heroi('Naruto', 17, 'ninja');
  heroi4.atacar(); // Saída: O ninja atacou usando shuriken
  
