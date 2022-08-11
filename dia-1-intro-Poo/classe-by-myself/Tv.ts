class Tv {
  public brand: string;
  public size: number;
  public resolution: number;
  private _connections: Array<string>;
  readonly connectedTo!: string;

  constructor(b: string, s: number, r: number, c: string[]) {
    console.log('Building Tv');
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this._connections = c;
  }

  turnOn() {
    console.log('Aqui está sua nova Tv!');
    console.log(`brand: ${this.brand}`);
    console.log(`size: ${this.size}`);
    console.log(`resolution: ${this.resolution}`);
    console.log(`connections: ${this._connections}`);
  } 
}

const tvOne = new Tv('Samsung', 30, 1080, ['Chromecast', 'HDMI']);

tvOne.size = 40;
tvOne.turnOn();



/*Crie uma classe chamada Tv, com os atributos:
brand: marca da TV;
size: tamanho em polegadas;
resolution: resolução da tela;
connections: conexões disponíveis(HDMI, Ethernet, etc.);
connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.
Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.
Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos. */